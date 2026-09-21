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


export default function HomePage() {
  return (
    <div className="">
      <HeroSlider />
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
