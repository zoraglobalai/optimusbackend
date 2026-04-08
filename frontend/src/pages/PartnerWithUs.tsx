import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { useAuth } from "../context/AuthContext";
import {
  Globe,
  Handshake,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Building2,
  GraduationCap,
  DollarSign,
  HeartHandshake,
  Eye,
  ChevronRight,
} from "lucide-react";

// ─── Password strength helper ────────────────────────────────────────────────
interface PasswordStrength {
  score: number;
  label: string;
  color: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const PASSWORD_SPECIAL_CHAR_REGEX = /[^A-Za-z0-9]/;

const getPasswordStrength = (password: string): PasswordStrength => {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (PASSWORD_SPECIAL_CHAR_REGEX.test(password)) score++;
  const strengths: PasswordStrength[] = [
    { score: 0, label: "Very Weak", color: "bg-red-500" },
    { score: 1, label: "Weak", color: "bg-orange-500" },
    { score: 2, label: "Fair", color: "bg-yellow-500" },
    { score: 3, label: "Good", color: "bg-lime-500" },
    { score: 4, label: "Strong", color: "bg-green-500" },
    { score: 5, label: "Very Strong", color: "bg-emerald-500" },
  ];
  return strengths[Math.min(score, 5)];
};

// ─── Static data ─────────────────────────────────────────────────────────────
const benefits = [
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Access our network of 10,000+ students and parents actively looking for overseas education opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description:
      "Earn competitive commissions and referral bonuses for every successful student placement.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Our partner success team provides hands-on guidance, training and marketing collateral.",
  },
  {
    icon: Award,
    title: "Co-Branding",
    description:
      "Leverage the Optimus brand name and our 15+ years of industry trust to grow your business.",
  },
  {
    icon: Building2,
    title: "University Access",
    description:
      "Gain access to our 500+ partner universities across 50+ countries without extra negotiations.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Relationship",
    description:
      "We invest in long-term partnerships with regular webinars, incentives and growth programmes.",
  },
];

const partnerTypes = [
  {
    icon: GraduationCap,
    title: "Education Agents",
    description:
      "Independent counsellors and agents who want premium university tie-ups and student pipelines.",
  },
  {
    icon: Building2,
    title: "Institutions & Schools",
    description:
      "Schools and colleges looking to guide their students toward the best international universities.",
  },
  {
    icon: DollarSign,
    title: "Financial Partners",
    description:
      "Banks, NBFCs and fintech companies offering education loans, forex, or insurance products.",
  },
];

const stats = [
  { number: "500+", label: "Partner Universities" },
  { number: "50+", label: "Partner Countries" },
  { number: "10,000+", label: "Students Placed" },
  { number: "98%", label: "Visa Success Rate" },
];

const steps = [
  { step: "01", title: "Register", description: "Create your partner account using the form below." },
  { step: "02", title: "Onboarding", description: "Our team will contact you within 24 hours for orientation." },
  { step: "03", title: "Start Referring", description: "Begin referring students and earn from day one." },
  { step: "04", title: "Grow Together", description: "Scale your business with our co-marketing support." },
];

// ─── Component ────────────────────────────────────────────────────────────────
const PartnerWithUs: React.FC = () => {
  const navigate = useNavigate();
  const { login, signup, isLoading } = useAuth();

  const [activeTab, setActiveTab] = useState<"login" | "register">("register");

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Register state
  const [regData, setRegData] = useState({ name: "", email: "", password: "", confirm: "" });
  const [showRegPass, setShowRegPass] = useState(false);
  const [showRegConfirm, setShowRegConfirm] = useState(false);
  const [regError, setRegError] = useState("");
  const passwordStrength = getPasswordStrength(regData.password);

  const sanitizeName = (value: string) =>
    value
      .replace(/[^A-Za-z\s]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^\s/, "")
      .slice(0, 30);

  const sanitizeEmail = (value: string) =>
    value.trim().replace(/\s+/g, "").slice(0, 254);

  const sanitizePassword = (value: string) => value.replace(/\s+/g, "");

  const handleRegNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedName = sanitizeName(e.target.value);
    setRegData((prev) => ({ ...prev, name: sanitizedName }));
  };

  const handleRegEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedEmail = sanitizeEmail(e.target.value);
    setRegData((prev) => ({ ...prev, email: sanitizedEmail }));
  };

  const handleRegPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedPassword = sanitizePassword(e.target.value);
    setRegData((prev) => ({ ...prev, password: sanitizedPassword }));
  };

  const handleRegConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedPassword = sanitizePassword(e.target.value);
    setRegData((prev) => ({ ...prev, confirm: sanitizedPassword }));
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
      const sanitizedEmail = sanitizeEmail(pastedText);
      setRegData((prev) => ({ ...prev, email: sanitizedEmail }));
    }
  };

  const handlePasswordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  const handlePasswordPaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    field: "password" | "confirm"
  ) => {
    const pastedText = e.clipboardData.getData("text");

    if (/\s/.test(pastedText)) {
      e.preventDefault();
      const sanitizedPassword = sanitizePassword(pastedText);
      setRegData((prev) => ({ ...prev, [field]: sanitizedPassword }));
    }
  };

  // ── Login submit ──────────────────────────────────────────────────────────
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    if (!loginEmail || !loginPassword) {
      setLoginError("Please fill in all fields.");
      return;
    }
    try {
      await login({ email: loginEmail, password: loginPassword });
      navigate("/dashboard");
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "Login failed. Please try again.");
    }
  };

  // ── Register submit ───────────────────────────────────────────────────────
  const validateReg = (): boolean => {
    const normalizedData = {
      name: regData.name.trim(),
      email: regData.email.trim().toLowerCase(),
      password: regData.password,
      confirm: regData.confirm,
    };

    if (!normalizedData.name) { setRegError("Full name is required."); return false; }
    if (normalizedData.name.length > 30 || !NAME_REGEX.test(normalizedData.name)) {
      setRegError("Full name should contain only letters and be up to 30 characters.");
      return false;
    }
    if (!EMAIL_REGEX.test(normalizedData.email)) {
      setRegError("Please enter a valid email address.");
      return false;
    }
    if (/\s/.test(normalizedData.password)) {
      setRegError("Password cannot contain spaces.");
      return false;
    }
    if (normalizedData.password.length < 8) {
      setRegError("Password must be at least 8 characters.");
      return false;
    }
    if (!/[A-Z]/.test(normalizedData.password)) {
      setRegError("Password must contain an uppercase letter.");
      return false;
    }
    if (!PASSWORD_SPECIAL_CHAR_REGEX.test(normalizedData.password)) {
      setRegError("Password must contain at least one special character.");
      return false;
    }
    if (normalizedData.password !== normalizedData.confirm) {
      setRegError("Passwords do not match.");
      return false;
    }

    setRegData((prev) => ({
      ...prev,
      name: normalizedData.name,
      email: normalizedData.email,
    }));

    return true;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegError("");
    if (!validateReg()) return;
    try {
      await signup({
        name: regData.name.trim(),
        email: regData.email.trim().toLowerCase(),
        password: regData.password,
      });
      navigate("/dashboard");
    } catch (err) {
      setRegError(err instanceof Error ? err.message : "Registration failed. Please try again.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-secondary/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition text-sm";
  const labelClass = "block text-sm font-semibold text-foreground mb-1.5";
  const errorClass =
    "flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm";

  return (
    <Layout>
      <Helmet>
        <title>Partner With Us | Optimus Overseas Educational Consultants</title>
        <meta
          name="description"
          content="Join Optimus Overseas as an education partner. Partner with us to expand your reach, earn commissions and help students study abroad. Register or login today."
        />
        <meta
          name="keywords"
          content="partner with optimus, education agent partner, overseas education partner, study abroad franchise, register education partner"
        />
        <link rel="canonical" href="https://www.optimusoverseasedu.com/partner-with-us" />
        <meta property="og:title" content="Partner With Us | Optimus Overseas Educational Consultants" />
        <meta property="og:url" content="https://www.optimusoverseasedu.com/partner-with-us" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="page-transition">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="bg-primary py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
                Partner With Us
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Grow Together with Optimus Overseas
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8">
                Join hands with India's trusted international education consultancy. Expand your reach, earn more, and help students achieve their dreams together.
              </p>
              <a href="#partner-form" className="btn-hero inline-flex items-center gap-2">
                Become a Partner <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── Stats ────────────────────────────────────────────────────────── */}
        <section className="py-12 bg-secondary">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-body text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Partner ──────────────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block px-6 py-2 bg-accent text-white font-semibold rounded-full text-sm mb-4 shadow-md">
                Why Partner With Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                The Optimus Partnership Advantage
              </h2>
              <p className="text-lg text-muted-foreground">
                When you partner with Optimus, you unlock 15+ years of expertise, a trusted brand and everything you need to scale your education business.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="card-elevated group hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <b.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {b.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who Can Partner ──────────────────────────────────────────────── */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block px-6 py-2 bg-accent text-white font-semibold rounded-full text-sm mb-4 shadow-md">
                Who Can Join
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Partnership Opportunities For Everyone
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you're an individual counsellor, a school, or a financial institution there's a partnership model for you.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerTypes.map((pt, i) => (
                <div key={i} className="bg-background rounded-2xl p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow border border-border/60">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <pt.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{pt.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pt.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ─────────────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block px-6 py-2 bg-accent text-white font-semibold rounded-full text-sm mb-4 shadow-md">
                How It Works
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Simple Steps to Get Started
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={i} className="relative flex flex-col items-start p-6 bg-secondary rounded-2xl border border-border/60">
                  <span className="font-body text-5xl font-bold text-primary/50 mb-3 leading-none">{s.step}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partner Form (Login / Register) ──────────────────────────────── */}
        <section id="partner-form" className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: why join copy */}
              <div className="lg:sticky lg:top-28">
                <span className="inline-block px-6 py-2 bg-accent text-white font-semibold rounded-full text-sm mb-4 shadow-md">
                  Partner Portal
                </span>
                <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                  Join Our Growing Partner Network
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Already a partner? Log in to access your dashboard. New here? Create a free partner account in minutes and start benefitting from day one.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Access exclusive partner resources and marketing kits",
                    "Track your referrals and commission earnings in real time",
                    "Get priority support from our partner success team",
                    "Participate in partner webinars, workshops and summits",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Trusted</p>
                      <p className="text-sm text-muted-foreground">Since 2009</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Global</p>
                      <p className="text-sm text-muted-foreground">Network</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Handshake className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">500+</p>
                      <p className="text-sm text-muted-foreground">Partners</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Tab card */}
              <div className="bg-background rounded-2xl shadow-lg border border-border/60 overflow-hidden">
                {/* Tab switcher */}
                <div className="flex border-b border-border">
                  <button
                    onClick={() => { setActiveTab("login"); setLoginError(""); setRegError(""); }}
                    className={`flex-1 py-4 text-base font-semibold transition-colors duration-200 ${
                      activeTab === "login"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                    }`}
                  >
                    Partner Login
                  </button>
                  <button
                    onClick={() => { setActiveTab("register"); setLoginError(""); setRegError(""); }}
                    className={`flex-1 py-4 text-base font-semibold transition-colors duration-200 ${
                      activeTab === "register"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                    }`}
                  >
                    New Partner
                  </button>
                </div>

                <div className="p-6 sm:p-8">
                  {/* ── LOGIN FORM ─────────────────────────────────────────── */}
                  {activeTab === "login" && (
                    <form onSubmit={handleLogin} className="space-y-5">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                          Welcome Back
                        </h3>
                        <p className="text-sm text-muted-foreground">Sign in to your partner account</p>
                      </div>

                      {loginError && (
                        <div className={errorClass}>
                          <span className="flex-1">{loginError}</span>
                        </div>
                      )}

                      <div>
                        <label htmlFor="login-email" className={labelClass}>Email Address</label>
                        <input
                          id="login-email"
                          type="email"
                          placeholder="Enter your email"
                          value={loginEmail}
                          onChange={e => setLoginEmail(e.target.value)}
                          disabled={isLoading}
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="login-password" className={labelClass}>Password</label>
                        <div className="relative">
                          <input
                            id="login-password"
                            type={showLoginPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={loginPassword}
                            onChange={e => setLoginPassword(e.target.value)}
                            disabled={isLoading}
                            className={`${inputClass} pr-11`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowLoginPassword(p => !p)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            disabled={isLoading}
                            tabIndex={-1}
                          >
                            {showLoginPassword ? <Eye className="w-4 h-4" /> : <Eye className="w-4 h-4 opacity-50" />}
                          </button>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full btn-hero py-3 text-base font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isLoading ? "Signing in…" : "Sign In to Partner Portal"}
                      </button>

                      <p className="text-sm text-center text-muted-foreground">
                        Don't have an account?{" "}
                        <button
                          type="button"
                          onClick={() => setActiveTab("register")}
                          className="text-primary font-semibold hover:underline"
                        >
                          Register now
                        </button>
                      </p>
                    </form>
                  )}

                  {/* ── REGISTER FORM ──────────────────────────────────────── */}
                  {activeTab === "register" && (
                    <form onSubmit={handleRegister} className="space-y-5">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                          Create Partner Account
                        </h3>
                        <p className="text-sm text-muted-foreground">Join our partner network for free</p>
                      </div>

                      {regError && (
                        <div className={errorClass}>
                          <span className="flex-1">{regError}</span>
                        </div>
                      )}

                      <div>
                        <label htmlFor="reg-name" className={labelClass}>Full Name</label>
                        <input
                          id="reg-name"
                          type="text"
                          placeholder="Enter your name"
                          value={regData.name}
                          onChange={handleRegNameChange}
                          disabled={isLoading}
                          maxLength={30}
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="reg-email" className={labelClass}>Email Address</label>
                        <input
                          id="reg-email"
                          type="email"
                          placeholder="Enter your email"
                          value={regData.email}
                          onChange={handleRegEmailChange}
                          onKeyDown={handleEmailKeyDown}
                          onPaste={handleEmailPaste}
                          disabled={isLoading}
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="reg-password" className={labelClass}>Password</label>
                        <div className="relative">
                          <input
                            id="reg-password"
                            type={showRegPass ? "text" : "password"}
                            placeholder="••••••••"
                            value={regData.password}
                            onChange={handleRegPasswordChange}
                            onKeyDown={handlePasswordKeyDown}
                            onPaste={e => handlePasswordPaste(e, "password")}
                            disabled={isLoading}
                            className={`${inputClass} pr-11`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowRegPass(p => !p)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            disabled={isLoading}
                            tabIndex={-1}
                          >
                            <Eye className={`w-4 h-4 ${showRegPass ? "" : "opacity-50"}`} />
                          </button>
                        </div>
                        {regData.password && (
                          <div className="mt-2 space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${passwordStrength.color} transition-all duration-300 rounded-full`}
                                  style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground font-medium w-20 text-right">
                                {passwordStrength.label}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              8+ chars • uppercase • special character • no spaces
                            </p>
                          </div>
                        )}
                      </div>

                      <div>
                        <label htmlFor="reg-confirm" className={labelClass}>Confirm Password</label>
                        <div className="relative">
                          <input
                            id="reg-confirm"
                            type={showRegConfirm ? "text" : "password"}
                            placeholder="••••••••"
                            value={regData.confirm}
                            onChange={handleRegConfirmChange}
                            onKeyDown={handlePasswordKeyDown}
                            onPaste={e => handlePasswordPaste(e, "confirm")}
                            disabled={isLoading}
                            className={`${inputClass} pr-11`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowRegConfirm(p => !p)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            disabled={isLoading}
                            tabIndex={-1}
                          >
                            <Eye className={`w-4 h-4 ${showRegConfirm ? "" : "opacity-50"}`} />
                          </button>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full btn-hero py-3 text-base font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isLoading ? "Creating Account…" : "Create Partner Account"}
                      </button>

                      <p className="text-sm text-center text-muted-foreground">
                        Already registered?{" "}
                        <button
                          type="button"
                          onClick={() => setActiveTab("login")}
                          className="text-primary font-semibold hover:underline"
                        >
                          Sign in here
                        </button>
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Section ──────────────────────────────────────────────────── */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Partner with Optimus?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join our growing network of 500+ partners across India and start earning while helping students achieve their study abroad dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#partner-form" className="btn-hero inline-flex items-center gap-2">
                Register as Partner <ChevronRight className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PartnerWithUs;
