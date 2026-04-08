import { Shield, Users, Award, Clock, Headphones, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "15+ years of experience in international education consulting with a proven track record.",
  },
  {
    icon: Users,
    title: "Personalized Guidance",
    description: "One-on-one counselling to understand your goals and find the perfect university match.",
  },
  {
    icon: Award,
    title: "High Success Rate",
    description: "98% visa success rate with comprehensive application support and documentation.",
  },
  {
    icon: Clock,
    title: "End-to-End Support",
    description: "From university selection to post-landing assistance, we're with you every step of the way.",
  },
  {
    icon: Headphones,
    title: "24/7 Assistance",
    description: "Round-the-clock support for students and parents across all time zones.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Partnerships with 500+ universities across 50+ countries worldwide.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
  <span className="inline-block px-6 py-2 bg-accent text-white font-semibold rounded-full text-sm mb-4 shadow-md">
    Why Choose Us
  </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
  Why Choose Optimus Overseas Educational Consultants
</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are trusted study abroad and MBBS abroad consultants providing expert guidance, personalized counselling and end-to-end support for students worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-elevated group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
