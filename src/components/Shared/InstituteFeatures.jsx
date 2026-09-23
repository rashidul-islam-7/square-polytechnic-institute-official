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
  X,
} from "lucide-react";

import InstituteFeatureCard from "../UI/Cards/InstituteFeatureCard";
import Link from "next/link";

const features = [
  {
    icon: BadgeCheck,
    title: "সরকার অনুমোদিত ও স্বীকৃত",
    description:
      "আমাদের প্রতিষ্ঠান সরকারি নিয়মনীতি অনুযায়ী পরিচালিত এবং সংশ্লিষ্ট কর্তৃপক্ষের অনুমোদন ও স্বীকৃতিসহ শিক্ষার্থীদের মানসম্মত কারিগরি শিক্ষা প্রদান করে।",
  },
  {
    icon: Building2,
    title: "নিজস্ব ক্যাম্পাস",
    description:
      "শিক্ষার্থীদের জন্য রয়েছে নিজস্ব সুন্দর ও মনোরম ক্যাম্পাস। নিরাপদ ও শিক্ষাবান্ধব পরিবেশে নিয়মিত ক্লাস, ব্যবহারিক শিক্ষা ও বিভিন্ন কার্যক্রম পরিচালিত হয়।",
  },
  {
    icon: GraduationCap,
    title: "১০০% স্কলারশিপসহ ৪০,০০০ টাকা উপবৃত্তি",
    description:
      "যোগ্য শিক্ষার্থীদের জন্য রয়েছে সরকারি সুযোগ-সুবিধা অনুযায়ী স্কলারশিপ ও উপবৃত্তির সুবিধা। শিক্ষার্থীরা নিয়ম ও যোগ্যতা পূরণ সাপেক্ষে সর্বোচ্চ ৪০,০০০ টাকা পর্যন্ত উপবৃত্তির সুযোগ পেতে পারে।",
  },
  {
    icon: UsersRound,
    title: "দক্ষ ও অভিজ্ঞ শিক্ষক টিম",
    description:
      "আমাদের দক্ষ ও অভিজ্ঞ শিক্ষকবৃন্দ নিয়মিত তাত্ত্বিক ও ব্যবহারিক ক্লাসের মাধ্যমে শিক্ষার্থীদের বিষয়ভিত্তিক জ্ঞান ও দক্ষতা অর্জনে সহযোগিতা করেন।",
  },
  {
    icon: FlaskConical,
    title: "আধুনিক ল্যাব ও ওয়ার্কশপ",
    description:
      "তাত্ত্বিক জ্ঞানের পাশাপাশি হাতে-কলমে শেখার জন্য রয়েছে আধুনিক কম্পিউটার ল্যাব, ইঞ্জিনিয়ারিং ল্যাব ও প্রয়োজনীয় ওয়ার্কশপ সুবিধা।",
  },
  {
    icon: House,
    title: "হোস্টেল সুবিধা",
    description:
      "দূরবর্তী এলাকার শিক্ষার্থীদের জন্য রয়েছে আবাসিক সুবিধা। নিরাপদ ও শিক্ষাবান্ধব পরিবেশে থেকে পড়াশোনা চালিয়ে যাওয়ার সুযোগ রয়েছে।",
  },
  {
    icon: Trophy,
    title: "খেলাধুলা ও সাংস্কৃতিক কার্যক্রম",
    description:
      "শিক্ষার্থীদের মানসিক ও শারীরিক বিকাশের জন্য নিয়মিত খেলাধুলা, সাংস্কৃতিক অনুষ্ঠান এবং বিভিন্ন সহশিক্ষা কার্যক্রম আয়োজন করা হয়।",
  },
  {
    icon: BriefcaseBusiness,
    title: "ইন্ডাস্ট্রিয়াল ট্রেনিং ও Job Placement",
    description:
      "শিক্ষার্থীদের বাস্তব কর্মক্ষেত্রের অভিজ্ঞতা অর্জনের জন্য ইন্ডাস্ট্রিয়াল ট্রেনিংয়ের সুযোগ রয়েছে। পাশাপাশি ক্যারিয়ার গঠনে Job Placement ও কর্মসংস্থান সংক্রান্ত সহযোগিতা প্রদান করা হয়।",
  },
];

const InstituteFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(null);

  const handleModal = (index) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  // ESC দিয়ে modal close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (modalIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [modalIndex]);

  const selectedFeature =
    modalIndex !== null ? features[modalIndex] : null;

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
            আমাদের{" "}
            <span className="text-[#44A1A4]">
              বিশেষ সুবিধাসমূহ
            </span>
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
              modal={handleModal}
            />
          ))}
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-8 text-center">
        <p className="text-xs font-medium text-[#78909C] sm:text-sm">
          শিক্ষার্থীদের সাফল্যের জন্য প্রয়োজনীয় সকল সুবিধা একসাথে
        </p>
      </div>

      {/* More Details Button */}
      <div className="mt-6 flex justify-center">
        <Link
          href="/aboutPage"
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

      {/* ================= MODAL ================= */}
      {selectedFeature && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#102A2E]/70 px-4 py-6 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Top Gradient */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#224248] via-[#44A1A4] to-[#C28B24]" />

            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-[#224248] hover:text-white"
            >
              <X size={19} />
            </button>

            {/* Content */}
            <div className="px-6 pb-7 pt-8 text-center sm:px-9">
              {/* Number */}
              <span className="mb-4 inline-block rounded-full bg-[#FFF8E8] px-3 py-1 text-xs font-bold tracking-widest text-[#9B6F17]">
                {String(modalIndex + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#224248] text-[#F4C95D] shadow-lg">
                <selectedFeature.icon
                  size={38}
                  strokeWidth={1.7}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold leading-8 text-[#224248] sm:text-2xl">
                {selectedFeature.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-7 text-[#527080] sm:text-base">
                {selectedFeature.description}
              </p>

              {/* Close
              <button
                onClick={closeModal}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#224248] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#44A1A4]"
              >
                বন্ধ করুন
                <X size={16} />
              </button> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstituteFeatures;