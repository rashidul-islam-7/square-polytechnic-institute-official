"use client";

import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa6";

const Slider = ({reviewsContent}) => {
  const [slider, setSlider] = useState(0);

  // Next Slide
  const nextSlide = () => {
    setSlider((prev) => (prev === reviewsContent.length - 1 ? 0 : prev + 1));
  };

  // Previous Slide
  const prevSlide = () => {
    setSlider((prev) => (prev === 0 ? reviewsContent.length - 1 : prev - 1));
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = reviewsContent[slider];

  return (
    <section className="relative overflow-hidden  ">
      {/* Background Decoration */}
      {/* <div className="pointer-events-none absolute -left-32 top-20 h-72 w-full rounded-full bg-[#44A1A4]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#FF9A00]/10 blur-3xl" /> */}

      <div className="relative mx-auto w-full md:max-w-6xl px-4 sm:px-6 ">
        {/* Slider */}
        <div className="relative mx-auto w-full md:max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#DCE7E8] bg-white shadow-xl shadow-[#224248]/5">
            <div className="p-7 sm:p-8">
              {/* Quote Icon */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#44A1A4]/10 text-[#44A1A4]">
                  <FaQuoteLeft className="text-sm" />
                </div>
                {/* rating star */}
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={
                        star <= currentSlide.rating
                          ? "text-[#FF9A00]"
                          : "text-[#DCE7E8]"
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div key={slider} className="animate-[fadeIn_1s_ease-in-out]">
                <h3 className="text-xl font-bold leading-snug text-[#224248] ">
                  “{currentSlide.title}”
                </h3>

                <p className="mt-3 leading-6 text-[#325E6A]">
                  {currentSlide.comment}
                </p>

                {/* Student Info */}
                <div className="mt-5 flex flex-col gap-1 border-t border-[#E5EEEE] pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    {/* Avatar */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#224248] text-base font-bold text-white">
                      {currentSlide.studentName.charAt(0)}
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-[#224248]">
                        {currentSlide.studentName}
                      </h4>

                      <p className=" text-sm text-[#325E6A]/70">
                        {currentSlide.department} • Session{" "}
                        {currentSlide.session}
                      </p>
                    </div>
                  </div>

                  {/* Counter */}
                  <div className="text-sm font-semibold text-[#44A1A4]">
                    {String(slider + 1).padStart(2, "0")} /{" "}
                    {String(reviewsContent.length).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between border-t border-[#E5EEEE] bg-[#F8FAFA] px-7 py-5 sm:px-10">
              {/* Dots */}
              {/* <div className="flex items-center gap-2">
                {sliderContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSlider(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      slider === index
                        ? "w-8 bg-[#44A1A4]"
                        : "w-2.5 bg-[#B8CCCC] hover:bg-[#44A1A4]/60"
                    }`}
                  />
                ))}
              </div> */}

              <button className="btn rounded-full text-[#44A1A4]">
                আরও দেখুন...
              </button>

              {/* Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE7E8] bg-white text-[#224248] transition-all duration-300 hover:border-[#44A1A4] hover:bg-[#44A1A4] hover:text-white"
                >
                  <FaChevronLeft className="text-sm" />
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE7E8] bg-white text-[#224248] transition-all duration-300 hover:border-[#44A1A4] hover:bg-[#44A1A4] hover:text-white"
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
