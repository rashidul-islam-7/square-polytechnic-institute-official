"use client";

import DepartmentCard from "@/components/DepartmentCard";
import HeroSlider from "@/components/HomePageComponents.jsx/HomeSlider";
import GallerySection from "@/components/Shared/GallerySection";
import HostelSection from "@/components/Shared/HostelSection";
import InstituteFeatures from "@/components/Shared/InstituteFeatures";
import ScholarshipSection from "@/components/Shared/ScholarshipSection";
import HomePageMarquee from "@/components/UI/Marquee/HomePageMarquee";
import { Home } from "lucide-react";
import React, { useState } from "react";

export default function HomePage() {
  return (
    <div className="h-[2000px]">
      <HeroSlider />
      <HomePageMarquee />
      <DepartmentCard />
      <InstituteFeatures />
      <ScholarshipSection />
      <HostelSection />
      <GallerySection />
    </div>
  );
}
