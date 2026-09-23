import Link from "next/link";
import React from "react";
import { FaArrowRight, FaCheck, FaGraduationCap } from "react-icons/fa6";

const ScholarshipSection = () => {
  const benefits = [
    "প্রতিষ্ঠানের নিজস্ব স্কলারশিপ",
    "সম্পূর্ণ ১০০% স্কলারশিপ সুবিধা",
    "যোগ্য শিক্ষার্থীদের জন্য বিশেষ সুযোগ",
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 md:py-20">
      {/* Background Shapes */}
      <div className="pointer-events-none absolute -left-20 top-20 h-60 w-60 rounded-full bg-[#44A1A4]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#224248]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADING ================= */}

        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#44A1A4]/20 bg-white px-4 py-2 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#44A1A4]" />

            <span className="text-base font-bold tracking-wide text-[#325E6A] sm:text-sm">
              শিক্ষার্থীদের জন্য বিশেষ সুযোগ
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#224248] sm:text-4xl">
            আপনার স্বপ্ন,
            <span className="text-[#44A1A4]"> আমাদের সহযোগিতা</span>
          </h2>

          <p className="mt-4 leading-7 text-[#527080] text-base">
            মেধাবী ও যোগ্য শিক্ষার্থীদের পড়াশোনার সুযোগকে আরও সহজ করতে স্কয়ার
            পলিটেকনিক ইন্সটিটিউটের নিজস্ব উদ্যোগ।
          </p>
        </div>

        {/* ================= SCHOLARSHIP CARD ================= */}

        <div className="relative overflow-hidden rounded-[28px] border border-[#DCE9EA] bg-white shadow-[0_18px_55px_rgba(34,66,72,0.08)]">
          {/* Top Line */}
          <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#224248] via-[#44A1A4] to-[#224248]" />

          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* =====================================================
                LEFT - 100% VISUAL
            ====================================================== */}

            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden border-b border-[#E5EEEE] bg-[#F4FAFA] p-8 lg:border-b-0 lg:border-r">
              {/* Decorative Circle */}
              <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full border-[18px] border-[#44A1A4]/5" />

              <div className="absolute -bottom-20 -right-16 h-48 w-48 rounded-full border-[20px] border-[#224248]/5" />

              {/* Vertical Label */}
              <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 md:block">
                <span className="text-[10px] font-bold tracking-[0.35em] text-[#78909C]">
                  SCHOLARSHIP
                </span>
              </div>

              <div className="relative text-center">
                {/* Icon */}

                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#224248] text-[#F4C95D] shadow-lg">
                  <FaGraduationCap size={25} />
                </div>

                {/* Main Number */}

                <div className="relative">
                  <span className="block text-[90px] font-black leading-[0.85] tracking-[-0.06em] text-[#224248] sm:text-[105px]">
                    100<span className="text-[#44A1A4]">%</span>
                  </span>
                </div>

                <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-[#CBDCDD]" />

                  <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#325E6A]">
                    Scholarship
                  </span>

                  <span className="h-px w-8 bg-[#CBDCDD]" />
                </div>

                <p className="mt-4 text-xs font-medium text-[#78909C]">
                  Square Polytechnic Institute
                </p>
              </div>
            </div>

            {/* RIGHT - CONTENT */}

            <div className="flex flex-col justify-center p-7 sm:p-9 md:p-12 lg:p-14">
              {/* Small Label */}

              <div className="mb-5 flex items-center gap-3">
                <span className="h-8 w-1 rounded-full bg-[#44A1A4]" />

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#78909C]">
                    বিশেষ সুবিধা
                  </p>

                  <p className="mt-0.5 font-bold text-[#325E6A]">
                    প্রতিষ্ঠানের নিজস্ব উদ্যোগ
                  </p>
                </div>
              </div>

              {/* Heading */}

              <h3 className="max-w-xl text-3xl font-extrabold leading-[1.25] tracking-tight text-[#224248] sm:text-4xl">
                মেধার মূল্যায়নে
                <br />
                <span className="text-[#44A1A4]">১০০% স্কলারশিপ</span>
              </h3>

              {/* Description */}

              <p className="mt-5 max-w-xl  leading-6 text-[#527080] text-base">
                শিক্ষার্থীদের স্বপ্নের পড়াশোনাকে আরও সহজ করতে স্কয়ার পলিটেকনিক
                ইন্সটিটিউটের নিজস্ব উদ্যোগে রয়েছে সম্পূর্ণ ১০০% স্কলারশিপের
                বিশেষ সুবিধা।
              </p>

              {/* Benefits */}

              <div className="mt-7 space-y-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="group/item flex items-center gap-3"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EEF7F7] text-[#44A1A4] transition-colors duration-300 group-hover/item:bg-[#44A1A4] group-hover/item:text-white">
                      <FaCheck size={10} />
                    </div>

                    <span className="text-sm font-semibold text-[#325E6A] sm:text-[15px]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}

              <div className="mt-8">
                <Link 
                  href="/scholarshipPage"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#FF9A00] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(255,154,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E88900] hover:shadow-[0_12px_28px_rgba(255,154,0,0.25)] sm:px-7 sm:text-base"
                >
                  <span>স্কলারশিপ সম্পর্কে জানুন...</span>

                  <FaArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-[#44A1A4]" />
        </div>
      </div>
    </section>
  );
};

export default ScholarshipSection;
