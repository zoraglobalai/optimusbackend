import {
  GraduationCap,
  BookOpen,
  Globe,
  Layers,
  ArrowRight
} from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "./layout/Layout";
import { Helmet } from "react-helmet-async";


export default function Bachelors() {
    const navigate = useNavigate();

  return (
    <Layout>
<Helmet>
  {/* Primary SEO */}
  <title>
    Bachelor’s Programs Abroad | Study Undergraduate Courses – Optimus Overseas
  </title>

  <meta
    name="description"
    content="Optimus Overseas Educational Consultants helps students study bachelor’s degree programs abroad in USA, UK, Canada, Australia and Europe with expert counselling and admissions support."
  />

  <meta
    name="keywords"
    content="bachelors abroad, undergraduate programs abroad, study bachelors abroad, bachelors degree overseas, bachelors in usa uk canada australia"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/courses/bachelors"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Bachelor’s Programs Abroad | Study Undergraduate Courses Overseas"
  />
  <meta
    property="og:description"
    content="Explore bachelor’s degree programs abroad with Optimus Overseas. Study undergraduate courses in top universities across USA, UK, Canada, Australia and Europe."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/courses/bachelors"
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
    content="Bachelor’s Programs Abroad | Optimus Overseas"
  />
  <meta
    name="twitter:description"
    content="Study bachelor’s degree programs abroad with expert guidance on universities, countries and admissions."
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
            
            Bachelor’s Programs Abroad
          </span>
          

          <h1 className="text-5xl font-bold max-w-4xl mb-6">
  Bachelor’s Degree Programs Abroad
</h1>

          <p className="text-lg text-blue-100 max-w-3xl">
  Optimus Overseas Educational Consultants helps students pursue bachelor’s degree programs abroad with expert guidance on universities, countries and admissions.
</p>
        </div>
      </section>

      {/* ================= WHY BACHELORS ================= */}
      <section className="container-custom py-24">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-[#0b2c5d] mb-6">
            Why Choose a Bachelor’s Degree Abroad?
          </h2>

          <p className="text-lg text-gray-600">
            Studying a bachelor’s degree abroad helps students gain international
            academic exposure, modern teaching methods, and early global
            adaptability building a strong base for higher education and future
            careers.
          </p>
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="container-custom pb-24">
        <div className="grid lg:grid-cols-4 gap-10">
          {[
            {
              icon: BookOpen,
              title: "Strong Academic Foundation",
              desc: "Globally structured curriculum with practical and theoretical balance."
            },
            {
              icon: Globe,
              title: "International Exposure",
              desc: "Multicultural learning environment from the first year itself."
            },
            {
              icon: Layers,
              title: "Flexible Study Pathways",
              desc: "Easy progression to Master’s or specialization programs."
            },
            {
              icon: GraduationCap,
              title: "Globally Recognized Degrees",
              desc: "Degrees accepted worldwide for higher education and careers."
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
          Bachelor’s Study Options Available
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* BUSINESS */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Business & Management
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ BBA – Business Administration</li>
              <li>✔ International Business</li>
              <li>✔ Finance & Accounting</li>
              <li>✔ Marketing & Entrepreneurship</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Ideal for students interested in management, leadership and global
              business fundamentals.
            </p>
          </div>

          {/* SCIENCE */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Science & Technology
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ BSc – Science & Technology</li>
              <li>✔ Computer Science</li>
              <li>✔ Information Technology</li>
              <li>✔ Data Science Foundations</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Suitable for students with analytical thinking and technical
              interests.
            </p>
          </div>

          {/* ENGINEERING */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Engineering
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ BE / BTech Programs</li>
              <li>✔ Mechanical Engineering</li>
              <li>✔ Civil Engineering</li>
              <li>✔ Electrical & Electronics</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Designed for students aiming to build strong technical and
              problem-solving skills.
            </p>
          </div>

          {/* LIFE SCIENCE */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Health & Life Sciences
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Pre-Medical Programs</li>
              <li>✔ Life Sciences</li>
              <li>✔ Biotechnology</li>
              <li>✔ Public Health Foundations</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Best for students planning future careers in healthcare or medical
              sciences.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#cfa548]">
        <div className="container-custom py-20 text-center">
          <h2 className="text-4xl font-bold text-[#0b2c5d] mb-4">
            Unsure Which Bachelor’s Program Is Right for You?
          </h2>

          <p className="text-lg text-[#0b2c5d] max-w-3xl mx-auto mb-8">
            Get expert guidance on country selection, program suitability,
            admission requirements and future study pathways.
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

