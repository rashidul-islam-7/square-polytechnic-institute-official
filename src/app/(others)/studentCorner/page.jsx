"use client";

import React, { useState } from "react";
import Link from "next/link";


import StudentCareHero from "@/components/student-care/Hero";
import QuickAccess from "@/components/student-care/QuickAccess";
import AcademicSupport from "@/components/student-care/AcademicSupport";
import CareerDevelopment from "@/components/student-care/CareerDevelopment";

import Introduction from "@/components/student-care/Intro";
import Btn from "@/components/UI/Btn";
import StudentActivities from "@/components/student-care/StudentActivities";
import InsdustryTour from "@/components/student-care/IndustryTour";
import HostelSection from "@/components/Shared/HostelSection";

// Main Page
export default function StudentCarePage() {
  return (
    <div className="overflow-hidden bg-white text-[#224248]">
      {/* hero section  */}
      <StudentCareHero />
      <Introduction />
      <QuickAccess />
      <AcademicSupport />
      <CareerDevelopment />
      <StudentActivities />
      <InsdustryTour />
      <HostelSection />
      <section id="contact" className="px-5 py-20 sm:px-8 lg:px-14">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#224248] px-7 py-14 sm:px-12 lg:px-16">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-[#44A1A4]/10" />

          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#44A1A4]/10 blur-2xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[2px] text-[#ff9a00]">
                We Are Here to Help
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Need Help With Something?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-white/65">
                শিক্ষার্থী সেবা, একাডেমিক তথ্য অথবা অন্য কোনো বিষয়ে সহযোগিতার
                প্রয়োজন হলে কলেজের সঙ্গে যোগাযোগ করুন।
              </p>
            </div>

            <Btn text="Contact Us" link="/contact" light></Btn>
          </div>
        </div>
      </section>
    </div>
  );
}
