import {
  Award,
  TrendingUp,
  Code,
  ShieldCheck,
  Briefcase,
  ArrowRight
} from "lucide-react";
import Layout from "./layout/Layout";
import { Helmet } from "react-helmet-async";


export default function Certifications() {
  return (
    <Layout>
<Helmet>
  {/* Primary SEO */}
  <title>
    Professional Certifications Abroad | Skill-Based Programs – Optimus Overseas
  </title>

  <meta
    name="description"
    content="Optimus Overseas Educational Consultants offers globally recognized professional certification programs abroad in technology, business, finance and healthcare for career growth and upskilling."
  />

  <meta
    name="keywords"
    content="professional certifications abroad, certification courses overseas, international certification programs, skill based courses abroad, global certifications"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/courses/certifications"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Professional Certifications Abroad | Global Skill-Based Programs"
  />
  <meta
    property="og:description"
    content="Upgrade your skills with globally recognized professional certification programs abroad. Expert guidance by Optimus Overseas Educational Consultants."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/courses/certifications"
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
    content="Professional Certifications Abroad | Optimus Overseas"
  />
  <meta
    name="twitter:description"
    content="Explore international professional certification programs in tech, business, finance and healthcare with expert guidance."
  />
  <meta
    name="twitter:image"
    content="https://www.optimusoverseasedu.com/og/optimus-footer.webp"
  />
</Helmet>

    <div className="bg-[#f6f9fc]">

      {/* ================= HERO ================= */}
      <section className="bg-[#0b2c5d] text-white">
        <div className="container-custom py-28">
          <span className="inline-block mb-6 px-5 py-2 rounded-full bg-[#cfa548] text-sm font-semibold">
            Professional Certifications Abroad
          </span>

          <h1 className="text-5xl font-bold max-w-4xl mb-6">
  Professional Certification Programs Abroad
</h1>

        <p className="text-lg text-blue-100 max-w-3xl">
  Optimus Overseas Educational Consultants offers globally recognized professional certification programs abroad for career growth, upskilling and international exposure.
</p>

        </div>
      </section>

      {/* ================= WHAT ARE CERTIFICATIONS ================= */}
      <section className="container-custom py-24">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-[#0b2c5d] mb-6">
            What Are Professional Certifications?
          </h2>

          <p className="text-lg text-gray-600">
            Professional certifications are short-term, skill-focused programs
            aligned with industry requirements. They validate expertise in specific
            tools, technologies, or business domains and are widely recognized by
            employers worldwide.
          </p>
        </div>
      </section>

      {/* ================= WHO SHOULD CHOOSE THIS ================= */}
      <section className="container-custom pb-24">
        <h2 className="text-4xl font-bold text-[#0b2c5d] mb-10">
          Who Should Choose Professional Certifications?
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">
          {[
            {
              icon: Briefcase,
              title: "Working Professionals",
              desc: "Enhance existing skills or move into leadership and specialist roles."
            },
            {
              icon: TrendingUp,
              title: "Career Switchers",
              desc: "Transition into high-demand industries like IT, data, or management."
            },
            {
              icon: Award,
              title: "Skill Upgraders",
              desc: "Stay competitive with globally recognized certifications."
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-full bg-[#e9eef6] flex items-center justify-center mb-6">
                  <Icon className="text-[#0b2c5d]" size={26} />
                </div>

                <h3 className="text-xl font-semibold text-[#0b2c5d] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CERTIFICATION DOMAINS ================= */}
      <section className="container-custom pb-24">
        <h2 className="text-4xl font-bold text-[#0b2c5d] mb-12">
          Popular Certification Domains
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* TECH */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Technology & Digital Skills
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Data Science & Analytics</li>
              <li>✔ Artificial Intelligence & Machine Learning</li>
              <li>✔ Cloud Computing (AWS / Azure)</li>
              <li>✔ Cybersecurity</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Ideal for professionals entering or advancing in tech-driven roles.
            </p>
          </div>

          {/* MANAGEMENT */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Business & Management
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Project Management (PMP)</li>
              <li>✔ Business Analytics</li>
              <li>✔ Digital Marketing</li>
              <li>✔ Leadership & Strategy</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Designed for managerial growth and business decision-making roles.
            </p>
          </div>

          {/* FINANCE */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Finance, Risk & Compliance
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Financial Risk Management</li>
              <li>✔ Investment Analysis</li>
              <li>✔ Accounting & Auditing</li>
              <li>✔ Regulatory Compliance</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Suitable for finance professionals and compliance specialists.
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Healthcare & Specialized Skills
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Clinical Research Certification</li>
              <li>✔ Healthcare Management</li>
              <li>✔ Medical Coding</li>
              <li>✔ Public Health Analytics</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Focused on healthcare operations and specialized support roles.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#cfa548]">
        <div className="container-custom py-20 text-center">
          <h2 className="text-4xl font-bold text-[#0b2c5d] mb-4">
            Ready to Upgrade Your Professional Skills?
          </h2>

          <p className="text-lg text-[#0b2c5d] max-w-3xl mx-auto mb-8">
            Get expert guidance on choosing the right certification based on your
            background, career goals and global market demand.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#0b2c5d] text-white px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Talk to a Career Advisor <ArrowRight size={20} />
          </a>
        </div>
      </section>

    </div>
    </Layout>
  );
}

