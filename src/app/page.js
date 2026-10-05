"use client";

import React from "react";
import HeroSlider from "@/components/HomePageComponents.jsx/HomeSlider";
import CareerSection from "@/components/Shared/CareerSection";
import GallerySection from "@/components/Shared/GallerySection";
import HostelSection from "@/components/Shared/HostelSection";
import InstituteFeatures from "@/components/Shared/InstituteFeatures";
import StudentReviews from "@/components/Shared/Review/StudentReviews";
import ScholarshipSection from "@/components/Shared/ScholarshipSection";
import HomePageMarquee from "@/components/UI/Marquee/HomePageMarquee";
import Departments from "@/components/Shared/Department";
import Slider from "@/components/Shared/Slider/OneSlider";

export const homeHeroData = {
  badge: "Square Polytechnic Institute",
  title: "শিখুন প্রযুক্তি,",
  highlightedTitle: "গড়ুন দক্ষ ক্যারিয়ার",
  description:
    "আধুনিক কারিগরি শিক্ষা ও ব্যবহারিক প্রশিক্ষণের মাধ্যমে আপনার সম্ভাবনাকে দক্ষতায় রূপ দিন।",

  slides: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
      alt: "Students",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80",
      alt: "Computer students",
    },
  ],

  primaryButton: {
    text: "Explore All Departments",
    href: "/departments/departmentPage",
  },

  secondaryButton: {
    text: "Admission",
    href: "/admission",
  },
};

export default function HomePage() {
  return (
    <div className="">
      <HeroSlider {...homeHeroData} />
      <HomePageMarquee />
      <Departments />
      <InstituteFeatures />
      <ScholarshipSection />
      <HostelSection />
      <GallerySection />
      <CareerSection />
      <StudentReviews />
    </div>
  );
}
