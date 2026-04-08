import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";

// Public pages
import Index from "./pages/Index";
import About from "./pages/About";
import StudyAbroad from "./pages/StudyAbroad";
import MBBSAbroad from "./pages/MBBSAbroad";
import LanguageTraining from "./pages/LanguageTraining";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./pages/ScrollToTop";
import PartnerWithUs from "./pages/PartnerWithUs";
import Universities from "./pages/Universities";

// Course/program public pages
import Courses from "./components/Courses";
import Bachelors from "./components/Bachelors";
import Masters from "./components/Masters";
import PhD from "./components/PhD";
import Diploma from "./components/Diploma";
import Certifications from "./components/Certifications";

// Services
import Services from "@/pages/services/Services";
import ServiceDetail from "@/pages/services/ServiceDetail";
import PsychometricTest from "@/pages/services/PsychometricTest";
import CareerCounselling from "@/pages/services/CareerCounselling";
import CountrySelection from "@/pages/services/CountrySelection";
import CourseUniversitySelection from "@/pages/services/CourseUniversitySelection";
import Admissions from "@/pages/services/Admissions";
import Scholarships from "@/pages/services/Scholarships";
import EducationLoan from "@/pages/services/EducationLoan";
import Documentation from "@/pages/services/Documentation";
import StudentVisa from "@/pages/services/StudentVisa";
import MockVisaInterview from "@/pages/services/MockVisaInterview";
import TravelServices from "@/pages/services/TravelServices";
import Accommodation from "@/pages/services/Accommodation";
import ForexServices from "./pages/services/ForexServices";

// Blog pages
import BlogListPage from "@/pages/blog/BlogListPage";
import BlogDetailPage from "@/pages/blog/BlogDetailPage";

// ── Protected dashboard pages ─────────────────────────────────────────────────
import { DashboardPage } from "./pages/Dashboard";
import { CourseDetailPage } from "./pages/Coursedetailpage";
import { CourseListPage } from "./pages/Courselistpage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* ── Public ── */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/study-abroad" element={<StudyAbroad />} />
            <Route path="/mbbs-abroad" element={<MBBSAbroad />} />
            <Route path="/language-training" element={<LanguageTraining />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/universities" element={<Universities />} />

            {/* ── Courses (public) ── */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/bachelors" element={<Bachelors />} />
            <Route path="/courses/masters" element={<Masters />} />
            <Route path="/courses/phd" element={<PhD />} />
            <Route path="/courses/diploma" element={<Diploma />} />
            <Route path="/courses/certifications" element={<Certifications />} />

            {/* ── Services ── */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/services/psychometric-test" element={<PsychometricTest />} />
            <Route path="/services/career-counselling" element={<CareerCounselling />} />
            <Route path="/services/country-selection" element={<CountrySelection />} />
            <Route path="/services/course-university" element={<CourseUniversitySelection />} />
            <Route path="/services/admissions" element={<Admissions />} />
            <Route path="/services/scholarships" element={<Scholarships />} />
            <Route path="/services/education-loan" element={<EducationLoan />} />
            <Route path="/services/documentation" element={<Documentation />} />
            <Route path="/services/student-visa" element={<StudentVisa />} />
            <Route path="/services/mock-visa" element={<MockVisaInterview />} />
            <Route path="/services/travel" element={<TravelServices />} />
            <Route path="/services/accommodation" element={<Accommodation />} />
            <Route path="/services/forex" element={<ForexServices />} />

            {/* ── Protected Dashboard ── */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/courses"
              element={
                <ProtectedRoute>
                  <CourseListPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/courses/:id"
              element={
                <ProtectedRoute>
                  <CourseDetailPage />
                </ProtectedRoute>
              }
            />

            {/* ── Blog ── */}
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />

            {/* ── Catch-all ── */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;