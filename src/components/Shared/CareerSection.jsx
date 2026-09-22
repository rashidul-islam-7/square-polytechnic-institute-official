"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Target,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const careerPoints = [
  "বাস্তব কর্মক্ষেত্রের অভিজ্ঞতা অর্জনের সুযোগ",
  "ইন্ডাস্ট্রি-ভিত্তিক দক্ষতা ও পেশাগত প্রস্তুতি",
  "ইন্টার্নশীপ ও Job Placement Support",
];


const careerSteps = [
  {
    icon: GraduationCap,
    number: "01",
    title: "ব্যবহারিক দক্ষতা",
    text: "ইন্টার্নশীপ, শিল্পপ্রতিষ্ঠান ও বাস্তব কর্মক্ষেত্রের সাথে পরিচিতি।",
  },
  {
    icon: BriefcaseBusiness,
    number: "02",
    title: "ইন্টার্নশীপ বা ইন্ডাস্ট্রি সংযোগ",
    text: "বাস্তব কর্মক্ষেত্রে কাজের মাধ্যমে অভিজ্ঞতা অর্জন করুন।",
  },
  {
    icon: Target,
    number: "03",
    title: "ক্যারিয়ারের সুযোগ",
    text: "দেশ-বিদেশের বিভিন্ন সরকারি ও বেসরকারি প্রতিষ্ঠানে কর্মসংস্থানের প্রস্তুতি।",
  },
];

const CareerSection = () => {
  return (
    <section
      id="internship"
      className="relative overflow-hidden bg-[#F8FAFC] py-16 md:py-20 lg:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#44A1A4]/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#224248]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#44A1A4]/20 bg-white px-4 py-2 text-xs font-semibold text-[#325E6A] shadow-sm">
            <BriefcaseBusiness size={14} />
            ক্যারিয়ার প্রস্তুতি
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#224248] md:text-4xl">
            ইন্টার্নশীপ ও{" "}
            <span className="text-[#44A1A4]">জব প্লেসমেন্ট</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600 text-base">
            শিক্ষার্থীদের একাডেমিক শিক্ষার পাশাপাশি বাস্তব কর্মক্ষেত্রের
            অভিজ্ঞতা ও ক্যারিয়ার গঠনের জন্য প্রয়োজনীয় প্রস্তুতি প্রদানে আমরা
            গুরুত্ব দিয়ে থাকি।
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <div>
            {/* Small Heading */}
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#44A1A4]">
              Build Your Career
            </p>

            <h3 className="mt-3 text-2xl font-bold leading-tight text-[#224248] md:text-3xl">
              শিক্ষা থেকে
              <br />
              <span className="text-[#44A1A4]">কর্মজীবনের পথে </span>
              শিক্ষার্থীদের সাথে
            </h3>

            <p className="mt-4 leading-6 text-slate-700 text-base">
              শুধু ডিপ্লোমা সম্পন্ন করাই আমাদের লক্ষ্য নয়। একজন শিক্ষার্থীকে
              বাস্তব কর্মক্ষেত্রের জন্য প্রস্তুত করে তোলাই আমাদের অন্যতম
              উদ্দেশ্য। এজন্য একাডেমিক শিক্ষার পাশাপাশি ব্যবহারিক দক্ষতা,
              ইন্টার্নশীপ এবং ক্যারিয়ার প্রস্তুতির ওপর গুরুত্ব দেওয়া হয়।
            </p>

            {/* Points */}
            <div className="mt-6 space-y-2">
              {careerPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#44A1A4]/10 text-[#44A1A4]">
                    <CheckCircle2 size={15} />
                  </div>

                  <p className="text-base leading-6 text-slate-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight Text */}
            <div className="mt-6 border-l-2 border-[#44A1A4] pl-4">
              <p className="text-base font-medium leading-6 text-[#28505b]">
                দক্ষতা, অভিজ্ঞতা ও আত্মবিশ্বাস—এই তিনটি বিষয়কে সামনে রেখে
                শিক্ষার্থীদের ভবিষ্যৎ ক্যারিয়ারের জন্য প্রস্তুত করা হয়।
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/career"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#FF9A00] px-5 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#E88900] hover:shadow-lg hover:shadow-[#FF9A00]/20"
              >
                ক্যারিয়ার সম্পর্কে জানুন...

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <div className="flex items-center gap-2 text-base text-slate-500">
                <UsersRound
                  size={16}
                  className="text-[#44A1A4]"
                />

                শিক্ষার্থীদের ক্যারিয়ার সহায়তা
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9QiZELD4MigAN4CexB-FssMKLVxQIi8G2KRE49ONmDvIH-l5OTfHuBGtY&s=10"
                alt="Students working together during practical training"
                className="h-[300px] w-full object-cover md:h-[440px]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#224248]/85 via-[#224248]/20 to-transparent" />

              {/* Image Content */}
              {/* <div className="absolute bottom-7 left-7 right-7">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#44A1A4]">
                  Career Development
                </p>

                <h3 className="mt-2 max-w-md text-2xl font-bold leading-tight text-white md:text-3xl">
                  আজকের শেখা,
                  <br />
                  আগামী দিনের পেশা
                </h3>
              </div> */}
            </div>

            {/* Floating Career Card */}
            <div className="absolute -bottom-7 left-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl md:left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#224248] text-[#44A1A4]">
                  <BriefcaseBusiness size={21} />
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    Career Support
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-[#224248]">
                    Internship & Placement
                  </p>
                </div>
              </div>
            </div>

            {/* Top Badge */}
            <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-[#44A1A4] px-4 py-2 text-xs font-bold text-white shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Career Ready 
            </div>
          </div>
        </div>

        {/* ================= CAREER JOURNEY ================= */}
        <div className="mt-15 md:mt-20">
          {/* Section Small Title */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs  font-semibold uppercase tracking-[0.18em] text-[#44A1A4]">
                Career Journey
              </p>

              <h3 className="mt-1 text-xl font-bold text-[#224248]">
                ক্যারিয়ার গড়ার যাত্রা
              </h3>
            </div>

            <div className="hidden h-px flex-1 bg-slate-200 md:ml-8 md:block" />
          </div>

          {/* Steps */}
          <div className="grid gap-4 md:grid-cols-3">
            {careerSteps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 "
                >
                  {/* Number */}
                  <span className="absolute right-5 top-3 text-4xl font-bold text-slate-100 ">
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#224248] text-white">
                    <Icon size={20} />
                  </div>

                  {/* Text */}
                  <h4 className="relative mt-5 text-base font-bold text-[#224248]">
                    {item.title}
                  </h4>

                  <p className="relative mt-2 text-base leading-6 text-slate-500">
                    {item.text}
                  </p>

                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM CTA =================
        <div className="mt-10 overflow-hidden rounded-2xl bg-[#224248]">
          <div className="flex flex-col items-start justify-between gap-5 px-6 py-7 md:flex-row md:items-center md:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#44A1A4]">
                Your Future Starts Here
              </p>

              <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                দক্ষতা অর্জন করুন, ক্যারিয়ারের জন্য প্রস্তুত হোন।
              </h3>

              <p className="mt-1 text-xs text-white/60">
                আপনার ভবিষ্যৎ গড়ার পথে SPI থাকছে পাশে।
              </p>
            </div>

            <Link
              href="/admission"
              className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#FF9A00] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#E88900]"
            >
              ভর্তি সম্পর্কে জানুন

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CareerSection;