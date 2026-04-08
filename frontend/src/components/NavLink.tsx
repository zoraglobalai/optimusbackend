import CourseLayout from "./CourseLayout";

export default function Masters() {
  return (
    <CourseLayout
      title="Master’s Programs Abroad"
      intro="Our Master’s programs help students gain advanced knowledge,
      international exposure and global career opportunities."
      programs={[
        "MBA – Master of Business Administration",
        "MS – Master of Science",
        "MSc – Science & Technology",
        "MEng – Engineering",
        "MIM – Management",
        "MPH – Public Health",
      ]}
    />
  );
}
