import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";
import { publicApiInstance, ENQUIRY_WEBSITE_SLUG } from "@/services/publicApi";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "No:12,Gandhi Salai, Srinivasa Nagar, Kandhanchavadi, Perungudi, Chennai, Tamil Nadu-600096 ",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["90929 06907"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@optimusoverseasedu.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 5:00 PM"],
  },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      const sanitizedName = value
        .replace(/[^A-Za-z\s]/g, "")
        .replace(/\s+/g, " ")
        .replace(/^\s/, "")
        .slice(0, 30);

      setFormData((prev) => ({ ...prev, name: sanitizedName }));
      return;
    }

    if (name === "email") {
      const sanitizedEmail = value.trim().replace(/\s+/g, "").slice(0, 254);
      setFormData((prev) => ({ ...prev, email: sanitizedEmail }));
      return;
    }

    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "");

      if (digitsOnly.length > 10) {
        toast({
          title: "Invalid Number",
          description: "Phone number cannot be more than 10 digits.",
        });
      }

      setFormData((prev) => ({ ...prev, phone: digitsOnly.slice(0, 10) }));
      return;
    }

    const sanitizedValue = value.replace(/\s+/g, " ").replace(/^\s/, "");
    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
  };

  const normalizeFormData = () => ({
    ...formData,
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    phone: formData.phone.trim(),
    service: formData.service.trim(),
    message: formData.message.trim(),
  });

  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  const handleEmailPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData("text");

    if (/\s/.test(pastedText)) {
      e.preventDefault();

      const sanitizedEmail = pastedText.replace(/\s+/g, "").slice(0, 254);
      setFormData((prev) => ({ ...prev, email: sanitizedEmail }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const normalizedFormData = normalizeFormData();

    if (
      !normalizedFormData.name ||
      normalizedFormData.name.length > 30 ||
      !NAME_REGEX.test(normalizedFormData.name)
    ) {
      toast({
        title: "Invalid Name",
        description: "Name should contain only letters, spaces, and be up to 30 characters.",
      });
      return;
    }

    if (!EMAIL_REGEX.test(normalizedFormData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    if (!normalizedFormData.phone || normalizedFormData.phone.length !== 10) {
      toast({
        title: "Invalid Number",
        description: "Phone number must be exactly 10 digits.",
      });
      return;
    }

    if (!normalizedFormData.service) {
      toast({
        title: "Missing Service",
        description: "Please enter the service you are interested in.",
      });
      return;
    }

    setFormData(normalizedFormData);

    try {
      const response = await publicApiInstance.post("/enquiries", {
        website_slug: ENQUIRY_WEBSITE_SLUG,
        form_type: "Contact Page Consultation Form",
        name: normalizedFormData.name,
        email: normalizedFormData.email,
        phone: normalizedFormData.phone,
        service_interested_in: normalizedFormData.service,
        message: normalizedFormData.message,
        source_page_url: typeof window !== "undefined" ? window.location.href : null,
        source_page_title: typeof document !== "undefined" ? document.title : null,
      });

      if (response.status === 201 || response.data?.data) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for contacting us. We'll get back to you within 24 hours.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Enquiry submit failed", error);
      toast({
        title: "Submission Failed",
        description: "Please check your internet connection or try again later.",
      });
    }
  };

  return (
    <>
      <Layout>
        <Helmet>
          {/* Primary SEO */}
          <title>
            Contact Optimus Overseas Education | Free Study Abroad Consultation
          </title>

          <meta
            name="description"
            content="Contact Optimus Overseas Educational Consultants for free study abroad counselling, MBBS abroad guidance, admissions, visa, loans, and overseas education support. Visit our Chennai office or call us today."
          />

          <meta
            name="keywords"
            content="contact study abroad consultants, study abroad consultants chennai, overseas education counselling, free study abroad consultation"
          />

          <link
            rel="canonical"
            href="https://www.optimusoverseasedu.com/contact"
          />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Contact Optimus Overseas Education | Free Study Abroad Consultation"
          />
          <meta
            property="og:description"
            content="Get in touch with Optimus Overseas Educational Consultants for expert study abroad guidance, admissions, visa support, and free counselling."
          />
          <meta
            property="og:url"
            content="https://www.optimusoverseasedu.com/contact"
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
            content="Contact Optimus Overseas Education"
          />
          <meta
            name="twitter:description"
            content="Book a free study abroad consultation with expert counsellors at Optimus Overseas Education."
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
                  Contact Us
                </span>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                  Contact Optimus Overseas Educational Consultants
                </h1>
                <p className="text-xl text-primary-foreground/80">
                  Have questions about studying abroad? Our expert counsellors are
                  here to help you every step of the way.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Info Cards */}
          <section className="py-12 bg-secondary">
            <div className="container-custom">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card-elevated text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form & Map */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Form */}
                <div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                    Book Your Free Consultation
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and our expert counsellors will get back
                    to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        maxLength={30}
                        className="w-full px-4 py-3 rounded-lg border border-border"
                        placeholder="Full Name"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onKeyDown={handleEmailKeyDown}
                        onPaste={handleEmailPaste}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border"
                        placeholder="Email Address"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border"
                        placeholder="Phone Number"
                        maxLength={10}
                      />
                      <input
                        type="text"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border"
                        placeholder="Service Interested In"
                      />
                    </div>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border resize-none"
                      placeholder="Your Message"
                    />

                    <button
                      type="submit"
                      className="btn-hero inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden h-[320px] sm:h-[420px] lg:h-[500px] bg-secondary">
                  <iframe
                    src="https://maps.google.com/maps?q=No+12+Gandhi+Salai+Srinivasa+Nagar+Kandhanchavadi+Perungudi+Chennai+Tamil+Nadu+600096&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Office Location"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
