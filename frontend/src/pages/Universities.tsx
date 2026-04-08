import { useState, useMemo, useEffect } from "react";
import { Search, X, GraduationCap } from "lucide-react";
import Layout from "@/components/layout/Layout";

import universitiesData from "@/data/universities.json";

interface University {
  university_name: string;
  country: string;
  country_id: string;
  image_url: string;
}

const COUNTRIES = [
  { label: "All", value: "" },
  { label: "USA", value: "USA" },
  { label: "Canada", value: "Canada" },
  { label: "Australia", value: "Australia" },
  { label: "UK & Ireland", value: "UK & Ireland" },
  { label: "Europe", value: "Europe" },
  { label: "UAE", value: "UAE" },
];

const PAGE_SIZE = 24;

export default function Universities() {
  const [search, setSearch] = useState("");
  const [activeCountry, setActiveCountry] = useState("");
  const [page, setPage] = useState(1);
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());

  useEffect(() => {
    setPage(1);
  }, [search, activeCountry]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return (universitiesData as University[]).filter((u) => {
      if (u.university_name === "University Finder") return false;
      const matchSearch =
        !q ||
        u.university_name.toLowerCase().includes(q) ||
        u.country.toLowerCase().includes(q);
      const matchCountry = !activeCountry || u.country === activeCountry;
      return matchSearch && matchCountry;
    });
  }, [search, activeCountry]);

  const paginated = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = paginated.length < filtered.length;

  const handleImgError = (name: string) => {
    setImgErrors((prev) => new Set(prev).add(name));
  };

  const clearAll = () => {
    setSearch("");
    setActiveCountry("");
  };

  return (
    <Layout>
      <div className="page-transition">
        {/* ── Hero ── */}
        <section className="bg-primary py-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
                Partner Universities
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
                Find Your Dream University
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80">
                Explore our network of 500+ partner universities across the globe.
              </p>
            </div>
          </div>
        </section>

        {/* ── Filter Bar ── */}
        <section className=" top-0 z-40 bg-background border-b border-border shadow-sm">
          <div className="container-custom py-6">
            <div className="flex flex-col items-center gap-4">
              {/* Search — centered, wider */}
              <div className="relative w-full max-w-2xl">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search universities or countries…"
                  className="w-full pl-14 pr-12 py-4 text-base rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition shadow-sm"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Country Tabs — centered */}
              <div className="flex flex-wrap justify-center items-center gap-2">
                {COUNTRIES.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setActiveCountry(c.value)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                      activeCountry === c.value
                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                        : "bg-background text-foreground border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
                {(search || activeCountry) && (
                  <button
                    onClick={clearAll}
                    className="px-5 py-2.5 rounded-full text-sm font-medium text-accent border border-accent hover:bg-accent hover:text-white transition-all duration-200"
                  >
                    Clear All
                  </button>
                )}
              </div>

            
            </div>
          </div>
        </section>

        {/* ── Grid ── */}
        <section className="py-8 bg-secondary">
          <div className="container-custom">
            {paginated.length === 0 ? (
              <div className="text-center py-24">
                <GraduationCap className="w-16 h-16 text-muted-foreground/40 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  No universities found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter.
                </p>
                <button onClick={clearAll} className="btn-hero">
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {paginated.map((uni, idx) => (
                    <UniversityCard
                      key={`${uni.university_name}-${idx}`}
                      uni={uni}
                      hasError={imgErrors.has(uni.university_name)}
                      onImgError={() => handleImgError(uni.university_name)}
                    />
                  ))}
                </div>

                {hasMore && (
                  <div className="mt-10 text-center">
                    <button
                      onClick={() => setPage((p) => p + 1)}
                      className="btn-hero inline-flex items-center gap-2"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Can't Find Your University?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              We have partnerships with hundreds more. Talk to our counsellors
              to find the perfect match for you.
            </p>
            <a href="/contact" className="btn-hero">
              Get Free Consultation
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

// ─── Card Component ───────────────────────────────────────────────────────────────
function UniversityCard({
  uni,
  hasError,
  onImgError,
}: {
  uni: University;
  hasError: boolean;
  onImgError: () => void;
}) {
  return (
    <div className="card-elevated flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-5 group cursor-pointer min-h-[100px]">
      {/* Logo */}
      <div className="flex-shrink-0 w-24 h-24 rounded-xl bg-white border border-border flex items-center justify-center overflow-hidden shadow-sm p-3">
        {hasError ? (
          <GraduationCap className="w-8 h-8 text-primary/30" />
        ) : (
          <img
            src={uni.image_url}
            alt={uni.university_name}
            onError={onImgError}
            className="w-auto h-auto max-w-[88px] max-h-[56px] object-contain"
            loading="lazy"
            decoding="async"
            style={{ imageRendering: "auto" }}
          />
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 min-w-0 flex-1">
        <p className="text-sm font-semibold text-foreground leading-snug line-clamp-3">
          {uni.university_name}
        </p>
        <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full border border-primary/15">
          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
          {uni.country}
        </span>
      </div>
    </div>
  );
}
