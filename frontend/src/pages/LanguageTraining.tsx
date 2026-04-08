import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Users, Clock, Target, Award } from "lucide-react";

const courses = [
  {
    id: "ielts",
    name: "IELTS Coaching",
    fullName: "International English Language Testing System",
    description: "Comprehensive IELTS preparation for both Academic and General Training modules. Our expert trainers help you achieve your target band score.",
    duration: "4-8 weeks",
    batchSize: "10-15 students",
    features: [
      "Personalized study plans",
      "Full-length mock tests",
      "Speaking practice sessions",
      "Writing evaluation & feedback",
      "Tips and strategies for each section",
      "Flexible batch timings",
    ],
    targetScore: "7+ Bands",
  },
  {
    id: "pte",
    name: "PTE Coaching",
    fullName: "Pearson Test of English Academic",
    description: "Master the computer-based PTE Academic test with our specialized coaching. Focus on all four skills with AI-based practice tools.",
    duration: "3-6 weeks",
    batchSize: "8-12 students",
    features: [
      "Computer-based practice",
      "Real test environment simulation",
      "Instant score feedback",
      "Individual attention",
      "Flexible scheduling",
      "Score guarantee program",
    ],
    targetScore: "65+ Score",
  },
  {
    id: "toefl",
    name: "TOEFL Coaching",
    fullName: "Test of English as a Foreign Language",
    description: "Prepare for TOEFL iBT with our comprehensive program designed to help you excel in reading, listening, speaking and writing sections.",
    duration: "4-6 weeks",
    batchSize: "10-12 students",
    features: [
      "Section-wise training",
      "Computer-based practice tests",
      "Speaking recordings review",
      "Writing corrections",
      "Vocabulary building",
      "Test-taking strategies",
    ],
    targetScore: "100+ Score",
  },
];

const stats = [
  { icon: Users, number: "5000+", label: "Students Trained" },
  { icon: Star, number: "4.9/5", label: "Student Rating" },
  { icon: Award, number: "95%", label: "Success Rate" },
  { icon: Target, number: "7+", label: "Avg Band Score" },
];

const LanguageTraining = () => {
  return (
    <Layout>
      <div className="page-transition">
        {/* Hero Section */}
        <section className="bg-primary py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
                Language Training
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Master Your English Proficiency
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Expert coaching for IELTS, PTE and TOEFL with proven success rates. Achieve your target scores with our comprehensive training programs.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-secondary">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-display text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Training Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the test that suits your destination and get expert coaching to achieve your desired score.
              </p>
            </div>

            <div className="space-y-12">
              {courses.map((course, index) => (
                <div
                  key={course.id}
                  id={course.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="bg-primary rounded-2xl p-6 sm:p-8 text-center">
                      <h3 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">
                        {course.name}
                      </h3>
                      <p className="text-primary-foreground/80 mb-6">
                        {course.fullName}
                      </p>
                      <div className="inline-block px-6 py-3 bg-accent rounded-full">
                        <p className="text-primary font-semibold text-lg">
                          Target: {course.targetScore}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-lg text-muted-foreground mb-6">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-foreground font-medium">
                          {course.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="text-foreground font-medium">
                          {course.batchSize}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact" className="btn-hero">
                      Enroll Now
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
              Ready to Achieve Your Target Score?
            </h2>
            <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
              Join our next batch and get expert coaching to ace your English proficiency test.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
              >
                Book Free Demo Class
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Call: +1 234 567 890
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LanguageTraining;
