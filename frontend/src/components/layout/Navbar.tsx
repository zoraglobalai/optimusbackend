import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, LogOut, LogIn, User, Shield } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
  type?: "mega";
}

const dropdownStyle: React.CSSProperties = {
  maxHeight: "300px",
  overflowY: "auto",
  background: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 16px 40px rgba(0,0,0,0.13)",
  padding: "6px 0",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Study Abroad",
    href: "/study-abroad",
    dropdown: [
      { label: "Study in USA", href: "/study-abroad#usa" },
      { label: "Study in UK", href: "/study-abroad#uk" },
      { label: "Study in Canada", href: "/study-abroad#canada" },
      { label: "Study in Australia", href: "/study-abroad#australia" },
      { label: "Study in Europe", href: "/study-abroad#europe" },
    ],
  },
  {
    label: "MBBS Abroad",
    href: "/mbbs-abroad",
    dropdown: [
      { label: "MBBS in Russia", href: "/mbbs-abroad#russia" },
      { label: "MBBS in Georgia", href: "/mbbs-abroad#georgia" },
      { label: "MBBS in Philippines", href: "/mbbs-abroad#philippines" },
      { label: "MBBS in Kazakhstan", href: "/mbbs-abroad#kazakhstan" },
      { label: "MBBS in Uzbekistan", href: "/mbbs-abroad#uzbekistan" },
      { label: "MBBS in Kyrgyzstan", href: "/mbbs-abroad#kyrgyzstan" },
      { label: "MBBS in Armenia", href: "/mbbs-abroad#armenia" },
      { label: "MBBS in Azerbaijan", href: "/mbbs-abroad#azerbaijan" },
      { label: "MBBS in Poland", href: "/mbbs-abroad#poland" },
      { label: "MBBS in Romania", href: "/mbbs-abroad#romania" },
      { label: "MBBS in Hungary", href: "/mbbs-abroad#hungary" },
      { label: "MBBS in Bulgaria", href: "/mbbs-abroad#bulgaria" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    type: "mega",
    dropdown: [
      { label: "Psychometric Test", href: "/services/psychometric-test" },
      { label: "Career Counselling", href: "/services/career-counselling" },
      { label: "Country Selection", href: "/services/country-selection" },
      { label: "Course / University", href: "/services/course-university" },
      { label: "Admissions", href: "/services/admissions" },
      { label: "Scholarships", href: "/services/scholarships" },
      { label: "Educational Loan", href: "/services/education-loan" },
      { label: "Documentation", href: "/services/documentation" },
      { label: "Student Visa", href: "/services/student-visa" },
      { label: "Mock Visa Interview", href: "/services/mock-visa" },
      { label: "Travel Services", href: "/services/travel" },
      { label: "Accommodation", href: "/services/accommodation" },
      { label: "Forex Services", href: "/services/forex" },
    ],
  },
  {
    label: "Courses",
    href: "/courses",
    dropdown: [
      { label: "Bachelor's Programs", href: "/courses/bachelors" },
      { label: "Master's Programs", href: "/courses/masters" },
      { label: "PhD / Doctorate", href: "/courses/phd" },
      { label: "Diploma & PG Diploma", href: "/courses/diploma" },
      { label: "Professional Certifications", href: "/courses/certifications" },
    ],
  },
  {
    label:"Blog",
    href: "/blog",
  },
  { label: "Contact Us", href: "/contact" },
  { label: "Universities ", href: "/universities" },
  { label: "Partner With Us", href: "/partner-with-us" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout, isAdmin } = useAuth();

  useEffect(() => {
    // Set initial state immediately on mount — no flash
    setIsScrolled(window.scrollY > 10);

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobileItems(null);
  }, [location]);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    // Always solid white — no backdrop-blur, no transparency flicker
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm border-b border-border/50"
      }`}
    >
      <div className="container-custom">
        {/* ── 3-column: Logo | Nav | CTA ── */}
        <div className="flex items-center h-[76px] gap-6">

          {/* ── LEFT: Logo ── */}
          <Link to="/" className="flex-shrink-0 flex items-center h-full">
            <img
              src="/logo.webp"
              alt="Global Education"
              className="h-20 sm:h-24 max-h-[92px] w-auto object-contain"
            />
          </Link>

          {/* ── CENTER: Desktop Nav ── */}
       <nav className="hidden xl:flex items-center flex-1 justify-center h-full min-w-0 gap-0">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <div
                  key={item.label}
                  className="relative h-full flex items-center flex-shrink-0 whitespace-nowrap"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`
                      relative flex items-center gap-1 px-2 h-full
                      text-[15px] font-semibold whitespace-nowrap tracking-normal
                      transition-colors duration-200 group
                      ${active ? "text-primary" : "text-foreground/70 hover:text-primary"}
                    `}
                  >
                    {/* Bottom active bar */}
                    <span
                      className={`
                        absolute bottom-0 left-0 right-0 h-[3px] rounded-t-sm
                        bg-accent transition-all duration-200
                        ${active ? "opacity-100" : "opacity-0 group-hover:opacity-30"}
                      `}
                    />
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <div
                      className={`dropdown-menu ${activeDropdown === item.label ? "active" : ""}`}
                      style={dropdownStyle}
                    >
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.label}
                          to={dropItem.href}
                          className="dropdown-item text-[14px] font-medium"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ── RIGHT: CTA + Auth + Hamburger ── */}
          <div className="flex items-center gap-4 flex-shrink-0 ml-auto lg:ml-0">
            <Link
              to="/contact"
              className="hidden xl:inline-flex btn-hero text-[13.5px] font-semibold px-4 py-2 whitespace-nowrap"
            >
              Free Counselling
            </Link>

     

            <button
              className="xl:hidden p-2 rounded-md text-primary hover:bg-primary/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {isMobileMenuOpen && (
          <nav className="xl:hidden border-t border-border pb-4 pt-2 animate-fade-in">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <div key={item.label} className="py-0.5">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setExpandedMobileItems(
                            expandedMobileItems === item.label ? null : item.label
                          )
                        }
                        className={`w-full flex items-center justify-between px-3 py-3.5 rounded-md text-[16px] font-semibold transition-colors ${
                          active
                            ? "text-primary bg-primary/5 border-l-[3px] border-accent pl-[10px]"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                            expandedMobileItems === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedMobileItems === item.label && (
                        <div className="ml-4 mt-1 mb-3 pl-3 border-l-2 border-accent/25 max-h-60 overflow-y-auto">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.label}
                              to={dropItem.href}
                              className="block px-2 py-3 text-[15px] font-medium text-foreground/70 hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center px-3 py-3.5 rounded-md text-[16px] font-semibold transition-colors ${
                        active
                          ? "text-primary bg-primary/5 border-l-[3px] border-accent pl-[10px]"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
              <Link
                to="/contact"
                className="btn-hero text-[16px] font-semibold px-6 py-3.5 w-full text-center block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Free Counselling
              </Link>

              {!isAuthenticated ? (
                <>
                  <Link
                    to="/partner-with-us"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-primary/10 text-primary text-[16px] font-semibold rounded-md w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LogIn className="w-4 h-4" />
                    Partner Login / Register
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 px-6 py-3.5 bg-primary/10 text-primary text-[16px] font-semibold rounded-md w-full justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    {user?.name}
                  </Link>
                  {isAdmin && (
                    <Link
                      to="/admin"
                      className="flex items-center gap-2 px-6 py-3.5 bg-red-100 text-red-600 text-[16px] font-semibold rounded-md w-full justify-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Shield className="w-4 h-4" />
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 px-6 py-3.5 bg-red-100 text-red-600 text-[16px] font-semibold rounded-md w-full justify-center"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
