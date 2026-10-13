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
