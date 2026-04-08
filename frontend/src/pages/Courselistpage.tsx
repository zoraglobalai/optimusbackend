import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { CourseCard } from "@/components/ui/Coursecard";
import { CourseFilters, FilterState } from "@/components/ui/Coursefilters";
import { courseApi, Course, CourseMeta } from "@/services/Courseapi";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";
import DashboardLayout from "./DashboardLayout";

export function CourseListPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [courses, setCourses] = useState<Course[]>([]);
  const [meta, setMeta] = useState<CourseMeta | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState<FilterState>({
    course: searchParams.get("course") || "",
    country: searchParams.get("country") || "",
    university: searchParams.get("university") || "",
    sortBy: (searchParams.get("sortBy") as FilterState["sortBy"]) || "relevance",
  });

  const debounced = useDebounce(filters, 400);

  const fetchCourses = useCallback(async (f: FilterState, p: number) => {
    setLoading(true);
    try {
      const res = await courseApi.list({
        course: f.course || undefined,
        country: f.country || undefined,
        university: f.university || undefined,
        sortBy: f.sortBy,
        page: p,
        limit: 10,
      });
      setCourses(res.data);
      setMeta(res.meta);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setPage(1);
    fetchCourses(debounced, 1);
    // sync URL
    const p: Record<string, string> = {};
    if (debounced.course) p.course = debounced.course;
    if (debounced.country) p.country = debounced.country;
    if (debounced.university) p.university = debounced.university;
    if (debounced.sortBy !== "relevance") p.sortBy = debounced.sortBy;
    setSearchParams(p, { replace: true });
  }, [debounced]);

  useEffect(() => {
    if (page === 1) return;
    fetchCourses(debounced, page);
  }, [page]);

  return (
    <DashboardLayout>
      <div className="page-transition">
        {/* Header */}
        <section className="bg-primary py-14">
          <div className="container-custom">
            <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-4">
              Course Finder
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
              Find Your Perfect Course
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl">
              Search from thousands of courses across top global universities filtered just for you.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            {/* Filters */}
            <div className="mb-6">
              <CourseFilters
                filters={filters}
                onChange={(f) => setFilters(f)}
                total={meta?.total}
              />
            </div>

            {/* Course Cards */}
            {loading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-52 rounded-2xl bg-secondary animate-pulse" />
                ))}
              </div>
            ) : courses.length === 0 ? (
              <div className="text-center py-24">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">No courses found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {courses.map((c) => <CourseCard key={c.id} course={c} />)}
              </div>
            )}

         

{meta && meta.totalPages > 1 && (
  <div className="flex items-center justify-center gap-2 mt-10">
    <button
      disabled={page === 1}
      onClick={() => {
        setPage(page - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-secondary disabled:opacity-40 transition"
    >
      <ChevronLeft className="w-4 h-4" />
    </button>

    {[...Array(meta.totalPages)].map((_, i) => {
      const p = i + 1;
      if (
        meta.totalPages > 7 &&
        Math.abs(p - page) > 2 &&
        p !== 1 &&
        p !== meta.totalPages
      ) {
        return i === 1 || i === meta.totalPages - 2 ? (
          <span key={i} className="text-muted-foreground px-1">…</span>
        ) : null;
      }
      return (
        <button
          key={i}
          onClick={() => {
            setPage(p);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`w-9 h-9 rounded-lg text-sm font-medium transition ${
            page === p
              ? "bg-primary text-primary-foreground"
              : "border border-border hover:bg-secondary text-foreground"
          }`}
        >
          {p}
        </button>
      );
    })}

    <button
      disabled={page === meta.totalPages}
      onClick={() => {
        setPage(page + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-secondary disabled:opacity-40 transition"
    >
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
)}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}