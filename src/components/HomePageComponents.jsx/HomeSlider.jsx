"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSlider({
  slides = [],
  badge = "",
  title = "",
  highlightedTitle = "",
  description = "",
  primaryButton = null,
  secondaryButton = null,
  height = "h-[600px]",
}) {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides.length) return null;

  return (
    <section className={`relative w-full overflow-hidden ${height}`}>
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id ?? index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt || title || "Hero image"}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#224248]/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          {/* Badge */}
          {badge && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#44A1A4]/40 bg-[#224248]/60 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#44A1A4]" />

              <span className="text-sm font-medium text-[#D9EEEE]">
                {badge}
              </span>
            </div>
          )}

          {/* Heading */}
          {(title || highlightedTitle) && (
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {title}

              {highlightedTitle && (
                <>
                  <br />

                  <span className="text-[#44A1A4]">{highlightedTitle}</span>
                </>
              )}
            </h1>
          )}

          {/* Description */}
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#E5EEEE] sm:text-lg">
              {description}
            </p>
          )}

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Primary Button */}
              {primaryButton && (
                <Link href={primaryButton.href || "#"}>
                  <button className="group flex cursor-pointer items-center gap-2 rounded-lg bg-[#FF9A00] px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#E88900] hover:shadow-xl">
                    {primaryButton.text}

                    {primaryButton.showIcon !== false && (
                      <ArrowRight
                        size={19}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    )}
                  </button>
                </Link>
              )}

              {/* Secondary Button */}
              {secondaryButton && (
                <Link href={secondaryButton.href || "#"}>
                  <button className="cursor-pointer rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:text-[#224248]">
                    {secondaryButton.text}
                  </button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Previous Button */}
      {slides.length > 1 && (
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white/50 hover:text-[#224248] sm:left-6"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Next Button */}
      {slides.length > 1 && (
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white/50 hover:text-[#224248] sm:right-6"
        >
          <ChevronRight size={22} />
        </button>
      )}
    </section>
  );
}
