import Layout from "@/components/layout/Layout";
import { Link, useLocation } from "react-router-dom";
import { Stethoscope, GraduationCap, DollarSign, CheckCircle, Globe, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const topUniversities: Record<string, string[]> = {
  russia: [
    "Sechenov University",
    "Pirogov Russian National Research Medical University",
    "Kazan Federal University",
    "Peoples’ Friendship University of Russia (RUDN)",
    "Crimea Federal University",
    "Bashkir State Medical University",
    "Orenburg State Medical University",
    "Kursk State Medical University",
    "Tver State Medical University",
    "Smolensk State Medical University",
  ],
  georgia: [
    "Tbilisi State Medical University",
    "David Tvildiani Medical University",
    "European University, Tbilisi",
    "New Vision University",
    "Batumi Shota Rustaveli State University",
    "Caucasus International University",
  ],
  philippines: [
    "University of Perpetual Help System",
    "Our Lady of Fatima University",
    "AMA School of Medicine",
    "Davao Medical School Foundation",
    "UV Gullas College of Medicine",
    "University of Cebu College of Medicine",
  ],
  kazakhstan: [
    "Kazakh National Medical University",
    "Al-Farabi Kazakh National University",
    "Astana Medical University",
    "South Kazakhstan Medical Academy",
    "Semey Medical University",
    "Karaganda State Medical University",
  ],
  uzbekistan: [
    "Tashkent Medical Academy",
    "Samarkand State Medical University",
    "Bukhara State Medical Institute",
    "Andijan State Medical Institute",
    "Fergana State Medical Institute",
  ],
  kyrgyzstan: [
    "Osh State University",
    "International School of Medicine (ISM)",
    "Kyrgyz State Medical Academy",
    "Jalal-Abad State University",
    "Asian Medical Institute",
  ],
  armenia: [
    "Yerevan State Medical University",
    "Armenian Medical Institute",
    "St. Tereza Medical University",
  ],
  azerbaijan: [
    "Azerbaijan Medical University",
    "Nakhchivan State University (Medical Faculty)",
  ],
  poland: [
    "Medical University of Warsaw",
    "Jagiellonian University Medical College",
    "Medical University of Lodz",
    "Poznan University of Medical Sciences",
    "Medical University of Gdansk",
  ],
  romania: [
    "Carol Davila University of Medicine and Pharmacy",
    "Iuliu Hatieganu University of Medicine and Pharmacy",
    "Grigore T. Popa University of Medicine and Pharmacy",
    "Victor Babes University of Medicine and Pharmacy",
    "University of Medicine and Pharmacy of Craiova",
  ],
  hungary: [
    "Semmelweis University",
    "University of Szeged",
    "University of Debrecen",
    "University of Pécs",
  ],
  bulgaria: [
    "Medical University of Sofia",
    "Medical University of Plovdiv",
    "Medical University of Varna",
    "Medical University of Pleven",
  ],
};

const countries = [
  {
    id: "russia",
    name: "Russia",
    duration: "6 years",
    
    recognition: "NMC (MCI), WHO, UNESCO",
    features: ["No entrance exam", "English medium", "Low cost of living"],
  },
  {
    id: "georgia",
    name: "Georgia",
    duration: "6 years",
    
    recognition: "NMC (MCI), WHO",
    features: ["USMLE coaching", "Modern universities", "Safe environment"],
  },
  {
    id: "philippines",
    name: "Philippines",
    duration: "5.5 years",
    
    recognition: "NMC (MCI), WHO, CHED",
    features: ["English medium", "US-based curriculum", "Clinical rotations"],
  },
  {
    id: "kazakhstan",
    name: "Kazakhstan",
    duration: "5 years",
   
    recognition: "NMC (MCI), WHO",
    features: ["Affordable fees", "Quality education", "Growing medical hub"],
  },
  {
    id: "uzbekistan",
    name: "Uzbekistan",
    duration: "6 years",
   
    recognition: "NMC (MCI), WHO",
    features: ["Modern infrastructure", "English medium", "Affordable living"],
  },
  {
    id: "kyrgyzstan",
    name: "Kyrgyzstan",
    duration: "6 years",
    
    recognition: "NMC (MCI), WHO",
    features: ["Low tuition fees", "Indian food available", "Safe campuses"],
  },
  {
    id: "armenia",
    name: "Armenia",
    duration: "6 years",
    
    recognition: "NMC (MCI), WHO",
    features: ["European education", "English medium", "High academic standards"],
  },
  {
    id: "azerbaijan",
    name: "Azerbaijan",
    duration: "6 years",
    
    recognition: "NMC (MCI), WHO",
    features: ["Good faculty", "Modern labs", "Affordable living"],
  },
  {
    id: "poland",
    name: "Poland",
    duration: "6 years",
    
    recognition: "NMC (MCI), WHO, EU",
    features: ["EU degree", "High clinical exposure", "English-taught programs"],
  },
  {
    id: "romania",
    name: "Romania",
    duration: "6 years",
    
    recognition: "NMC (MCI), WHO, EU",
    features: ["EU medical degree", "Modern hospitals", "English programs"],
  },
  {
    id: "hungary",
    name: "Hungary",
    duration: "6 years",
    
    recognition: "NMC (MCI), WHO, EU",
    features: ["Top EU universities", "Strong research", "Global recognition"],
  },
  {
    id: "bulgaria",
    name: "Bulgaria",
    duration: "6 years",
    
    recognition: "NMC (MCI), WHO, EU",
    features: ["EU medical degree", "Affordable Europe option", "English medium"],
  },
];


const eligibility = [
  "Minimum 50% in 10+2 with Physics, Chemistry, Biology",
  "NEET qualification (for Indian students)",
  "Age 17 years or above as on 31st December",
  "Valid passport",
  "No entrance exam for most universities",
];

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable Education",
    description: "Study MBBS at a fraction of the cost compared to private medical colleges in India.",
  },
  {
    icon: Globe,
    title: "Global Recognition",
    description: "Degrees recognized by MCI, WHO and medical councils worldwide.",
  },
  {
    icon: GraduationCap,
    title: "Quality Education",
    description: "Modern infrastructure, experienced faculty and practical training.",
  },
  {
    icon: Clock,
    title: "No Donation",
    description: "Transparent fee structure with no capitation or hidden charges.",
  },
];

const MBBSAbroad = () => {
  const [openUniversity, setOpenUniversity] = useState<string | null>(null);
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
    MBBS Abroad Consultants in India | Study MBBS Overseas – Optimus Overseas
  </title>

  <meta
    name="description"
    content="Optimus Overseas Educational Consultants is a trusted MBBS abroad consultancy in India offering admissions in NMC-recognized medical universities across Russia, Georgia, Philippines, Kazakhstan, Europe and more."
  />

  <meta
    name="keywords"
    content="mbbs abroad consultants india, study mbbs abroad, mbbs overseas admission, nmc approved medical universities, mbbs in russia, mbbs in georgia, mbbs in philippines"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/mbbs-abroad"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="MBBS Abroad Consultants in India | Study MBBS Overseas"
  />
  <meta
    property="og:description"
    content="Study MBBS abroad with Optimus Overseas. Get admission in NMC-approved medical universities with affordable fees, no donation and full visa support."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/mbbs-abroad"
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
    content="MBBS Abroad Consultants in India | Optimus Overseas"
  />
  <meta
    name="twitter:description"
    content="Affordable MBBS abroad admissions in NMC-recognized universities across Russia, Georgia, Philippines, Kazakhstan and Europe."
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
                MBBS Abroad
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
  MBBS Abroad Consultants in India
</h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80">
  Optimus Overseas Educational Consultants offers affordable MBBS abroad programs in NMC-recognized medical universities across Russia, Georgia, Philippines, Kazakhstan and Europe.
</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Study MBBS Abroad?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the advantages of pursuing your medical education internationally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="card-elevated text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countries Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Top Countries for MBBS Abroad
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our partner universities in these popular medical education destinations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {countries.map((country) => (
                <div key={country.id} id={country.id} className="card-elevated scroll-mt-24">
                  <div className="flex items-start sm:items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                      <Stethoscope className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                        MBBS in {country.name}
                      </h3>
                      <p className="text-muted-foreground">{country.recognition}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">{country.duration}</p>
                    </div>
                    
                  </div>

                  <div className="space-y-2">
                    {country.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Top Universities */}
<div className="mt-6">
  <button
    onClick={() =>
      setOpenUniversity(
        openUniversity === country.id ? null : country.id
      )
    }
    className="w-full sm:w-auto text-left sm:text-center text-primary font-semibold text-sm hover:underline"
  >
    {openUniversity === country.id
      ? "Hide Top Universities"
      : "View Top Universities"}
  </button>

  {openUniversity === country.id && (
    <ul className="mt-4 space-y-2">
      {topUniversities[country.id]?.map((uni, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-accent mt-1" />
          <span className="text-foreground text-sm">{uni}</span>
        </li>
      ))}
    </ul>
  )}
</div>


                  <Link
                    to="/contact"
                    className="btn-hero w-full sm:w-auto inline-flex items-center justify-center text-center mt-6"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
                  Eligibility
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                  Eligibility Criteria for MBBS Abroad
                </h2>
                <p className="text-base sm:text-lg text-primary-foreground/80 mb-8">
                  Check if you meet the basic requirements to pursue MBBS in our partner universities abroad.
                </p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 sm:p-8">
                <div className="space-y-4">
                  {eligibility.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-primary-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-accent to-gold-dark">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Start Your Medical Journey?
            </h2>
            <p className="text-base sm:text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
              Get expert guidance on MBBS admission, documentation, and visa process.
            </p>
            <Link
              to="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center px-5 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Free Counselling
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MBBSAbroad;

