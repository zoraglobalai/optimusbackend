import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import countryUSA from "@/assets/country-usa.webp";
import countryUK from "@/assets/country-uk.webp";
import countryCanada from "@/assets/country-canada.webp";
import countryAustralia from "@/assets/country-australia.webp";
import countryEurope from "@/assets/country-europe.webp";

const destinations = [
  {
    name: "United States",
    code: "usa",
    universities: "4,000+ Universities",
    image: countryUSA,
  },
  {
    name: "United Kingdom",
    code: "uk",
    universities: "150+ Universities",
    image: countryUK,
  },
  {
    name: "Canada",
    code: "canada",
    universities: "100+ Universities",
    image: countryCanada,
  },
  {
    name: "Australia",
    code: "australia",
    universities: "40+ Universities",
    image: countryAustralia,
  },
  {
    name: "Europe",
    code: "europe",
    universities: "500+ Universities",
    image: countryEurope,
  },
];

const StudyDestinations = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 sm:mb-12">
          <div>
            <span className="inline-block px-6 py-2 bg-accent text-white font-semibold rounded-full text-sm mb-4 shadow-md">
  Study Destinations
</span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
  Study Abroad Destinations for Indian Students
</h2>
          </div>
          <Link
            to="/study-abroad"
            className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Destinations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {destinations.map((destination, index) => (
            <Link
              key={destination.code}
              to={`/study-abroad#${destination.code}`}
              className="country-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
  src={destination.image}
  alt={`Study in ${destination.name} - Optimus Overseas Educational Consultants`}
/>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-1">
  Study in {destination.name}
</h3>
                <p className="text-sm text-primary-foreground/80">
                  {destination.universities}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyDestinations;
