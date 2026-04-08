import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  MessageSquare,
  UserCheck,
  CheckCircle,
  Mic,
  ShieldCheck,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const interviewStages = [
  {
    title: "Profile Evaluation",
    desc: "We analyze your academic background, course choice and financial profile before the interview.",
  },
  {
    title: "Visa Question Training",
    desc: "Practice real visa questions commonly asked by embassy officers.",
  },
  {
    title: "Mock Interview Session",
    desc: "One-on-one mock interview conducted by trained visa experts.",
  },
  {
    title: "Feedback & Improvement",
    desc: "Detailed feedback with corrections, confidence tips and answer refinement.",
  },
];

const commonQuestions = [
  "Why did you choose this course and university?",
  "Why this country and not India?",
  "How will you fund your education?",
  "What are your plans after graduation?",
  "Why should your visa be approved?",
];

const MockVisaInterview = () => {
  return (
    <Layout>
      {/* SEO */}
      <Helmet>
        {/* Primary SEO */}
        <title>
          Mock Visa Interview Preparation | Student Visa Coaching – Optimus
        </title>

        <meta
          name="description"
          content="Prepare for your student visa interview with expert-led mock visa interview sessions. Improve confidence, clarity and approval success rates."
        />

        <meta
          name="keywords"
          content="mock visa interview, student visa interview preparation, visa interview coaching, study abroad visa training"
        />

        <link
          rel="canonical"
          href="https://www.optimusoverseasedu.com/services/mock-visa"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Mock Visa Interview Preparation | Optimus Overseas Education"
        />
        <meta
          property="og:description"
          content="Realistic mock visa interview sessions to help students succeed in their student visa interviews with confidence."
        />
        <meta
          property="og:url"
          content="https://www.optimusoverseasedu.com/services/mock-visa"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.optimusoverseasedu.com/og/optimus-footer.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mock Visa Interview Preparation"
        />
        <meta
          name="twitter:description"
          content="Build confidence and improve student visa approval chances with expert mock visa interview training."
        />
        <meta
          name="twitter:image"
          content="https://www.optimusoverseasedu.com/og/optimus-footer.webp"
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-primary pt-32 pb-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
              Our Services
            </span>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Mock Visa Interview
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Prepare confidently for your student visa interview with realistic
              mock sessions designed to improve clarity, confidence and success
              rates.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Our Mock Interview Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A structured preparation model that mirrors real embassy interviews.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {interviewStages.map((stage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {index + 1}. {stage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON QUESTIONS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Common Visa Interview Questions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We train you to answer confidently and convincingly.
              </p>

              <ul className="space-y-4">
                {commonQuestions.map((q, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <MessageSquare className="w-6 h-6 text-accent mt-1" />
                    <span className="text-foreground">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-2xl p-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mic className="w-8 h-8 text-primary" />
                  <p className="text-foreground">
                    Real interview environment with professional feedback.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  <p className="text-foreground">
                    Focus on confidence, clarity and visa officer expectations.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                  <p className="text-foreground">
                    Reduces interview anxiety and improves approval chances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl px-10 py-14 text-center relative -mb-24">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Practice Before the Real Visa Interview
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build confidence, refine answers and attend your visa interview
              fully prepared.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition"
            >
              Book Mock Interview
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MockVisaInterview;

