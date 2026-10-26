"use client";

import React from "react";
import {
  FaGraduationCap,
  FaRegClock,
  FaCheck,
  FaArrowRight,
  FaLaptop,
  FaBriefcase,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaGlobe,
  FaUsers,
  FaPhone,
  FaLocationDot,
  FaCircleCheck,
  FaRegLightbulb,
  FaClipboardCheck,
  FaChevronRight,
  FaDesktop,
  FaCertificate,
  FaBookOpen,
  FaStar,
} from "react-icons/fa6";

import { FaChalkboardTeacher } from "react-icons/fa";
import SectionTopSubTitle from "@/components/UI/SectionTopSubTitle";
import Btn from "@/components/UI/Btn";

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
    color: "blue",
    modules: [
      "Computer Fundamentals",
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Internet & Email",
      "বাংলা ও ইংরেজি টাইপিং",
    ],
    audience: "নতুন শিক্ষার্থী, চাকরিপ্রত্যাশী ও কম্পিউটার শিখতে আগ্রহীরা",
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
    color: "violet",
    modules: [
      "Computer Fundamentals & File Management",
      "Microsoft Word & Document Formatting",
      "Microsoft Excel & Formulas",
      "Microsoft PowerPoint Presentation",
      "Internet, Email & Online Applications",
      "বাংলা ও ইংরেজি টাইপিং",
      "Office Practical Projects",
    ],
    audience: "শিক্ষার্থী, চাকরিপ্রত্যাশী ও অফিসের কাজ শিখতে আগ্রহীরা",
  },
];

const software = [
  {
    name: "Microsoft Word",
    description: "ডকুমেন্ট, আবেদনপত্র ও অফিসিয়াল চিঠি তৈরি",
    icon: FaFileWord,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "Microsoft Excel",
    description: "হিসাব, টেবিল, ফর্মুলা ও ডেটা ব্যবস্থাপনা",
    icon: FaFileExcel,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    name: "PowerPoint",
    description: "প্রেজেন্টেশন ও স্লাইড তৈরি",
    icon: FaFilePowerpoint,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    name: "Internet & Email",
    description: "ইন্টারনেট ব্রাউজিং ও ইমেইল ব্যবহার",
    icon: FaGlobe,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

const highlights = [
  {
    icon: FaDesktop,
    number: "01",
    title: "আধুনিক কম্পিউটার ল্যাব",
    description:
      "কম্পিউটারে হাতে-কলমে অনুশীলনের মাধ্যমে বাস্তব কাজের দক্ষতা অর্জনের সুযোগ।",
    gradient: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-50 text-blue-700",
  },
  {
    icon: FaChalkboardTeacher,
    number: "02",
    title: "অভিজ্ঞ প্রশিক্ষক",
    description:
      "প্রশিক্ষকের নির্দেশনা, অনুশীলন এবং ধাপে ধাপে শেখার মাধ্যমে দক্ষতা উন্নয়ন।",
    gradient: "from-violet-500 to-purple-400",
    iconBg: "bg-violet-50 text-violet-700",
  },
  {
    icon: FaCertificate,
    number: "03",
    title: "সার্টিফিকেটের সুযোগ",
    description:
      "প্রযোজ্য অনুমোদন ও কোর্সের শর্ত অনুযায়ী সার্টিফিকেটের তথ্য ভর্তি অফিস থেকে জেনে নিন।",
    gradient: "from-emerald-500 to-teal-400",
    iconBg: "bg-emerald-50 text-emerald-700",
  },
];

const benefits = [
  {
    icon: FaLaptop,
    title: "ব্যবহারিক প্রশিক্ষণ",
    description: "কম্পিউটারে কাজ করার মাধ্যমে শেখা ও নিয়মিত অনুশীলনের সুযোগ।",
  },
  {
    icon: FaRegLightbulb,
    title: "দক্ষতা উন্নয়ন",
    description:
      "দৈনন্দিন কম্পিউটার ও অফিস অ্যাপ্লিকেশন ব্যবহারের দক্ষতা গড়ে তুলুন।",
  },
  {
    icon: FaBriefcase,
    title: "কর্মজীবনের প্রস্তুতি",
    description:
      "অফিসের সাধারণ কাজের জন্য প্রয়োজনীয় কম্পিউটার দক্ষতা অর্জন করুন।",
  },
  {
    icon: FaUsers,
    title: "শিক্ষার্থীবান্ধব পরিবেশ",
    description:
      "শুরু থেকে শেখার উপযোগী প্রশিক্ষণ পরিবেশে নিজের দক্ষতা বাড়ান।",
  },
];

const faqs = [
  {
    question: "কম্পিউটার কোর্সের মেয়াদ কত?",
    answer:
      "এখানে ৩ মাস ও ৬ মাসের Computer Office Application কোর্সের তথ্য দেওয়া হয়েছে। আপনার জন্য উপযুক্ত কোর্সটি বেছে নিতে যোগাযোগ করুন।",
  },
  {
    question: "আগে থেকে কম্পিউটার জানা কি জরুরি?",
    answer:
      "না, প্রাথমিক পর্যায় থেকে শেখার জন্য কোর্সটি উপযোগী করে পরিচালনা করা যেতে পারে। ভর্তি হওয়ার আগে বর্তমান ব্যাচের যোগ্যতা ও শর্ত জেনে নিন।",
  },
  {
    question: "কম্পিউটার ল্যাবের সুবিধা আছে কি?",
    answer:
      "ল্যাবের সরঞ্জাম, কম্পিউটারের সংখ্যা, ব্যবহারিক ক্লাসের সময় এবং সুবিধাগুলো সরাসরি ইনস্টিটিউট থেকে নিশ্চিত করে নিন।",
  },
  {
    question: "অভিজ্ঞ শিক্ষক দ্বারা প্রশিক্ষণ দেওয়া হয় কি?",
    answer:
      "প্রশিক্ষকদের যোগ্যতা ও অভিজ্ঞতা সম্পর্কে বিস্তারিত জানতে ভর্তি অফিসের সঙ্গে যোগাযোগ করুন।",
  },
  {
    question: "কোর্স শেষে সরকারি সার্টিফিকেট পাওয়া যাবে কি?",
    answer:
      "সার্টিফিকেট প্রদানকারী কর্তৃপক্ষ, স্বীকৃতি, অনুমোদন এবং যোগ্যতার শর্ত কোর্সভেদে ভিন্ন হতে পারে। ভর্তির আগে সরকারি স্বীকৃতি ও সার্টিফিকেটের বিষয়টি ইনস্টিটিউট থেকে নিশ্চিত হয়ে নিন।",
  },
  {
    question: "কোর্স ফি ও ক্লাসের সময় কীভাবে জানব?",
    answer:
      "কোর্স ফি, ক্লাসের সময়সূচি, ভর্তি শর্ত এবং চলমান ব্যাচের তথ্য জানতে সরাসরি যোগাযোগ করুন।",
  },
];

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div
        className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] ${
          light
            ? "border border-white/15 bg-white/10 text-blue-200"
            : "border border-blue-100 bg-blue-50 text-blue-700"
        }`}
      >
        <FaStar />
        {eyebrow}
      </div>

      <h2
        className={`text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mx-auto mt-5 max-w-2xl text-base leading-8 ${
          light ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function CourseCard({ course }) {
  const isBlue = course.color === "blue";

  const theme = isBlue
    ? {
        badge: "bg-blue-50 text-blue-700",
        icon: "bg-blue-100 text-blue-700",
        button: "bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500",
        accent: "text-blue-700",
        border: "hover:border-blue-200",
        glow: "from-blue-600 to-cyan-500",
      }
    : {
        badge: "bg-violet-50 text-violet-700",
        icon: "bg-violet-100 text-violet-700",
        button:
          "bg-violet-600 hover:bg-violet-700 focus-visible:ring-violet-500",
        accent: "text-violet-700",
        border: "hover:border-violet-200",
        glow: "from-violet-600 to-fuchsia-500",
      };

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${theme.border}`}
    >
      <div className={`h-1.5 bg-gradient-to-r ${theme.glow}`} />

      <div className="relative h-56 overflow-hidden sm:h-64">
        <img
          src={course.image}
          alt={`${course.duration} মেয়াদি কম্পিউটার প্রশিক্ষণ`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-transparent" />

        <div className="absolute left-5 top-5">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold shadow-sm ${theme.badge}`}
          >
            <FaRegClock />
            {course.duration} মেয়াদি কোর্স
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-sm font-semibold text-white/80">{course.level}</p>
          <h3 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">
            {course.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className={`text-sm font-extrabold ${theme.accent}`}>
          {course.subtitle}
        </p>

        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          {course.description}
        </p>

        <div className="mt-7">
          <h4 className="flex items-center gap-2 font-extrabold text-slate-900">
            <FaBookOpen className={theme.accent} />
            এই কোর্সে যা শিখবেন
          </h4>

          <ul className="mt-4 space-y-3">
            {course.modules.map((module) => (
              <li key={module} className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${theme.icon}`}
                >
                  <FaCheck className="text-[10px]" />
                </span>

                <span className="text-sm leading-6 text-slate-700">
                  {module}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 rounded-2xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            কাদের জন্য
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            {course.audience}
          </p>
        </div>

        <a
          href={`/contact?course=${
            course.id === 1
              ? "3-month-office-application"
              : "6-month-office-application"
          }`}
          className={`mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold text-white transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${theme.button}`}
        >
          ভর্তি সম্পর্কে জানুন
          <FaArrowRight className="transition group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

function HighlightCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-7">
      <span
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.gradient}`}
      />

      <div className="flex items-start justify-between gap-4">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.iconBg}`}
        >
          <Icon />
        </span>

        <span className="text-3xl font-black text-slate-100 transition group-hover:text-slate-200">
          {item.number}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-black text-slate-900">{item.title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {item.description}
      </p>

      <div
        className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r transition-all duration-300 group-hover:w-20 ${item.gradient}`}
      />
    </article>
  );
}

export default function ShortCoursesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#224248] ">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=85"
            alt="কম্পিউটার ও প্রযুক্তিনির্ভর কর্মপরিবেশ"
            className="h-full w-full object-cover opacity-20"
          />

          <div
            className="absolute inset-0 bg-linear-to-r 
           via-slate-950/95 to-blue-950/80"
          />
        </div>

        <div
          className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full
           bg-[#224248]/20 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/30
             bg-blue-400/10 px-4 py-2 text-sm font-bold text-white"
            >
              <FaGraduationCap className="text-lg" />
              স্বল্পমেয়াদি কম্পিউটার প্রশিক্ষণ
            </div>

            <h1 className="mt-7 text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl ">
              দক্ষতা গড়ুন, <span className=" text-[#44A1A4] ">এগিয়ে যান</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              ৩ মাস ও ৬ মাসের Computer Office Application কোর্সের মাধ্যমে শিখুন
              Microsoft Word, Excel, PowerPoint, ইন্টারনেট এবং দৈনন্দিন অফিসের
              প্রয়োজনীয় কম্পিউটার দক্ষতা।
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Btn text={"কোর্সগুলো দেখুন"} link=" #courses" />

              <a
                href="#admission"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                ভর্তি সম্পর্কে জানুন
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <FaCircleCheck className="text-emerald-400" />
                ব্যবহারিক প্রশিক্ষণ
              </span>

              <span className="flex items-center gap-2">
                <FaCircleCheck className="text-emerald-400" />৩ ও ৬ মাসের কোর্স
              </span>

              <span className="flex items-center gap-2">
                <FaCircleCheck className="text-emerald-400" />
                দক্ষতা উন্নয়ন
              </span>
            </div>
          </div>

          {/* HERO IMAGE CARD */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"
                alt="কম্পিউটার ও ডিজিটাল দক্ষতা শেখার পরিবেশ"
                className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-[390px]"
                loading="eager"
              />

              <div className="grid grid-cols-2 gap-3 p-2 pt-4">
                <div className="rounded-2xl bg-white p-4 sm:p-5">
                  <FaRegClock className="text-2xl text-blue-600" />
                  <p className="mt-3 text-xs text-slate-500">
                    স্বল্পমেয়াদি প্রশিক্ষণ
                  </p>
                  <p className="mt-1 font-extrabold text-slate-900">
                    ৩ মাসের কোর্স
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4 sm:p-5">
                  <FaLaptop className="text-2xl text-violet-600" />
                  <p className="mt-3 text-xs text-slate-500">
                    বিস্তারিত প্রশিক্ষণ
                  </p>
                  <p className="mt-1 font-extrabold text-slate-900">
                    ৬ মাসের কোর্স
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-2 top-1/3 hidden -translate-x-1/4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600">
                  <FaCheck />
                </span>

                <div>
                  <p className="text-sm font-extrabold text-slate-900">
                    Learn & Practice
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    দক্ষতা গড়ার যাত্রা
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY HIGHLIGHTS */}
      <section className="relative z-10 -mt-1 bg-slate-50 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="কেন আমাদের প্রশিক্ষণ বেছে নেবেন?"
            description="কম্পিউটার শেখার জন্য প্রয়োজনীয় ব্যবহারিক অনুশীলন, প্রশিক্ষকের সহায়তা এবং সার্টিফিকেট-সংক্রান্ত তথ্য সম্পর্কে জেনে নিন।"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <HighlightCard key={item.number} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* SOFTWARE YOU WILL LEARN */}
      <section className="border-y border-slate-100 bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
              Course Highlights
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              যে দক্ষতাগুলো শিখবেন
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              অফিসের কাজ, অনলাইন আবেদন এবং দৈনন্দিন কম্পিউটার ব্যবহারের জন্য
              প্রয়োজনীয় সফটওয়্যার ও দক্ষতা।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {software.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition group-hover:scale-105 ${item.bg} ${item.color}`}
                  >
                    <Icon className="text-2xl" />
                  </span>

                  <div>
                    <h3 className="font-extrabold text-slate-900">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section
        id="courses"
        className="scroll-mt-20 bg-slate-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Short Courses"
            title="আপনার জন্য সঠিক কোর্সটি বেছে নিন"
            description="আপনার সময় ও শেখার প্রয়োজন অনুযায়ী বেছে নিন ৩ মাসের অথবা ৬ মাসের Computer Office Application কোর্স।"
          />

          <div className="grid items-stretch gap-7 lg:grid-cols-2 lg:gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <FaRegLightbulb className="mt-1 shrink-0 text-xl text-amber-600" />

            <p className="text-sm leading-7 text-amber-900">
              কোর্স ফি, ক্লাসের সময়সূচি, ভর্তি যোগ্যতা, ল্যাবের সুবিধা এবং
              সার্টিফিকেটের স্বীকৃতি সম্পর্কে ভর্তি হওয়ার আগে নিশ্চিত হয়ে নিন।
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Learning Benefits"
            title="শেখার প্রতিটি ধাপে দক্ষতা বাড়ান"
            description="মৌলিক কম্পিউটার ব্যবহার থেকে শুরু করে অফিস অ্যাপ্লিকেশনের ব্যবহারিক কাজ পর্যন্ত নিজের দক্ষতা গড়ে তুলুন।"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-3xl border border-slate-100 bg-white p-6 transition duration-300 hover:border-blue-200 hover:shadow-xl"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-700">
                    <Icon />
                  </span>

                  <h3 className="mt-5 font-extrabold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADMISSION CTA */}
      <section
        id="admission"
        className="scroll-mt-20 px-5 pb-20 sm:px-8 lg:px-10 lg:pb-24"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 px-6 py-12 shadow-2xl sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-blue-200">
                Start Learning Today
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                আপনার কম্পিউটার দক্ষতা গড়ার যাত্রা শুরু করুন
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-blue-100">
                ৩ মাস ও ৬ মাসের Computer Office Application কোর্স সম্পর্কে
                বিস্তারিত জানতে এবং ভর্তি-সংক্রান্ত তথ্য পেতে আমাদের সঙ্গে
                যোগাযোগ করুন।
              </p>

              <div className="mt-7 flex flex-wrap gap-4 text-sm text-blue-100">
                <span className="flex items-center gap-2">
                  <FaClipboardCheck />
                  কোর্সের তথ্য
                </span>

                <span className="flex items-center gap-2">
                  <FaCircleCheck />
                  ভর্তি নির্দেশনা
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3 font-extrabold text-blue-800 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
              >
                যোগাযোগ করুন
                <FaArrowRight />
              </a>

              <a
                href="tel:+880"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                <FaPhone />
                ফোন করুন
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="সাধারণ কিছু প্রশ্ন"
            description="ভর্তি হওয়ার আগে কোর্স, প্রশিক্ষণ, ল্যাব ও সার্টিফিকেট সম্পর্কে প্রয়োজনীয় তথ্য জেনে নিন।"
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition open:border-blue-200 open:bg-blue-50/30 sm:p-6"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-black text-blue-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{faq.question}</span>
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-90 group-open:bg-blue-100 group-open:text-blue-700">
                    <FaChevronRight className="text-xs" />
                  </span>
                </summary>

                <p className="mt-4 border-t border-slate-200/80 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-700">
              <FaLocationDot />
            </span>

            <div>
              <h3 className="font-extrabold text-slate-900">
                সরাসরি যোগাযোগ করুন
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                আপনার পছন্দের কোর্স, ভর্তি প্রক্রিয়া ও প্রশিক্ষণ সম্পর্কে
                বিস্তারিত জেনে নিন।
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            যোগাযোগের পৃষ্ঠা
            <FaArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
}
