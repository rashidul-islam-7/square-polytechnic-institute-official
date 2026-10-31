import React from "react";
import {
  FaArrowRight,
  FaRegLightbulb,
  FaAward,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaGlobe,
  FaRobot,
} from "react-icons/fa6";

import SectionTopSubTitle from "../UI/SectionTopSubTitle";
import TitleStyle from "../UI/TitleStyle";

const software = [
  {
    name: "AI, Internet & Email",
    description: "AI টুলস, ইন্টারনেট ব্রাউজিং ও ইমেইল ব্যবহার",
    icon: FaRobot,
    color: "text-teal-600",
    bg: "bg-[#44A1A4]/15",
    highlight: true,
  },
  {
    name: "Microsoft Word",
    description: "ডকুমেন্ট, আবেদনপত্র ও অফিসিয়াল চিঠি তৈরি",
    icon: FaFileWord,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "Microsoft Excel",
    description: "হিসাব, সেলারি শীট, টেবিল, ফর্মুলা ও ডেটা ব্যবস্থাপনা",
    icon: FaFileExcel,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    name: "PowerPoint",
    description: "Profational প্রেজেন্টেশন ও স্লাইড তৈরি",
    icon: FaFilePowerpoint,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

export default function SoftwareLearn() {
  return (
    <section className="border-y border-slate-100 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="flex justify-center flex-col items-center mb-10 text-center">
          <SectionTopSubTitle text="Course Highlights" icon={FaAward} />

          <TitleStyle title="যে দক্ষতাগুলো" highlightedTitle="শিখবেন" />

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            অফিসের কাজ, অনলাইন আবেদন এবং দৈনন্দিন কম্পিউটার ব্যবহারের জন্য
            প্রয়োজনীয় সফটওয়্যার ও দক্ষতা।
          </p>
        </div>

        {/* Software Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {software.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border p-5 transition duration-300 hover:shadow-lg ${
                  item.highlight
                    ? "border-[#44A1A4] bg-[#44A1A4]/5 shadow-md shadow-[#44A1A4]/10"
                    : "border-slate-200 bg-white hover:border-[#44A1A4]/50"
                }`}
              >
                {/* AI Highlight Badge */}
                {item.highlight && (
                  <span className="absolute right-3 top-1 rounded-full bg-[#0a7063] px-2.5 pt-1 text-[9px] font-bold text-white">
                    NEW SKILL
                  </span>
                )}

                {/* Icon */}
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-110 ${
                    item.bg
                  } ${item.color}`}
                >
                  <Icon className="text-2xl" />
                </span>

                {/* Content */}
                <div>
                  <h3 className="font-extrabold text-slate-900">{item.name}</h3>

                  <p className="mt-1 text-xs leading-5 text-gray-700">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
