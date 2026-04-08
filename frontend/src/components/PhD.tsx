import {
  Microscope,
  BookOpen,
  University,
  FileText,
  Globe,
  ArrowRight
} from "lucide-react";
import Layout from "./layout/Layout";
import { Helmet } from "react-helmet-async";


export default function PhD() {
  return (
    <Layout>
<Helmet>
  {/* Primary SEO */}
  <title>
    PhD & Doctorate Programs Abroad | Funded PhD Overseas
  </title>

  <meta
    name="description"
    content="Pursue PhD and doctorate programs abroad with Optimus Overseas Educational Consultants. Get expert guidance on research proposals, funded PhD options, scholarships and top global universities."
  />

  <meta
    name="keywords"
    content="phd abroad, doctorate programs abroad, funded phd overseas, research programs abroad, phd scholarships"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/courses/phd"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="PhD & Doctorate Programs Abroad | Funded Research Programs"
  />
  <meta
    property="og:description"
    content="Study PhD and doctorate programs abroad with expert support for research proposals, supervisors and funded opportunities."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/courses/phd"
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
    content="PhD & Doctorate Programs Abroad"
  />
  <meta
    name="twitter:description"
    content="Explore funded PhD and doctorate programs abroad with expert research guidance."
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
            PhD / Doctorate Programs Abroad
          </span>

          <h1 className="text-5xl font-bold max-w-4xl mb-6">
  PhD & Doctorate Programs Abroad
</h1>

          <p className="text-lg text-blue-100 max-w-3xl">
  Optimus Overseas Educational Consultants helps scholars pursue PhD and doctorate programs abroad with expert guidance on research, funding and university selection.
</p>
        </div>
      </section>

      {/* ================= WHAT IS A PHD ================= */}
      <section className="container-custom py-24">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-[#0b2c5d] mb-6">
            What Is a PhD / Doctorate Program?
          </h2>

          <p className="text-lg text-gray-600">
            A PhD (Doctor of Philosophy) is a research-intensive academic degree
            focused on original contributions to knowledge. Unlike coursework-based
            programs, doctoral studies emphasize independent research, publications,
            and academic mentorship under experienced supervisors.
          </p>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="container-custom pb-24">
        <div className="grid lg:grid-cols-3 gap-10">
          {[
            {
              icon: Microscope,
              title: "Research-Driven Learning",
              desc: "Focus on original research, experimentation and innovation within your discipline."
            },
            {
              icon: University,
              title: "Global Academic Mentorship",
              desc: "Work closely with internationally recognized supervisors and research groups."
            },
            {
              icon: BookOpen,
              title: "Publications & Conferences",
              desc: "Opportunities to publish in reputed journals and present at global conferences."
            },
            {
              icon: FileText,
              title: "Funded PhD Opportunities",
              desc: "Access to scholarships, stipends, research grants and assistantships."
            },
            {
              icon: Globe,
              title: "International Research Exposure",
              desc: "Collaborate with global institutions, labs and research networks."
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

      {/* ================= RESEARCH DOMAINS ================= */}
      <section className="container-custom pb-24">
        <h2 className="text-4xl font-bold text-[#0b2c5d] mb-12">
          Major Research Domains
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Science, Engineering & Technology
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Computer Science & AI</li>
              <li>✔ Engineering & Applied Sciences</li>
              <li>✔ Data Science & Robotics</li>
              <li>✔ Environmental & Energy Studies</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Research-oriented doctoral programs focused on innovation, technology,
              and advanced scientific development.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-6">
              Humanities, Management & Social Sciences
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Management & Business Research</li>
              <li>✔ Economics & Finance</li>
              <li>✔ Psychology & Education</li>
              <li>✔ International Relations</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Programs designed for academic leadership, policy research and
              interdisciplinary scholarship.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CAREER PATHS ================= */}
      <section className="container-custom pb-24">
        <h2 className="text-4xl font-bold text-[#0b2c5d] mb-10">
          Career Pathways After a PhD
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">
          {[
            "University Professor & Lecturer",
            "Postdoctoral Researcher",
            "Research Scientist",
            "Policy Analyst",
            "Think Tank Researcher",
            "R&D Leadership Roles"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md text-[#0b2c5d] font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#cfa548]">
        <div className="container-custom py-20 text-center">
          <h2 className="text-4xl font-bold text-[#0b2c5d] mb-4">
            Planning a Doctorate Abroad?
          </h2>

          <p className="text-lg text-[#0b2c5d] max-w-3xl mx-auto mb-8">
            Get expert guidance on research proposal preparation, supervisor
            selection, funded PhD opportunities and university applications.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#0b2c5d] text-white px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Speak to a PhD Advisor <ArrowRight size={20} />
          </a>
        </div>
      </section>

    </div>
    </Layout>
  );
}

