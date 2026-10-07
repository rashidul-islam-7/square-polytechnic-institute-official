"use client";

import {
  FaArrowRight,
  FaBookOpen,
  FaBuilding,
  FaCheck,
  FaChevronRight,
  FaFlask,
  FaGraduationCap,
  FaLeaf,
  FaLocationDot,
  FaPeopleGroup,
  FaShieldHalved,
  FaWifi,
} from "react-icons/fa6";
import CampusHero from "@/components/campus/Hero";
import CampusIntro from "@/components/campus/Intro";
import FaciliteSection from "@/components/campus/Facilities";
import CampusLabsSection from "@/components/campus/Labs";

import { facilitesHeader, facilities, labs } from "@/data/campusData";

/* DATA  */

const studentLife = [
  "সহশিক্ষা কার্যক্রম",
  "সাংস্কৃতিক অনুষ্ঠান",
  "ক্রীড়া ও বিনোদন",
  "প্রজেক্ট প্রদর্শনী",
  "টেকনোলজি ক্লাব",
  "ক্যারিয়ার সেমিনার",
];

/*  REUSABLE COMPONENTS */

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
      <section className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Student Life"
              title="শুধু পড়াশোনা নয়,"
              highlighted="অভিজ্ঞতাও গুরুত্বপূর্ণ"
              description="একজন শিক্ষার্থীর পূর্ণাঙ্গ বিকাশের জন্য একাডেমিক শিক্ষার পাশাপাশি প্রয়োজন সৃজনশীলতা, নেতৃত্ব, দলগত কাজ এবং সামাজিক দক্ষতা।"
            />

            <div className="mt-9 grid grid-cols-2 gap-3">
              {studentLife.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs text-teal-600">
                    <FaCheck />
                  </span>

                  <span className="text-sm font-bold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
            <div className="space-y-4 pt-10">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=85"
                alt="Students"
                className="h-72 w-full rounded-[1.75rem] object-cover"
              />

              <div className="rounded-[1.75rem] bg-teal-600 p-6 text-white">
                <FaPeopleGroup className="text-3xl" />

                <p className="mt-5 text-2xl font-black">Together</p>

                <p className="mt-1 text-sm text-teal-100">
                  Learn • Build • Grow
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=85"
                alt="Student Activity"
                className="h-[470px] w-full rounded-[1.75rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/*   SAFE + GREEN CAMPUS */}
      <section className="px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2rem] bg-teal-700 lg:grid-cols-2">
            <div className="relative min-h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
                alt="Green Campus"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-teal-900/40" />

              <div className="absolute bottom-7 left-7 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-lg">
                <FaLeaf className="text-3xl" />
                <p className="mt-3 font-black">Green & Clean Campus</p>
              </div>
            </div>

            <div className="p-8 text-white sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-200">
                Safe & Green Campus
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                নিরাপদ, পরিচ্ছন্ন ও
                <span className="block text-teal-200">শিক্ষাবান্ধব পরিবেশ</span>
              </h2>

              <p className="mt-6 leading-8 text-teal-50">
                শিক্ষার্থীরা যেন স্বাচ্ছন্দ্যে শিক্ষা গ্রহণ করতে পারে, সেজন্য
                ক্যাম্পাসে পরিচ্ছন্নতা, নিরাপত্তা এবং একটি সুন্দর পরিবেশ বজায়
                রাখার প্রতি গুরুত্ব দেওয়া হয়।
              </p>

              <div className="mt-9 space-y-5">
                {[
                  {
                    icon: FaShieldHalved,
                    title: "নিরাপদ ক্যাম্পাস",
                    text: "Safe & Secure Learning Environment",
                  },
                  {
                    icon: FaLeaf,
                    title: "সবুজ পরিবেশ",
                    text: "Clean & Green Campus",
                  },
                  {
                    icon: FaWifi,
                    title: "প্রযুক্তিনির্ভর সুবিধা",
                    text: "Technology Enabled Facilities",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <Icon />
                      </div>

                      <div>
                        <p className="font-bold">{item.title}</p>

                        <p className="mt-1 text-sm text-teal-100">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  GALLERY */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Campus Gallery"
            title="ক্যাম্পাসের"
            highlighted="কিছু মুহূর্ত"
            description="আমাদের ক্যাম্পাস, শিক্ষার্থী জীবন এবং একাডেমিক কার্যক্রমের কিছু দৃশ্য।"
            align="center"
          />

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-[1.5rem]">
              <img
                src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=85"
                alt="Campus"
                className="h-full min-h-[420px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=85"
                alt="Students"
                className="h-52 w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=85"
                alt="Student Life"
                className="h-52 w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=85"
                alt="Workshop"
                className="h-52 w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=85"
                alt="Library"
                className="h-52 w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

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
