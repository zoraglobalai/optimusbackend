// Mock blog data - field names match backend model exactly.
// REPLACE with real API responses when backend is ready.
// See: src/services/blogService.ts for swap points.

import { Blog } from "@/types/blog";

export const mockBlogs: Blog[] = [
  {
    id: 1,
    website_id: 1,
    category_id: 1,
    author_id: 1,
    title: "Top 10 Countries to Study Abroad in 2025",
    slug: "top-countries-study-abroad-2025",
    excerpt:
      "The country you choose shapes not just your degree, but your career trajectory, cultural experience and long-term immigration options. In 2025, the global education landscape has evolved significantly - here is everything you need to make the right choice.",
    content: `
<h2>Why Choosing the Right Country Matters</h2>
<p>The country you study in shapes not just your degree, but your entire career trajectory, cultural experience and long-term immigration options. In 2025, with more countries actively opening doors to international students, making the right decision has never been more important - or more complex.</p>
<p>This guide ranks the top 10 destinations based on four core factors: <strong>education quality, total cost, post-study work rights and visa success rate for Indian students.</strong></p>

<h2>1. Canada - Best for Post-Study Work &amp; Immigration</h2>
<p>Canada remains the top choice for Indian students and for good reason. World-class universities, a multicultural society and the clearest post-study immigration pathway in the world make it the gold standard.</p>
<ul>
  <li>Annual tuition: CAD 20,000 – 35,000</li>
  <li>Post-study work permit (PGWP): Up to 3 years</li>
  <li>Top universities: University of Toronto, UBC, McGill, McMaster</li>
  <li>Popular programmes: Engineering, Computer Science, Business, Nursing, Data Science</li>
  <li>Path to PR: Express Entry, PNP streams - fastest route for international graduates</li>
</ul>

<h2>2. Germany - Best for No Tuition Fees</h2>
<p>Germany is a dream destination for budget-conscious students. Public universities charge little to no tuition, making it one of the most affordable quality education destinations in the world.</p>
<ul>
  <li>Tuition at public universities: €0 – €500 per semester (admin fee only)</li>
  <li>Over 20,000 English-taught programmes available</li>
  <li>Post-study stay: 18-month job-seeker visa</li>
  <li>Best for: Engineering, Sciences, Architecture, Business</li>
</ul>

<h2>3. United Kingdom - Prestigious Degrees, Shorter Duration</h2>
<p>UK degrees are globally recognised and typically shorter than their counterparts. Most Masters programmes are completed in just <strong>12 months</strong>, reducing total costs significantly.</p>
<ul>
  <li>Annual tuition: GBP 10,000 – 30,000</li>
  <li>Post-study work: Graduate Route Visa - 2 years (3 years for PhD graduates)</li>
  <li>Top universities: Oxford, Cambridge, Imperial College, LSE, UCL, Edinburgh</li>
</ul>

<h2>4. Australia - Work While You Study</h2>
<p>Australia allows international students to work <strong>up to 48 hours per fortnight</strong> during term time - one of the most generous work rights globally.</p>
<ul>
  <li>Annual tuition: AUD 20,000 – 45,000</li>
  <li>Post-study work visa: 2 – 4 years depending on institution location</li>
  <li>Top universities: ANU, University of Melbourne, University of Sydney, Monash</li>
</ul>

<h2>5. United States - World's Top Research Universities</h2>
<p>The USA is home to the largest number of top-ranked universities in the world. If research, innovation and entrepreneurship are your goals, no other destination competes.</p>
<ul>
  <li>Annual tuition: USD 25,000 – 60,000</li>
  <li>Post-study work: OPT - 1 year (STEM programmes: 3 years)</li>
  <li>Top universities: MIT, Stanford, Harvard, Caltech, Carnegie Mellon</li>
</ul>

<h2>6. Ireland - Europe's Fastest-Growing Tech Hub</h2>
<p>Ireland has become a strategic destination thanks to its booming tech economy. Google, Meta, Apple and LinkedIn all have their European headquarters here.</p>
<ul>
  <li>Annual tuition: EUR 10,000 – 25,000</li>
  <li>Post-study stay: Third Level Graduate Programme - up to 2 years</li>
  <li>Best for: Computer Science, Business, Pharma, Finance</li>
</ul>

<h2>7. New Zealand - Safe, Scenic &amp; Student-Friendly</h2>
<p>New Zealand offers a high quality of life, safe campuses and welcoming communities. It is an increasingly popular alternative to Australia for Indian students.</p>

<h2>8. France - Culture, Commerce and Affordable Excellence</h2>
<p>France offers some of the best business schools in the world (HEC Paris, INSEAD) alongside affordable public university tuition. France is also one of Europe's most international student hubs.</p>

<h2>9. Netherlands - English-Taught, Globally Networked</h2>
<p>Over 2,000 English-taught degree programmes, a central European location and a strong international job market make the Netherlands a rising star for Indian students.</p>

<h2>10. Singapore - Asia's Education Capital</h2>
<p>For students who want a top-tier English-medium education within Asia, Singapore is unmatched. NUS and NTU consistently rank among the top 15 universities globally.</p>

<h2>How to Choose the Right Country for You</h2>
<p>There is no single "best" country - the right choice depends on your programme, budget, career goals and preferred lifestyle. Here is a quick framework:</p>
<ul>
  <li><strong>Budget-first?</strong> → Germany or France</li>
  <li><strong>Fastest immigration pathway?</strong> → Canada</li>
  <li><strong>Prestige &amp; research?</strong> → USA or UK</li>
  <li><strong>Work while studying?</strong> → Australia or New Zealand</li>
  <li><strong>Tech career in Europe?</strong> → Ireland or Netherlands</li>
</ul>
<p>Consult with an Optimus counsellor to get a personalised roadmap based on your profile, budget and target universities.</p>
    `,
    featured_image: null,
    banner_image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&q=80",
    status: "published",
    visibility: "public",
    is_featured: true,
    allow_comments: true,
    published_at: "2026-03-24T10:00:00Z",
    scheduled_at: null,
    meta_title: "Top 10 Countries to Study Abroad in 2025 | Optimus Overseas Education",
    meta_description:
      "Discover the best countries to study abroad in 2025. Compare education quality, tuition costs, visa success rates and post-study work options.",
    meta_keywords:
      "best countries to study abroad, study abroad 2025, overseas education destinations, student visa countries",
    canonical_url: "https://www.optimusoverseasedu.com/blog/top-countries-study-abroad-2025",
    og_title: "Top 10 Countries to Study Abroad in 2025",
    og_description: "From Canada to Germany - explore the best study abroad destinations for 2025.",
    og_image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&q=80",
    created_at: "2026-03-24T10:00:00Z",
    updated_at: "2026-03-26T08:30:00Z",
  },

  {
    id: 2,
    website_id: 1,
    category_id: 2,
    author_id: 1,
    title: "MBBS Abroad: Complete Guide for Indian Students in 2025",
    slug: "mbbs-abroad-guide-indian-students-2025",
    excerpt:
      "Pursuing MBBS abroad has become a viable and popular route for Indian students who miss the NEET cutoff or want more affordable medical education. This comprehensive guide covers everything from top countries to admission requirements.",
    content: `
<h2>Why MBBS Abroad?</h2>
<p>With only around 100,000 MBBS seats available in India for over 2 million NEET applicants each year, competition is fierce. Studying MBBS abroad offers a credible, internationally recognised alternative - especially in countries like Russia, Ukraine, Philippines, Kyrgyzstan, Kazakhstan and Georgia.</p>

<h2>Key Benefits of MBBS Abroad</h2>
<ul>
  <li>No donation or capitation fees</li>
  <li>NMC (National Medical Commission) recognised universities</li>
  <li>Affordable tuition - USD 3,000 to USD 8,000 per year in many countries</li>
  <li>English-medium instruction</li>
  <li>Eligible to appear for FMGE / NEXT exam in India after completing degree</li>
</ul>

<h2>Top Countries for MBBS Abroad</h2>

<h3>1. Russia</h3>
<p>Russia has been a top MBBS destination for Indian students for over two decades. With over 40 NMC-recognised medical universities, affordable fees and high-quality clinical exposure, it remains one of the most popular choices.</p>
<ul>
  <li>Annual fees: USD 3,500 – 6,500</li>
  <li>Duration: 6 years (including internship)</li>
  <li>Top universities: Sechenov University, Kazan Federal University, Peoples' Friendship University</li>
</ul>

<h3>2. Philippines</h3>
<p>The Philippines follows a US-based medical education curriculum, which is ideal for students who also wish to pursue USMLE. The medium of instruction is English throughout.</p>
<ul>
  <li>Annual fees: USD 4,000 – 7,000</li>
  <li>Top universities: University of Santo Tomas, Cebu Institute of Medicine, AMA School of Medicine</li>
</ul>

<h3>3. Georgia</h3>
<p>Georgia has emerged as a fast-growing destination with modern infrastructure and well-ranked medical universities. The cost of living is low and visa processing is simple for Indian students.</p>

<h3>4. Kyrgyzstan &amp; Kazakhstan</h3>
<p>Both Central Asian countries offer very low tuition costs and NMC-recognised medical programmes. They are ideal for students with a tight budget who still want a quality medical education.</p>

<h2>FMGE / NEXT Exam - What You Need to Know</h2>
<p>After completing MBBS abroad, Indian students must pass the <strong>FMGE (Foreign Medical Graduates Examination)</strong> - soon to be replaced by <strong>NEXT (National Exit Test)</strong> - to practice medicine in India.</p>
<p>FMGE pass rates vary significantly by country and university. Work with a counsellor to choose a university with a strong FMGE track record for Indian graduates.</p>

<h2>Eligibility Requirements</h2>
<ul>
  <li>Must have appeared for NEET and obtained a valid score</li>
  <li>Minimum 50% in Physics, Chemistry, Biology in Class 12</li>
  <li>Age: 17 years and above at time of admission</li>
</ul>

<h2>How Optimus Can Help</h2>
<p>Optimus Overseas Education has helped hundreds of Indian students secure MBBS seats in NMC-recognised universities abroad. We handle everything from university selection and application to visa processing and pre-departure briefing.</p>
    `,
    featured_image: null,
    banner_image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    status: "published",
    visibility: "public",
    is_featured: false,
    allow_comments: true,
    published_at: "2026-03-28T09:00:00Z",
    scheduled_at: null,
    meta_title: "MBBS Abroad Guide for Indian Students 2025 | Optimus Overseas Education",
    meta_description:
      "Complete guide to studying MBBS abroad in 2025. Learn about top countries, NMC-recognised universities, fees, FMGE requirements and how to apply.",
    meta_keywords:
      "MBBS abroad, MBBS abroad for Indian students, NMC recognised universities, FMGE exam, study medicine abroad 2025",
    canonical_url: "https://www.optimusoverseasedu.com/blog/mbbs-abroad-guide-indian-students-2025",
    og_title: "MBBS Abroad: Complete Guide for Indian Students in 2025",
    og_description:
      "Everything Indian students need to know about pursuing MBBS abroad - countries, fees, FMGE and more.",
    og_image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    created_at: "2026-03-28T09:00:00Z",
    updated_at: "2026-03-30T11:00:00Z",
  },

  {
    id: 3,
    website_id: 1,
    category_id: 3,
    author_id: 2,
    title: "Scholarships for Indian Students Studying Abroad in 2025",
    slug: "scholarships-indian-students-abroad-2025",
    excerpt:
      "Funding your overseas education is more achievable than you think. From government scholarships to university merit awards, there are hundreds of options available for Indian students willing to invest time in the application process.",
    content: `
<h2>Why Scholarships Matter</h2>
<p>The cost of overseas education - including tuition, accommodation and living expenses - can range from INR 20 lakhs to over INR 1 crore for a full degree. Scholarships can significantly reduce this burden and in some cases, cover costs entirely.</p>
<p>In 2025, several new scholarships have been introduced specifically targeting Indian students, in addition to the existing programmes from governments, universities and private foundations.</p>

<h2>Government Scholarships</h2>

<h3>1. National Overseas Scholarship (NOS) - Government of India</h3>
<p>Offered by the Ministry of Social Justice and Empowerment for SC/ST/OBC students pursuing Masters or PhD programmes abroad.</p>
<ul>
  <li>Coverage: Full tuition + living allowance + travel</li>
  <li>Eligible countries: All recognised universities globally</li>
  <li>Application: noslive.nic.in</li>
</ul>

<h3>2. Fulbright-Nehru Master's Fellowships - USA</h3>
<p>Administered by the United States-India Educational Foundation (USIEF), this prestigious fellowship funds Indian students pursuing a Master's degree at US universities.</p>
<ul>
  <li>Coverage: Tuition, stipend, travel, health insurance</li>
  <li>Duration: Up to 2 years</li>
  <li>Deadline: Usually July each year</li>
</ul>

<h3>3. Commonwealth Scholarships - UK</h3>
<p>For Indian students pursuing Masters or PhD at UK universities. Funded by the UK government through the Commonwealth Scholarship Commission.</p>
<ul>
  <li>Coverage: Full tuition + living allowance + airfare</li>
  <li>Best for: Development-focused subjects, research</li>
</ul>

<h2>University Merit Scholarships</h2>

<h3>Canada</h3>
<ul>
  <li><strong>University of Toronto International Scholar Award</strong> - up to CAD 25,000</li>
  <li><strong>UBC International Major Entrance Scholarship</strong> - up to CAD 40,000</li>
  <li><strong>McGill Entrance Scholarship</strong> - up to CAD 12,000</li>
</ul>

<h3>UK</h3>
<ul>
  <li><strong>Chevening Scholarship</strong> - full scholarship for Masters in the UK</li>
  <li><strong>University of Edinburgh Global Scholarships</strong> - various amounts</li>
  <li><strong>Imperial College Scholarships</strong> - competitive merit awards</li>
</ul>

<h3>Australia</h3>
<ul>
  <li><strong>Australia Awards Scholarships</strong> - full government-funded scholarships</li>
  <li><strong>Destination Australia Scholarship</strong> - for regional universities</li>
  <li><strong>University of Melbourne Graduate Research Scholarships</strong></li>
</ul>

<h2>How to Apply for Scholarships</h2>
<ol>
  <li><strong>Start early</strong> - most deadlines are 6–12 months before the programme start date</li>
  <li><strong>Build a strong profile</strong> - grades, extracurriculars, leadership and community service matter</li>
  <li><strong>Write a compelling SOP</strong> - your Statement of Purpose is often the deciding factor</li>
  <li><strong>Get strong recommendations</strong> - letters from professors who know your work well</li>
  <li><strong>Apply to multiple sources</strong> - don't rely on a single scholarship</li>
</ol>

<h2>How Optimus Can Help</h2>
<p>Our scholarship advisors identify the scholarships you qualify for based on your academic profile, target country and programme. We assist with SOP writing, document preparation and application submission to maximise your chances of securing funding.</p>
    `,
    featured_image: null,
    banner_image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    status: "published",
    visibility: "public",
    is_featured: true,
    allow_comments: false,
    published_at: "2026-04-02T08:00:00Z",
    scheduled_at: null,
    meta_title: "Scholarships for Indian Students Abroad 2025 | Optimus Overseas Education",
    meta_description:
      "Explore top scholarships for Indian students studying abroad in 2025. Government scholarships, university merit awards and application tips.",
    meta_keywords:
      "scholarships for Indian students abroad, study abroad scholarship 2025, Fulbright scholarship India, Commonwealth scholarship India",
    canonical_url: "https://www.optimusoverseasedu.com/blog/scholarships-indian-students-abroad-2025",
    og_title: "Scholarships for Indian Students Studying Abroad in 2025",
    og_description:
      "Discover government scholarships, university merit awards and funding options available to Indian students studying abroad.",
    og_image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
    created_at: "2026-04-02T08:00:00Z",
    updated_at: "2026-04-03T10:00:00Z",
  },
];
