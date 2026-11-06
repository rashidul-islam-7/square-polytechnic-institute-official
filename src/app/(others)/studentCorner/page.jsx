"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBookOpen,
  FaGraduationCap,
  FaAward,
  FaBriefcase,
  FaLaptop,
  FaCalendarDays,
  FaClipboardList,
  FaFileLines,
  FaComments,
  FaShieldHalved,
  FaUsers,
  FaFutbol,
  FaCheck,
  FaMagnifyingGlass,
  FaLightbulb,
} from "react-icons/fa6";
import StudentCareHero from "@/components/student-care/Hero";

// Images
const images = {
  hero: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=90",
  academic:
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1100&q=85",
  career:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1100&q=85",
  library:
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900&q=85",
  lab: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=85",
  students:
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1000&q=85",
  campus:
    "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=85",
};

// Quick Access
const quickLinks = [
  {
    icon: FaCalendarDays,
    title: "Class Routine",
    subtitle: "View class schedule",
    href: "/class-routine",
  },
  {
    icon: FaClipboardList,
    title: "Exam Routine",
    subtitle: "Exam schedule",
    href: "/exam-routine",
  },
  {
    icon: FaGraduationCap,
    title: "Results",
    subtitle: "Check examination results",
    href: "/result",
  },
  {
    icon: FaFileLines,
    title: "Notices",
    subtitle: "Latest announcements",
    href: "/notices",
  },
  {
    icon: FaComments,
    title: "Contact",
    subtitle: "Get in touch",
    href: "/contact",
  },
];

// Student Services
const services = [
  {
    icon: FaBookOpen,
    number: "01",
    title: "Academic Support",
    text: "পড়াশোনা, ক্লাস, পরীক্ষা ও একাডেমিক বিষয়ে প্রয়োজনীয় পরামর্শ ও সহযোগিতা।",
    href: "/contact",
  },
  {
    icon: FaAward,
    number: "02",
    title: "Scholarship Information",
    text: "সরকারি ও অন্যান্য শিক্ষাবৃত্তির সুযোগ এবং আবেদন সম্পর্কে তথ্য।",
    href: "/contact",
  },
  {
    icon: FaBriefcase,
    number: "03",
    title: "Career Guidance",
    text: "উচ্চশিক্ষা, চাকরির প্রস্তুতি ও ভবিষ্যৎ ক্যারিয়ার পরিকল্পনায় দিকনির্দেশনা।",
    href: "/contact",
  },
  {
    icon: FaUsers,
    number: "04",
    title: "Student Counseling",
    text: "শিক্ষার্থীদের বিভিন্ন সমস্যা ও প্রয়োজন নিয়ে পরামর্শ ও সহযোগিতা।",
    href: "/contact",
  },
  {
    icon: FaLaptop,
    number: "05",
    title: "Technical Support",
    text: "প্রযুক্তিগত শিক্ষা, ল্যাব ও অনলাইন সেবা সংক্রান্ত সহযোগিতা।",
    href: "/contact",
  },
  {
    icon: FaComments,
    number: "06",
    title: "Complaint & Feedback",
    text: "আপনার অভিযোগ, মতামত ও পরামর্শ জানানোর সুযোগ।",
    href: "#contact",
  },
];

// Student Resources
const resources = [
  {
    icon: FaCalendarDays,
    title: "Academic Calendar",
    desc: "শিক্ষাবর্ষের গুরুত্বপূর্ণ তারিখ",
    href: "/academic-calendar",
  },
  {
    icon: FaClipboardList,
    title: "Class Routine",
    desc: "ক্লাসের সময়সূচি দেখুন",
    href: "/class-routine",
  },
  {
    icon: FaFileLines,
    title: "Exam Routine",
    desc: "পরীক্ষার সময়সূচি দেখুন",
    href: "/exam-routine",
  },
  {
    icon: FaGraduationCap,
    title: "Exam Result",
    desc: "পরীক্ষার ফলাফল দেখুন",
    href: "/result",
  },
  {
    icon: FaBookOpen,
    title: "Student Handbook",
    desc: "শিক্ষার্থীদের প্রয়োজনীয় নির্দেশিকা",
    href: "/student-handbook",
  },
  {
    icon: FaComments,
    title: "Notice Board",
    desc: "সর্বশেষ নোটিশ ও ঘোষণা",
    href: "/notices",
  },
];

// Student Activities
const activities = [
  {
    icon: FaFutbol,
    title: "Sports & Recreation",
    text: "খেলাধুলা ও ক্রীড়া প্রতিযোগিতায় অংশগ্রহণের সুযোগ।",
  },
  {
    icon: FaUsers,
    title: "Cultural Activities",
    text: "সাংস্কৃতিক অনুষ্ঠান ও সৃজনশীল কার্যক্রম।",
  },
  {
    icon: FaLightbulb,
    title: "Technology & Innovation",
    text: "প্রযুক্তি ও উদ্ভাবনভিত্তিক কার্যক্রমে অংশগ্রহণ।",
  },
];

// Reusable Section Heading
function Heading({ eyebrow, title, text, light = false }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[2px] text-[#44A1A4]">
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-[42px] ${
          light ? "text-white" : "text-[#224248]"
        }`}
      >
        {title}
      </h2>

      {text && (
        <p
          className={`mt-5 text-sm leading-8 sm:text-base ${
            light ? "text-white/65" : "text-gray-500"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

// Reusable Link Button
function ActionLink({ href, children, light = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 rounded-lg px-7 py-4 text-sm font-bold transition duration-300 ${
        light
          ? "bg-[#ff9a00] text-[#224248] hover:bg-white"
          : "bg-[#224248] text-white hover:bg-[#44A1A4]"
      }`}
    >
      {children}
      <FaArrowRight />
    </Link>
  );
}

// Main Page
export default function StudentCarePage() {
  const [search, setSearch] = useState("");

  const filteredResources = resources.filter((item) =>
    item.title.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <div className="overflow-hidden bg-white text-[#224248]">
      {/* hero section  */}
      <StudentCareHero />

      {/* quick access  */}
      <section className="relative z-10 mx-auto -mt-1 max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="grid overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_12px_40px_rgba(34,66,72,0.08)] sm:grid-cols-2 lg:grid-cols-5">
          {quickLinks.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="group flex items-center gap-4 border-b border-gray-100 p-5 transition hover:bg-[#F2F9F8] sm:border-r lg:border-b-0"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#44A1A4]/10 text-xl text-[#224248] transition group-hover:bg-[#224248] group-hover:text-white">
                <item.icon />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold">{item.title}</p>
                <p className="mt-1 text-xs text-gray-400">{item.subtitle}</p>
              </div>

              <FaArrowRight className="shrink-0 text-xs text-[#44A1A4] transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================
          INTRODUCTION
      ===================================== */}
      <section className="px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Heading
              eyebrow="Welcome to Student Care"
              title="Your College Life, Made Better."
              text="শিক্ষাজীবন শুধু ক্লাস ও পরীক্ষার মধ্যে সীমাবদ্ধ নয়। একজন শিক্ষার্থীর সঠিক বিকাশের জন্য প্রয়োজন সঠিক পরিবেশ, পরামর্শ, সুযোগ ও সহযোগিতা। Student Care-এর মাধ্যমে এসব প্রয়োজনীয় তথ্য এক জায়গায় তুলে ধরা হয়েছে।"
            />

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 border-b-2 border-[#44A1A4] pb-2 text-sm font-bold transition hover:text-[#44A1A4]"
            >
              Get in Touch
              <FaArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <img
              src={images.library}
              alt="College library"
              className="h-52 w-full rounded-xl object-cover sm:h-64"
            />

            <img
              src={images.students}
              alt="College students"
              className="mt-8 h-52 w-full rounded-xl object-cover sm:h-64"
            />
          </div>
        </div>
      </section>

      {/* =====================================
          STUDENT SERVICES
      ===================================== */}
      <section
        id="student-services"
        className="bg-[#F2F9F8] px-5 py-24 sm:px-8 lg:px-14"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Heading
              eyebrow="How We Support You"
              title="Services for Every Student"
              text="শিক্ষার্থীদের প্রয়োজনীয় বিভিন্ন সেবা ও সহযোগিতা সম্পর্কে জানুন।"
            />

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-3 text-sm font-bold text-[#44A1A4] hover:text-[#224248]"
            >
              All Services
              <FaArrowRight />
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="group border-b border-[#224248]/10 py-8 transition hover:px-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#44A1A4]">
                    {item.number}
                  </span>

                  <item.icon className="text-2xl text-[#44A1A4] transition group-hover:scale-110" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#224248]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {item.text}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#224248]">
                  Learn More
                  <FaArrowRight className="text-[#44A1A4] transition group-hover:translate-x-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          ACADEMIC SUPPORT
      ===================================== */}
      <section className="px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src={images.academic}
              alt="Academic support"
              className="h-[340px] w-full rounded-xl object-cover sm:h-[480px]"
            />

            <div className="absolute -bottom-5 -right-3 max-w-[230px] rounded-xl bg-[#44A1A4] p-6 text-white shadow-xl sm:-right-6">
              <FaBookOpen className="text-3xl" />

              <p className="mt-3 text-lg font-bold">Learn With Confidence</p>

              <p className="mt-2 text-xs leading-6 text-white/80">
                Build your academic foundation with proper guidance.
              </p>
            </div>
          </div>

          <div className="pt-5">
            <Heading
              eyebrow="Academic Support"
              title="Helping You Move Forward in Your Studies."
              text="একাডেমিক জীবনে ভালো ফলাফল ও দক্ষতা অর্জনের জন্য প্রয়োজন সঠিক পরিকল্পনা ও নিয়মিত অনুশীলন। শিক্ষার্থীরা সংশ্লিষ্ট বিভাগের শিক্ষকদের কাছ থেকে প্রয়োজনীয় পরামর্শ ও দিকনির্দেশনা নিতে পারবে।"
            />

            <div className="mt-8 space-y-4">
              {[
                "একাডেমিক বিষয়ে শিক্ষক ও বিভাগীয় পরামর্শ",
                "ক্লাস ও পরীক্ষার প্রস্তুতিতে সহযোগিতা",
                "পড়াশোনার অগ্রগতি সম্পর্কে দিকনির্দেশনা",
                "বোর্ড পরীক্ষা ও ফলাফলসংক্রান্ত তথ্য",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheck className="mt-1 shrink-0 text-[#44A1A4]" />
                  <p className="text-sm leading-6 text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          CAREER SUPPORT
      ===================================== */}
      <section className="bg-[#224248] px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading
              eyebrow="Career & Future"
              title="Prepare Today. Build Your Future."
              text="ডিপ্লোমা শিক্ষা শেষে কর্মজীবন ও উচ্চশিক্ষার জন্য নিজেকে প্রস্তুত করা অত্যন্ত গুরুত্বপূর্ণ। সঠিক তথ্য ও দিকনির্দেশনা শিক্ষার্থীদের ভবিষ্যৎ পরিকল্পনায় সহায়ক হতে পারে।"
              light
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                "Career Planning",
                "CV Preparation",
                "Interview Guidance",
                "Higher Study Information",
                "Internship Information",
                "Job Opportunities",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#44A1A4] text-xs text-white">
                    <FaCheck />
                  </span>

                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <ActionLink href="/contact" light>
                Explore Career Support
              </ActionLink>
            </div>
          </div>

          <div className="relative">
            <img
              src={images.career}
              alt="Students working together"
              className="h-[350px] w-full rounded-xl object-cover sm:h-[470px]"
            />

            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#224248]/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* =====================================
          CAMPUS FACILITIES
      ===================================== */}
      <section className="px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <Heading
              eyebrow="Campus Experience"
              title="A Better Environment to Learn."
              text="শিক্ষার্থীদের ব্যবহারিক জ্ঞান, দক্ষতা ও শিক্ষার অভিজ্ঞতা সমৃদ্ধ করতে প্রয়োজনীয় সুযোগ-সুবিধা।"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="group overflow-hidden rounded-xl bg-[#F2F9F8] md:col-span-2">
              <div className="relative h-64 overflow-hidden sm:h-80">
                <img
                  src={images.campus}
                  alt="College campus"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#224248]/70 to-transparent" />

                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                  Campus Environment
                </h3>
              </div>

              <div className="p-6">
                <p className="text-sm leading-7 text-gray-600">
                  শিক্ষার্থীদের পড়াশোনা ও ব্যক্তিগত বিকাশের জন্য শিক্ষাবান্ধব
                  পরিবেশ।
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl bg-[#F2F9F8]">
              <div className="relative h-64 overflow-hidden sm:h-80">
                <img
                  src={images.lab}
                  alt="Practical laboratory"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#224248]/70 to-transparent" />

                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                  Practical Learning
                </h3>
              </div>

              <div className="p-6">
                <p className="text-sm leading-7 text-gray-600">
                  ব্যবহারিক জ্ঞান অর্জনের জন্য বিভাগভিত্তিক ল্যাব সুবিধা।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          STUDENT LIFE
      ===================================== */}
      <section className="bg-[#F2F9F8] px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading
              eyebrow="Student Life"
              title="Learning Goes Beyond the Classroom."
              text="শিক্ষাজীবনকে আরও আনন্দময় ও অর্থবহ করতে পড়াশোনার পাশাপাশি বিভিন্ন সহশিক্ষা, সামাজিক ও সৃজনশীল কার্যক্রমে অংশগ্রহণ গুরুত্বপূর্ণ।"
            />

            <div className="mt-8 space-y-6">
              {activities.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#44A1A4] shadow-sm">
                    <item.icon />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#224248]">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={images.students}
              alt="Students participating in college activities"
              className="h-[400px] w-full rounded-xl object-cover sm:h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* =====================================
          STUDENT RIGHTS & SAFETY
      ===================================== */}
      <section className="px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <Heading
              eyebrow="Rights & Safety"
              title="A Safe and Respectful Learning Environment."
              text="প্রতিটি শিক্ষার্থীর জন্য নিরাপদ, সম্মানজনক ও বৈষম্যহীন শিক্ষার পরিবেশ অত্যন্ত গুরুত্বপূর্ণ। শিক্ষার্থীদের অধিকার, দায়িত্ব ও আচরণবিধি সম্পর্কে সচেতন থাকা প্রয়োজন।"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Student Code of Conduct",
                "Anti-Ragging Awareness",
                "Anti-Bullying Awareness",
                "Complaint & Grievance",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-gray-100 p-4"
                >
                  <FaShieldHalved className="shrink-0 text-[#44A1A4]" />

                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl bg-[#224248] p-8 sm:p-10">
            <div>
              <FaShieldHalved className="text-4xl text-[#44A1A4]" />

              <h3 className="mt-6 text-2xl font-bold text-white">
                Your Voice Matters.
              </h3>

              <p className="mt-4 text-sm leading-8 text-white/65">
                কলেজের শিক্ষা কার্যক্রম, পরিবেশ অথবা অন্যান্য বিষয়ে আপনার কোনো
                সমস্যা, অভিযোগ বা পরামর্শ থাকলে আমাদের জানান।
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center justify-center gap-3 rounded-lg bg-[#ff9a00] px-6 py-4 text-sm font-bold text-[#224248] transition hover:bg-white"
            >
              Share Your Feedback
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          STUDENT RESOURCES
      ===================================== */}
      <section
        id="resources"
        className="bg-[#F2F9F8] px-5 py-24 sm:px-8 lg:px-14"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Heading
              eyebrow="Student Resources"
              title="Everything You Need, In One Place."
              text="শিক্ষার্থীদের প্রয়োজনীয় একাডেমিক তথ্য ও গুরুত্বপূর্ণ রিসোর্স সহজেই খুঁজে নিন।"
            />

            <div className="flex h-12 items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 md:w-72">
              <FaMagnifyingGlass className="text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search resources..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group flex items-center gap-5 rounded-xl border border-gray-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#44A1A4]/40 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#F2F9F8] text-2xl text-[#44A1A4] transition group-hover:bg-[#224248] group-hover:text-white">
                  <item.icon />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-[#224248]">{item.title}</h3>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {item.desc}
                  </p>
                </div>

                <FaArrowUpRightFromSquare className="shrink-0 text-sm text-gray-300 transition group-hover:text-[#44A1A4]" />
              </Link>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <p className="mt-8 text-center text-sm text-gray-500">
              No resources found.
            </p>
          )}
        </div>
      </section>

      {/* =====================================
          CONTACT CTA
      ===================================== */}
      <section id="contact" className="px-5 py-20 sm:px-8 lg:px-14">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#224248] px-7 py-14 sm:px-12 lg:px-16">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-[#44A1A4]/10" />

          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#44A1A4]/10 blur-2xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[2px] text-[#ff9a00]">
                We Are Here to Help
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Need Help With Something?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-white/65">
                শিক্ষার্থী সেবা, একাডেমিক তথ্য অথবা অন্য কোনো বিষয়ে সহযোগিতার
                প্রয়োজন হলে কলেজের সঙ্গে যোগাযোগ করুন।
              </p>
            </div>

            <ActionLink href="/contact" light>
              Contact Us
            </ActionLink>
          </div>
        </div>
      </section>
    </div>
  );
}
