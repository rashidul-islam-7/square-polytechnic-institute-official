import React from "react";
import { FaDesktop, FaChalkboardTeacher, FaCertificate } from "react-icons/fa";

import { FaArrowRight } from "react-icons/fa6";

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

export default function CourseHighligh() {
  return (
    <>
      {/* KEY HIGHLIGHTS */}
      <section className="relative z-10 -mt-1 overflow-hidden bg-slate-50 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* <div
            eyebrow="Why Choose Us"
            title="কেন আমাদের প্রশিক্ষণ বেছে নেবেন?"
            description="কম্পিউটার শেখার জন্য প্রয়োজনীয় ব্যবহারিক অনুশীলন, প্রশিক্ষকের সহায়তা এবং সার্টিফিকেট-সংক্রান্ত তথ্য সম্পর্কে জেনে নিন।"
          /> */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl sm:p-8"
                >
                  {/* Top Gradient Border */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.gradient}`}
                  />

                  {/* Soft Background Decoration */}
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-slate-100/80 transition-transform duration-500 group-hover:scale-150"
                    aria-hidden="true"
                  />

                  {/* Icon and Number */}
                  <div className="relative flex items-center justify-between">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl text-2xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.iconBg}`}
                    >
                      <Icon />
                    </div>

                    <span className="text-5xl font-black tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-slate-200">
                      {item.number}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="relative mt-7 flex flex-1 flex-col">
                    <h3 className="text-xl font-extrabold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-700 sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                      {item.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-7 flex items-center justify-between">
                      <div
                        className={`h-1.5 w-12 rounded-full bg-gradient-to-r transition-all duration-300 group-hover:w-20 ${item.gradient}`}
                      />

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                        <FaArrowRight className="text-sm transition-transform duration-300 group-hover:-rotate-45" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
