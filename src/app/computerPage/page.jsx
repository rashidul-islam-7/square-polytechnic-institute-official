
"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  GraduationCap,
  Laptop,
  Monitor,
  Users,
  Wrench,
} from "lucide-react";

const DepartmentPage = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "শিক্ষার্থী",
    },
    {
      icon: GraduationCap,
      value: "15+",
      label: "অভিজ্ঞ শিক্ষক",
    },
    {
      icon: Laptop,
      value: "05+",
      label: "ল্যাব সুবিধা",
    },
    {
      icon: Award,
      value: "10+",
      label: "বছরের অভিজ্ঞতা",
    },
  ];

  const subjects = [
    "Programming Fundamentals",
    "Web Development",
    "Database Management",
    "Computer Networking",
    "Software Development",
    "Digital Electronics",
  ];

  const facilities = [
    {
      icon: Monitor,
      title: "Computer Lab",
      description:
        "আধুনিক কম্পিউটার ও প্রয়োজনীয় সফটওয়্যার সমৃদ্ধ ব্যবহারিক ল্যাব।",
    },
    {
      icon: Code2,
      title: "Programming Lab",
      description:
        "Programming ও Software Development শেখার জন্য ব্যবহারিক পরিবেশ।",
    },
    {
      icon: Cpu,
      title: "Hardware Lab",
      description:
        "Computer hardware ও troubleshooting সম্পর্কে বাস্তব অভিজ্ঞতা।",
    },
    {
      icon: Wrench,
      title: "Networking Lab",
      description:
        "Network configuration ও networking technology শেখার সুবিধা।",
    },
  ];

  const careers = [
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Network Engineer",
    "Database Administrator",
  ];

  return (
    <main className="bg-[#F8FAFC]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#224248]">

        {/* Background Decoration */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#44A1A4]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#FF9A00]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">

          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-white/60">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              হোম
            </Link>

            <ChevronRight size={15} />

            <Link
              href="/departments"
              className="transition hover:text-white"
            >
              বিভাগসমূহ
            </Link>

            <ChevronRight size={15} />

            <span className="text-white">
              Computer Technology
            </span>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Hero Content */}
            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                <Laptop size={17} className="text-[#44A1A4]" />
                Computer Technology
              </div>

              <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                কম্পিউটার টেকনোলজি
                <span className="mt-2 block text-[#44A1A4]">
                  আধুনিক প্রযুক্তির ভবিষ্যৎ
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                প্রোগ্রামিং, ওয়েব ডেভেলপমেন্ট, সফটওয়্যার,
                নেটওয়ার্কিং ও আধুনিক কম্পিউটার প্রযুক্তির
                ব্যবহারিক জ্ঞান অর্জনের মাধ্যমে নিজেকে
                দক্ষ প্রযুক্তিবিদ হিসেবে গড়ে তুলুন।
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  href="/admission"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#FF9A00] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E88900] hover:shadow-lg"
                >
                  ভর্তি সম্পর্কে জানুন

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="#overview"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
                >
                  বিভাগ সম্পর্কে
                </Link>

              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-2 shadow-2xl backdrop-blur">

                <div className="relative overflow-hidden rounded-2xl">

                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85"
                    alt="Computer Technology Department"
                    className="h-[280px] w-full object-cover sm:h-[340px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#224248]/70 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="rounded-2xl border border-white/10 bg-[#224248]/80 p-4 backdrop-blur-md">

                      <p className="text-xs text-white/60">
                        Department
                      </p>

                      <p className="mt-1 text-lg font-bold text-white">
                        Computer Technology
                      </p>

                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#44A1A4]/10 text-[#44A1A4]">
                    <Code2 size={21} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Practical Learning
                    </p>

                    <p className="text-sm font-bold text-[#224248]">
                      Learn by Doing
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          STATS
      ===================================================== */}
      <section className="relative z-10 -mt-1">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:grid-cols-4">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group border-b border-slate-100 p-5 text-center transition hover:bg-[#44A1A4]/5 md:border-b-0 md:border-r last:border-r-0"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#44A1A4]/10 text-[#44A1A4] transition group-hover:bg-[#44A1A4] group-hover:text-white">
                    <Icon size={19} />
                  </div>

                  <p className="mt-3 text-2xl font-bold text-[#224248]">
                    {item.value}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.label}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          OVERVIEW
      ===================================================== */}
      <section
        id="overview"
        className="py-14 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">

            {/* Content */}
            <div>

              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-8 bg-[#44A1A4]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#44A1A4]">
                  Department Overview
                </span>
              </div>

              <h2 className="text-2xl font-bold leading-tight text-[#224248] sm:text-3xl md:text-4xl">
                কম্পিউটার টেকনোলজি
                <span className="block text-[#44A1A4]">
                  সম্পর্কে
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                কম্পিউটার টেকনোলজি বর্তমান সময়ের অন্যতম
                গুরুত্বপূর্ণ ও চাহিদাসম্পন্ন প্রযুক্তি বিষয়।
                এই বিভাগে শিক্ষার্থীদের কম্পিউটার,
                প্রোগ্রামিং, সফটওয়্যার, ওয়েব ডেভেলপমেন্ট,
                ডাটাবেজ ও নেটওয়ার্কিং সম্পর্কে তাত্ত্বিক
                ও ব্যবহারিক জ্ঞান প্রদান করা হয়।
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                আমাদের লক্ষ্য হলো শিক্ষার্থীদের শুধু
                পরীক্ষার জন্য নয়, বরং বাস্তব কর্মক্ষেত্রের
                জন্য প্রয়োজনীয় দক্ষতা অর্জনে সহায়তা করা।
              </p>

              {/* Points */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                {[
                  "তাত্ত্বিক ও ব্যবহারিক শিক্ষা",
                  "আধুনিক ল্যাব সুবিধা",
                  "দক্ষ ও অভিজ্ঞ শিক্ষক",
                  "ক্যারিয়ারভিত্তিক শিক্ষা",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-[#325E6A]"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#44A1A4]"
                    />
                    {item}
                  </div>
                ))}

              </div>
            </div>


            {/* Information Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(34,66,72,0.07)] sm:p-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#224248] text-white">
                <BookOpen size={22} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#224248]">
                শিক্ষা কাঠামো
              </h3>

              <div className="mt-5 space-y-4">

                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-500">
                    Technology
                  </span>
                  <span className="text-sm font-bold text-[#224248]">
                    Computer
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-500">
                    Program
                  </span>
                  <span className="text-sm font-bold text-[#224248]">
                    Diploma in Engineering
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-500">
                    Duration
                  </span>
                  <span className="text-sm font-bold text-[#224248]">
                    4 Years
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Type
                  </span>
                  <span className="text-sm font-bold text-[#224248]">
                    Full Time
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          SUBJECTS
      ===================================================== */}
      <section className="bg-white py-14 md:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#44A1A4]">
              What You Will Learn
            </span>

            <h2 className="mt-3 text-2xl font-bold text-[#224248] sm:text-3xl">
              যা যা শিখবেন
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-500">
              আধুনিক প্রযুক্তি ও কর্মক্ষেত্রের প্রয়োজন অনুযায়ী
              গুরুত্বপূর্ণ বিষয়গুলো শেখানো হয়।
            </p>

          </div>


          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {subjects.map((subject, index) => (
              <div
                key={subject}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#44A1A4]/30 hover:bg-white hover:shadow-lg"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#224248] text-white transition group-hover:bg-[#44A1A4]">
                  <span className="text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#224248]">
                    {subject}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Practical &amp; Theory
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          FACILITIES
      ===================================================== */}
      <section className="bg-[#F8FAFC] py-14 md:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#44A1A4]">
                Our Facilities
              </span>

              <h2 className="mt-3 text-2xl font-bold text-[#224248] sm:text-3xl">
                আধুনিক ল্যাব ও সুবিধাসমূহ
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-slate-500">
              ব্যবহারিক দক্ষতা অর্জনের জন্য শিক্ষার্থীদের
              প্রয়োজনীয় ল্যাব ও learning environment প্রদান করা হয়।
            </p>

          </div>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {facilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#44A1A4]/30 hover:shadow-xl"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#44A1A4]/10 text-[#44A1A4] transition group-hover:bg-[#224248] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#224248]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-[#44A1A4]">
                    বিস্তারিত
                    <ArrowRight size={14} />
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          CAREER
      ===================================================== */}
      <section className="bg-[#224248] py-14 md:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* Left */}
            <div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#44A1A4] text-white">
                <BriefcaseBusiness size={22} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                ক্যারিয়ার সম্ভাবনা
              </h2>

              <p className="mt-4 text-base leading-7 text-white/65">
                Computer Technology থেকে পড়াশোনা শেষ করার
                পর বিভিন্ন IT ও technology-based sector-এ
                কাজের সুযোগ তৈরি হয়।
              </p>

              <Link
                href="/career"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#44A1A4]"
              >
                ক্যারিয়ার সম্পর্কে জানুন

                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

            </div>


            {/* Career Cards */}
            <div className="grid gap-3 sm:grid-cols-2">

              {careers.map((career) => (
                <div
                  key={career}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#44A1A4]/15 text-[#44A1A4]">
                    <CheckCircle2 size={17} />
                  </div>

                  <span className="text-sm font-semibold text-white/85">
                    {career}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          ADMISSION CTA
      ===================================================== */}
      <section className="px-4 py-14 sm:px-6 md:py-20 lg:px-8">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#44A1A4]">

          <div className="relative px-6 py-10 sm:px-10 md:py-14">

            {/* Decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#224248]/10 blur-2xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

              <div>
                <p className="text-sm font-semibold text-white/70">
                  Computer Technology
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  আপনার ভবিষ্যৎ শুরু হোক এখান থেকেই
                </h2>

                <p className="mt-3 max-w-2xl text-base leading-7 text-white/75">
                  আধুনিক প্রযুক্তি, ব্যবহারিক শিক্ষা ও দক্ষ
                  শিক্ষকদের সহযোগিতায় নিজেকে প্রস্তুত করুন।
                </p>
              </div>

              <Link
                href="/admission"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#224248] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                ভর্তি আবেদন

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default DepartmentPage;

