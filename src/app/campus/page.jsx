"use client";

import { FaArrowRight, FaBuilding, FaLocationDot } from "react-icons/fa6";
import CampusHero from "@/components/campus/Hero";
import CampusIntro from "@/components/campus/Intro";
import FaciliteSection from "@/components/campus/Facilities";
import CampusLabsSection from "@/components/campus/Labs";

import {
  facilitesHeader,
  facilities,
  labs,
  studentLifeData,
  campusGalleryData,
} from "@/data/campusData";
import StudentLife from "@/components/campus/StudentLife";
import CampusGallery from "@/components/campus/CampusGallery";

function SectionHeading({
  eyebrow,
  title,
  highlighted,
  description,
  align = "left",
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl lg:text-5xl">
        {title}{" "}
        {highlighted && <span className="text-teal-600">{highlighted}</span>}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-500 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

/* PAGE*/

export default function CampusPage() {
  return (
    <main className="overflow-hidden bg-[#f8fafc] text-slate-900">
      {/* HERO */}
      <CampusHero />

      {/* INTRO */}
      <CampusIntro />

      {/* FACILITIES */}
      <FaciliteSection titleData={facilitesHeader} mainData={facilities} />

      {/* LABS */}
      <CampusLabsSection labData={labs} />

      {/* STUDENT LIFE */}

      <StudentLife data={studentLifeData} />
      {/*  GALLERY */}
      <CampusGallery data={campusGalleryData} />

      {/*  LOCATION  */}
      <section id="location" className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-200 lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
                Find Us
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                আমাদের
                <span className="text-teal-600"> ঠিকানা</span>
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                স্কয়ার পলিটেকনিক ইন্সটিটিউট
                <br />
                গাড়িদহ, শেরপুর, বগুড়া
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                    <FaLocationDot />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 font-bold text-slate-800">
                      Garidaha, Sherpur, Bogura
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                    <FaBuilding />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">
                      Institution Code
                    </p>

                    <p className="mt-1 font-bold text-slate-800">২০২৯৪</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 inline-flex items-center gap-3 rounded-xl bg-slate-900 px-6 py-3.5 font-bold text-white transition hover:bg-teal-600">
                Google Map দেখুন
                <FaArrowRight />
              </button>
            </div>

            {/* Map Placeholder */}
            <div className="relative min-h-[450px] overflow-hidden bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?auto=format&fit=crop&w=1400&q=80"
                alt="Location Map"
                className="absolute inset-0 h-full w-full object-cover grayscale"
              />

              <div className="absolute inset-0 bg-teal-900/10" />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-600 text-3xl text-white shadow-2xl ring-8 ring-white/60">
                  <FaLocationDot />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA  */}

      <section className="px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-16 text-center sm:px-12 lg:px-20 lg:py-20">
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-400">
              Start Your Journey
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
              আপনার ভবিষ্যৎ গড়ার যাত্রা
              <span className="block text-teal-400">শুরু হোক এখান থেকেই</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
              Build your skills, explore technology and prepare yourself for a
              successful career with Square Polytechnic Institute.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center gap-3 rounded-xl bg-teal-500 px-7 py-4 font-bold text-white transition hover:bg-teal-400">
                ভর্তি সম্পর্কে জানুন
                <FaArrowRight />
              </button>

              <button className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
