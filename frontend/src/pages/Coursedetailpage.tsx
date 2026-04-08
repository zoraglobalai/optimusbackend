import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

import { courseApi, Course, EnglishExamRequirements } from "@/services/Courseapi";
import {
  MapPin, Clock, DollarSign, BarChart3, ExternalLink,
  GraduationCap, ChevronDown, ChevronUp, Award, Zap,
  FileCheck, Star, ArrowLeft, Globe, Calendar,
} from "lucide-react";
import { OverviewSection } from "./Overviewsection";

type Tab = "overview" | "scholarships" | "academic" | "filing" | "english";

const TABS: { key: Tab; label: string }[] = [
  { key: "overview",     label: "Course Overview"             },
  { key: "scholarships", label: "Financial Aid & Scholarships"},
  { key: "academic",     label: "Academic Requirements"       },
  { key: "filing",       label: "Application Filing"          },
  { key: "english",      label: "English Exam Requirements"   },
];

const featureIcons: Record<string, React.ElementType> = {
  scholarship: Award, "high admit": Zap, moi: FileCheck, placement: Star,
};
function getFeatureIcon(f: string): React.ElementType {
  const key = Object.keys(featureIcons).find((k) => f.toLowerCase().includes(k));
  return key ? featureIcons[key] : Globe;
}
function isEnglishExam(val: unknown): val is EnglishExamRequirements {
  return typeof val === "object" && val !== null && "exams" in val;
}

export function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<Tab>("overview");
  const [expandedReq, setExpandedReq] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    courseApi.getById(id).then(setCourse).finally(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <DashboardLayout>
      <div className="container-custom py-20 space-y-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-20 rounded-2xl bg-secondary animate-pulse" />
        ))}
      </div>
    </DashboardLayout>
  );

  if (!course) return (
    <DashboardLayout>
      <div className="container-custom py-32 text-center">
        <h2 className="font-display text-2xl font-bold text-foreground mb-4">Course not found</h2>
        <Link to="/dashboard/courses" className="btn-hero">Back to Courses</Link>
      </div>
    </DashboardLayout>
  );

  const englishFiling  = course.applicationFilings?.find((f) => isEnglishExam(f.value));
  const englishReqs    = englishFiling ? (englishFiling.value as EnglishExamRequirements) : null;
  const otherFilings   = course.applicationFilings?.filter((f) => !isEnglishExam(f.value));
  const plainFilings   = otherFilings?.filter((f) => typeof f.value === "string");

  return (
    <DashboardLayout>
      <div className="page-transition">

        {/* ── Hero ── */}
        <section className="bg-primary py-10">
          <div className="container-custom">
            <Link
              to="/dashboard/courses"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Courses
            </Link>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground flex items-center justify-center flex-shrink-0 overflow-hidden shadow-lg">
                {course.logo
                  ? <img src={course.logo} alt={course.university} className="w-full h-full object-contain p-2" />
                  : <GraduationCap className="w-8 h-8 text-primary" />}
              </div>
              <div className="flex-1">
                <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {course.title}
                </h1>
                <div className="flex flex-wrap gap-3 text-primary-foreground/70 text-sm">
                  <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4" />{course.university}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{course.location}</span>
                  {course.qs_rating && (
                    <span className="flex items-center gap-1.5 text-amber-300">🏆 {course.qs_rating} QS Rating</span>
                  )}
                </div>
              </div>
              {course.website && (
                <a
                  href={course.website} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground rounded-xl text-sm font-medium transition self-start"
                >
                  <ExternalLink className="w-4 h-4" /> Visit Website
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ── Cover image ── */}
        {course.cover_image && (
          <div className="h-56 md:h-72 overflow-hidden">
            <img src={course.cover_image} alt={course.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* ── Quick stats bar ── */}
        <div className="bg-secondary border-b border-border">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
              {[
                { label: "Institute Location", value: course.location,                    icon: MapPin      },
                { label: "Course Duration",    value: course.duration    || "N/A",        icon: Clock       },
                { label: "Application Fee",    value: course.application_fee || "No Fee", icon: DollarSign  },
                { label: "Tuition Fee",        value: course.tuition_fee || "N/A",        icon: BarChart3   },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-4">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Sticky tabs ── */}
        <div className="sticky top-[64px] z-30 bg-background border-b border-border shadow-sm">
          <div className="container-custom overflow-x-auto scrollbar-none">
            <div className="flex gap-0 min-w-max">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`px-5 py-4 text-sm font-medium border-b-2 whitespace-nowrap transition ${
                    tab === t.key
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tab Content ── */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">

            {/* ════════════════ OVERVIEW ════════════════ */}
            {tab === "overview" && (
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <h2 className="font-display text-2xl font-bold text-foreground">Course Overview</h2>
                  {course.website && (
                    <a
                      href={course.website} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
                    >
                      Visit Institute Website <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Course Features */}
                {course.features?.length > 0 && (
                  <div className="p-4 bg-secondary rounded-2xl border border-border">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Course Features
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {course.features.map((f, i) => {
                        const Icon = getFeatureIcon(f);
                        return (
                          <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border text-sm font-medium text-foreground">
                            <Icon className="w-3.5 h-3.5 text-accent" /> {f}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Open Intakes */}
                {course.intake && (
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                    <Calendar className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-emerald-700 mb-0.5">Open Intakes</p>
                      <p className="text-sm font-medium text-emerald-800">{course.intake}</p>
                    </div>
                  </div>
                )}

                {/* About This Course */}
                {course.overview && (
                  <OverviewSection title="About This Course" icon="📘" defaultOpen>
                    <p className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line">
                      {course.overview}
                    </p>
                  </OverviewSection>
                )}

                {/* Admission Requirements */}
                {course.academicRequirements?.length > 0 && (
                  <OverviewSection title="Admission Requirements" icon="🎓">
                    <div className="space-y-3">
                      {course.academicRequirements.map((req) => (
                        <div key={req.id} className="rounded-xl border border-border overflow-hidden">
                          <div className="flex items-center gap-3 px-4 py-3 bg-secondary">
                            <span className="w-9 h-9 rounded-lg bg-primary/10 text-primary text-xs font-bold flex items-center justify-center uppercase flex-shrink-0">
                              {req.type?.slice(0, 2)}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-foreground text-sm">{req.type}</p>
                              {req.score && (
                                <p className="text-xs text-muted-foreground">
                                  Score: <span className="font-semibold text-foreground">{req.score}</span>
                                  {req.out_of && <span> / {req.out_of}</span>}
                                </p>
                              )}
                            </div>
                          </div>
                          {req.details?.length > 0 && (
                            <div className="grid sm:grid-cols-2 gap-px bg-border">
                              {req.details.map((d, i) => (
                                <div key={i} className="flex justify-between items-start gap-4 px-4 py-3 bg-background text-sm">
                                  <span className="text-muted-foreground flex-shrink-0">{d.label}</span>
                                  <span className="font-medium text-foreground text-right">{d.value}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </OverviewSection>
                )}

                {/* Application Filing */}
                {plainFilings && plainFilings.length > 0 && (
                  <OverviewSection title="Application Filing" icon="📋">
                    <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
                      {plainFilings.map((f) => (
                        <div key={f.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-4 py-3 bg-background hover:bg-secondary/40 transition text-sm">
                          <span className="font-medium text-foreground">{f.label}</span>
                          <span className="text-muted-foreground sm:text-right">{String(f.value)}</span>
                        </div>
                      ))}
                    </div>
                  </OverviewSection>
                )}

                {/* English Exam Summary */}
                {englishReqs && (
                  <OverviewSection title="English Exam Requirements" icon="🗣️">
                    {(englishReqs.exam_waiver === "1" || englishReqs.moi_accepted === "1") && (
                      <div className="flex items-start gap-3 p-3 bg-primary/5 border border-primary/20 rounded-xl text-sm text-foreground mb-4">
                        <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">i</span>
                        <p className="leading-relaxed">
                          {englishReqs.waiver_note || "English Exam Waiver based on 12th English Score or MOI (Medium of Instruction) is provided by this Institute."}
                        </p>
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {englishReqs.exams?.map((exam, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-secondary">
                          <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center uppercase flex-shrink-0">
                            {exam.exam_name?.slice(0, 3)}
                          </span>
                          <div>
                            <p className="font-semibold text-foreground text-sm">{exam.exam_name}</p>
                            <p className="text-xs text-muted-foreground">
                              Overall: <span className="font-semibold text-foreground">{exam.overall_score}</span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </OverviewSection>
                )}

                {/* Scholarships Summary */}
                {course.scholarships?.length > 0 && (
                  <OverviewSection title="Available Scholarships" icon="🏆">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {course.scholarships.map((s) => (
                        <div key={s.id} className="p-4 rounded-xl border border-border bg-secondary space-y-2">
                          <p className="font-semibold text-foreground text-sm leading-snug">{s.name}</p>
                          <div className="flex flex-wrap gap-2">
                            {s.type && (
                              <span className="px-2 py-0.5 rounded-full bg-background border border-border text-xs text-muted-foreground">
                                {s.type}
                              </span>
                            )}
                            {s.amount && (
                              <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700">
                                {s.amount}
                              </span>
                            )}
                          </div>
                          {s.deadline && (
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> Deadline: {s.deadline}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </OverviewSection>
                )}

                {/* Tags */}
                {course.tags?.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {course.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ════════════════ SCHOLARSHIPS ════════════════ */}
            {tab === "scholarships" && (
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-foreground">Financial Aid & Scholarships</h2>
                {!course.scholarships?.length ? (
                  <div className="text-center py-16 text-muted-foreground">No scholarships listed for this course.</div>
                ) : (
                  <div className="overflow-x-auto rounded-2xl border border-border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-secondary text-left">
                          {["Scholarship Name","Type","Intake","Amount","Deadline","Action"].map((h) => (
                            <th key={h} className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide whitespace-nowrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {course.scholarships.map((s) => (
                          <tr key={s.id} className="hover:bg-secondary/50 transition">
                            <td className="px-4 py-3 font-medium text-foreground">{s.name}</td>
                            <td className="px-4 py-3 text-muted-foreground">{s.type    || "—"}</td>
                            <td className="px-4 py-3 text-muted-foreground">{s.intake  || "—"}</td>
                            <td className="px-4 py-3 font-semibold text-primary">{s.amount || "—"}</td>
                            <td className="px-4 py-3 text-muted-foreground">{s.deadline|| "—"}</td>
                            <td className="px-4 py-3">
                              <button className="px-3 py-1 rounded-lg border border-primary text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition">
                                Know More
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* ════════════════ ACADEMIC REQUIREMENTS ════════════════ */}
            {tab === "academic" && (
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-foreground">Academic Requirements</h2>
                {!course.academicRequirements?.length ? (
                  <div className="text-center py-16 text-muted-foreground">No academic requirements listed.</div>
                ) : (
                  <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden">
                    {course.academicRequirements.map((req) => (
                      <div key={req.id} className="bg-background">
                        <button
                          onClick={() => setExpandedReq(expandedReq === req.id ? null : req.id)}
                          className="w-full flex items-center justify-between px-5 py-4 hover:bg-secondary/50 transition text-left"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary text-xs font-bold flex items-center justify-center uppercase">
                              {req.type?.slice(0, 2)}
                            </span>
                            <div>
                              <p className="font-semibold text-foreground">{req.type}</p>
                              {req.score && (
                                <p className="text-sm text-muted-foreground">
                                  {req.score} {req.out_of && <span className="text-xs">Out of {req.out_of}</span>}
                                </p>
                              )}
                            </div>
                          </div>
                          {expandedReq === req.id
                            ? <ChevronUp className="w-4 h-4 text-muted-foreground" />
                            : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                        </button>
                        {expandedReq === req.id && req.details?.length > 0 && (
                          <div className="px-5 pb-4 grid sm:grid-cols-2 gap-2">
                            {req.details.map((d, i) => (
                              <div key={i} className="flex justify-between p-3 bg-secondary rounded-lg text-sm">
                                <span className="text-muted-foreground">{d.label}</span>
                                <span className="font-semibold text-foreground">{d.value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ════════════════ APPLICATION FILING ════════════════ */}
            {tab === "filing" && (
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-foreground">Application Filing</h2>
                {!otherFilings?.length ? (
                  <div className="text-center py-16 text-muted-foreground">No application filing information available.</div>
                ) : (
                  <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden">
                    {otherFilings.map((f) => (
                      <div key={f.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-4 bg-background hover:bg-secondary/40 transition">
                        <span className="font-semibold text-foreground text-sm">{f.label}</span>
                        <span className="text-muted-foreground text-sm sm:text-right">{String(f.value)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ════════════════ ENGLISH EXAM ════════════════ */}
            {tab === "english" && (
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-foreground">English Exam Requirements</h2>
                {!englishReqs ? (
                  <div className="text-center py-16 text-muted-foreground">No English exam requirements listed.</div>
                ) : (
                  <>
                    {(englishReqs.exam_waiver === "1" || englishReqs.moi_accepted === "1") && (
                      <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-xl text-sm text-foreground">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">i</span>
                        <p>{englishReqs.waiver_note || "English Exam Waiver based on 12th English Score or MOI (Medium of Instruction) is provided by this Institute."}</p>
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {englishReqs.exams?.map((exam, i) => (
                        <div key={i} className="border border-border rounded-2xl overflow-hidden">
                          <button
                            onClick={() => setExpandedReq(expandedReq === `exam-${i}` ? null : `exam-${i}`)}
                            className="w-full flex items-center justify-between px-4 py-4 bg-secondary hover:bg-secondary/80 transition"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-10 h-10 rounded-xl bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center uppercase">
                                {exam.exam_name?.slice(0, 3)}
                              </span>
                              <div className="text-left">
                                <p className="font-semibold text-foreground">{exam.exam_name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {exam.overall_score} <span className="text-xs">{exam.overall_label || "Overall"}</span>
                                </p>
                              </div>
                            </div>
                            {expandedReq === `exam-${i}`
                              ? <ChevronUp className="w-4 h-4 text-muted-foreground" />
                              : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                          </button>
                          {expandedReq === `exam-${i}` && exam.sub_scores?.length > 0 && (
                            <div className="p-4 grid grid-cols-2 gap-2">
                              {exam.sub_scores.map((s, j) => (
                                <div key={j} className="flex justify-between p-2.5 bg-secondary rounded-lg text-sm">
                                  <span className="text-muted-foreground">{s.label}</span>
                                  <span className="font-semibold text-foreground">{s.value}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="border border-border rounded-2xl overflow-hidden">
                      <div className="flex items-center justify-between px-5 py-4 bg-secondary">
                        <span className="font-semibold text-foreground">Waivers</span>
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}