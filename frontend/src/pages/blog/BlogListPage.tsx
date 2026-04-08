import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Search, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import { Blog } from "@/types/blog";
import { getActiveBlogs } from "@/services/blogService";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const BlogListPage = () => {
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getActiveBlogs()
      .then((blogData) => {
        setAllBlogs(blogData);
        setBlogs(blogData);
      })
      .catch((error) => {
        console.error("Failed to load blogs:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    if (!q.trim()) {
      setBlogs(allBlogs);
      return;
    }
    const lower = q.trim().toLowerCase();
    setBlogs(
      allBlogs.filter(
        (b) =>
          b.title.toLowerCase().includes(lower) ||
          (b.excerpt ?? "").toLowerCase().includes(lower)
      )
    );
  };

  return (
    <>
      {/* ── SEO ── */}
      <Helmet>
        <title>Blogs | Overseas Education Insights – Optimus</title>
        <meta name="description" content="Read expert articles on studying abroad, student visas, scholarships, MBBS abroad and more from the Optimus Overseas Education blog." />
        <meta name="keywords" content="study abroad blog, overseas education articles, student visa tips, MBBS abroad guide, scholarships for Indian students" />
        <link rel="canonical" href="https://www.optimusoverseasedu.com/blog" />
        <meta property="og:title" content="Blogs | Optimus Overseas Education" />
        <meta property="og:description" content="Expert insights on studying abroad, student visas, scholarships and more." />
        <meta property="og:url" content="https://www.optimusoverseasedu.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.optimusoverseasedu.com/og/optimus-footer.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs | Optimus Overseas Education" />
        <meta name="twitter:description" content="Expert insights on studying abroad, student visas, scholarships and more." />
        <meta name="twitter:image" content="https://www.optimusoverseasedu.com/og/optimus-footer.jpeg" />
      </Helmet>

      <Navbar />

      <section className="pt-20 pb-20 bg-[#f8fafc]">
        <div className="container-custom">

          {/* ── Page header ── */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl font-bold text-primary mb-4">Overseas Education Blog</h1>
            <p className="text-gray-600 text-lg">
              Expert insights, guides and tips to help you plan your international education journey with confidence.
            </p>
          </div>

          {/* ── Search bar ── */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search articles by title or keyword..."
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:border-primary transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* ── Loading skeleton ── */}
          {loading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-5 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Blog grid ── */}
          {!loading && blogs.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.slug}`}
                  className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <div className="h-48 bg-gray-100 overflow-hidden relative">
                    {(blog.featured_image ?? blog.banner_image) ? (
                      <img
                        src={blog.featured_image ?? blog.banner_image!}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary to-accent opacity-20" />
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-3 leading-snug line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* Date + CTA */}
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                      <span className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(blog.published_at ?? blog.created_at)}
                      </span>
                      <span className="text-primary font-semibold text-sm">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* ── No results ── */}
          {!loading && blogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No articles found.</p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogListPage;
