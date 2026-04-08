import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  Home,
  ShieldCheck,
  Users,
  MapPin, 
  CheckCircle,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const accommodationTypes = [
  {
    title: "University Hostels",
    desc: "On-campus accommodation offering safety, proximity to classes and student-friendly facilities.",
    icon: Home,
  },
  {
    title: "Private Student Housing",
    desc: "Off-campus student residences with modern amenities and shared living options.",
    icon: Users,
  },
  {
    title: "Shared Apartments",
    desc: "Affordable shared apartments near universities for independent student living.",
    icon: MapPin,
  },
  {
    title: "Verified Homestays",
    desc: "Family-based accommodation for students seeking cultural exposure and comfort.",
    icon: ShieldCheck,
  },
];

const whyAccommodation = [
  "Verified & safe housing options",
  "Close to universities",
  "Student-friendly budgets",
  "Support before & after arrival",
];

const Accommodation = () => {
  return (
    <Layout>
      <Helmet>
  {/* Primary SEO */}
  <title>
    Student Accommodation Abroad | Safe Housing Support for International Students
  </title>

  <meta
    name="description"
    content="Get safe, verified and affordable student accommodation abroad with Optimus Overseas Educational Consultants. University hostels, private housing, shared apartments and homestays."
  />

  <meta
    name="keywords"
    content="student accommodation abroad, housing for international students, university hostel abroad, student housing overseas"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/accommodation"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Student Accommodation Abroad | Safe & Verified Housing Support"
  />
  <meta
    property="og:description"
    content="Secure safe and affordable student accommodation abroad before departure. Verified hostels, apartments and homestays."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/accommodation"
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
    content="Student Accommodation Abroad"
  />
  <meta
    name="twitter:description"
    content="Verified and affordable student accommodation support for international students."
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
              Accommodation Support
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
         We help students secure safe, comfortable, and affordable
              accommodation near their universities ensuring peace of mind
              for both students and parents.
              
            </p>
          </div>
        </div>
      </section>

      {/* ACCOMMODATION TYPES */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Accommodation Options We Assist With
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible housing solutions based on location, budget and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {accommodationTypes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Why Our Accommodation Support Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Finding the right place to live abroad is just as important as
                choosing the right university.
              </p>

              <ul className="space-y-4">
                {whyAccommodation.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT */}
            <div className="bg-secondary rounded-2xl p-10">
              <p className="text-foreground mb-4">
                Our team coordinates accommodation before departure so students
                don’t have to search for housing after landing in a new country.
              </p>

              <p className="text-foreground">
                We ensure all housing options are verified for safety, distance,
                and student suitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BOX */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl px-10 py-14 text-center relative -mb-24">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Secure Your Stay Before You Fly
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get trusted accommodation assistance tailored to your destination
              and budget.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition"
            >
              Get Accommodation Help
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Accommodation;

