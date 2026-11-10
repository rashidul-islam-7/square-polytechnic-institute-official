import Link from "next/link";

import {
  FaArrowRight,
  FaCalendarDays,
  FaClipboardList,
  FaFileLines,
  FaGraduationCap,
  FaBookOpen,
  FaUsers,
  FaBullhorn,
  FaCalendarCheck,
  FaBolt,
} from "react-icons/fa6";

import SectionTopSubTitle from "../UI/SectionTopSubTitle";
import CustomIcon from "../UI/CustomIcon";

const quickLinks = [
  // {
  //   icon: FaCalendarDays,
  //   title: "Class Routine",
  //   subtitle: "View your class schedule and timing.",
  //   href: "/class-routine",
  //   number: "01",
  // },
  // {
  //   icon: FaCalendarCheck,
  //   title: "Exam Routine",
  //   subtitle: "Check upcoming examination schedules.",
  //   href: "/exam-routine",
  //   number: "02",
  // },
  // {
  //   icon: FaClipboardList,
  //   title: "Suggestion Box",
  //   subtitle: "Share your ideas and suggestions.",
  //   href: "/study-suggestion",
  //   number: "03",
  // },
  {
    icon: FaFileLines,
    title: "Previous Questions",
    subtitle: "Explore previous year question papers.",
    href: "/old-question-papers",
    number: "04",
  },
  {
    icon: FaBookOpen,
    title: "Syllabus & Booklist",
    subtitle: "Explore syllabus and recommended books.",
    href: "/syllabus-booklist",
    number: "06",
  },
  // {
  //   icon: FaGraduationCap,
  //   title: "Results",
  //   subtitle: "Check your examination results.",
  //   href: "/result",
  //   number: "05",
  // },

  // {
  //   icon: FaUsers,
  //   title: "Student Activities",
  //   subtitle: "Explore campus activities and events.",
  //   href: "/student-activities",
  //   number: "07",
  // },
  // {
  //   icon: FaBullhorn,
  //   title: "Notice Board",
  //   subtitle: "Stay updated with college announcements.",
  //   href: "/notices",
  //   number: "08",
  // },
];

export default function QuickAccess() {
  return (
    <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-14 lg:py-16">
      {/* Section Heading */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span>
            <SectionTopSubTitle text="Quick Access" icon={FaBolt} />
          </span>

          <h2 className="mt-2 text-3xl font-bold text-[#224248] sm:text-4xl ">
            Quick Access
          </h2>

          <p className="mt-2 max-w-xl leading-7 text-gray-500">
            শিক্ষার্থীদের প্রয়োজনীয় একাডেমিক তথ্য ও সেবা সমূহ।
          </p>
        </div>
      </div>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickLinks.map((item) => (
          <Link
            href={item.href}
            key={item.number}
            className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white p-5
            shadow-[0_4px_20px_rgba(34,66,72,0.04)]"
          >
            {/* Icon */}
            <CustomIcon icon={item.icon} size={18} />

            {/* Content */}
            <div className="mt-3">
              <h3 className="text-base font-bold text-[#224248]">
                {item.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-600 mb-3">
                {item.subtitle}
              </p>
            </div>

            {/* Bottom Link */}
            <div className=" flex items-center justify-between border-t border-gray-100 pt-3">
              <span className="text-xs font-semibold text-[#44A1A4]">
                Explore Now
              </span>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F2F9F8] text-[12px] text-[#44A1A4] transition-all duration-300 hover:bg-[#ff9a00] group-hover:text-[#224248]">
                <FaArrowRight />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
