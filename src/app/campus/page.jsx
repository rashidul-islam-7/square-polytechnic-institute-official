
export const metadata = {
  title: "Campus Facilities | Square Polytechnic Institute",
  description:
    "Explore the campus facilities of Square Polytechnic Institute, including modern laboratories, student life, campus gallery, and institute location.",
  keywords: [
    "Square Polytechnic Institute Campus",
    "Campus Facilities",
    "Polytechnic Laboratories",
    "Student Life",
    "Campus Gallery",
  ],
  openGraph: {
    title: "Campus Facilities | Square Polytechnic Institute",
    description:
      "Discover campus facilities, modern labs, student activities, and campus life at Square Polytechnic Institute.",
    url: "https://square.edu.bd/campus",
    siteName: "Square Polytechnic Institute",
    locale: "bn_BD",
    type: "website",
  },
  alternates: {
    canonical: "https://square.edu.bd/campus",
  },
};


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
