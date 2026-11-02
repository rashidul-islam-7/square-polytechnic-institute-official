"use client";

import React from "react";
import {
  FaArrowRight,
  FaLaptop,
  FaBriefcase,
  FaUsers,
  FaLocationDot,
  FaRegLightbulb,
  FaStar,
} from "react-icons/fa6";

import ShortCourseHero from "@/components/shortCourse/Hero";
import WhyChooseUs from "@/components/shortCourse/WhyChooseUs";
import SoftwareLearn from "@/components/shortCourse/SoftwareLearn";
import Course from "@/components/shortCourse/Courses";
import Benefits from "@/components/shortCourse/Benefits";
import ShortCourseAdmissionCTA from "@/components/shortCourse/ContactBanner";
import ContactBanner from "@/components/shortCourse/ContactBanner";

export default function ShortCoursesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* HERO SECTION */}
      <ShortCourseHero />
      {/* KEY HIGHLIGHTS */}
      <WhyChooseUs />
      {/* SOFTWARE YOU WILL LEARN */}
      <SoftwareLearn />
      {/* COURSES SECTION */}
      <Course />

      {/* BENEFITS */}
      <Benefits />

      {/* CONTACT STRIP */}
      <ContactBanner />
    </main>
  );
}
