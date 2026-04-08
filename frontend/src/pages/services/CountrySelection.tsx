import {
  CheckCircle,
  Globe,
  GraduationCap,
  Wallet,
  Briefcase,
  MapPinned,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";

const CountrySelection = () => {
  return (
    <Layout>
      <Helmet>
  {/* Primary SEO */}
  <title>
    Country Selection for Study Abroad | Expert Guidance – Optimus
  </title>

  <meta
    name="description"
    content="Get expert country selection guidance for studying abroad. Optimus Overseas Education helps students choose the best study destination based on academics, budget, visa success and career outcomes."
  />

  <meta
    name="keywords"
    content="country selection for study abroad, best country to study abroad, study abroad destination guidance, overseas education consultants, study abroad counselling"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/services/country-selection"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Country Selection for Study Abroad | Optimus Overseas Education"
  />
  <meta
    property="og:description"
    content="Personalized country selection guidance to help students choose the best study destination for long-term academic and career success."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/services/country-selection"
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
    content="Country Selection for Study Abroad"
  />
  <meta
    name="twitter:description"
    content="Expert guidance to choose the right country for studying abroad based on profile, budget, visa success and career goals."
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
              Country Selection
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Choosing the right country is the foundation of a successful
              international education journey. Our experts help you select the
              best destination aligned with your academic profile, budget and
              career goals.
            </p>
          </div>
        </div>
      </section>

      {/* WHY COUNTRY SELECTION MATTERS (DIFFERENT LAYOUT) */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="font-display text-4xl font-bold mb-6">
              Why Country Selection Matters
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A wrong country choice can lead to visa rejections, limited work
              opportunities, or high financial burden. The right choice creates
              long-term academic and career success.
            </p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Academic Recognition",
                desc: "Global university rankings, degree recognition and quality of education.",
              },
              {
                icon: Wallet,
                title: "Budget & Living Cost",
                desc: "Tuition fees, accommodation and cost of living comparison.",
              },
              {
                icon: Globe,
                title: "Visa Success Rate",
                desc: "Country-wise visa approval trends and documentation complexity.",
              },
              {
                icon: Briefcase,
                title: "Career Opportunities",
                desc: "Post-study work rights, PR options and job market demand.",
              },
            ].map((item, i) => (
              <div key={i} className="card-elevated">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE HELP YOU CHOOSE (STEP FLOW) */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              How We Help You Choose the Right Country
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our structured evaluation process ensures every recommendation is
              realistic, data-driven and student-focused.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Profile Evaluation",
                desc: "Academic scores, test results, work experience and interests.",
              },
              {
                step: "02",
                title: "Budget Planning",
                desc: "Tuition, living cost, loan options and ROI analysis.",
              },
              {
                step: "03",
                title: "Country Shortlisting",
                desc: "Matching profile with country-wise eligibility and visa trends.",
              },
              {
                step: "04",
                title: "Final Recommendation",
                desc: "Clear country roadmap aligned with career goals.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md text-center"
              >
                <div className="text-4xl font-bold text-primary mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR STUDY DESTINATIONS (LIST STYLE – DIFFERENT AGAIN) */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-4xl font-bold mb-6">
              Popular Study Destinations We Recommend
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Based on student profiles, visa success and career outcomes.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "USA",
                "UK",
                "Canada",
                "Australia",
                
                
                "Europe",
              ].map((country, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-secondary rounded-lg p-4"
                >
                  <MapPinned className="w-5 h-5 text-primary" />
                  <span className="font-medium">{country}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-10">
            <h3 className="font-display text-3xl font-bold text-primary-foreground mb-6">
              Avoid Costly Mistakes
            </h3>

            <div className="space-y-4">
              {[
                "Choosing country based only on friends or agents",
                "Ignoring visa success rates",
                "Underestimating living costs",
                "Selecting countries with limited job opportunities",
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

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent to-gold-dark">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Not Sure Which Country is Right for You?
          </h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Get expert guidance and a clear country selection roadmap based on
            your profile and goals.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition"
          >
            Get Free Country Guidance
          </a>
        </div>
      </section>
    </Layout>
   
  );
};

export default CountrySelection;

