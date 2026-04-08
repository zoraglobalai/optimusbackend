import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-accent to-gold-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg sm:text-xl text-primary/80 max-w-xl">
              Book a free counselling session with our expert advisors and take the first step towards your international education dream.
            </p>
          </div>
          <div className="flex w-full lg:w-auto flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Book Free Counselling
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919087778000"
              className="inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Call: 9087778000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
