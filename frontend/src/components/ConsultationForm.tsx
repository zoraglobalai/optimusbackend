import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { publicApiInstance, ENQUIRY_WEBSITE_SLUG } from "@/services/publicApi";

interface ConsultationFormProps {
  compact?: boolean; // true = sidebar mode (stacked), false = full width (2-col grid)
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

const ConsultationForm = ({ compact = false }: ConsultationFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

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

  const normalizeFormData = () => ({
    ...formData,
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    phone: formData.phone.trim(),
    service: formData.service.trim(),
    message: formData.message.trim(),
  });

  const getSourcePageData = () => {
    if (typeof window === "undefined") {
      return { sourcePageUrl: null, sourcePageTitle: null, formType: "Website Consultation Form" };
    }

    const url = window.location.href;
    const title = document.title || "";
    const formType = window.location.pathname.startsWith("/blog")
      ? "Blog Page Consultation Form"
      : "Website Consultation Form";

    return {
      sourcePageUrl: url,
      sourcePageTitle: title,
      formType,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const normalized = normalizeFormData();

    if (
      !normalized.name ||
      normalized.name.length > 30 ||
      !NAME_REGEX.test(normalized.name)
    ) {
      toast({
        title: "Invalid Name",
        description: "Name should contain only letters, spaces, and be up to 30 characters.",
      });
      return;
    }

    if (!EMAIL_REGEX.test(normalized.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    if (!normalized.phone || normalized.phone.length !== 10) {
      toast({
        title: "Invalid Number",
        description: "Phone number must be exactly 10 digits.",
      });
      return;
    }

    if (!normalized.service) {
      toast({
        title: "Missing Service",
        description: "Please enter the service you are interested in.",
      });
      return;
    }

    setFormData(normalized);
    setSubmitting(true);

    const { sourcePageUrl, sourcePageTitle, formType } = getSourcePageData();

    try {
      const response = await publicApiInstance.post("/enquiries", {
        website_slug: ENQUIRY_WEBSITE_SLUG,
        form_type: formType,
        name: normalized.name,
        email: normalized.email,
        phone: normalized.phone,
        service_interested_in: normalized.service,
        message: normalized.message,
        source_page_url: sourcePageUrl,
        source_page_title: sourcePageTitle,
      });

      if (response.status === 201 || response.data?.data) {
        toast({
          title: "Message Sent!",
          description: "Thank you! We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast({ title: "Error", description: "Something went wrong. Please try again." });
      }
    } catch (error) {
      console.error("Enquiry submit failed", error);
      toast({ title: "Submission Failed", description: "Please try again or contact us directly." });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors";

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
      <h2 className={`font-bold text-primary mb-1 ${compact ? "text-xl" : "text-2xl"}`}>
        Book Your Free Consultation
      </h2>
      <p className="text-gray-500 text-sm mb-5">
        Fill out the form and our expert counsellors will get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {compact ? (
          <>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={30}
              placeholder="Full Name"
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onKeyDown={handleEmailKeyDown}
              onPaste={handleEmailPaste}
              required
              placeholder="Email Address"
              className={inputClass}
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              maxLength={10}
              placeholder="Phone Number"
              className={inputClass}
            />
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              placeholder="Service Interested In"
              className={inputClass}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your Message"
              className={`${inputClass} resize-none`}
            />
          </>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={30}
                placeholder="Full Name"
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onKeyDown={handleEmailKeyDown}
                onPaste={handleEmailPaste}
                required
                placeholder="Email Address"
                className={inputClass}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                maxLength={10}
                placeholder="Phone Number"
                className={inputClass}
              />
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                placeholder="Service Interested In"
                className={inputClass}
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              className={`${inputClass} resize-none`}
            />
          </>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 disabled:opacity-60"
        >
          <Send className="w-4 h-4" />
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;
