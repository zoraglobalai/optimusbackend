import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StudyDestinations from "@/components/home/StudyDestinations";
import ServicesPreview from "@/components/home/ServicesPreview";
import CTABanner from "@/components/home/CTABanner";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      
<Helmet>
  {/* Primary SEO */}
  <title>
    Optimus Overseas Education | Study Abroad & MBBS Consultants in India
  </title>

  <meta
    name="description"
    content="Optimus Overseas Educational Consultants is a trusted study abroad and MBBS abroad consultancy in India, helping students with admissions, visas, scholarships, loans and overseas education guidance."
  />

  <meta
    name="keywords"
    content="study abroad consultants, mbbs abroad consultants, overseas education consultants india, study abroad guidance, international education consultancy"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Optimus Overseas Education | Study Abroad & MBBS Consultants"
  />
  <meta
    property="og:description"
    content="Trusted study abroad and MBBS abroad consultancy offering admissions, visa support, scholarships, loans and career guidance for international education."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/"
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
    content="Optimus Overseas Education | Study Abroad & MBBS Consultants"
  />
  <meta
    name="twitter:description"
    content="Expert study abroad and MBBS abroad consultancy helping students achieve global education dreams."
  />
  <meta
    name="twitter:image"
    content="https://www.optimusoverseasedu.com/og/optimus-footer.webp"
  />
</Helmet>

      {/* SEO H1 – must exist */}
      <h1 className="sr-only">
        Study Abroad & MBBS Abroad Consultants in India
      </h1>

      <div className="page-transition">
        <HeroSlider />
        <WhyChooseUs />
        <StudyDestinations />
        <ServicesPreview />
        <CTABanner />
      </div>
    </Layout>
  );
};


export default Index;

