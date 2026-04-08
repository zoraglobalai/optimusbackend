import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  FileText,
  ClipboardCheck,
  School,
  Send,
  CheckCircle,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const steps = [
  {
    step: "01",
    title: "Profile Evaluation",
    desc: "We assess your academic background, test scores, budget and career goals to determine the best admission strategy.",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    title: "University Shortlisting",
    desc: "Based on your profile, we shortlist universities with high acceptance and visa success rates.",
    icon: School,
  },
  {
    step: "03",
    title: "Documentation Support",
    desc: "Complete assistance with SOP, LOR, resume, transcripts and application forms.",
    icon: FileText,
  },
  {
    step: "04",
    title: "Application Submission",
    desc: "We apply on your behalf, track application status and coordinate with universities.",
    icon: Send,
  },
  {
    step: "05",
    title: "Offer Letter & Acceptance",
    desc: "We help you review offers, confirm seats and proceed with enrollment.",
    icon: CheckCircle,
  },
];

const Admissions = () => {
  return (
    <Layout>
      <Helmet>
  {/* Primary SEO */}
  <title>
    Overseas University Admissions Support | Study Abroad Application Assistance
  </title>

  <meta
    name="description"
    content="Get expert overseas admissions support with Optimus Overseas Educational Consultants. Profile evaluation, university shortlisting, documentation and application submission."
  />

  <meta
    name="keywords"
    content="overseas admissions support, study abroad application assistance, university admissions abroad, international admissions consultants"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/admissions"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Overseas Admissions Support | Study Abroad Application Experts"
  />
  <meta
    property="og:description"
    content="End-to-end overseas admissions support including profile evaluation, university shortlisting, documentation and application submission."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/admissions"
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
    content="Overseas Admissions Support"
  />
  <meta
    name="twitter:description"
    content="Professional overseas admissions assistance for study abroad aspirants."
  />
  <meta
    name="twitter:image"
    content="https://www.optimusoverseasedu.com/og/optimus-footer.webp"
  />
</Helmet>

      {/* HERO */}
        <section className="bg-primary pt-32 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
              Our Services
            </span>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
             Admissions Support
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
             From profile evaluation to offer letter acceptance, we provide
              end-to-end admission support to maximize your chances of securing
              admission into top international universities.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Our Admission Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A structured, transparent and proven approach to overseas
              admissions.
            </p>
          </div>

          <div className="space-y-10 max-w-5xl mx-auto">
            {steps.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-8 shadow-sm border"
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                    {item.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
  <div className="container-custom">
    <div className="max-w-4xl mx-auto bg-accent rounded-3xl shadow-xl px-10 py-14 text-center relative -mb-24">
      
      <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
        Ready to Apply with Confidence?
      </h2>

      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-white">
        Get expert guidance and end-to-end support for your overseas admissions.
      </p>

      <Link
        to="/contact"
        className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
      >
        Get Free Counselling
      </Link>
    </div>
  </div>
</section>

    </Layout>
  );
};

export default Admissions;

