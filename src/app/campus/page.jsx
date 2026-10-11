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
import AdmissionCTA from "@/components/campus/AdmissionCTA ";
import Action from "@/components/department/Action";

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

      <Action />
    </main>
  );
}
