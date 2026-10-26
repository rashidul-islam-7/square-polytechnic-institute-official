"use client";

import Btn from "@/components/UI/Btn";
import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa6";

const Slider = ({ reviewsContent = [] }) => {
  const [slider, setSlider] = useState(0);

  // Ensure reviewsContent is always a valid array
  const reviews = Array.isArray(reviewsContent)
    ? reviewsContent.filter((item) => item && typeof item === "object")
    : [];

  const totalSlides = reviews.length;

  // Keep slider index within valid range
  useEffect(() => {
    setSlider((prev) => {
      if (totalSlides === 0) return 0;
      return prev >= totalSlides ? totalSlides - 1 : prev;
    });
  }, [totalSlides]);

  // Next Slide
  const nextSlide = () => {
    if (totalSlides <= 1) return;

    setSlider((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
  };

  // Previous Slide
  const prevSlide = () => {
    if (totalSlides <= 1) return;

    setSlider((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1));
  };

  // Auto Slide
  useEffect(() => {
    if (totalSlides <= 1) return;

    const interval = setInterval(() => {
      setSlider((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
    }, 15000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Empty state: no reviews available
  if (totalSlides === 0) {
    return (
      <section className="relative overflow-hidden">
        <div className="mx-auto w-full px-4 sm:px-6 md:max-w-6xl">
          <div className="mx-auto w-full rounded-3xl border border-[#DCE7E8] bg-white p-8 text-center shadow-xl shadow-[#224248]/5 md:max-w-4xl">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#44A1A4]/10 text-[#44A1A4]">
              <FaQuoteLeft />
            </div>

            <h3 className="text-xl font-bold text-[#224248]">
              শিক্ষার্থীদের মতামত
            </h3>

            <p className="mt-3 text-[#325E6A]">
              বর্তমানে কোনো রিভিউ পাওয়া যায়নি।
            </p>

            <div className="mt-5">
              <Btn text="আরও দেখুন" link="/reviews" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentSlide = reviews[slider] ?? reviews[0] ?? {};

  // Safe values with fallbacks
  const title = currentSlide.title ?? "শিক্ষার্থীর মতামত";
  const comment =
    currentSlide.comment ?? "এই শিক্ষার্থীর কোনো মন্তব্য দেওয়া হয়নি।";
  const studentName = currentSlide.studentName ?? "শিক্ষার্থী";
  const department = currentSlide.department ?? "বিভাগ উল্লেখ নেই";
  const session = currentSlide.session ?? "উল্লেখ নেই";

  const ratingValue = Number(currentSlide.rating);
  const rating = Number.isFinite(ratingValue)
    ? Math.min(5, Math.max(0, Math.floor(ratingValue)))
    : 5;

  const initial = String(studentName).trim().charAt(0) || "শ";

  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto w-full px-4 sm:px-6 md:max-w-6xl">
        <div className="relative mx-auto w-full md:max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#DCE7E8] bg-white shadow-xl shadow-[#224248]/5">
            {/* Background Decoration */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-full rounded-full bg-[#44A1A4]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#FF9A00]/10 blur-3xl" />

            <div className="relative p-7 sm:p-8">
              {/* Quote Icon and Rating */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#44A1A4]/10 text-[#44A1A4]">
                  <FaQuoteLeft className="text-sm" />
                </div>

                <div
                  className="flex gap-1"
                  aria-label={`${rating} out of 5 stars`}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={
                        star <= rating ? "text-[#FF9A00]" : "text-[#DCE7E8]"
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Review Content */}
              <div key={slider} className="animate-[fadeIn_1s_ease-in-out]">
                <h3 className="text-xl font-bold leading-snug text-[#224248]">
                  “{title}”
                </h3>

                <p className="mt-3 whitespace-pre-line leading-6 text-[#325E6A]">
                  {comment}
                </p>

                {/* Student Info */}
                <div className="mt-5 flex flex-col gap-3 border-t border-[#E5EEEE] pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#224248] text-base font-bold text-white">
                      {initial}
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-[#224248]">
                        {studentName}
                      </h4>

                      <p className="text-sm text-[#325E6A]/70">
                        {department} • Session {session}
                      </p>
                    </div>
                  </div>

                  {/* Counter */}
                  <div className="text-sm font-semibold text-[#44A1A4]">
                    {String(slider + 1).padStart(2, "0")} /{" "}
                    {String(totalSlides).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between border-t border-[#E5EEEE] bg-[#F8FAFA] px-5 py-5 sm:px-10">
              <Btn text="আরও দেখুন" link="/reviews" />

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  disabled={totalSlides <= 1}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE7E8] bg-white text-[#224248] transition-all duration-300 hover:border-[#44A1A4] hover:bg-[#44A1A4] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FaChevronLeft className="text-sm" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  disabled={totalSlides <= 1}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE7E8] bg-white text-[#224248] transition-all duration-300 hover:border-[#44A1A4] hover:bg-[#44A1A4] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FaChevronRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(15px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Slider;
