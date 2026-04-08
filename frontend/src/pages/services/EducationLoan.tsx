import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

/* ----------------------------------
/* ----------------------------------
   BANK LOGOS (AVAILABLE FILES ONLY)
---------------------------------- */
const bankLogos = [
  "/images/banks/SBI.webp",
  "/images/banks/pnb.webp",
  "/images/banks/bank.webp",              // Bank of Baroda
  "/images/banks/canara.webp",
  "/images/banks/unionbank.webp",
  "/images/banks/centralbank.webp",
  "/images/banks/indian-bank-logo-hd.webp",
  "/images/banks/indianoverseas.webp",
  "/images/banks/indusland.webp",
  "/images/banks/hdfc.webp",
  "/images/banks/icici.webp",
  "/images/banks/axis-bank-logo.webp",
  "/images/banks/IDBI-Bank-logo.webp",
  "/images/banks/kotak.webp",
  "/images/banks/yesbank.webp",
];

/* ----------------------------------
   LOAN PROCESS
---------------------------------- */
const loanSteps = [
  {
    title: "Loan Application",
    desc: "Submit education loan application with academic, course and financial details.",
  },
  {
    title: "Profile Evaluation",
    desc: "Banks assess student profile, university ranking, country and employability.",
  },
  {
    title: "Document Verification",
    desc: "Admission letter, income proof, bank statements and collateral are verified.",
  },
  {
    title: "Loan Sanction",
    desc: "Loan is sanctioned based on eligibility, credit score and guarantor profile.",
  },
  {
    title: "Agreement Signing",
    desc: "Student and co-applicant sign loan agreement and promissory note.",
  },
  {
    title: "Loan Disbursement",
    desc: "Funds are released directly to university or as per bank disbursement rules.",
  },
];

/* ----------------------------------
   ELIGIBILITY
---------------------------------- */
const eligibility = [
  "Confirmed admission from recognized foreign university",
  "Indian citizen with valid passport",
  "Parent or guardian as co-applicant",
  "Stable income source for guarantor",
  "Collateral required for higher loan amounts",
];

/* ----------------------------------
   BANK GUIDELINES
---------------------------------- */
const bankGuidelines = [
  "Interest rates depend on bank, course, country & co-applicant profile",
  "Public banks generally offer lower interest rates",
  "NBFCs provide faster processing with flexible collateral",
  "Repayment starts after course completion or employment",
  "Loan tenure usually ranges from 5 to 7 years",
  "Loan amount disbursed semester-wise or annually",
  "Visa approval is mandatory for most banks",
];

/* ----------------------------------
   DOCUMENT CHECKLIST
---------------------------------- */
const checklist = [
  {
    title: "Borrower (Student)",
    items: [
      "University admission letter",
      "Completed loan application",
      "Academic certificates (10th, 12th, Degree)",
      "Passport & visa copy",
      "Photographs",
    ],
  },
  {
    title: "Co-Borrower (Parent / Guardian)",
    items: [
      "PAN card & Aadhaar",
      "Salary slips / ITR (2 years)",
      "Last 8 months bank statements",
      "Address proof",
      "Property documents (if collateral)",
    ],
  },
  {
    title: "Self-Employed Co-Borrower",
    items: [
      "Business registration proof",
      "Balance sheet & P&L statement",
      "ITR (2–3 years)",
      "Bank statements",
    ],
  },
  {
    title: "Overseas Guarantor (If Applicable)",
    items: [
      "Passport & visa proof",
      "Foreign income proof",
      "International bank statements",
    ],
  },
];

/* ==================================
   COMPONENT
================================== */
const EducationLoan = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Layout>
      <Helmet>
  {/* Primary SEO */}
  <title>
    Education Loan Assistance for Study Abroad | Student Loan Experts – Optimus
  </title>

  <meta
    name="description"
    content="Get expert education loan assistance for studying abroad. Optimus Overseas Education helps students secure loans from top banks and NBFCs with complete documentation support."
  />

  <meta
    name="keywords"
    content="education loan for study abroad, student education loan, overseas education loan assistance, education loan consultants, student loan guidance"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/services/education-loan"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Education Loan Assistance for Study Abroad | Optimus Overseas Education"
  />
  <meta
    property="og:description"
    content="Secure education loans for overseas studies with expert guidance, bank comparison and end-to-end documentation support."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/services/education-loan"
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
    content="Education Loan Assistance for Study Abroad"
  />
  <meta
    name="twitter:description"
    content="Student-friendly education loan support for studying abroad, including bank tie-ups and documentation assistance."
  />
  <meta
    name="twitter:image"
    content="https://www.optimusoverseasedu.com/og/optimus-footer.webp"
  />
</Helmet>

      {/* HERO */}
      <section className="bg-primary pt-36 pb-28">
        <div className="container-custom max-w-5xl">
          <span className="inline-block px-5 py-2 bg-accent text-primary rounded-full font-semibold mb-6">
            Our Services
          </span>

          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Educational Loan Assistance
          </h1>

          <p className="text-xl text-primary-foreground/80 max-w-3xl">
            Get education loans from India’s leading banks, NBFCs and global
            lenders with expert guidance and end-to-end support.
          </p>
        </div>
      </section>

      {/* BANK MARQUEE */}
      <section className="py-16 bg-white border-y overflow-hidden">
        <div className="container-custom">
          <p className="text-center uppercase tracking-widest text-sm text-muted-foreground mb-10">
            Education Loan Banking Partners
          </p>

          <div className="flex gap-24 animate-marquee items-center">
            {[...bankLogos, ...bankLogos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Education Loan Bank"
                className="h-14 opacity-70 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom max-w-6xl">
          <h2 className="font-display text-4xl font-bold text-center mb-16">
            Education Loan Process
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {loanSteps.map((step, i) => (
              <div key={i}>
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <div className="bg-white rounded-3xl border p-12 shadow-sm">
            <h2 className="font-display text-3xl font-bold mb-8">
              Loan Eligibility Criteria
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {eligibility.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BANK GUIDELINES */}
      <section className="section-padding bg-secondary">
        <div className="container-custom max-w-5xl">
          <h2 className="font-display text-4xl font-bold mb-10">
            Bank Guidelines
          </h2>

          <ul className="space-y-4">
            {bankGuidelines.map((g, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent mt-1" />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DOCUMENT CHECKLIST */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <h2 className="font-display text-4xl font-bold mb-10">
            Education Loan Document Checklist
          </h2>

          <div className="space-y-4">
            {checklist.map((sec, idx) => (
              <div key={idx} className="bg-white border rounded-xl">
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="w-full px-8 py-5 flex justify-between font-semibold text-left"
                >
                  {sec.title}
                  {open === idx ? <ChevronUp /> : <ChevronDown />}
                </button>

                {open === idx && (
                  <div className="px-8 pb-6">
                    <ul className="space-y-3">
                      {sec.items.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl px-14 py-16 text-center -mb-24">
            <h2 className="font-display text-4xl font-bold text-primary mb-6">
              Get Expert Education Loan Guidance
            </h2>

            <p className="text-lg text-muted-foreground mb-10">
              We compare banks, manage documentation and help you secure the
              best education loan.
            </p>

            <Link
              to="/contact"
              className="px-12 py-4 bg-accent text-primary font-semibold rounded-xl text-lg"
            >
              Talk to a Loan Expert
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EducationLoan;

