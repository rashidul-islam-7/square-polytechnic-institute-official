import React from "react";
import { FaGraduationCap, FaCheck, FaMapMarkerAlt } from "react-icons/fa";
import { campusFeatures, campusInfo } from "@/data/campusData";
import SectionShortTitleStyle from "../UI/SectionShortTitleStyle";
import TitleStyle from "../UI/TitleStyle";

export default function CampusIntro() {
  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left Side: Image & Card */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img
              src={campusInfo.imageSrc}
              alt="Institute Campus"
              className="h-[400px] w-full object-cover sm:h-[460px]"
            />
          </div>
        </div>

        {/* Right Side: Clean Content */}
        <div className="mt-6 lg:mt-0">
          <SectionShortTitleStyle text={campusInfo.shortTitle} />

          <TitleStyle
            title={campusInfo.title}
            highlightedTitle={campusInfo.highlightedTitle}
          />

          <p className="mt-3 text-sm text-slate-600 leading-relaxed sm:text-base">
            {campusInfo.description}
          </p>

          {/* List */}
          <div className="mt-6 space-y-3.5">
            {campusFeatures.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600 text-xs">
                  <FaCheck />
                </div>
                <p className="text-sm font-medium text-slate-700 sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <FaMapMarkerAlt className="text-teal-600 text-sm" />
            <span>{campusInfo.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
