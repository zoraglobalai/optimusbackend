import { Helmet } from "react-helmet-async";
import { CheckCircle, GraduationCap, School, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
const courseMatrix = [
  {
    course: "Computer Science",
    level: "Master’s",
    countries: "USA, Canada, Germany",
    ranking: "Top 200",
    demand: "Very High",
  },
  {
    course: "Business / Management",
    level: "MBA",
    countries: "UK, USA, Australia",
    ranking: "Top 300",
    demand: "High",
  },
  {
    course: "Engineering",
    level: "Bachelor’s / Master’s",
    countries: "Germany, Canada",
    ranking: "Top 250",
    demand: "High",
  },
  {
    course: "Health Sciences",
    level: "Master’s",
    countries: "UK, Ireland",
    ranking: "Top 200",
    demand: "Medium",
  },
  {
    course: "Data Science / AI",
    level: "Master’s",
    countries: "USA, Canada",
    ranking: "Top 150",
    demand: "Very High",
  },
];

const CourseUniversitySelection = () => {
  return (
    <Layout>
      <Helmet>
  {/* Primary SEO */}
  <title>
    Course & University Selection for Study Abroad | Expert Guidance – Optimus
  </title>

  <meta
    name="description"
    content="Get expert course and university selection guidance for studying abroad. Optimus Overseas Education helps students shortlist the best universities based on rankings, career outcomes and visa success."
  />

  <meta
    name="keywords"
    content="course and university selection, study abroad course selection, university shortlisting consultants, best universities for study abroad, overseas education guidance"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/services/course-university"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Course & University Selection for Study Abroad | Optimus Overseas Education"
  />
  <meta
    property="og:description"
    content="Personalized course and university shortlisting based on rankings, career demand, visa success and student profile."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/services/course-university"
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
    content="Course & University Selection for Study Abroad"
  />
  <meta
    name="twitter:description"
    content="Expert guidance to shortlist the right courses and universities for studying abroad with confidence."
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
              Course & University Selection
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Selecting the right course and university is critical to your academic
        success, visa approval and long-term career outcomes. Our experts help
        you make informed, data-backed decisions.
            </p>
          </div>
        </div>
      </section>


      {/* WHY THIS MATTERS */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-4xl font-bold mb-6">
              Why Course & University Selection Matters
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              A mismatch between course, university and student profile often
              leads to visa rejections, academic struggles, or limited job
              opportunities after graduation.
            </p>

            <div className="space-y-4">
              {[
                "University ranking affects global recognition",
                "Course relevance impacts employability",
                "Eligibility criteria influence visa success",
                "Location determines post-study work options",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary rounded-2xl p-10">
            <GraduationCap className="w-12 h-12 text-primary mb-6" />
            <h3 className="font-display text-2xl font-semibold mb-4">
              Our Expert Approach
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We don’t suggest universities randomly. Every recommendation is
              aligned with your academic profile, budget, test scores and
              career objectives.
            </p>
          </div>
        </div>
      </section>

      {/* COURSE + UNIVERSITY MATRIX (TABLE STYLE) */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Course & University Selection Matrix
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sample overview of popular courses and suitable study destinations
              based on demand and global rankings.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
            <table className="w-full text-left">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-4">Course</th>
                  <th className="p-4">Level</th>
                  <th className="p-4">Top Countries</th>
                  <th className="p-4">University Ranking</th>
                  <th className="p-4">Career Demand</th>
                </tr>
              </thead>
              <tbody>
                {courseMatrix.map((row, i) => (
                  <tr key={i} className="border-b last:border-none">
                    <td className="p-4 font-semibold">{row.course}</td>
                    <td className="p-4">{row.level}</td>
                    <td className="p-4">{row.countries}</td>
                    <td className="p-4">{row.ranking}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent" />
                        {row.demand}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOW WE SHORTLIST */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-3 gap-8">
          {[
            {
              icon: School,
              title: "University Shortlisting",
              desc: "Based on rankings, accreditation, faculty quality and alumni success.",
            },
            {
              icon: GraduationCap,
              title: "Course Relevance",
              desc: "Ensuring the curriculum matches industry demand and career goals.",
            },
            {
              icon: CheckCircle,
              title: "Profile Fit",
              desc: "Eligibility, test scores, budget and visa success probability.",
            },
          ].map((item, i) => (
            <div key={i} className="card-elevated text-center">
              <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent to-gold-dark">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Confused About Course or University Selection?
          </h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Get a personalized shortlist of courses and universities aligned
            with your profile and career goals.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition"
          >
            Get Expert Guidance
          </a>
        </div>
      </section>

    </Layout>
  );
};

export default CourseUniversitySelection;

