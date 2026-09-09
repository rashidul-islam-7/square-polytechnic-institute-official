"use client";

import { useEffect, useState } from "react";
import {
  BadgeCheck,
  Building2,
  GraduationCap,
  UsersRound,
  FlaskConical,
  House,
  Trophy,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

import InstituteFeatureCard from "../UI/Cards/InstituteFeatureCard";
import Link from "next/link";

const features = [
  {
    icon: BadgeCheck,
    title: "সরকার অনুমোদিত ও স্বীকৃত",
  },
  {
    icon: Building2,
    title: "নিজস্ব ক্যাম্পাস",
  },
  {
    icon: GraduationCap,
    title: "১০০% স্কলারশিপসহ ৪০,০০০ টাকা উপবৃত্তি",
  },
  {
    icon: UsersRound,
    title: "দক্ষ ও অভিজ্ঞ শিক্ষক টিম",
  },
  {
    icon: FlaskConical,
    title: "আধুনিক ল্যাব ও ওয়ার্কশপ",
  },
  {
    icon: House,
    title: "হোস্টেল সুবিধা",
  },
  {
    icon: Trophy,
    title: "খেলাধুলা ও সাংস্কৃতিক কার্যক্রম",
  },
  {
    icon: BriefcaseBusiness,
    title: "ইন্ডাস্ট্রিয়াল ট্রেনিং ও Job Placement",
  },
];

const InstituteFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 md:py-20">
      {/* Background Blur */}
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#44A1A4]/5 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#C28B24]/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C28B24]/20 bg-[#FFFDF7] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C28B24]" />
            <span className="text-xs font-bold tracking-wide text-[#9B6F17] sm:text-sm">
              বিশেষ সুবিধা ও বৈশিষ্ট্য
            </span>
          </div>

          <h2 className="text-3xl font-extrabold text-[#224248] sm:text-4xl">
            আমাদের <span className="text-[#44A1A4]">বিশেষ সুবিধাসমূহ</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#527080] sm:text-base">
            আধুনিক শিক্ষা, দক্ষ শিক্ষক এবং প্রয়োজনীয় সুযোগ-সুবিধার মাধ্যমে
            শিক্ষার্থীদের সুন্দর ভবিষ্যৎ গড়ে তুলি।
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {features.map((feature, index) => (
            <InstituteFeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              isActive={activeIndex === index}
            />
          ))}
        </div>
      </div>

      {/* ================= BOTTOM NOTE ================= */}
      <div className="mt-8 text-center">
        <p className="text-xs font-medium text-[#78909C] sm:text-sm">
          শিক্ষার্থীদের সাফল্যের জন্য প্রয়োজনীয় সকল সুবিধা একসাথে
        </p>
      </div>
      {/* More Details Button */}
      <div className="mt-6 flex justify-center">
        <Link
          href="/about"
          className="group inline-flex items-center gap-2 rounded-full border border-[#44A1A4]/20 bg-orange px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#44A1A4]/40 hover:bg-[#224248] hover:text-white hover:shadow-lg sm:px-7 sm:py-3.5 sm:text-base"
        >
          <span>আরও বিস্তারিত জানুন</span>

          <ArrowRight
            size={18}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
};

export default InstituteFeatures;
