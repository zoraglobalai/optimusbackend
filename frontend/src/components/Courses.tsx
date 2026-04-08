import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { Helmet } from "react-helmet-async";
import Layout from "./layout/Layout";

export default function Courses() {
  return (
    <>
    <Layout>
<Helmet>
  {/* Primary SEO */}
  <title>
    Courses & Programs Abroad | Study Overseas Degrees – Optimus Overseas
  </title>

  <meta
    name="description"
    content="Explore bachelor’s, master’s, PhD, diploma and professional certification programs abroad with Optimus Overseas Educational Consultants. Study in USA, UK, Canada, Australia and Europe."
  />

  <meta
    name="keywords"
    content="courses abroad, programs abroad, study abroad courses, overseas education programs, bachelors masters phd abroad"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/courses"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Courses & Programs Abroad | Study Overseas Degrees"
  />
  <meta
    property="og:description"
    content="Discover bachelor’s, master’s, PhD, diploma and professional courses abroad with expert guidance from Optimus Overseas Educational Consultants."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/courses"
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
    content="Courses & Programs Abroad | Optimus Overseas"
  />
  <meta
    name="twitter:description"
    content="Explore bachelor’s, master’s, PhD, diploma and certification programs abroad with expert counselling."
  />
  <meta
    name="twitter:image"
    content="https://www.optimusoverseasedu.com/og/optimus-footer.webp"
  />
</Helmet>

    <div className="overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-r from-[#0b2c5d] to-[#123c7a] text-white">
        <div className="container-custom py-28">
          <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  className="text-5xl font-bold mb-6 max-w-3xl"
>
  Courses & Programs Abroad
</motion.h1>

          <motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.9 }}
  className="text-xl text-white/80 max-w-2xl"
>
  Optimus Overseas Educational Consultants offers bachelor’s, master’s, PhD, diploma and professional courses at top international universities.
</motion.p>
        </div>
      </section>

      {/* ================= TRUST METRICS ================= */}
      <section className="bg-white">
        <div className="container-custom py-20 grid md:grid-cols-3 gap-10 text-center">
          {[
            { value: "15+", label: "Years of Experience" },
            { value: "10,000+", label: "Students Placed" },
            { value: "50+", label: "Study Destinations" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <h3 className="text-4xl font-bold text-[#0b2c5d]">{item.value}</h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= COURSES SECTION ================= */}
      <section className="bg-gray-50">
        <div className="container-custom py-28">
          <h2 className="text-4xl font-bold text-[#0b2c5d] mb-6">
            Explore Our Academic Pathways
          </h2>

          <p className="text-lg text-gray-600 mb-16 max-w-3xl">
            Our programs are carefully selected to ensure global recognition,
            high visa success rates and strong career outcomes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <CourseCard
              title="Bachelor’s Programs"
              description="Undergraduate programs designed to build strong academic foundations and global exposure."
              duration="3 – 4 Years"
              countries="USA, UK, Canada, Australia, Europe"
              link="/courses/bachelors"
            />

            <CourseCard
              title="Master’s Programs"
              description="Advanced postgraduate programs for specialization and global career growth."
              duration="1 – 2 Years"
              countries="USA, UK, Canada, Australia"
              link="/courses/masters"
            />

            <CourseCard
              title="PhD / Doctorate"
              description="Research-intensive doctoral programs at top-ranked international universities."
              duration="3 – 5 Years"
              countries="USA, UK, Europe"
              link="/courses/phd"
            />

            <CourseCard
              title="Diploma & PG Diploma"
              description="Career-focused programs with practical industry relevance."
              duration="6 Months – 2 Years"
              countries="Canada, UK, Australia"
              link="/courses/diploma"
            />

            <CourseCard
              title="Professional Certifications"
              description="Skill-based certifications aligned with global job market demand."
              duration="3 – 12 Months"
              countries="Global"
              link="/courses/certifications"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white">
        <div className="container-custom py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-[#0b2c5d] mb-6">
              Why Choose Optimus Overseas Educational Consultants?
            </h3>

            <ul className="space-y-4 text-gray-700 text-lg">
              <li>✔ Personalized university & course selection</li>
              <li>✔ Country-specific admission strategies</li>
              <li>✔ Visa documentation & interview support</li>
              <li>✔ Scholarship & financial guidance</li>
              <li>✔ Pre-departure & post-arrival support</li>
            </ul>
          </div>

          <div className="bg-[#0b2c5d] text-white p-12 rounded-2xl">
            <h4 className="text-2xl font-semibold mb-4">
              Study Destinations
            </h4>
            <p className="text-white/80 text-lg">
              USA, UK, Canada, Australia, Europe, New Zealand & more.
            </p>
          </div>
        </div>
      </section>

      {/* ================= GOLD CTA ================= */}
      <section className="bg-gradient-to-r from-[#cfa548] to-[#e1b860]">
        <div className="container-custom py-24 flex flex-col lg:flex-row items-center justify-between gap-10">
          <h3 className="text-4xl font-bold text-[#0b2c5d] max-w-xl">
            Ready to Choose the Right Course for Your Future?
          </h3>

          <div className="flex gap-4">
            <a
              href="/contact"
              className="bg-[#0b2c5d] text-white px-8 py-4 rounded-lg font-semibold"
            >
              Book Free Counselling →
            </a>
            <a
              href="tel:9087778000"
              className="border-2 border-[#0b2c5d] text-[#0b2c5d] px-8 py-4 rounded-lg font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
    </Layout>
    </>
  );
}

