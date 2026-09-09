import DepartmentCard from "@/components/DepartmentCard";
import HeroSlider from "@/components/HomePageComponents.jsx/HomeSlider";
import InstituteFeatures from "@/components/Shared/InstituteFeatures";
import HomePageMarquee from "@/components/UI/Marquee/HomePageMarquee";
import { Home } from "lucide-react";
import React from "react";

export default function HomePage() {
  return (
    <div className="h-[2000px]">
      <HeroSlider />
      <HomePageMarquee />
      <DepartmentCard />
      <InstituteFeatures />
    </div>
  );
}
