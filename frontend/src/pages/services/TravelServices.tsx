import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  Plane,
  Globe,
  CalendarCheck,
  Luggage,
  CheckCircle,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const travelServices = [
  {
    title: "Flight Booking Assistance",
    desc: "Best airfare options based on budget, travel dates and university intake timelines.",
    icon: Plane,
  },
  {
    title: "Travel Date Planning",
    desc: "Guidance on ideal travel dates aligned with visa approval and university reporting.",
    icon: CalendarCheck,
  },
  {
    title: "International Travel Support",
    desc: "End-to-end assistance for international student travel requirements.",
    icon: Globe,
  },
  {
    title: "Pre-Departure Guidance",
    desc: "Information on baggage rules, airport procedures and immigration formalities.",
    icon: Luggage,
  },
];

const whyChooseUs = [
  "Student-friendly flight options",
  "Trusted airline partners",
  "Flexible travel planning",
  "Support until safe arrival",
];

const TravelServices = () => {
  return (
    <Layout>
      {/* SEO */}
      <Helmet>
        <title>
          Student Travel Services for Study Abroad | Optimus Overseas Education
        </title>

        <meta
          name="description"
          content="Optimus Overseas Education offers complete student travel services including flight booking, travel planning and pre-departure guidance for studying abroad."
        />

        <meta
          name="keywords"
          content="student travel services, study abroad travel assistance, flight booking for students, international student travel, overseas education travel support"
        />

        <link
          rel="canonical"
          href="https://www.optimusoverseasedu.com/services/travel"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Student Travel Services for Study Abroad | Optimus Overseas Education"
        />
        <meta
          property="og:description"
          content="Smooth and stress-free international travel support for students studying abroad, from flight booking to arrival assistance."
        />
        <meta
          property="og:url"
          content="https://www.optimusoverseasedu.com/services/travel"
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
          content="Student Travel Services for Study Abroad | Optimus Overseas Education"
        />
        <meta
          name="twitter:description"
          content="End-to-end travel assistance for international students including flights, planning and pre-departure guidance."
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
              Travel Services
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              From flight booking to pre-departure guidance, we ensure a smooth
              and stress-free international travel experience for students.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Our Travel Assistance Includes
            </h2>
            <p className="text-lg text-muted-foreground">
              Carefully planned travel support designed specifically for students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {travelServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Why Choose Our Travel Services?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We focus on student comfort, safety and convenience from
                departure to arrival.
              </p>

              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-2xl p-10">
              <div className="space-y-6">
                <p className="text-foreground">
                  Our team ensures students are fully informed about travel
                  guidelines, baggage limits, transit rules and arrival
                  procedures at their destination country.
                </p>

                <p className="text-foreground">
                  We remain available even after departure to assist with any
                  travel-related concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl px-10 py-14 text-center relative -mb-24">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready for a Smooth Study Abroad Journey?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let us take care of your travel planning while you focus on your
              academic future.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition"
            >
              Get Travel Assistance
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TravelServices;

