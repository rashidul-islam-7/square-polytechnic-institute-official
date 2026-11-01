"use client";

import React from "react";
import {
  FaArrowRight,
  FaBookOpen,
  FaCheck,
  FaRegClock,
  FaRegLightbulb,
  FaStar,
  FaUsers,
} from "react-icons/fa6";

import TitleStyle from "../UI/TitleStyle";
import SectionTopSubTitle from "../UI/SectionTopSubTitle";
import Link from "next/link";
import { ComputerIcon } from "lucide-react";
import CustomIcon from "../UI/CustomIcon";

const courses = [
  {
    id: 1,
    duration: "৩ মাস",
    level: "Basic Training",
    title: "Computer Office Application",
    subtitle: "কম্পিউটার অফিস অ্যাপ্লিকেশন",
    description:
      "কম্পিউটারের মৌলিক ব্যবহার, অফিস সফটওয়্যার, টাইপিং এবং ইন্টারনেট ব্যবহারের প্রয়োজনীয় দক্ষতা অর্জন করুন।",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
    modules: [
      "Computer Fundamentals",
      "MS Word",
      "MS Excel",
      "MS PowerPoint",
      "Artifacial Intaligent (AI)",
      "Internet & Email",
      "বাংলা ও ইংরেজি টাইপিং",
    ],
    audience:
      "নতুন শিক্ষার্থী, চাকরিপ্রত্যাশী অফিসিয়াল কাজ ও কম্পিউটার শিখতে আগ্রহী",
    accent: "bg-[#44A1A4]",
    light: "bg-[#44A1A4]/10",
    text: "text-[#287E81]",
  },
  {
    id: 2,
    duration: "৬ মাস",
    level: "Extended Training",
    title: "Computer Office Application",
    subtitle: "কম্পিউটার অফিস অ্যাপ্লিকেশন",
    description:
      "বিস্তারিত ব্যবহারিক অনুশীলন, অফিস ডকুমেন্ট তৈরি, Excel-এর কাজ এবং দৈনন্দিন কম্পিউটার ব্যবহারের দক্ষতা গড়ে তুলুন।",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    modules: [
      "Computer Fundamentals",
      "Advance MS Word",
      "Advance MS Excel & Formulas",
      "Advance MS PowerPoint Presentation",
      "Artifacial Intaligent (AI)",
      "Internet, Email & Online Applications",
      "বাংলা ও ইংরেজি টাইপিং",
      "Office Practical Projects",
    ],
    audience: "শিক্ষার্থী, চাকরিপ্রত্যাশী ও অফিসিয়াল কাজ শিখতে আগ্রহী",
    accent: "bg-[#FF9A00]",
    light: "bg-[#FF9A00]/10",
    text: "text-[#D77E00]",
  },
];

function CourseCard({ course }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#44A1A4]/40 ">
      {/* Top Accent */}
      <div className={`h-1 ${course.accent}`} />

      {/* Image */}
      <div className="relative overflow-hidden h-44 md:h-64">
        <img
          src={course.image}
          alt={`${course.duration} মেয়াদি কম্পিউটার প্রশিক্ষণ`}
          loading="lazy"
          className="h-full w-full object-cover "
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#142F32]/90 via-[#142F32]/20 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#224248] shadow-sm">
            <FaRegClock className="text-[#44A1A4]" />
            {course.duration}
          </span>

          <span className="rounded-full border border-white/30 bg-gray-400/30 px-3 py-1.5 text-xs font-semibold  backdrop-blur-md">
            {course.level}
          </span>
        </div>

        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="text-xl font-extrabold leading-tight text-white sm:text-2xl">
            {course.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-white/80">
            {course.subtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 ">
        {/* Description */}
        <p className="text-sm leading-6 text-slate-600">{course.description}</p>

        {/* Modules */}
        <div className="mt-5">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="flex items-center gap-2 text-sm font-extrabold text-[#224248]">
              <FaBookOpen className="text-[#44A1A4]" />
              কোর্সে যা শিখবেন
            </h4>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-500">
              {course.modules.length} Modules
            </span>
          </div>

          <div className="grid grid-cols-1 gap-x-3 gap-y-2 sm:grid-cols-2">
            {course.modules.map((module) => (
              <div key={module} className="flex items-start gap-2">
                <span
                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${course.light} ${course.text}`}
                >
                  <FaCheck className="text-[9px]" />
                </span>

                <span className="text-xs leading-5 text-slate-600">
                  {module}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Audience */}
        <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#F4F8F8] p-3">
          <FaUsers className="mt-0.5 shrink-0 text-[#44A1A4]" />

          <div>
            <p className="text-xs font-extrabold text-[#224248]">
              কাদের জন্য এই কোর্স?
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-600">
              {course.audience}
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-auto pt-5">
          <Link
            href={`/contact?course=${
              course.id === 1
                ? "3-month-office-application"
                : "6-month-office-application"
            }`}
            className="group/btn flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#224248] px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#2f7072] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44A1A4] focus-visible:ring-offset-2"
          >
            ভর্তি সম্পর্কে জানুন
            <FaArrowRight className="text-xs transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Course() {
  return (
    <section
      id="courses"
      className="scroll-mt-20 bg-slate-50 px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-9 flex flex-col items-center justify-center text-center">
          <SectionTopSubTitle text="Our Short Courses" icon={FaStar} />

          <TitleStyle
            title="আপনার জন্য সঠিক "
            highlightedTitle="কোর্সটি বেছে নিন"
          />

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            আপনার সময় ও শেখার প্রয়োজন অনুযায়ী বেছে নিন ৩ মাসের অথবা ৬ মাসের
            Computer Office Application কোর্স।
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-7">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Important Note */}
        <div className="mx-auto mt-7 flex max-w-3xl items-start gap-3 rounded-xl border border-[#FF9A00]/25 bg-[#FF9A00]/5 p-4">
          <FaRegLightbulb className="mt-1 shrink-0 text-lg text-[#FF9A00]" />

          <p className="text-xs leading-6 text-slate-700 sm:text-sm">
            কোর্স ফি এবং ক্লাসের সময়সূচি সম্পর্কে ভর্তি হওয়ার আগে নিশ্চিত হয়ে
            নিন।
          </p>
        </div>
      </div>
    </section>
  );
}
