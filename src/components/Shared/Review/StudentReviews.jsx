"use client";

import React from "react";
import {
  Quote,
  Star,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

const reviews = [
  {
    name: "মোঃ রাকিব হাসান",
    department: "কম্পিউটার টেকনোলজি",
    batch: "Diploma in Engineering",
    review:
      "স্কয়ার পলিটেকনিক ইন্সটিটিউটে পড়াশোনার পাশাপাশি ব্যবহারিক কাজ শেখার সুযোগ পেয়েছি। শিক্ষকদের সহযোগিতা এবং সুন্দর পরিবেশ আমাকে অনেক আত্মবিশ্বাসী করেছে।",
  },
  {
    name: "সুমাইয়া আক্তার",
    department: "ইলেকট্রিক্যাল টেকনোলজি",
    batch: "Diploma in Engineering",
    review:
      "শিক্ষকদের আন্তরিকতা এবং ল্যাবের ব্যবহারিক ক্লাসগুলো আমার সবচেয়ে ভালো লাগে। কঠিন বিষয়গুলোও শিক্ষকরা সহজভাবে বুঝিয়ে দেন।",
  },
  {
    name: "মোঃ তানভীর আহমেদ",
    department: "সিভিল টেকনোলজি",
    batch: "Diploma in Engineering",
    review:
      "শুধু বইয়ের পড়াশোনা নয়, বাস্তব কাজ সম্পর্কে শেখার সুযোগ এখানে অনেক বেশি। ভবিষ্যৎ ক্যারিয়ার নিয়ে নিজেকে আরও প্রস্তুত মনে হচ্ছে।",
  },
];

const StudentReviews = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#44A1A4]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#224248]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#44A1A4]/20 bg-[#44A1A4]/5 px-4 py-2 text-xs font-semibold text-[#325E6A]">
              <Star size={14} className="fill-[#44A1A4] text-[#44A1A4]" />
              শিক্ষার্থীদের অভিজ্ঞতা
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#224248] md:text-4xl lg:text-5xl">
              আমাদের শিক্ষার্থীরা
              <br />
              <span className="text-[#44A1A4]">কী বলছে?</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
              স্কয়ার পলিটেকনিক ইন্সটিটিউটে শিক্ষার্থীদের শেখার অভিজ্ঞতা,
              পরিবেশ এবং শিক্ষক-সহযোগিতা সম্পর্কে তাদের কিছু কথা।
            </p>
          </div>

          {/* Rating */}
          <div className="hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 md:block">
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
          </div>
        </div>

        {/* ================= REVIEWS ================= */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#44A1A4]/30 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="absolute right-5 top-5 text-[#44A1A4]/10 transition-colors duration-300 group-hover:text-[#44A1A4]/20">
                <Quote size={55} />
              </div>

              {/* Stars */}
              <div className="relative flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className="fill-[#FF9A00] text-[#FF9A00]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="relative mt-5 flex-1 text-sm leading-7 text-slate-600">
                “{review.review}”
              </p>

              {/* Divider */}
              <div className="my-5 h-px bg-slate-100" />

              {/* Student Info */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#224248] text-white">
                  <GraduationCap size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#224248]">
                    {review.name}
                  </h3>

                  <p className="mt-0.5 text-xs text-[#44A1A4]">
                    {review.department}
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    {review.batch}
                  </p>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#44A1A4] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#224248] px-6 py-6 md:flex-row md:px-8">
          <div>
            <h3 className="text-base font-bold text-white md:text-lg">
              আপনার সন্তানের সুন্দর ভবিষ্যতের জন্য সঠিক সিদ্ধান্ত নিন
            </h3>

            <p className="mt-1 text-xs text-white/60">
              মানসম্মত শিক্ষা ও দক্ষতা অর্জনের যাত্রায় SPI থাকছে পাশে।
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
        </div>
      </div>
    </section>
  );
};

export default StudentReviews;