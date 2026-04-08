import Layout from "@/components/layout/Layout";
import { Link, useLocation } from "react-router-dom";
import { GraduationCap, Building, Briefcase } from "lucide-react";
import countryUSA from "@/assets/country-usa.webp";
import countryUK from "@/assets/country-uk.webp";
import countryCanada from "@/assets/country-canada.webp";
import countryAustralia from "@/assets/country-australia.webp";
import countryEurope from "@/assets/country-europe.webp";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";


const countries = [
  {
    id: "usa",
    name: "United States",
    image: countryUSA,
    description: "Home to world-renowned universities like MIT, Harvard and Stanford. The USA offers cutting-edge research opportunities and diverse cultural experiences.",
    universities: "4,000+",
    
    workOpportunity: "OPT for up to 3 years",
    topCourses: ["Computer Science", "Business", "Engineering", "Medicine"],
  },
  {
    id: "uk",
    name: "United Kingdom",
    image: countryUK,
    description: "Study at prestigious institutions like Oxford, Cambridge and Imperial College. UK offers shorter course durations and rich cultural heritage.",
    universities: "150+",
   
    workOpportunity: "2-year Post-Study Work Visa",
    topCourses: ["Law", "Finance", "Arts", "Sciences"],
  },
  {
    id: "canada",
    name: "Canada",
    image: countryCanada,
    description: "Known for its welcoming immigration policies and high quality of life. Canadian universities offer excellent education at affordable costs.",
    universities: "100+",
   
    workOpportunity: "3-year PGWP",
    topCourses: ["IT", "Healthcare", "Business", "Engineering"],
  },
  {
    id: "australia",
    name: "Australia",
    image: countryAustralia,
    description: "A popular destination with world-class universities and excellent post-study work opportunities. Enjoy a great lifestyle while you study.",
    universities: "40+",
   
    workOpportunity: "2-4 year Post-Study Work Visa",
    topCourses: ["Nursing", "IT", "Hospitality", "Business"],
  },
  {
    id: "europe",
    name: "Europe",
    image: countryEurope,
    description: "Explore diverse cultures and languages while studying in Germany, France, Ireland and more. Many countries offer low or no tuition fees.",
    universities: "500+",
    
    workOpportunity: "Varies by country",
    topCourses: ["Engineering", "Arts", "Sciences", "Business"],
  },
];

const StudyAbroad = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.replace("#", "");
    const timer = window.setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);

    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <Layout>
<Helmet>
  {/* Primary SEO */}
  <title>
    Study Abroad Consultants in India | Overseas Education Experts – Optimus Overseas
  </title>

  <meta
    name="description"
    content="Optimus Overseas Educational Consultants is a leading study abroad consultancy in India offering expert guidance for USA, UK, Canada, Australia and Europe. Free counselling & admissions support."
  />

  <meta
    name="keywords"
    content="study abroad consultants india, overseas education consultants, study abroad guidance, study in usa uk canada australia, abroad education consultants"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/study-abroad"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Study Abroad Consultants in India | Optimus Overseas Educational Consultants"
  />
  <meta
    property="og:description"
    content="Get expert study abroad guidance for USA, UK, Canada, Australia and Europe. Admissions, visa and post-study support by Optimus Overseas."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/study-abroad"
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
    content="Study Abroad Consultants in India | Optimus Overseas"
  />
  <meta
    name="twitter:description"
    content="Trusted overseas education consultants in India helping students study in USA, UK, Canada, Australia and Europe."
  />
  <meta
    name="twitter:image"
    content="https://www.optimusoverseasedu.com/og/optimus-footer.webp"
  />
</Helmet>

      <div className="page-transition">
        {/* Hero Section */}
        <section className="bg-primary py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
                Study Abroad
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
  Study Abroad Consultants in India
</h1>
              <p className="text-xl text-primary-foreground/80">
  Optimus Overseas Educational Consultants helps students study abroad in USA, UK, Canada, Australia and Europe with expert counselling and admissions support.
</p>
            </div>
          </div>
        </section>

        {/* Countries Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Popular Study Destinations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our top study destinations, each offering unique opportunities and experiences.
              </p>
            </div>

            <div className="space-y-20">
              {countries.map((country, index) => (
                <div
                  key={country.id}
                  id={country.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-24 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative rounded-2xl overflow-hidden">
                      <img
  src={country.image}
  alt={`Study in ${country.name} - Optimus Overseas Educational Consultants`}
  className="w-full h-64 sm:h-80 object-cover"
/>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <h3 className="font-display text-3xl font-bold text-primary-foreground">
                          {country.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-lg text-muted-foreground mb-8">
                      {country.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-start gap-3">
                        <Building className="w-6 h-6 text-accent flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">{country.universities}</p>
                          <p className="text-sm text-muted-foreground">Universities</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Briefcase className="w-6 h-6 text-accent flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">{country.workOpportunity}</p>
                          <p className="text-sm text-muted-foreground">Work Opportunity</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-6 h-6 text-accent flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Top Courses</p>
                          <p className="text-sm text-muted-foreground">
                            {country.topCourses.join(", ")}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Link to="/contact" className="btn-hero">
                      Get Free Counselling
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-accent to-gold-dark">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
              Start Your Study Abroad Journey
            </h2>
            <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
              Book a free consultation with our expert counsellors to find the perfect university for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StudyAbroad;

