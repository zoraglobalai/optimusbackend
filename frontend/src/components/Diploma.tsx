import {
  Briefcase,
  Wrench,
  Monitor,
  HeartPulse,
  Clock,
  ArrowRight
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Layout from "./layout/Layout";


export default function Diploma() {
  return (
    <Layout>
<Helmet>
  {/* Primary SEO */}
  <title>
    Diploma & PG Diploma Programs Abroad | Study Short-Term Courses Overseas
  </title>

  <meta
    name="description"
    content="Explore diploma and PG diploma programs abroad with Optimus Overseas Educational Consultants. Short-term, skill-based courses in business, IT, engineering and healthcare across top study destinations."
  />

  <meta
    name="keywords"
    content="diploma abroad, pg diploma abroad, diploma courses overseas, short term courses abroad, diploma study abroad"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/courses/diploma"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Diploma & PG Diploma Programs Abroad | Study Overseas"
  />
  <meta
    property="og:description"
    content="Short-term, skill-based diploma and PG diploma programs abroad with expert guidance from Optimus Overseas Educational Consultants."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/courses/diploma"
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
    content="Diploma & PG Diploma Programs Abroad"
  />
  <meta
    name="twitter:description"
    content="Explore short-term diploma and PG diploma programs abroad with career-focused pathways."
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
            Diploma & PG Diploma Programs Abroad
          </span>

          <h1 className="text-5xl font-bold max-w-4xl mb-6">
  Diploma & PG Diploma Programs Abroad
</h1>

          <p className="text-lg text-blue-100 max-w-3xl">
  Optimus Overseas Educational Consultants offers diploma and PG diploma programs abroad with skill-focused, affordable and career-oriented overseas education pathways.
</p>
        </div>
      </section>

      {/* ================= WHAT MAKES DIPLOMA DIFFERENT ================= */}
      <section className="container-custom py-24">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-[#0b2c5d] mb-6">
            Why Choose a Diploma or PG Diploma Abroad?
          </h2>

          <p className="text-lg text-gray-600">
            Diploma programs focus on practical skills rather than academic theory.
            They are ideal for students who want faster entry into the workforce,
            cost-effective education abroad, or a bridge pathway to higher studies.
          </p>
        </div>
      </section>

      {/* ================= KEY ADVANTAGES ================= */}
      <section className="container-custom pb-24">
        <div className="grid lg:grid-cols-4 gap-10">
          {[
            {
              icon: Clock,
              title: "Short Duration",
              desc: "Programs typically range from 6 months to 2 years."
            },
            {
              icon: Wrench,
              title: "Skill-Based Learning",
              desc: "Hands-on training aligned with industry requirements."
            },
            {
              icon: Briefcase,
              title: "Job-Oriented Outcomes",
              desc: "Designed to improve employability in international markets."
            },
            {
              icon: Monitor,
              title: "Flexible Study Pathways",
              desc: "Can lead to Bachelor’s or Master’s programs later."
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

      {/* ================= DIPLOMA CATEGORIES ================= */}
      <section className="container-custom pb-24">
        <h2 className="text-4xl font-bold text-[#0b2c5d] mb-12">
          Popular Diploma & PG Diploma Options
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* BUSINESS */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Business & Management
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ PG Diploma in Business Management</li>
              <li>✔ Diploma in Marketing & Sales</li>
              <li>✔ Human Resource Management</li>
              <li>✔ Operations & Supply Chain</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Ideal for students seeking business exposure without long academic
              commitments.
            </p>
          </div>

          {/* IT */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              IT & Technology
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Diploma in Information Technology</li>
              <li>✔ Data Analytics & Cloud Basics</li>
              <li>✔ Cybersecurity Foundations</li>
              <li>✔ Software Testing & Support</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Best for quick entry into technical and digital roles.
            </p>
          </div>

          {/* TECHNICAL */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Technical & Engineering
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Mechanical & Civil Diploma</li>
              <li>✔ Electrical & Electronics</li>
              <li>✔ Industrial Technology</li>
              <li>✔ Automation & Maintenance</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Suitable for hands-on technical and industrial careers.
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Healthcare & Allied Sciences
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Healthcare Administration</li>
              <li>✔ Clinical Research Assistant</li>
              <li>✔ Medical Laboratory Technology</li>
              <li>✔ Public Health Diploma</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Designed for entry-level healthcare and support roles.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#cfa548]">
        <div className="container-custom py-20 text-center">
          <h2 className="text-4xl font-bold text-[#0b2c5d] mb-4">
            Looking for a Faster Overseas Study Option?
          </h2>

          <p className="text-lg text-[#0b2c5d] max-w-3xl mx-auto mb-8">
            Get expert guidance on diploma selection, country options, admission
            process and future study pathways.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#0b2c5d] text-white px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Get Free Counselling <ArrowRight size={20} />
          </a>
        </div>
      </section>

    </div>
    </Layout>
  );
}

