import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, LogOut, User, Shield,
  Menu, X, ChevronDown, Bell, Search,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

interface DashboardLayoutProps {
  children: ReactNode;
}

const navLinks = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Search Courses", href: "/dashboard/courses", icon: BookOpen },
];

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAdmin } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setUserMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close user menu on outside click
  useEffect(() => {
    if (!userMenuOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-user-menu]")) setUserMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [userMenuOpen]);

  const isActive = (href: string) =>
    href === "/dashboard"
      ? location.pathname === "/dashboard"
      : location.pathname.startsWith(href);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const initials = user?.name
    ? user.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)
    : "U";

  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      {/* ── Top Navbar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm border-b border-border/60"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center h-[64px] gap-4">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center h-full py-1.5">
              <img
                src="/logo.webp"
                alt="Optimus Overseas"
                className="h-14 max-h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center h-full gap-1 ml-4">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`
                      relative flex items-center gap-2 px-4 h-full text-[14px] font-semibold
                      whitespace-nowrap tracking-wide transition-colors duration-200 group
                      ${active ? "text-primary" : "text-foreground/60 hover:text-primary"}
                    `}
                  >
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[3px] rounded-t-sm bg-accent transition-all duration-200
                        ${active ? "opacity-100" : "opacity-0 group-hover:opacity-30"}`}
                    />
                    <link.icon className="w-4 h-4 flex-shrink-0" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3 ml-auto">

 

              {/* Admin badge */}
              {isAdmin && (
                <Link
                  to="/admin"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 text-red-600 border border-red-200 text-xs font-semibold hover:bg-red-100 transition"
                >
                  <Shield className="w-3.5 h-3.5" /> Admin
                </Link>
              )}

              {/* User menu */}
              <div className="relative" data-user-menu>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2.5 pl-1 pr-3 py-1 rounded-xl hover:bg-secondary transition group"
                >
                  {/* Avatar */}
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {initials}
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-semibold text-foreground leading-none mb-0.5 max-w-[120px] truncate">
                      {user?.name || "User"}
                    </p>
                    <p className="text-xs text-muted-foreground leading-none capitalize">
                      {user?.role?.toLowerCase() || "member"}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 hidden sm:block ${
                      userMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl border border-border shadow-xl py-2 z-50 animate-fade-in">
                    {/* User info */}
                    <div className="px-4 py-3 border-b border-border mb-1">
                      <p className="text-sm font-semibold text-foreground truncate">{user?.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                    </div>

                    <Link
                      to="/dashboard"
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition rounded-lg mx-1"
                    >
                      <LayoutDashboard className="w-4 h-4 text-muted-foreground" /> Dashboard
                    </Link>

                    <Link
                      to="/dashboard/courses"
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition rounded-lg mx-1"
                    >
                      <BookOpen className="w-4 h-4 text-muted-foreground" /> Search Courses
                    </Link>

                    {isAdmin && (
                      <Link
                        to="/admin"
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition rounded-lg mx-1"
                      >
                        <Shield className="w-4 h-4" /> Admin Panel
                      </Link>
                    )}

                    <div className="border-t border-border mt-1 pt-1">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition rounded-lg mx-1 w-[calc(100%-8px)]"
                      >
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 rounded-md text-primary hover:bg-primary/5 transition"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* ── Mobile Menu ── */}
          {mobileOpen && (
            <nav className="md:hidden border-t border-border pb-4 pt-2 animate-fade-in">
              {/* User info card */}
              <div className="flex items-center gap-3 px-3 py-3 mb-2 bg-secondary rounded-xl mx-1">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{user?.name || "User"}</p>
                  <p className="text-xs text-muted-foreground">{user?.email}</p>
                </div>
              </div>

              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`flex items-center gap-3 px-3 py-3.5 mx-1 rounded-xl text-[15px] font-semibold transition-colors ${
                      active
                        ? "text-primary bg-primary/5 border-l-[3px] border-accent pl-[10px]"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}

              {isAdmin && (
                <Link
                  to="/admin"
                  className="flex items-center gap-3 px-3 py-3.5 mx-1 rounded-xl text-[15px] font-semibold text-red-600 hover:bg-red-50 transition"
                >
                  <Shield className="w-4 h-4" /> Admin Panel
                </Link>
              )}

              <div className="mt-3 mx-1 pt-3 border-t border-border">
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-red-50 text-red-600 text-[15px] font-semibold rounded-xl hover:bg-red-100 transition"
                >
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* ── Page content ── */}
      <main className="flex-1 pt-[64px]">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
