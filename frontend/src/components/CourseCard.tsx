import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  countries: string;
  link: string;
}

export default function CourseCard({
  title,
  description,
  duration,
  countries,
  link,
}: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl border border-transparent hover:border-[#cfa548]/40 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#cfa548]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

      <h3 className="text-2xl font-semibold text-[#0b2c5d] mb-4 relative z-10">
        {title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
        {description}
      </p>

      <div className="text-sm text-gray-500 space-y-2 mb-6 relative z-10">
        <p><strong>Duration:</strong> {duration}</p>
        <p><strong>Countries:</strong> {countries}</p>
      </div>

      <Link
        to={link}
        className="inline-flex items-center gap-2 font-semibold text-[#0b2c5d] relative z-10"
      >
        Explore Programs
        <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
