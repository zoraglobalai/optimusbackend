import { CheckCircle, Users, Compass, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";

const CareerCounselling = () => {
  return (
    <Layout>
      <Helmet>
  {/* Primary SEO */}
  <title>
    Career Counselling for Study Abroad | Expert Career Guidance – Optimus
  </title>

  <meta
    name="description"
    content="Get expert career counselling for study abroad. Optimus Overseas Education provides personalized career guidance to help students choose the right course, country and career path."
  />

  <meta
    name="keywords"
    content="career counselling, study abroad career counselling, career guidance services, overseas education counselling, student career guidance"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/services/career-counselling"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Career Counselling for Study Abroad | Optimus Overseas Education"
  />
  <meta
    property="og:description"
    content="Personalized one-on-one career counselling to help students make confident academic and career decisions."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/services/career-counselling"
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
    content="Career Counselling for Study Abroad"
  />
  <meta
    name="twitter:description"
    content="Expert career guidance to help students choose the right course, country and long-term career path."
  />
  <meta
    name="twitter:image"
    content="https://www.optimusoverseasedu.com/og/optimus-footer.webp"
  />
</Helmet>


      {/* HERO SECTION */}
      <section className="bg-primary pt-32 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
              Our Services
            </span>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Career Counselling
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Personalized one-on-one career counselling designed to help
              students make confident academic and career decisions with expert
              guidance.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS CAREER COUNSELLING */}
      <section className="section-padding bg-secondary">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold mb-6">
              What is Career Counselling?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Career counselling is a structured guidance process where experts
              help students understand their strengths, interests, academic
              background and long-term goals to identify the most suitable
              career and study options.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Our counsellors provide unbiased, data-driven recommendations to
              ensure students avoid wrong decisions and build a successful
              future.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-4">
              {[
                "Profile evaluation & academic background analysis",
                "Career mapping based on interests and aptitude",
                "Course & country suitability assessment",
                "Clear short-term and long-term academic roadmap",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR COUNSELLING APPROACH */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Our Career Counselling Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a student-first approach to ensure clarity, confidence,
              and long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elevated text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="font-semibold text-xl mb-3">
                One-on-One Sessions
              </h3>
              <p className="text-muted-foreground">
                Dedicated counselling sessions focused entirely on the student’s
                goals and concerns.
              </p>
            </div>

            <div className="card-elevated text-center">
              <Compass className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="font-semibold text-xl mb-3">
                Clear Direction
              </h3>
              <p className="text-muted-foreground">
                Structured guidance to choose the right course, country and
                university.
              </p>
            </div>

            <div className="card-elevated text-center">
              <BarChart3 className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="font-semibold text-xl mb-3">
                Data-Driven Insights
              </h3>
              <p className="text-muted-foreground">
                Recommendations based on academic trends, visa success rates,
                and career outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD TAKE CAREER COUNSELLING */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
              Who Should Opt for Career Counselling?
            </h2>

            <div className="space-y-4">
              {[
                "Students confused about course or career selection",
                "Students planning to study abroad",
                "Graduates looking to switch career paths",
                "Professionals seeking global opportunities",
                "Parents seeking expert guidance for their children",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1" />
                  <p className="text-primary-foreground text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding bg-gradient-to-r from-accent to-gold-dark">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Need Expert Career Guidance?
          </h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Book a free one-on-one career counselling session with our expert
            advisors today.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition"
          >
            Book Free Counselling
          </a>
        </div>
      </section>
    </Layout>
    
  );
};

export default CareerCounselling;

