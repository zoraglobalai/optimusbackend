import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  FileText,
  CheckCircle,
  ClipboardList,
  PenTool,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const documents = [
  {
    title: "Statement of Purpose (SOP)",
    desc: "Professionally drafted SOP highlighting your academic goals, career plans and motivation.",
  },
  {
    title: "Letter of Recommendation (LOR)",
    desc: "Guidance in preparing strong academic and professional recommendation letters.",
  },
  {
    title: "Academic Documents",
    desc: "Verification and formatting of transcripts, mark sheets and certificates.",
  },
  {
    title: "Resume / CV",
    desc: "International-standard resume tailored for universities and visa requirements.",
  },
  {
    title: "Application Forms",
    desc: "Accurate filling and submission of university and visa application forms.",
  },
];

const whyUs = [
  "University-compliant documentation",
  "Error-free application review",
  "Experienced documentation experts",
  "Higher visa and admission success rates",
];

const Documentation = () => {
  return (
    <Layout>
      {/* SEO */}
      <Helmet>
        {/* Primary SEO */}
        <title>
          Study Abroad Documentation Support | SOP & LOR Experts – Optimus
        </title>

        <meta
          name="description"
          content="Get professional documentation support for study abroad including SOP, LOR, resumes, transcripts and application forms with Optimus Overseas Education."
        />

        <meta
          name="keywords"
          content="study abroad documentation, SOP writing services, LOR assistance, application documentation support, overseas education consultants"
        />

        <link
          rel="canonical"
          href="https://www.optimusoverseasedu.com/services/documentation"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Study Abroad Documentation Support | Optimus Overseas Education"
        />
        <meta
          property="og:description"
          content="Expert SOP, LOR and application documentation support to improve university admissions and visa success."
        />
        <meta
          property="og:url"
          content="https://www.optimusoverseasedu.com/services/documentation"
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
          content="Study Abroad Documentation Support | SOP & LOR Experts"
        />
        <meta
          name="twitter:description"
          content="Professional documentation support for SOPs, LORs, resumes and study abroad applications."
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
              Documentation Support
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Accurate and well-prepared documentation plays a crucial role in
              securing university admissions and visa approvals. Our experts
              ensure every document meets international standards.
            </p>
          </div>
        </div>
      </section>

      {/* DOCUMENT LIST */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Documents We Help You Prepare
            </h2>
            <p className="text-lg text-muted-foreground">
              End-to-end documentation support tailored to your study destination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Why Choose Our Documentation Services?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We ensure accuracy, clarity and compliance at every stage of
                your application process.
              </p>

              <ul className="space-y-4">
                {whyUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-2xl p-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <ClipboardList className="w-8 h-8 text-primary" />
                  <p className="text-foreground">
                    Structured review process for every document before submission.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <PenTool className="w-8 h-8 text-primary" />
                  <p className="text-foreground">
                    Professionally written SOPs aligned with university expectations.
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
              Get Your Documents Reviewed by Experts
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Avoid mistakes and strengthen your application with professional
              documentation support.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition"
            >
              Start Documentation Process
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Documentation;

