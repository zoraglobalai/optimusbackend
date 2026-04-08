import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

type ServiceSEO = {
  title: string;
  seoTitle: string;
  description: string;
  ogImage: string;
};

const serviceContent: Record<string, ServiceSEO> = {
  "psychometric-test": {
    title: "Psychometric Test",
    seoTitle:
      "Psychometric Test for Career Guidance | Optimus Overseas Education",
    description:
      "Take a scientific psychometric test to identify the right career path based on aptitude, interests and personality traits.",
    ogImage: "https://www.optimusoverseasedu.com/og/psychometric-test.jpg",
  },
  "career-counselling": {
    title: "Career Counselling",
    seoTitle:
      "Career Counselling for Study Abroad | Optimus Overseas Education",
    description:
      "Get personalized one-on-one career counselling from certified education advisors to plan your study abroad journey.",
    ogImage: "https://www.optimusoverseasedu.com/og/career-counselling.jpg",
  },
  "country-selection": {
    title: "Country Selection",
    seoTitle:
      "Country Selection for Study Abroad | Optimus Overseas Education",
    description:
      "Expert guidance to choose the best country for studying abroad based on academics, budget and long-term career goals.",
    ogImage: "https://www.optimusoverseasedu.com/og/country-selection.jpg",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceContent[slug] : null;

  if (!service) {
    return (
      <>
        <Helmet>
          <title>Service Not Found | Optimus Overseas Education</title>
          <meta name="robots" content="noindex" />
        </Helmet>

        <div className="pt-32 text-center">
          <h1 className="text-3xl font-bold">Service not found</h1>
        </div>
      </>
    );
  }

  const canonicalUrl = `https://www.optimusoverseasedu.com/services/${slug}`;

  return (
    <>
      {/* SEO */}
      <Helmet>
        {/* Primary SEO */}
        <title>{service.seoTitle}</title>

        <meta name="description" content={service.description} />

        <meta
          name="keywords"
          content="study abroad services, overseas education consultancy, career counselling, student visa assistance"
        />

        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={service.seoTitle} />
        <meta property="og:description" content={service.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={service.ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.seoTitle} />
        <meta name="twitter:description" content={service.description} />
        <meta name="twitter:image" content={service.ogImage} />
      </Helmet>

      {/* CONTENT */}
      <section className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
