"use client";

import React from "react";
import OneSlider from "../Slider/OneSlider";

import { studentsFeedback } from "@/data/feedbackData/studentsFeedback";
import ReviewSectionHeader from "./ReviewSectionHeader";


const StudentReviews = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#44A1A4]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#224248]/5 blur-3xl" />

      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*HEADER */}
        <ReviewSectionHeader />
        {/* REVIEWS */}
        <OneSlider reviewsContent={studentsFeedback} />
      </div>
    </section>
  );
};

export default StudentReviews;
