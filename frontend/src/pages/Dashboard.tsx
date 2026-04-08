import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { courseApi, CourseStats } from "@/services/Courseapi";
import {
  BookOpen, GraduationCap, Globe, Award, TrendingUp,
  MapPin, Building2, Sparkles, ArrowRight, Search,
} from "lucide-react";
import DashboardLayout from "./DashboardLayout";

export function DashboardPage() {
  const [stats, setStats] = useState<CourseStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    courseApi.stats().then(setStats).finally(() => setLoading(false));
  }, []);

  const statCards = stats
    ? [
        { label: "Total Courses", value: stats.overview.totalCourses, icon: BookOpen, color: "bg-primary/10 text-primary" },
        { label: "Universities", value: stats.overview.totalUniversities, icon: Building2, color: "bg-accent/10 text-accent" },
        { label: "Countries", value: stats.overview.totalCountries, icon: Globe, color: "bg-emerald-500/10 text-emerald-600" },
        { label: "With Scholarships", value: stats.overview.coursesWithScholarships, icon: Award, color: "bg-amber-500/10 text-amber-600" },
        { label: "Added This Month", value: stats.overview.recentlyAdded, icon: TrendingUp, color: "bg-violet-500/10 text-violet-600" },
      ]
    : [];

  return (
    <DashboardLayout>
      <div className="page-transition">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-4">
                  Dashboard
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  Welcome Back 👋
                </h1>
                <p className="text-primary-foreground/70 text-lg">
                  Explore courses, track opportunities and find your perfect study destination.
                </p>
              </div>
              <Link
                to="/dashboard/courses"
                className="btn-hero flex items-center gap-2 self-start md:self-auto"
              >
                <Search className="w-4 h-4" /> Search Courses
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 bg-secondary">
          <div className="container-custom">
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-28 rounded-2xl bg-background animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {statCards.map((s, i) => (
                  <div key={i} className="card-elevated flex flex-col gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${s.color}`}>
                      <s.icon className="w-5 h-5" />
                    </div>
                    <p className="font-display text-3xl font-bold text-foreground">{s.value.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Top Universities & Locations */}
        {stats && (
          <section className="section-padding">
            <div className="container-custom grid lg:grid-cols-2 gap-8">
              {/* Top Universities */}
              <div className="card-elevated">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">Top Universities</h2>
                </div>
                <div className="space-y-3">
                  {stats.topUniversities.map((u, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-secondary rounded-xl">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span className="text-sm font-medium text-foreground truncate max-w-[180px]">{u.university}</span>
                      </div>
                      <span className="text-sm font-semibold text-accent">{u.courseCount} courses</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Locations */}
              <div className="card-elevated">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">Top Locations</h2>
                </div>
                <div className="space-y-3">
                  {stats.topLocations.map((l, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-secondary rounded-xl">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span className="text-sm font-medium text-foreground truncate max-w-[180px]">{l.location}</span>
                      </div>
                      <span className="text-sm font-semibold text-primary">{l.courseCount} courses</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Quick Actions */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-accent" />
              <h2 className="font-display text-2xl font-bold text-foreground">Quick Actions</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Browse All Courses", desc: "Search and filter from our full course catalogue.", href: "/dashboard/courses", icon: BookOpen },
                { title: "Study in UK", desc: "Explore top UK universities and programs.", href: "/dashboard/courses?country=UK", icon: Globe },
                { title: "Find Scholarships", desc: "Discover courses with available scholarships.", href: "/dashboard/courses?sortBy=relevance", icon: Award },
              ].map((action, i) => (
                <Link
                  key={i}
                  to={action.href}
                  className="card-elevated hover:shadow-lg transition-all duration-200 group flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <action.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Find Your Perfect Course?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Browse thousands of courses from top universities around the world.
            </p>
            <Link to="/dashboard/courses" className="btn-hero inline-flex items-center gap-2">
              <Search className="w-4 h-4" /> Explore Courses
            </Link>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}