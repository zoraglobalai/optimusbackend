import { CheckCircle, Brain, Target, ClipboardList } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const PsychometricTest = () => {
  return (
    <>
      <Helmet>
  {/* Primary SEO */}
  <title>
    Psychometric Test for Career Guidance | Optimus Overseas Education
  </title>

  <meta
    name="description"
    content="Take a scientific psychometric test to identify the right career path based on aptitude, personality and interests. Expert-guided career counselling included."
  />

  <meta
    name="keywords"
    content="psychometric test, career guidance test, aptitude test for students, career assessment, study abroad counselling"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/services/psychometric-test"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Psychometric Test for Career Guidance | Optimus Overseas Education"
  />
  <meta
    property="og:description"
    content="A scientifically designed psychometric test to help students choose the right career and study path with confidence."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/services/psychometric-test"
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
    content="Psychometric Test for Career Guidance"
  />
  <meta
    name="twitter:description"
    content="Identify the right career path with a data-driven psychometric test and expert counselling."
  />
  <meta
    name="twitter:image"
    content="https://www.optimusoverseasedu.com/og/optimus-footer.webp"
  />
</Helmet>

<Navbar />
      {/* HERO SECTION */}
      <section className="bg-primary pt-32 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
              Our Services
            </span>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Psychometric Test
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              A scientifically designed assessment to understand your aptitude,
              interests, personality traits, and career suitability helping
              you make confident academic and career decisions.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS PSYCHOMETRIC TEST */}
      <section className="section-padding bg-secondary">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold mb-6">
              What is a Psychometric Test?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A psychometric test is a standardized assessment that evaluates a
              student’s cognitive abilities, behavioral style, personality
              traits and interests. It provides data-backed insights into
              career suitability.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              These assessments eliminate guesswork and help students choose
              the right academic path aligned with their natural strengths.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent mt-1" />
                <p>Aptitude & logical reasoning evaluation</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent mt-1" />
                <p>Personality and behavioral assessment</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent mt-1" />
                <p>Interest mapping across career domains</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent mt-1" />
                <p>Career-fit and study-path recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF TESTS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Types of Psychometric Tests We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our assessments are designed for students, professionals and
              career changers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elevated text-center">
              <Brain className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="font-semibold text-xl mb-3">
                Career Sure Test
              </h3>
              <p className="text-muted-foreground">
                Identifies ideal career paths based on aptitude, interests and
                personality alignment.
              </p>
            </div>

            <div className="card-elevated text-center">
              <ClipboardList className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="font-semibold text-xl mb-3">
                Verbal Reasoning & Comprehension
              </h3>
              <p className="text-muted-foreground">
                Measures language skills, comprehension ability and logical
                understanding.
              </p>
            </div>

            <div className="card-elevated text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="font-semibold text-xl mb-3">
                Employee / Professional Assessment
              </h3>
              <p className="text-muted-foreground">
                Designed for professionals to evaluate work behavior,
                strengths and leadership traits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TAKE THIS TEST */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
              Why Take a Psychometric Test?
            </h2>

            <div className="space-y-4">
              {[
                "Removes confusion while choosing a career or course",
                "Prevents wrong academic decisions",
                "Helps align strengths with career goals",
                "Provides expert-backed recommendations",
                "Improves long-term academic and career success",
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
            Confused About Your Career Direction?
          </h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Take our expert-designed psychometric test and get clear,
            personalized career guidance.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition"
          >
            Book Free Counselling
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PsychometricTest;

