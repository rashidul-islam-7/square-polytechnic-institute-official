import React from "react";
import { FaDesktop, FaChalkboardTeacher, FaCertificate } from "react-icons/fa";

import { FaArrowRight } from "react-icons/fa6";
import SectionTopSubTitle from "../UI/SectionTopSubTitle";
import TitleStyle from "../UI/TitleStyle";

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

function HighlightCard({ item }) {
  const Icon = item.icon;
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300  hover:border-blue-200 hover:shadow-xl sm:p-7">
      <span
        className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${item.gradient}`}
      />

      <div className="flex items-start justify-between gap-4">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.iconBg}`}
        >
          <Icon />
        </span>
      </div>

      <h3 className="mt-6 text-xl font-black text-slate-900">{item.title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {item.description}
      </p>

      <div
        className={`mt-6 h-1 w-12 rounded-full bg-linear-to-r transition-all duration-300 group-hover:w-20 ${item.gradient}`}
      />
    </article>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative z-10 -mt-1 bg-slate-50 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-center items-center max-w-2xl m-auto text-center mb-6 md:mb-10">
          <SectionTopSubTitle text={"Why Choose Us"} />
          <TitleStyle
            title="কেন আমাদের"
            highlightedTitle="প্রশিক্ষণ বেছে নেবেন? "
          />
          <p className="mt-3">
            অভিজ্ঞ প্রশিক্ষকের দিকনির্দেশনা, আধুনিক কম্পিউটার ল্যাবে হাতে-কলমে
            অনুশীলন এবং বাস্তব কাজের উপযোগী দক্ষতা অর্জনের মাধ্যমে নিজেকে গড়ে
            তুলুন।
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <HighlightCard key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
