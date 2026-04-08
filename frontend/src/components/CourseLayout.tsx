import { motion } from "framer-motion";

interface CourseLayoutProps {
  title: string;
  intro: string;
  programs: string[];
}

export default function CourseLayout({
  title,
  intro,
  programs,
}: CourseLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="container-custom py-28"
    >
      <h1 className="text-5xl font-bold text-[#0b2c5d] mb-6">{title}</h1>
      <p className="text-xl text-gray-600 mb-16 max-w-3xl">{intro}</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {programs.map((program) => (
          <div
            key={program}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border hover:border-[#cfa548]/30"
          >
            <h3 className="font-semibold text-lg text-[#0b2c5d] mb-2">
              {program}
            </h3>
            <p className="text-gray-500 text-sm">
              Available at globally ranked universities with full admission
              support.
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
