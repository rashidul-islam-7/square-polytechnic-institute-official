
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Camera, Maximize2 } from "lucide-react";

const GallerySection = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=85",
      title: "ক্যাম্পাস",
      category: "Campus",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=85",
      title: "ক্লাসরুম",
      category: "Classroom",
      className: "",
    },
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
      title: "কম্পিউটার ল্যাব",
      category: "Computer Lab",
      className: "",
    },
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
      title: "শিক্ষার্থীদের কার্যক্রম",
      category: "Student Activities",
      className: "",
    },
    {
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=85",
      title: "প্রশিক্ষণ ও কর্মশালা",
      category: "Workshop",
      className: "",
    },
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
      title: "শিক্ষার্থীদের সাফল্য",
      category: "Achievement",
      className: "md:col-span-2",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-14">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#44A1A4]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#44A1A4]/20 bg-[#44A1A4]/5 px-3 py-1.5 text-xs font-semibold text-[#325E6A]">
              <Camera size={14} />
              ক্যাম্পাস গ্যালারি
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-[#224248] md:text-3xl">
              আমাদের ক্যাম্পাসের
              <span className="text-[#44A1A4]"> কিছু মুহূর্ত</span>
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              শিক্ষা, প্রযুক্তি ও শিক্ষার্থীদের বিভিন্ন কার্যক্রমের কিছু
              স্মরণীয় মুহূর্ত।
            </p>
          </div>

          {/* Desktop Button */}
          <Link
            href="/gallery"
            className="hidden shrink-0 items-center gap-2 rounded-lg border border-[#224248]/15 bg-white px-4 py-2.5 text-xs font-bold text-[#224248] transition-all duration-300 hover:border-[#44A1A4] hover:bg-[#224248] hover:text-white md:inline-flex"
          >
            সব ছবি দেখুন
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Gallery */}
        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[135px] md:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl ${image.className}`}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#224248]/85 via-[#224248]/10 to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-xl border border-white/0 transition duration-500 group-hover:border-white/30" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#44A1A4]">
                  {image.category}
                </p>

                <h3 className="mt-0.5 text-sm font-bold text-white">
                  {image.title}
                </h3>
              </div>

              {/* View Icon */}
              <div className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-lg bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Maximize2 size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-5 flex justify-center md:hidden">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-lg bg-[#224248] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#325E6A]"
          >
            সব ছবি দেখুন
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

   