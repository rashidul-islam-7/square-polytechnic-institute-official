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
import ShortCourseHero from "@/components/shortCourse/Hero";
import WhyChooseUs from "@/components/shortCourse/WhyChooseUs";
import SoftwareLearn from "@/components/shortCourse/SoftwareLearn";
import Course from "@/components/shortCourse/Courses";
import Benefits from "@/components/shortCourse/Benefits";

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

export default function ShortCoursesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* HERO SECTION */}
      <ShortCourseHero />
      {/* KEY HIGHLIGHTS */}
      <WhyChooseUs />
      {/* SOFTWARE YOU WILL LEARN */}
      <SoftwareLearn />
      {/* COURSES SECTION */}
      <Course />

      {/* BENEFITS */}
      <Benefits />

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
