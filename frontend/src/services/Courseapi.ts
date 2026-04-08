import { apiInstance } from './api';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface RequirementDetail {
  label: string;
  value: string;
}

export interface AcademicRequirement {
  id: string;
  type: string;
  score: string;
  out_of: string;
  details: RequirementDetail[];
}

export interface EnglishExamSubScore {
  label: string;
  value: string;
}

export interface EnglishExam {
  exam_name: string;
  overall_score: string;
  overall_label: string;
  sub_scores: EnglishExamSubScore[];
}

export interface EnglishExamRequirements {
  exam_waiver: string;
  moi_accepted: string;
  waiver_note: string;
  exams: EnglishExam[];
}

export interface ApplicationFiling {
  id: string;
  label: string;
  value: string | EnglishExamRequirements;
}

export interface Scholarship {
  id: string;
  name: string;
  type: string;
  intake: string;
  amount: string;
  deadline: string;
}

export interface Course {
  id: string;
  title: string;
  university: string;
  location: string;
  logo: string;
  application_fee: string;
  tuition_fee: string;
  duration: string;
  turnaround: string;
  intake: string;
  qs_rating: string;
  tags: string[];
  cover_image: string;
  website: string;
  features: string[];
  overview: string;
  scholarships: Scholarship[];
  academicRequirements: AcademicRequirement[];
  applicationFilings: ApplicationFiling[];
  createdAt: string;
  updatedAt: string;
}

export interface CourseMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface CourseListResponse {
  data: Course[];
  meta: CourseMeta;
}

export interface CourseStats {
  overview: {
    totalCourses: number;
    totalUniversities: number;
    totalCountries: number;
    coursesWithScholarships: number;
    recentlyAdded: number;
  };
  topUniversities: { university: string; courseCount: number }[];
  topLocations: { location: string; courseCount: number }[];
}

export interface CourseListParams {
  country?: string;
  course?: string;
  university?: string;
  sortBy?: 'relevance' | 'qs_rating';
  page?: number;
  limit?: number;
}

// ─── API calls ────────────────────────────────────────────────────────────────

export const courseApi = {
  list: async (params: CourseListParams = {}): Promise<CourseListResponse> => {
    const res = await apiInstance.get('/courses', { params });
    return res.data.data;
  },

  getById: async (id: string): Promise<Course> => {
    const res = await apiInstance.get(`/courses/${id}`);
    return res.data.data;
  },

  stats: async (): Promise<CourseStats> => {
    const res = await apiInstance.get('/courses/stats');
    return res.data.data;
  },
};