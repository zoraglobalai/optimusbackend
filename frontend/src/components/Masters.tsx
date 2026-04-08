import {
  Briefcase,
  TrendingUp,
  Globe,
  FileCheck,
  ArrowRight
} from "lucide-react";
import Layout from "./layout/Layout";
import { Helmet } from "react-helmet-async";


export default function Masters() {
  return (
    <Layout>
<Helmet>
  {/* Primary SEO */}
  <title>
    Master’s Degree Programs Abroad | MS & MBA Study Overseas
  </title>

  <meta
    name="description"
    content="Pursue master’s degree programs abroad with Optimus Overseas Educational Consultants. Study MS, MBA and postgraduate courses in USA, UK, Canada, Australia and Europe with expert guidance."
  />

  <meta
    name="keywords"
    content="masters abroad, ms abroad, mba abroad, postgraduate courses abroad, masters degree overseas"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/courses/masters"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Master’s Degree Programs Abroad | MS & MBA Overseas"
  />
  <meta
    property="og:description"
    content="Study MS, MBA and postgraduate programs abroad with expert counselling from Optimus Overseas Educational Consultants."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/courses/masters"
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
    content="Master’s Degree Programs Abroad"
  />
  <meta
    name="twitter:description"
    content="Explore MS, MBA and postgraduate programs abroad with career-focused pathways."
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
            Master’s Programs Abroad
          </span>

          <h1 className="text-5xl font-bold max-w-4xl mb-6">
  Master’s Degree Programs Abroad
</h1>

          <p className="text-lg text-blue-100 max-w-3xl">
  Optimus Overseas Educational Consultants helps students pursue master’s degree programs abroad with expert guidance on universities, countries and career outcomes.
</p>
        </div>
      </section>

      {/* ================= WHY MASTERS ================= */}
      <section className="container-custom py-24">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-[#0b2c5d] mb-6">
            Why Pursue a Master’s Degree Abroad?
          </h2>

          <p className="text-lg text-gray-600">
            A master’s degree abroad allows graduates to specialize in their
            chosen field, gain international work exposure and improve long-term
            career prospects through industry-aligned education systems.
          </p>
        </div>
      </section>

      {/* ================= KEY OUTCOMES ================= */}
      <section className="container-custom pb-24">
        <div className="grid lg:grid-cols-4 gap-10">
          {[
            {
              icon: TrendingUp,
              title: "Career Advancement",
              desc: "Designed to enhance employability, leadership skills and earning potential."
            },
            {
              icon: Briefcase,
              title: "Industry-Relevant Learning",
              desc: "Programs aligned with global industry standards and market demand."
            },
            {
              icon: Globe,
              title: "Global Work Exposure",
              desc: "Access to internships, projects and post-study work opportunities."
            },
            {
              icon: FileCheck,
              title: "Migration-Friendly Pathways",
              desc: "Master’s degrees that support post-study work visas and PR routes."
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
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

      {/* ================= PROGRAM CATEGORIES ================= */}
      <section className="container-custom pb-24">
        <h2 className="text-4xl font-bold text-[#0b2c5d] mb-12">
          Master’s Specializations Offered
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* BUSINESS */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Business, Management & Finance
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ MBA & Global Management</li>
              <li>✔ Finance & Accounting</li>
              <li>✔ International Business</li>
              <li>✔ Business Analytics</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Designed for professionals aiming for leadership, consulting,
              and management roles in global organizations.
            </p>
          </div>

          {/* TECH */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Technology & Data Sciences
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Computer Science</li>
              <li>✔ Artificial Intelligence</li>
              <li>✔ Data Science & Analytics</li>
              <li>✔ Information Technology</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Suitable for graduates seeking high-demand roles in global tech
              industries.
            </p>
          </div>

          {/* ENGINEERING */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Engineering & Applied Sciences
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Mechanical Engineering</li>
              <li>✔ Civil & Structural Engineering</li>
              <li>✔ Electrical & Electronics</li>
              <li>✔ Robotics & Automation</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Advanced engineering programs focused on innovation and applied
              research.
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Health, Life & Applied Sciences
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Public Health (MPH)</li>
              <li>✔ Biotechnology</li>
              <li>✔ Life Sciences</li>
              <li>✔ Healthcare Management</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Programs combining science, research and healthcare leadership.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#cfa548]">
        <div className="container-custom py-20 text-center">
          <h2 className="text-4xl font-bold text-[#0b2c5d] mb-4">
            Planning Your Master’s Abroad?
          </h2>

          <p className="text-lg text-[#0b2c5d] max-w-3xl mx-auto mb-8">
            Get expert guidance on specialization selection, country options,
            admissions and post-study career pathways.
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

