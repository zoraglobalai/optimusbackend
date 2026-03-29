import { AppDataSource } from '../../config/data-source.js';
import { Course } from '../../entities/Course.entity.js';
import { SelectQueryBuilder } from 'typeorm';

export interface CourseListQuery {
  country?: string;
  course?: string;       // search in title
  university?: string;
  sortBy?: 'relevance' | 'qs_rating';
  page?: number;
  limit?: number;
}

const courseRepo = () => AppDataSource.getRepository(Course);

// ─── helpers ────────────────────────────────────────────────────────────────

/**
 * Converts a qs_rating string like "#42" or "42" to a number for sorting.
 * Unranked / null values are pushed to the bottom.
 */
function applyQsSort(qb: SelectQueryBuilder<Course>): SelectQueryBuilder<Course> {
  return qb.orderBy(
    `CASE
       WHEN NULLIF(REGEXP_REPLACE(course.qs_rating, '[^0-9]', '', 'g'), '') IS NULL THEN 999999
       ELSE CAST(REGEXP_REPLACE(course.qs_rating, '[^0-9]', '', 'g') AS INTEGER)
     END`,
    'ASC',
  );
}

// ─── List courses ────────────────────────────────────────────────────────────

export async function listCourses(query: CourseListQuery) {
  const { country, course, university, sortBy = 'relevance', page = 1, limit = 10 } = query;

  const qb = courseRepo()
    .createQueryBuilder('course')
    .leftJoinAndSelect('course.scholarships', 'scholarships')
    .leftJoinAndSelect('course.academicRequirements', 'academicRequirements')
    .leftJoinAndSelect('course.applicationFilings', 'applicationFilings');

  // ── filters ──
  if (country) {
    // location field stores country/city info
    qb.andWhere('LOWER(course.location) LIKE :country', {
      country: `%${country.toLowerCase()}%`,
    });
  }

  if (university) {
    qb.andWhere('LOWER(course.university) LIKE :university', {
      university: `%${university.toLowerCase()}%`,
    });
  }

  if (course) {
    qb.andWhere('LOWER(course.title) LIKE :title', {
      title: `%${course.toLowerCase()}%`,
    });
  }

  // ── sort ──
  if (sortBy === 'qs_rating') {
    applyQsSort(qb);
  } else {
    // "relevance" — rank by how many filter terms matched (title match scores higher)
    // Simple approach: push full-title matches first, then partial
    if (course) {
      qb.orderBy(
        `CASE WHEN LOWER(course.title) = :exactTitle THEN 0 ELSE 1 END`,
        'ASC',
      ).setParameter('exactTitle', course.toLowerCase());
    }
    qb.addOrderBy('course.createdAt', 'DESC');
  }

  // ── pagination ──
  const skip = (page - 1) * limit;
  qb.skip(skip).take(limit);

  const [data, total] = await qb.getManyAndCount();

  return {
    data,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
}

// ─── Get single course ───────────────────────────────────────────────────────

export async function getCourseById(id: string) {
  const course = await courseRepo()
    .createQueryBuilder('course')
    .leftJoinAndSelect('course.scholarships', 'scholarships')
    .leftJoinAndSelect('course.academicRequirements', 'academicRequirements')
    .leftJoinAndSelect('course.applicationFilings', 'applicationFilings')
    .where('course.id = :id', { id })
    .getOne();

  return course ?? null;
}

// ─── Stats ───────────────────────────────────────────────────────────────────

export async function getCourseStats() {
  const repo = courseRepo();

  const [
    totalCourses,
    totalUniversities,
    totalCountries,
    topUniversities,
    topCountries,
    withScholarships,
    recentlyAdded,
  ] = await Promise.all([
    // total courses
    repo.count(),

    // distinct universities
    repo
      .createQueryBuilder('course')
      .select('COUNT(DISTINCT course.university)', 'count')
      .getRawOne<{ count: string }>()
      .then((r) => parseInt(r?.count ?? '0', 10)),

    // distinct countries (extracted from location)
    repo
      .createQueryBuilder('course')
      .select('COUNT(DISTINCT course.location)', 'count')
      .getRawOne<{ count: string }>()
      .then((r) => parseInt(r?.count ?? '0', 10)),

    // top 5 universities by course count
    repo
      .createQueryBuilder('course')
      .select('course.university', 'university')
      .addSelect('COUNT(course.id)', 'courseCount')
      .groupBy('course.university')
      .orderBy('"courseCount"', 'DESC')
      .limit(5)
      .getRawMany<{ university: string; courseCount: string }>(),

    // top 5 locations by course count
    repo
      .createQueryBuilder('course')
      .select('course.location', 'location')
      .addSelect('COUNT(course.id)', 'courseCount')
      .groupBy('course.location')
      .orderBy('"courseCount"', 'DESC')
      .limit(5)
      .getRawMany<{ location: string; courseCount: string }>(),

    // courses that have at least one scholarship
    AppDataSource.getRepository('scholarships')
      .createQueryBuilder('scholarship')
      .select('COUNT(DISTINCT scholarship.course_id)', 'count')
      .getRawOne<{ count: string }>()
      .then((r) => parseInt(r?.count ?? '0', 10))
      .catch(() =>
        // fallback using relation
        repo
          .createQueryBuilder('course')
          .leftJoin('course.scholarships', 's')
          .where('s.id IS NOT NULL')
          .getCount(),
      ),

    // courses added in last 30 days
    repo
      .createQueryBuilder('course')
      .where(`course.createdAt >= NOW() - INTERVAL '30 days'`)
      .getCount(),
  ]);

  return {
    overview: {
      totalCourses,
      totalUniversities,
      totalCountries,
      coursesWithScholarships: withScholarships,
      recentlyAdded,
    },
    topUniversities: topUniversities.map((u) => ({
      university: u.university,
      courseCount: parseInt(u.courseCount, 10),
    })),
    topLocations: topCountries.map((c) => ({
      location: c.location,
      courseCount: parseInt(c.courseCount, 10),
    })),
  };
}