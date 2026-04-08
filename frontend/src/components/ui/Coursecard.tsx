import { Link } from "react-router-dom";
import { MapPin, GraduationCap, Clock, Timer, Award, Zap, FileCheck, Star } from "lucide-react";
import { Course } from "@/services/Courseapi";

interface Props { course: Course; }

const featureConfig: Record<string, { label: string; icon: React.ElementType; className: string }> = {
  scholarship: { label: "Scholarship Available", icon: Award, className: "bg-pink-50 text-pink-600 border border-pink-200" },
  "high admit rate": { label: "High Admit Rate", icon: Zap, className: "bg-cyan-50 text-cyan-600 border border-cyan-200" },
  "moi accepted": { label: "MOI Accepted", icon: FileCheck, className: "bg-blue-50 text-blue-600 border border-blue-200" },
  "high placement": { label: "High Placement Rate", icon: Star, className: "bg-violet-50 text-violet-600 border border-violet-200" },
};

function FeatureBadge({ feature }: { feature: string }) {
  const key = Object.keys(featureConfig).find((k) => feature.toLowerCase().includes(k));
  const cfg = key ? featureConfig[key] : null;
  if (!cfg) return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground border border-border">
      {feature}
    </span>
  );
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${cfg.className}`}>
      <cfg.icon className="w-3.5 h-3.5" />
      {cfg.label}
    </span>
  );
}

export function CourseCard({ course }: Props) {
  const hasScholarship = course.scholarships?.length > 0;

  return (
    <div className="bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl border border-border bg-secondary flex items-center justify-center flex-shrink-0 overflow-hidden">
            {course.logo ? (
              <img src={course.logo} alt={course.university} className="w-full h-full object-contain p-1" />
            ) : (
              <GraduationCap className="w-6 h-6 text-muted-foreground" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <Link to={`/dashboard/courses/${course.id}`}>
              <h3 className="font-display font-semibold text-primary hover:text-primary/80 transition-colors text-base leading-snug mb-1 line-clamp-2">
                {course.title}
              </h3>
            </Link>
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5" />
                {course.university}
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {course.location}
              </span>
            </div>
          </div>
        </div>

        {/* Feature badges */}
        {(course.features?.length > 0 || hasScholarship) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {hasScholarship && <FeatureBadge feature="scholarship" />}
            {course.features?.slice(0, 2).map((f, i) => <FeatureBadge key={i} feature={f} />)}
          </div>
        )}

        {/* Fee / Duration grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {[
            { label: "Application Fee", value: course.application_fee || "No Fee", icon: null },
            { label: "1st Year Tuition", value: course.tuition_fee || "N/A", icon: null },
            { label: "Duration", value: course.duration || "N/A", icon: Clock },
            { label: "Turnaround", value: course.turnaround || "N/A", icon: Timer },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
              <p className="text-sm font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Intake status */}
        {course.intake && (
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-muted-foreground">Intake Status:</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              Open: {course.intake}
            </span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-secondary/50">
        <div className="flex items-center gap-1.5">
          <span className="text-amber-500 text-sm">🏆</span>
          {course.qs_rating ? (
            <span className="text-sm font-semibold text-amber-600">{course.qs_rating}</span>
          ) : (
            <span className="text-sm text-muted-foreground">N/A</span>
          )}
          <span className="text-xs text-muted-foreground uppercase tracking-wide">QS Rating</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to={`/dashboard/courses/${course.id}`}
            className="px-4 py-1.5 rounded-lg border border-foreground text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            View Details
          </Link>
          <button className="px-4 py-1.5 rounded-lg border border-primary text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            Add to Shortlist
          </button>
        </div>
      </div>
    </div>
  );
}