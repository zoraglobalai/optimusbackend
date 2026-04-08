import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  GraduationCap,
  Briefcase,
  Globe,
  School,
  FileText,
  Award,
  CreditCard,
  Files,
  Stamp,
  MessageCircle,
  Plane,
  Home,
  DollarSign,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const services = [
  {
    title: "Psychometric Test",
    desc: "Identify the right career path based on aptitude, interests and personality.",
    link: "/services/psychometric-test",
    icon: GraduationCap,
  },
  {
    title: "Career Counselling",
    desc: "Personalized one-on-one guidance from expert education advisors.",
    link: "/services/career-counselling",
    icon: Briefcase,
  },
  {
    title: "Country Selection",
    desc: "Choose the best country based on academics, budget and future scope.",
    link: "/services/country-selection",
    icon: Globe,
  },
  {
    title: "Course / University Selection",
    desc: "Shortlisting the right universities aligned with your profile.",
    link: "/services/course-university",
    icon: School,
  },
  {
    title: "Admissions",
    desc: "End-to-end application support with document verification.",
    link: "/services/admissions",
    icon: FileText,
  },
  {
    title: "Scholarships",
    desc: "Guidance on scholarships and financial aid opportunities.",
    link: "/services/scholarships",
    icon: Award,
  },
  {
    title: "Educational Loan",
    desc: "Assistance in securing education loans from banks and NBFCs.",
    link: "/services/education-loan",
    icon: CreditCard,
  },
  {
    title: "Documentation",
    desc: "Complete SOP, LOR, resume and application documentation support.",
    link: "/services/documentation",
    icon: Files,
  },
  {
    title: "Student Visa",
    desc: "Expert student visa filing assistance with high success rates.",
    link: "/services/student-visa",
    icon: Stamp,
  },
  {
    title: "Mock Visa Interview",
    desc: "Professional mock interviews to prepare for visa success.",
    link: "/services/mock-visa",
    icon: MessageCircle,
  },
  {
    title: "Travel Services",
    desc: "Flight booking and international travel assistance for students.",
    link: "/services/travel",
    icon: Plane,
  },
  {
    title: "Accommodation",
    desc: "Safe and affordable student accommodation options abroad.",
    link: "/services/accommodation",
    icon: Home,
  },
  {
    title: "Forex Services",
    desc: "Foreign exchange and international money transfer assistance.",
    link: "/services/forex",
    icon: DollarSign,
  },
];

const Services = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        {/* Primary SEO */}
        <title>
          Study Abroad Services | Overseas Education Consultants – Optimus
        </title>

        <meta
          name="description"
          content="Explore complete study abroad services by Optimus Overseas Education including career counselling, admissions, student visa, travel, accommodation and forex support."
        />

        <meta
          name="keywords"
          content="study abroad services, overseas education consultancy, student visa services, admissions support, education consultants, international education services"
        />

        <link
          rel="canonical"
          href="https://www.optimusoverseasedu.com/services"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Study Abroad Services | Optimus Overseas Education"
        />
        <meta
          property="og:description"
          content="End-to-end overseas education services including counselling, admissions, visas, travel, accommodation and forex assistance."
        />
        <meta
          property="og:url"
          content="https://www.optimusoverseasedu.com/services"
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
          content="Study Abroad Services | Optimus Overseas Education"
        />
        <meta
          name="twitter:description"
          content="Complete overseas education support services for students planning to study abroad."
        />
        <meta
          name="twitter:image"
          content="https://www.optimusoverseasedu.com/og/optimus-footer.webp"
        />
      </Helmet>

      <Navbar />

      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Our Study Abroad Services
            </h1>
            <p className="text-gray-600 text-lg">
              Complete end-to-end overseas education support from career
              counselling to visa success and beyond.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group rounded-2xl p-8 bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <span className="inline-flex items-center text-primary font-semibold">
                  Explore Service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;

