import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, ArrowLeft, User } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import { Blog } from "@/types/blog";
import { getBlogBySlug, getActiveBlogs } from "@/services/blogService";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [recentArticles, setRecentArticles] = useState<Blog[]>([]);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    Promise.all([getBlogBySlug(slug), getActiveBlogs()])
      .then(([data, all]) => {
        setBlog(data);

        const twoWeeksAgo = new Date();
        twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
        const recent = all
          .filter(
            (b) =>
              b.slug !== slug &&
              b.published_at !== null &&
              new Date(b.published_at) >= twoWeeksAgo
          )
          .sort((a, b) =>
            new Date(b.published_at!).getTime() - new Date(a.published_at!).getTime()
          )
          .slice(0, 5);
        setRecentArticles(recent);
      })
      .catch((error) => {
        console.error("Failed to load blog detail:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <>
        <Navbar />
        <section className="pt-20 pb-20 bg-[#f8fafc]">
          <div className="container-custom max-w-4xl animate-pulse space-y-6">
            <div className="h-5 bg-gray-200 rounded w-24" />
            <div className="h-9 bg-gray-200 rounded w-3/4" />
            <div className="h-5 bg-gray-200 rounded w-1/2" />
            <div className="h-80 bg-gray-200 rounded-2xl" />
            <div className="space-y-3 pt-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="h-4 bg-gray-200 rounded" style={{ width: `${85 + (n % 3) * 5}%` }} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Helmet>
          <title>Blog Not Found | Optimus Overseas Education</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Navbar />
        <section className="pt-20 pb-20">
          <div className="container-custom max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 text-lg mb-8">
              The article you are looking for does not exist or has been removed.
            </p>
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Back to all blogs
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  // SEO — use meta_* fields, fall back to content fields
  const pageTitle = blog.meta_title ?? `${blog.title} | Optimus Overseas Education`;
  const pageDescription = blog.meta_description ?? blog.excerpt ?? "";
  const pageKeywords = blog.meta_keywords ?? "";
  const canonicalUrl = blog.canonical_url ?? `https://www.optimusoverseasedu.com/blog/${blog.slug}`;
  const ogTitle = blog.og_title ?? blog.title;
  const ogDescription = blog.og_description ?? blog.excerpt ?? "";
  const ogImage = blog.og_image ?? blog.banner_image ?? "https://www.optimusoverseasedu.com/og/optimus-footer.jpeg";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {pageKeywords && <meta name="keywords" content={pageKeywords} />}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <Navbar />

      <article className="pt-20 pb-20 bg-[#f8fafc]">
        <div className="container-custom">

          {/* Back link — full width above the grid */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all blogs
          </Link>

          {/* Two-column layout: article left, sidebar right */}
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">

            {/* ── Left: article content ── */}
            <div className="min-w-0">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-5 leading-tight">
                {blog.title}
              </h1>

              {/* published_at, updated_at, author */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
                {blog?.author && (
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-accent" />
                    {blog.author}
                  </span>
                )}
                {blog.published_at && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-accent" />
                    {formatDate(blog.published_at)}
                  </span>
                )}
              </div>

              {/* banner_image */}
              {blog.banner_image && (
                <div className="rounded-2xl overflow-hidden mb-8 shadow-md">
                  <img
                    src={blog.banner_image}
                    alt={blog.title}
                    className="w-full h-72 md:h-[420px] object-cover"
                  />
                </div>
              )}

              {/* featured_image (optional, shown below banner if different) */}
              {blog.featured_image && blog.featured_image !== blog.banner_image && (
                <div className="rounded-2xl overflow-hidden mb-8 shadow-md">
                  <img
                    src={blog.featured_image}
                    alt={blog.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}

              {/* excerpt */}
              {blog.excerpt && (
                <div className="bg-secondary/60 border-l-4 border-accent rounded-r-xl px-6 py-5 mb-8">
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg italic">
                    {blog.excerpt}
                  </p>
                </div>
              )}

              {/* content */}
              <div className="bg-white rounded-2xl px-8 py-10 shadow-md border border-gray-100 mb-8">
                {blog.content ? (
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                ) : (
                  <p className="text-gray-500 text-base">No content available.</p>
                )}
              </div>


            </div>

            {/* ── Right: sticky sidebar ── */}
            <div className="lg:sticky lg:top-20 flex flex-col gap-6">

              {/* Recent Articles widget */}
              {recentArticles.length > 0 && (
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h2 className="text-lg font-bold text-primary mb-4 pb-3 border-b border-gray-100">
                    Recent Articles
                  </h2>
                  <div className="flex flex-col gap-4">
                    {recentArticles.map((article) => (
                      <Link
                        key={article.id}
                        to={`/blog/${article.slug}`}
                        className="group flex gap-3 items-start hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors"
                      >
                        {/* Thumbnail */}
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                          {(article.featured_image ?? article.banner_image) ? (
                            <img
                              src={article.featured_image ?? article.banner_image!}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
                          )}
                        </div>
                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-primary leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                            {article.title}
                          </p>
                          {article.published_at && (
                            <span className="flex items-center gap-1 text-[11px] text-gray-400 mt-1.5">
                              <Calendar className="w-3 h-3" />
                              {new Date(article.published_at).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Consultation form */}
              <ConsultationForm compact />
            </div>

          </div>

          {/* CTA banner — full width below both columns */}
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary to-navy-light p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">
              Ready to start your study abroad journey?
            </h2>
            <p className="text-white/80 mb-6">
              Talk to an Optimus counsellor today — completely free.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200"
            >
              Book a Free Counselling
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </>
  );
};

export default BlogDetailPage;
