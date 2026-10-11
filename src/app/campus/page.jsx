"use client";

import { FaArrowRight, FaBuilding, FaLocationDot } from "react-icons/fa6";
import CampusHero from "@/components/campus/Hero";
import CampusIntro from "@/components/campus/Intro";
import FaciliteSection from "@/components/campus/Facilities";
import CampusLabsSection from "@/components/campus/Labs";

import {
  facilitesHeader,
  facilities,
  labs,
  studentLifeData,
  campusGalleryData,
} from "@/data/campusData";
import StudentLife from "@/components/campus/StudentLife";
import CampusGallery from "@/components/campus/CampusGallery";
import InstituteLocation from "@/components/Shared/Location";

function SectionHeading({
  eyebrow,
  title,
  highlighted,
  description,
  align = "left",
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl lg:text-5xl">
        {title}{" "}
        {highlighted && <span className="text-teal-600">{highlighted}</span>}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-500 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

/* PAGE*/

export default function CampusPage() {
  return (
    <main className="overflow-hidden bg-[#f8fafc] text-slate-900">
      {/* HERO */}
      <CampusHero />

      {/* INTRO */}
      <CampusIntro />

      {/* FACILITIES */}
      <FaciliteSection titleData={facilitesHeader} mainData={facilities} />

      {/* LABS */}
      <CampusLabsSection labData={labs} />

      {/* STUDENT LIFE */}

      <StudentLife data={studentLifeData} />
      {/*  GALLERY */}
      <CampusGallery data={campusGalleryData} />

      {/*  LOCATION  */}
      <InstituteLocation />

      {/* CTA  */}

      <section className="px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-16 text-center sm:px-12 lg:px-20 lg:py-20">
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-400">
              Start Your Journey
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
              আপনার ভবিষ্যৎ গড়ার যাত্রা
              <span className="block text-teal-400">শুরু হোক এখান থেকেই</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
              Build your skills, explore technology and prepare yourself for a
              successful career with Square Polytechnic Institute.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center gap-3 rounded-xl bg-teal-500 px-7 py-4 font-bold text-white transition hover:bg-teal-400">
                ভর্তি সম্পর্কে জানুন
                <FaArrowRight />
              </button>

              <button className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
