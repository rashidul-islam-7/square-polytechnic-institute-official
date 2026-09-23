// "use client";

// import React from "react";
// import Link from "next/link";
// import {
//   ArrowRight,
//   Award,
//   BookOpen,
//   BriefcaseBusiness,
//   CheckCircle2,
//   ChevronRight,
//   Code2,
//   Cpu,
//   GraduationCap,
//   Laptop,
//   Monitor,
//   Users,
//   Wrench,
// } from "lucide-react";

// const DepartmentPage = () => {
//   const stats = [
//     {
//       icon: Users,
//       value: "500+",
//       label: "শিক্ষার্থী",
//     },
//     {
//       icon: GraduationCap,
//       value: "15+",
//       label: "অভিজ্ঞ শিক্ষক",
//     },
//     {
//       icon: Laptop,
//       value: "05+",
//       label: "ল্যাব সুবিধা",
//     },
//     {
//       icon: Award,
//       value: "10+",
//       label: "বছরের অভিজ্ঞতা",
//     },
//   ];

//   const subjects = [
//     "Programming Fundamentals",
//     "Web Development",
//     "Database Management",
//     "Computer Networking",
//     "Software Development",
//     "Digital Electronics",
//   ];

//   const facilities = [
//     {
//       icon: Monitor,
//       title: "Computer Lab",
//       description:
//         "আধুনিক কম্পিউটার ও প্রয়োজনীয় সফটওয়্যার সমৃদ্ধ ব্যবহারিক ল্যাব।",
//     },
//     {
//       icon: Code2,
//       title: "Programming Lab",
//       description:
//         "Programming ও Software Development শেখার জন্য ব্যবহারিক পরিবেশ।",
//     },
//     {
//       icon: Cpu,
//       title: "Hardware Lab",
//       description:
//         "Computer hardware ও troubleshooting সম্পর্কে বাস্তব অভিজ্ঞতা।",
//     },
//     {
//       icon: Wrench,
//       title: "Networking Lab",
//       description:
//         "Network configuration ও networking technology শেখার সুবিধা।",
//     },
//   ];

//   const careers = [
//     "Software Developer",
//     "Web Developer",
//     "Frontend Developer",
//     "Backend Developer",
//     "Network Engineer",
//     "Database Administrator",
//   ];

//   return (
//     <main className="bg-[#F8FAFC]">

//       {/* =====================================================
//           HERO SECTION
//       ===================================================== */}
//       <section className="relative overflow-hidden bg-[#224248]">

//         {/* Background Decoration */}
//         <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#44A1A4]/20 blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#FF9A00]/10 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">

//           {/* Breadcrumb */}
//           <div className="mb-8 flex items-center gap-2 text-sm text-white/60">
//             <Link
//               href="/"
//               className="transition hover:text-white"
//             >
//               হোম
//             </Link>

//             <ChevronRight size={15} />

//             <Link
//               href="/departments"
//               className="transition hover:text-white"
//             >
//               বিভাগসমূহ
//             </Link>

//             <ChevronRight size={15} />

//             <span className="text-white">
//               Computer Technology
//             </span>
//           </div>

//           <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

//             {/* Hero Content */}
//             <div>

//               <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
//                 <Laptop size={17} className="text-[#44A1A4]" />
//                 Computer Technology
//               </div>

//               <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
//                 কম্পিউটার টেকনোলজি
//                 <span className="mt-2 block text-[#44A1A4]">
//                   আধুনিক প্রযুক্তির ভবিষ্যৎ
//                 </span>
//               </h1>

//               <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
//                 প্রোগ্রামিং, ওয়েব ডেভেলপমেন্ট, সফটওয়্যার,
//                 নেটওয়ার্কিং ও আধুনিক কম্পিউটার প্রযুক্তির
//                 ব্যবহারিক জ্ঞান অর্জনের মাধ্যমে নিজেকে
//                 দক্ষ প্রযুক্তিবিদ হিসেবে গড়ে তুলুন।
//               </p>

//               {/* Buttons */}
//               <div className="mt-8 flex flex-wrap gap-3">

//                 <Link
//                   href="/admission"
//                   className="group inline-flex items-center gap-2 rounded-xl bg-[#FF9A00] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E88900] hover:shadow-lg"
//                 >
//                   ভর্তি সম্পর্কে জানুন

//                   <ArrowRight
//                     size={17}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </Link>

//                 <Link
//                   href="#overview"
//                   className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
//                 >
//                   বিভাগ সম্পর্কে
//                 </Link>

//               </div>
//             </div>

//             {/* Hero Visual */}
//             <div className="relative">

//               <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-2 shadow-2xl backdrop-blur">

//                 <div className="relative overflow-hidden rounded-2xl">

//                   <img
//                     src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85"
//                     alt="Computer Technology Department"
//                     className="h-[280px] w-full object-cover sm:h-[340px]"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#224248]/70 via-transparent to-transparent" />

//                   <div className="absolute bottom-5 left-5 right-5">
//                     <div className="rounded-2xl border border-white/10 bg-[#224248]/80 p-4 backdrop-blur-md">

//                       <p className="text-xs text-white/60">
//                         Department
//                       </p>

//                       <p className="mt-1 text-lg font-bold text-white">
//                         Computer Technology
//                       </p>

//                     </div>
//                   </div>

//                 </div>
//               </div>

//               {/* Floating Badge */}
//               <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-white p-4 shadow-xl sm:block">
//                 <div className="flex items-center gap-3">

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#44A1A4]/10 text-[#44A1A4]">
//                     <Code2 size={21} />
//                   </div>

//                   <div>
//                     <p className="text-xs text-slate-500">
//                       Practical Learning
//                     </p>

//                     <p className="text-sm font-bold text-[#224248]">
//                       Learn by Doing
//                     </p>
//                   </div>

//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           STATS
//       ===================================================== */}
//       <section className="relative z-10 -mt-1">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

//           <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:grid-cols-4">

//             {stats.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={index}
//                   className="group border-b border-slate-100 p-5 text-center transition hover:bg-[#44A1A4]/5 md:border-b-0 md:border-r last:border-r-0"
//                 >
//                   <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#44A1A4]/10 text-[#44A1A4] transition group-hover:bg-[#44A1A4] group-hover:text-white">
//                     <Icon size={19} />
//                   </div>

//                   <p className="mt-3 text-2xl font-bold text-[#224248]">
//                     {item.value}
//                   </p>

//                   <p className="mt-1 text-sm text-slate-500">
//                     {item.label}
//                   </p>
//                 </div>
//               );
//             })}

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           OVERVIEW
//       ===================================================== */}
//       <section
//         id="overview"
//         className="py-14 md:py-20"
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">

//             {/* Content */}
//             <div>

//               <div className="mb-4 flex items-center gap-2">
//                 <span className="h-px w-8 bg-[#44A1A4]" />

//                 <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#44A1A4]">
//                   Department Overview
//                 </span>
//               </div>

//               <h2 className="text-2xl font-bold leading-tight text-[#224248] sm:text-3xl md:text-4xl">
//                 কম্পিউটার টেকনোলজি
//                 <span className="block text-[#44A1A4]">
//                   সম্পর্কে
//                 </span>
//               </h2>

//               <p className="mt-5 text-base leading-7 text-slate-600">
//                 কম্পিউটার টেকনোলজি বর্তমান সময়ের অন্যতম
//                 গুরুত্বপূর্ণ ও চাহিদাসম্পন্ন প্রযুক্তি বিষয়।
//                 এই বিভাগে শিক্ষার্থীদের কম্পিউটার,
//                 প্রোগ্রামিং, সফটওয়্যার, ওয়েব ডেভেলপমেন্ট,
//                 ডাটাবেজ ও নেটওয়ার্কিং সম্পর্কে তাত্ত্বিক
//                 ও ব্যবহারিক জ্ঞান প্রদান করা হয়।
//               </p>

//               <p className="mt-4 text-base leading-7 text-slate-600">
//                 আমাদের লক্ষ্য হলো শিক্ষার্থীদের শুধু
//                 পরীক্ষার জন্য নয়, বরং বাস্তব কর্মক্ষেত্রের
//                 জন্য প্রয়োজনীয় দক্ষতা অর্জনে সহায়তা করা।
//               </p>

//               {/* Points */}
//               <div className="mt-6 grid gap-3 sm:grid-cols-2">

//                 {[
//                   "তাত্ত্বিক ও ব্যবহারিক শিক্ষা",
//                   "আধুনিক ল্যাব সুবিধা",
//                   "দক্ষ ও অভিজ্ঞ শিক্ষক",
//                   "ক্যারিয়ারভিত্তিক শিক্ষা",
//                 ].map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-2 text-sm font-medium text-[#325E6A]"
//                   >
//                     <CheckCircle2
//                       size={18}
//                       className="shrink-0 text-[#44A1A4]"
//                     />
//                     {item}
//                   </div>
//                 ))}

//               </div>
//             </div>

//             {/* Information Card */}
//             <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(34,66,72,0.07)] sm:p-8">

//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#224248] text-white">
//                 <BookOpen size={22} />
//               </div>

//               <h3 className="mt-5 text-xl font-bold text-[#224248]">
//                 শিক্ষা কাঠামো
//               </h3>

//               <div className="mt-5 space-y-4">

//                 <div className="flex items-center justify-between border-b border-slate-100 pb-3">
//                   <span className="text-sm text-slate-500">
//                     Technology
//                   </span>
//                   <span className="text-sm font-bold text-[#224248]">
//                     Computer
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between border-b border-slate-100 pb-3">
//                   <span className="text-sm text-slate-500">
//                     Program
//                   </span>
//                   <span className="text-sm font-bold text-[#224248]">
//                     Diploma in Engineering
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between border-b border-slate-100 pb-3">
//                   <span className="text-sm text-slate-500">
//                     Duration
//                   </span>
//                   <span className="text-sm font-bold text-[#224248]">
//                     4 Years
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-slate-500">
//                     Type
//                   </span>
//                   <span className="text-sm font-bold text-[#224248]">
//                     Full Time
//                   </span>
//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SUBJECTS
//       ===================================================== */}
//       <section className="bg-white py-14 md:py-20">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="mx-auto max-w-2xl text-center">

//             <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#44A1A4]">
//               What You Will Learn
//             </span>

//             <h2 className="mt-3 text-2xl font-bold text-[#224248] sm:text-3xl">
//               যা যা শিখবেন
//             </h2>

//             <p className="mt-3 text-base leading-7 text-slate-500">
//               আধুনিক প্রযুক্তি ও কর্মক্ষেত্রের প্রয়োজন অনুযায়ী
//               গুরুত্বপূর্ণ বিষয়গুলো শেখানো হয়।
//             </p>

//           </div>

//           <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

//             {subjects.map((subject, index) => (
//               <div
//                 key={subject}
//                 className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#44A1A4]/30 hover:bg-white hover:shadow-lg"
//               >

//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#224248] text-white transition group-hover:bg-[#44A1A4]">
//                   <span className="text-sm font-bold">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>
//                 </div>

//                 <div>
//                   <h3 className="text-base font-bold text-[#224248]">
//                     {subject}
//                   </h3>

//                   <p className="mt-1 text-xs text-slate-500">
//                     Practical &amp; Theory
//                   </p>
//                 </div>

//               </div>
//             ))}

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FACILITIES
//       ===================================================== */}
//       <section className="bg-[#F8FAFC] py-14 md:py-20">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

//             <div>
//               <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#44A1A4]">
//                 Our Facilities
//               </span>

//               <h2 className="mt-3 text-2xl font-bold text-[#224248] sm:text-3xl">
//                 আধুনিক ল্যাব ও সুবিধাসমূহ
//               </h2>
//             </div>

//             <p className="max-w-xl text-base leading-7 text-slate-500">
//               ব্যবহারিক দক্ষতা অর্জনের জন্য শিক্ষার্থীদের
//               প্রয়োজনীয় ল্যাব ও learning environment প্রদান করা হয়।
//             </p>

//           </div>

//           <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

//             {facilities.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.title}
//                   className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#44A1A4]/30 hover:shadow-xl"
//                 >

//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#44A1A4]/10 text-[#44A1A4] transition group-hover:bg-[#224248] group-hover:text-white">
//                     <Icon size={21} />
//                   </div>

//                   <h3 className="mt-5 text-lg font-bold text-[#224248]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-2 text-sm leading-6 text-slate-500">
//                     {item.description}
//                   </p>

//                   <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-[#44A1A4]">
//                     বিস্তারিত
//                     <ArrowRight size={14} />
//                   </div>

//                 </div>
//               );
//             })}

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CAREER
//       ===================================================== */}
//       <section className="bg-[#224248] py-14 md:py-20">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

//             {/* Left */}
//             <div>

//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#44A1A4] text-white">
//                 <BriefcaseBusiness size={22} />
//               </div>

//               <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
//                 ক্যারিয়ার সম্ভাবনা
//               </h2>

//               <p className="mt-4 text-base leading-7 text-white/65">
//                 Computer Technology থেকে পড়াশোনা শেষ করার
//                 পর বিভিন্ন IT ও technology-based sector-এ
//                 কাজের সুযোগ তৈরি হয়।
//               </p>

//               <Link
//                 href="/career"
//                 className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#44A1A4]"
//               >
//                 ক্যারিয়ার সম্পর্কে জানুন

//                 <ArrowRight
//                   size={16}
//                   className="transition group-hover:translate-x-1"
//                 />
//               </Link>

//             </div>

//             {/* Career Cards */}
//             <div className="grid gap-3 sm:grid-cols-2">

//               {careers.map((career) => (
//                 <div
//                   key={career}
//                   className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
//                 >
//                   <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#44A1A4]/15 text-[#44A1A4]">
//                     <CheckCircle2 size={17} />
//                   </div>

//                   <span className="text-sm font-semibold text-white/85">
//                     {career}
//                   </span>
//                 </div>
//               ))}

//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           ADMISSION CTA
//       ===================================================== */}
//       <section className="px-4 py-14 sm:px-6 md:py-20 lg:px-8">

//         <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#44A1A4]">

//           <div className="relative px-6 py-10 sm:px-10 md:py-14">

//             {/* Decoration */}
//             <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
//             <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#224248]/10 blur-2xl" />

//             <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

//               <div>
//                 <p className="text-sm font-semibold text-white/70">
//                   Computer Technology
//                 </p>

//                 <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
//                   আপনার ভবিষ্যৎ শুরু হোক এখান থেকেই
//                 </h2>

//                 <p className="mt-3 max-w-2xl text-base leading-7 text-white/75">
//                   আধুনিক প্রযুক্তি, ব্যবহারিক শিক্ষা ও দক্ষ
//                   শিক্ষকদের সহযোগিতায় নিজেকে প্রস্তুত করুন।
//                 </p>
//               </div>

//               <Link
//                 href="/admission"
//                 className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#224248] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//               >
//                 ভর্তি আবেদন

//                 <ArrowRight
//                   size={17}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>

//             </div>

//           </div>
//         </div>
//       </section>

//     </main>
//   );
// };

// export default DepartmentPage;

"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaLaptopCode,
  FaCode,
  FaDatabase,
  FaGlobe,
  FaNetworkWired,
  FaMicrochip,
  FaCheck,
  FaGraduationCap,
  FaBriefcase,
  FaFlask,
  FaBookOpen,
  FaUsers,
  FaBuildingColumns,
  FaDownload,
  FaQuoteLeft,
  FaChevronDown,
} from "react-icons/fa6";

import DepartmentHeroSection from "../../../components/department/Hero"
import Glance from "@/components/department/Glance";

const department = {
  name: "Computer Technology",
  shortName: "Computer",
  subtitle: "Diploma in Engineering",
  description:
    "কম্পিউটার, Programming, Software, Web Development, Networking এবং আধুনিক Information Technology সম্পর্কে তাত্ত্বিক ও ব্যবহারিক জ্ঞান অর্জনের সুযোগ।",

  duration: "৪ বছর",
  education: "Diploma in Engineering",
  learning: "Theory + Practical",
  focus: "Information Technology",

  heroImage:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
};

const learningAreas = [
  {
    icon: FaCode,
    title: "Programming",
    description:
      "Programming Language ব্যবহার করে সমস্যা সমাধান এবং Software তৈরির মৌলিক ধারণা শেখানো হয়।",
  },
  {
    icon: FaGlobe,
    title: "Web Development",
    description:
      "HTML, CSS, JavaScript এবং আধুনিক Web Technology ব্যবহার করে Website ও Web Application তৈরি শেখানো হয়।",
  },
  {
    icon: FaDatabase,
    title: "Database",
    description:
      "Data সংরক্ষণ, পরিচালনা এবং Database ব্যবহারের প্রয়োজনীয় ধারণা শেখানো হয়।",
  },
  {
    icon: FaNetworkWired,
    title: "Networking",
    description:
      "Computer Network, Internet, Router, IP Address এবং Network Management সম্পর্কে শেখানো হয়।",
  },
  {
    icon: FaLaptopCode,
    title: "Software Development",
    description:
      "Software planning, development, testing এবং maintenance সম্পর্কে বাস্তব ধারণা তৈরি করা হয়।",
  },
  {
    icon: FaMicrochip,
    title: "Computer Hardware",
    description:
      "Computer components, assembly, maintenance এবং basic troubleshooting সম্পর্কে শেখানো হয়।",
  },
];


const labs = [
  {
    title: "Computer Programming Lab",
    description:
      "Programming practice, coding exercises এবং problem solving-এর জন্য ব্যবহার করা হয়।",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Networking Lab",
    description:
      "Network configuration, connectivity এবং networking concepts হাতে-কলমে শেখার সুযোগ।",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Computer Hardware Lab",
    description:
      "Computer hardware identification, assembly ও troubleshooting-এর practical কাজ করা হয়।",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=900&q=80",
  },
];

const reasons = [
  "Computer ও Information Technology সম্পর্কে ভিত্তি তৈরি করা",
  "Programming ও Problem Solving শেখার সুযোগ",
  "Web ও Software Development-এর practical knowledge",
  "Computer Networking ও Hardware সম্পর্কে ধারণা",
  "Project-based learning-এর মাধ্যমে বাস্তব অভিজ্ঞতা",
  "ভবিষ্যৎ শিক্ষা ও IT-related career-এর প্রস্তুতি",
];

const careers = [
  {
    title: "Web Developer",
    description: "Website এবং Web Application তৈরি ও রক্ষণাবেক্ষণের কাজ।",
  },
  {
    title: "Software Developer",
    description:
      "Software ও Application development-এর বিভিন্ন কাজে যুক্ত হওয়া।",
  },
  {
    title: "Network Technician",
    description: "Network setup, maintenance ও troubleshooting-এর কাজ।",
  },
  {
    title: "IT Support",
    description: "Computer, software এবং IT-related technical support প্রদান।",
  },
  {
    title: "Database Assistant",
    description:
      "Database ও data management-related বিভিন্ন কাজে সহযোগিতা করা।",
  },
  {
    title: "Freelancer",
    description:
      "Web, software, design বা technology-based project নিয়ে কাজ করা।",
  },
];

const higherStudies = [
  "B.Sc. in Engineering",
  "Bachelor Degree in Technology",
  "Masters / Advanced Study",
  "Professional Certification",
  "Scholarship Opportunities",
  "Research & Innovation",
];

/* ENTREPRENEURSHIP */

const entrepreneurship = [
  "Freelancing",
  "Web Development Service",
  "Software / App Development",
  "IT Support Service",
  "Technology-based Business",
  "Startup & Innovation",
];

/*CURRICULUM */

const curriculum = [
  {
    semester: "1st Semester",
    subjects: [
      "Computer Fundamentals",
      "Engineering Drawing",
      "Mathematics",
      "Physics",
    ],
  },
  {
    semester: "2nd Semester",
    subjects: [
      "Programming Fundamentals",
      "Digital Electronics",
      "Mathematics",
      "English",
    ],
  },
  {
    semester: "3rd Semester",
    subjects: [
      "Object Oriented Programming",
      "Database",
      "Web Technology",
      "Networking",
    ],
  },
  {
    semester: "4th Semester",
    subjects: [
      "Data Structure",
      "Computer Architecture",
      "Operating System",
      "Web Development",
    ],
  },
];

/* FACULTY */

const faculty = [
  {
    name: "Teacher Name",
    designation: "Chief Instructor",
    image: "/images/faculty/faculty-1.jpg",
  },
  {
    name: "Teacher Name",
    designation: "Instructor",
    image: "/images/faculty/faculty-2.jpg",
  },
  {
    name: "Teacher Name",
    designation: "Junior Instructor",
    image: "/images/faculty/faculty-3.jpg",
  },
];

/* =========================================================
   ALUMNI */

const alumni = [
  {
    name: "Alumni Name",
    position: "Software Developer",
    company: "Organization Name",
    quote:
      "Computer Technology আমাকে Programming এবং Technology সম্পর্কে শক্ত ভিত্তি তৈরি করতে সাহায্য করেছে।",
    image: "/images/alumni/alumni-1.jpg",
  },
  {
    name: "Alumni Name",
    position: "IT Professional",
    company: "Organization Name",
    quote:
      "Practical learning এবং project experience আমার পরবর্তী career-এর জন্য গুরুত্বপূর্ণ ছিল।",
    image: "/images/alumni/alumni-2.jpg",
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question: "Computer Technology কী?",
    answer:
      "Computer Technology হলো Computer, Programming, Software, Web Development, Networking, Database এবং Hardware-এর মতো বিষয় শেখার একটি প্রযুক্তিভিত্তিক শিক্ষা ক্ষেত্র।",
  },
  {
    question: "Computer Technology পড়তে আগে থেকে Programming জানা প্রয়োজন?",
    answer:
      "না। সাধারণত শুরু থেকেই প্রয়োজনীয় Computer ও Programming concepts ধাপে ধাপে শেখানো হয়।",
  },
  {
    question: "এই Department-এ কি Practical কাজ করা হয়?",
    answer:
      "হ্যাঁ। Computer Technology-তে laboratory practice, programming, networking, hardware এবং project-based practical learning গুরুত্বপূর্ণ অংশ।",
  },
  {
    question: "পড়াশোনা শেষে কী করা যায়?",
    answer:
      "শিক্ষার্থীরা তাদের দক্ষতা ও পরবর্তী শিক্ষার ভিত্তিতে বিভিন্ন IT-related career, higher study, freelancing বা entrepreneurship-এর দিকে যেতে পারে।",
  },
];

/*  MAIN PAGE  */

export default function ComputerDepartmentPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO / DEPARTMENT OVERVIEW */}
      <DepartmentHeroSection department={department} />


      {/* AT A GLANCE */}

      <Glance focus={"Information & Technology"} />
      <section
        id="overview"
        className="scroll-mt-20 border-b border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel>Department Overview</SectionLabel>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Computer Technology কী?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Computer Technology হলো Computer ও Information Technology
                সম্পর্কিত বিভিন্ন বিষয় শেখার একটি কারিগরি শিক্ষা ক্ষেত্র। এখানে
                শিক্ষার্থীরা Computer fundamentals থেকে শুরু করে Programming,
                Web Development, Database, Networking এবং Hardware সম্পর্কে
                ধারণা অর্জন করে।
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                তাত্ত্বিক জ্ঞানের পাশাপাশি practical work, laboratory practice
                এবং project-এর মাধ্যমে বাস্তব দক্ষতা গড়ে তোলার সুযোগ থাকে।
              </p>
            </div>

            {/* VIDEO / INFOGRAPHIC PLACEHOLDER */}

            <div className="relative aspect-video overflow-hidden rounded-3xl bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80"
                alt="Computer Technology"
                className="h-full w-full object-cover opacity-70"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition hover:scale-105"
                  aria-label="Play introduction video"
                >
                  ▶
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-sm font-medium text-white">
                  এক নজরে Computer Technology
                </p>

                <p className="mt-1 text-xs text-slate-300">
                  Introduction Video / Infographic
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03. LABS & PRACTICAL FACILITIES
      ===================================================== */}

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            label="Labs & Practical Facilities"
            title="হাতে-কলমে শেখার সুযোগ"
            description="তাত্ত্বিক জ্ঞানের পাশাপাশি বিভিন্ন laboratory ও practical activity-এর মাধ্যমে বাস্তব অভিজ্ঞতা অর্জনের সুযোগ।"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {labs.map((lab) => (
              <div
                key={lab.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                      <FaFlask />
                    </div>

                    <h3 className="font-bold text-slate-900">{lab.title}</h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {lab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          04. WHY CHOOSE THIS DEPARTMENT
      ===================================================== */}

      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel>Why Choose This Department?</SectionLabel>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                কেন Computer Technology পড়বেন?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                যারা Computer ও Technology নিয়ে আগ্রহী, Programming শিখতে চান
                অথবা IT-related skills তৈরি করতে চান, তাদের জন্য এই
                Department-এর বিভিন্ন বিষয় কাজে লাগতে পারে।
              </p>
            </div>

            <div className="grid gap-3">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="pt-1 text-sm leading-6 text-slate-700">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          05. CAREER & INDUSTRY
      ===================================================== */}

      <section id="career" className="scroll-mt-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            dark
            label="Career & Industry"
            title="ক্যারিয়ার ও ইন্ডাস্ট্রি সংযোগ"
            description="Computer Technology-এর দক্ষতা বিভিন্ন IT-related কাজ, internship, industrial training এবং project-based কাজের ক্ষেত্রে ব্যবহার করা যেতে পারে।"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {careers.map((career) => (
              <div
                key={career.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-900">
                  <FaBriefcase />
                </div>

                <h3 className="mt-5 font-bold text-white">{career.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {career.description}
                </p>
              </div>
            ))}
          </div>

          {/* INDUSTRY EXPERIENCE */}

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-9">
            <div className="grid gap-8 sm:grid-cols-3">
              <IndustryItem
                icon={<FaBuildingColumns />}
                title="Industrial Training"
                text="Industry-oriented practical training-এর সুযোগ।"
              />

              <IndustryItem
                icon={<FaUsers />}
                title="Internship"
                text="বাস্তব কাজের পরিবেশ সম্পর্কে অভিজ্ঞতা অর্জনের সুযোগ।"
              />

              <IndustryItem
                icon={<FaBriefcase />}
                title="Career Preparation"
                text="Industry-relevant skills ও project experience তৈরি।"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          06. HIGHER STUDY & ENTREPRENEURSHIP
      ===================================================== */}

      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* HIGHER STUDY */}

            <div className="rounded-3xl bg-slate-50 p-8 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-xl text-white">
                <FaGraduationCap />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                উচ্চশিক্ষার সুযোগ
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Diploma-এর পর যোগ্যতা ও প্রতিষ্ঠানের নিয়ম অনুযায়ী বিভিন্ন higher
                study ও professional learning-এর সুযোগ রয়েছে।
              </p>

              <div className="mt-7 space-y-3">
                {higherStudies.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white p-3"
                  >
                    <FaCheck className="text-xs" />

                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ENTREPRENEURSHIP */}

            <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl text-slate-900">
                <FaLaptopCode />
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Freelancing & Entrepreneurship
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Technology skill ব্যবহার করে project-based work, freelancing
                অথবা নিজস্ব technology service তৈরি করার সুযোগ থাকতে পারে।
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {entrepreneurship.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                  >
                    <FaCheck className="text-xs text-slate-300" />

                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          07. CURRICULUM
      ===================================================== */}

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              label="Curriculum"
              title="কী কী পড়ানো হয়?"
              description="নিচে কিছু গুরুত্বপূর্ণ semester ও subject-এর উদাহরণ দেওয়া হলো। সম্পূর্ণ curriculum PDF আকারে রাখা যেতে পারে।"
            />

            <Link
              href="/documents/computer-curriculum.pdf"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              <FaDownload />
              Full Curriculum
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {curriculum.map((item) => (
              <div
                key={item.semester}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <FaBookOpen />
                  </div>

                  <h3 className="font-bold text-slate-900">{item.semester}</h3>
                </div>

                <div className="mt-5 grid gap-2">
                  {item.subjects.map((subject) => (
                    <div
                      key={subject}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <FaCheck className="text-[10px]" />
                      {subject}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FACULTY
      ===================================================== */}

      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            label="Faculty Members"
            title="আমাদের শিক্ষকবৃন্দ"
            description="Department-এর শিক্ষক ও instructors-এর পরিচিতি এখানে দেখানো যেতে পারে।"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {faculty.map((member) => (
              <div
                key={member.name + member.designation}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
              >
                <div className="aspect-[4/3] bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-slate-900">{member.name}</h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {member.designation}
                  </p>

                  <Link
                    href="#"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-800"
                  >
                    View Profile
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          08. ALUMNI SUCCESS STORIES
      ===================================================== */}

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            label="Alumni Success Stories"
            title="আমাদের প্রাক্তন শিক্ষার্থীদের কথা"
            description="বাস্তব Alumni-এর অভিজ্ঞতা ও career journey নতুন শিক্ষার্থীদের জন্য একটি মূল্যবান ধারণা দিতে পারে।"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {alumni.map((person) => (
              <div
                key={person.name + person.position}
                className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8"
              >
                <FaQuoteLeft className="text-2xl text-slate-300" />

                <p className="mt-5 text-base leading-8 text-slate-600">
                  “{person.quote}”
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {person.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {person.position} · {person.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section>
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-24">
          <SectionHeading
            label="FAQ"
            title="সাধারণ কিছু প্রশ্ন"
            description="Computer Technology সম্পর্কে নতুন শিক্ষার্থীদের সাধারণ প্রশ্নের উত্তর।"
          />

          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 font-semibold text-slate-900">
                  {faq.question}

                  <FaChevronDown className="shrink-0 text-sm transition group-open:rotate-180" />
                </summary>

                <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl text-slate-900">
            <FaGraduationCap />
          </div>

          <h2 className="mt-7 text-3xl font-bold text-white sm:text-4xl">
            Computer Technology সম্পর্কে আরও জানতে চান?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Admission, curriculum এবং অন্যান্য প্রয়োজনীয় তথ্য জানতে সংশ্লিষ্ট
            section দেখুন।
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/admission"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Admission Information
              <FaArrowRight />
            </Link>

            <Link
              href="/departments"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Other Departments
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */


function SectionLabel({ children, dark = false }) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.2em] ${
        dark ? "text-slate-400" : "text-slate-500"
      }`}
    >
      {children}
    </p>
  );
}

function SectionHeading({ label, title, description, dark = false }) {
  return (
    <div className="max-w-2xl">
      <SectionLabel dark={dark}>{label}</SectionLabel>

      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-5 leading-8 ${
          dark ? "text-slate-400" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function IndustryItem({ icon, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-slate-900">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-white">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
      </div>
    </div>
  );
}
