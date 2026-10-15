"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBookOpen,
  FaCheck,
  FaChevronDown,
  FaClipboardCheck,
  FaClock,
  FaFileAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaPhone,
  FaRegCalendarCheck,
  FaRegCircleCheck,
  FaRegFileLines,
  FaShieldHalved,
  FaUserGraduate,
  FaWrench,
} from "react-icons/fa6";
import AdmissionHeroSection from "@/components/admission/AdmissionHero";

export default function AdmissionPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <AdmissionHeroSection />
    </main>
  );
}
