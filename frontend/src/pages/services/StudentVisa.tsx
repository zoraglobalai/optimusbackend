import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  Stamp,
  CheckCircle,
  AlertTriangle,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const visaSteps = [
  "University offer confirmation",
  "Visa application form submission",
  "Financial documentation verification",
  "Visa interview preparation",
  "Biometrics & appointment scheduling",
  "Final visa approval & stamping",
];

const successFactors = [
  "Strong academic background",
  "Clear study and career intent",
  "Proper financial proof",
  "Well-prepared SOP",
  "Confident interview performance",
];

const commonMistakes = [
  "Incomplete or incorrect documents",
  "Weak explanation of course choice",
  "Insufficient financial justification",
  "Poor interview preparation",
];

const StudentVisa = () => {
  return (
    <Layout>
      {/* SEO */}
      <Helmet>
        {/* Primary SEO */}
        <title>
          Student Visa Consultants for Study Abroad | Optimus Overseas Education
        </title>

        <meta
          name="description"
          content="Optimus Overseas Education provides expert student visa assistance for study abroad, including documentation, interview preparation and high visa approval success."
        />

        <meta
          name="keywords"
          content="student visa consultants, study abroad visa assistance, student visa process, overseas education visa support, visa interview preparation"
        />

        <link
          rel="canonical"
          href="https://www.optimusoverseasedu.com/services/student-visa"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Student Visa Consultants for Study Abroad | Optimus Overseas Education"
        />
        <meta
          property="og:description"
          content="End-to-end student visa guidance with expert documentation, interview preparation and proven approval success rates."
        />
        <meta
          property="og:url"
          content="https://www.optimusoverseasedu.com/services/student-visa"
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
          content="Student Visa Consultants for Study Abroad"
        />
        <meta
          name="twitter:description"
          content="Expert student visa services for studying abroad, including SOP, interview prep and documentation support."
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
              Student Visa Assistance
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Our visa experts guide you through every step of the student visa
              process, ensuring accuracy, confidence and high approval success
              rates.
            </p>
          </div>
        </div>
      </section>

      {/* VISA PROCESS */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Student Visa Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A clear, structured approach to ensure smooth visa approval.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visaSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-6 h-6 text-primary" />
                </div>

                <p className="font-semibold text-foreground">
                  {index + 1}. {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS + MISTAKES */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <h3 className="font-display text-3xl font-bold text-foreground mb-6">
                Visa Success Factors
              </h3>

              <ul className="space-y-4">
                {successFactors.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-accent mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <h3 className="font-display text-3xl font-bold text-foreground mb-6">
                Common Reasons for Visa Rejection
              </h3>

              <ul className="space-y-4">
                {commonMistakes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <Stamp className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">
                High Approval Rates
              </h4>
              <p className="text-muted-foreground">
                Proven visa success across multiple countries.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">
                Expert Guidance
              </h4>
              <p className="text-muted-foreground">
                Handled by experienced visa professionals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">
                End-to-End Support
              </h4>
              <p className="text-muted-foreground">
                From application to final visa stamping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl px-10 py-14 text-center relative -mb-24">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Get Your Student Visa Approved with Confidence
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Prepare, apply and succeed with expert-led student visa support.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition"
            >
              Book Visa Consultation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudentVisa;

