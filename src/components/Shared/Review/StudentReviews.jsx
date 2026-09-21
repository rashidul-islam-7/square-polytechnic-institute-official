"use client";

import React from "react";
import { Quote, Star, ArrowRight, GraduationCap } from "lucide-react";
import OneSlider from "../Slider/OneSlider";

const reviews = [
  {
    title: "একটি অসাধারণ শিক্ষার পরিবেশ",
    studentName: "Rafi",
    session: "2020–2021",
    rating: 3,
    department: "Computer Technology",
    comment:
      "এই পলিটেকনিকের শিক্ষার পরিবেশ অনেক ভালো। শিক্ষকরা খুবই আন্তরিক এবং ব্যবহারিক শিক্ষার উপর গুরুত্ব দেন। এখানে পড়াশোনা করে আমি আমার ক্যারিয়ার নিয়ে আরও আত্মবিশ্বাসী হয়েছি।",
  },
  {
    title: "দক্ষতা অর্জনের জন্য ভালো জায়গা",
    studentName: "Sakib",
    session: "2021–2022",
    rating: 4,
    department: "Civil Technology",
    comment:
      "এখানে শুধু বইয়ের পড়াশোনা নয়, বাস্তব কাজের মাধ্যমে শেখার সুযোগ পাওয়া যায়। শিক্ষকদের সহযোগিতা এবং সুন্দর পরিবেশ আমার শেখার অভিজ্ঞতাকে আরও ভালো করেছে।",
  },
  {
    title: "আমার ক্যারিয়ারের নতুন যাত্রা",
    studentName: "Nusrat",
    session: "2022–2023",
    rating: 5,
    department: "Electrical Technology",
    comment:
      "SPI-তে পড়াশোনার সময় অনেক নতুন কিছু শেখার সুযোগ পেয়েছি। শিক্ষকরা নিয়মিত গাইড করেছেন এবং বিভিন্ন practical কাজের মাধ্যমে আমাদের দক্ষতা বাড়াতে সাহায্য করেছেন।",
  },
  {
    title: "আমার ক্যারিয়ারের নতুন যাত্রা",
    studentName: "Nusrat",
    session: "2022–2023",
    rating: 5,
    department: "Electrical Technology",
    comment:
      "SPI-তে পড়াশোনার সময় অনেক নতুন কিছু শেখার সুযোগ পেয়েছি। শিক্ষকরা নিয়মিত গাইড করেছেন এবং বিভিন্ন practical কাজের মাধ্যমে আমাদের দক্ষতা বাড়াতে সাহায্য করেছেন।",
  },
  {
    title: "আমার ক্যারিয়ারের নতুন যাত্রা",
    studentName: "Nusrat",
    session: "2022–2023",
    rating: 5,
    department: "Electrical Technology",
    comment:
      "SPI-তে পড়াশোনার সময় অনেক নতুন কিছু শেখার সুযোগ পেয়েছি। শিক্ষকরা নিয়মিত গাইড করেছেন এবং বিভিন্ন practical কাজের মাধ্যমে আমাদের দক্ষতা বাড়াতে সাহায্য করেছেন।",
  },
  {
    title: "আমার ক্যারিয়ারের নতুন যাত্রা",
    studentName: "Nusrat",
    session: "2022–2023",
    rating: 5,
    department: "Electrical Technology",
    comment:
      "SPI-তে পড়াশোনার সময় অনেক নতুন কিছু শেখার সুযোগ পেয়েছি। শিক্ষকরা নিয়মিত গাইড করেছেন এবং বিভিন্ন practical কাজের মাধ্যমে আমাদের দক্ষতা বাড়াতে সাহায্য করেছেন।",
  },
  {
    title: "আমার ক্যারিয়ারের নতুন যাত্রা",
    studentName: "Nusrat",
    session: "2022–2023",
    rating: 5,
    department: "Electrical Technology",
    comment:
      "SPI-তে পড়াশোনার সময় অনেক নতুন কিছু শেখার সুযোগ পেয়েছি। শিক্ষকরা নিয়মিত গাইড করেছেন এবং বিভিন্ন practical কাজের মাধ্যমে আমাদের দক্ষতা বাড়াতে সাহায্য করেছেন।",
  },
  {
    title: "আমার ক্যারিয়ারের নতুন যাত্রা",
    studentName: "Nusrat",
    session: "2022–2023",
    rating: 5,
    department: "Electrical Technology",
    comment:
      "SPI-তে পড়াশোনার সময় অনেক নতুন কিছু শেখার সুযোগ পেয়েছি। শিক্ষকরা নিয়মিত গাইড করেছেন এবং বিভিন্ন practical কাজের মাধ্যমে আমাদের দক্ষতা বাড়াতে সাহায্য করেছেন।",
  },
];

const StudentReviews = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#44A1A4]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#224248]/5 blur-3xl" />

      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mb-8 text-center">
          <div>
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#44A1A4]/20 bg-[#44A1A4]/5 px-4 py-2 text-xs font-semibold text-[#325E6A]">
              <Star size={14} className="fill-[#44A1A4] text-[#44A1A4]" />
              শিক্ষার্থীদের অভিজ্ঞতা
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#224248] md:text-4xl">
              আমাদের শিক্ষার্থীরা{" "}
              <span className="text-[#44A1A4]">কী বলছে?</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 md:text-base">
              স্কয়ার পলিটেকনিক ইন্সটিটিউটে শিক্ষার্থীদের শেখার অভিজ্ঞতা, পরিবেশ
              এবং শিক্ষক-সহযোগিতা সম্পর্কে তাদের কিছু কথা।
            </p>
          </div>

          {/* Rating */}
          {/* <div className="hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 md:block">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className="fill-[#FF9A00] text-[#FF9A00]"
                />
              ))}
            </div>

            <p className="mt-2 text-xs font-medium text-slate-500">
              শিক্ষার্থীদের সন্তুষ্টিই আমাদের অনুপ্রেরণা
            </p>
          </div> */}
        </div>

        {/* ================= REVIEWS ================= */}
        <OneSlider reviewsContent={reviews} />

        {/* ================= BOTTOM CTA ================= */}
        {/* <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#224248] px-6 py-6 md:flex-row md:px-8">
          <div>
            <h3 className="text-base font-bold text-white md:text-lg">
              আপনার সুন্দর ভবিষ্যতের জন্য সঠিক সিদ্ধান্ত নিন
            </h3>

            <p className="mt-1 text-xs text-white/60">
              মানসম্মত শিক্ষা ও দক্ষতা অর্জনের যাত্রায় Square Polytechnic আছে
              আপনার পাশে।
            </p>
          </div>

          <a
            href="/admission"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#FF9A00] px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-[#E88900]"
          >
            ভর্তি সম্পর্কে জানুন
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default StudentReviews;
