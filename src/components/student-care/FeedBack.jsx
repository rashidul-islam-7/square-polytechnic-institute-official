import React from "react";
import Link from "next/link";

import {
  FaArrowRight,
  FaBed,
  FaBriefcase,
  FaBookOpen,
  FaBus,
  FaCheck,
  FaChalkboardTeacher,
  FaCommentDots,
  FaExclamationCircle,
  FaFileAlt,
  FaFutbol,
  FaGraduationCap,
  FaHandshake,
  FaInfoCircle,
  FaLaptopCode,
  FaLeaf,
  FaLightbulb,
  FaMicrophone,
  FaMusic,
  FaPlay,
  FaUserTie,
  FaUsers,
  FaAward,
} from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";
import SectionTopSubTitle from "../UI/SectionTopSubTitle";
import TitleStyle from "../UI/TitleStyle";

const IMG = {
  academic:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=85",
  lecture:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&q=85",
  assignment:
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1000&q=85",
  career:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85",
  internship:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&q=85",
  placement:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=85",
  skill:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&q=85",
  sports:
    "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=1000&q=85",
  cultural:
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1000&q=85",
  club: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&q=85",
  seminar:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&q=85",
  tour: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=85",
  tourVideo:
    "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1000&q=85",
  hostel:
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=85",
};

const focusRing =
  "focus:outline-none focus-visible:ring-4 focus-visible:ring-[#44A1A4]/50 focus-visible:ring-offset-2";

const feedbackActions = [
  {
    icon: FaExclamationCircle,
    title: "অভিযোগ জানান",
    text: "কোনো সমস্যা বা অসুবিধার কথা আমাদের জানান।",
    href: "/feedback?type=complaint",
  },
  {
    icon: FaCommentDots,
    title: "মতামত দিন",
    text: "আপনার অভিজ্ঞতা ও মূল্যবান মতামত আমাদের সঙ্গে শেয়ার করুন।",
    href: "/feedback?type=opinion",
  },
  {
    icon: FaLightbulb,
    title: "পরামর্শ পাঠান",
    text: "প্রতিষ্ঠানের উন্নয়নে আপনার নতুন ভাবনা ও পরামর্শ জানান।",
    href: "/feedback?type=suggestion",
  },
];

const ComplaintFeedback = () => {
  return (
    <section
      aria-labelledby="feedback"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="relative overflow-hidden rounded-3xl bg-[#224248] p-7 sm:p-10 lg:p-14">
        <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border-[35px] border-white/5" />

        <div className="pointer-events-none absolute -bottom-28 right-48 h-64 w-64 rounded-full border-[35px] border-[#44A1A4]/10" />

        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionTopSubTitle text="Feedback " />
            <TitleStyle title="আপনার মতামত আমাদের কাছে গুরুত্বপূর্ণ" />

            <p>
              শিক্ষার্থীদের সমস্যা, অভিজ্ঞতা ও পরামর্শ আমাদের সেবার মান উন্নত
              করতে সাহায্য করে। যেকোনো বিষয়ে আপনার কথা আমাদের জানাতে পারেন।
            </p>

            <p className="mt-5 text-sm leading-7 text-white/60">
              আপনার পাঠানো ব্যক্তিগত তথ্য যথাযথ গোপনীয়তার সঙ্গে ব্যবস্থাপনা করা
              হবে।
            </p>
          </div>

          <ul className="grid gap-3">
            {feedbackActions.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={`group flex items-center gap-4 rounded-2xl bg-white/10 p-4 text-white transition hover:bg-white hover:text-[#224248] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 sm:p-5`}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#44A1A4] text-white">
                      <Icon size={18} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-bold">
                        {item.title}
                      </span>

                      <span className="mt-1 block text-sm leading-6 text-white/65 transition group-hover:text-gray-600">
                        {item.text}
                      </span>
                    </span>

                    <FaArrowRight
                      size={14}
                      className="shrink-0 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComplaintFeedback;
