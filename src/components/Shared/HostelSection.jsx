"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  Check,
  House,
  ShieldCheck,
  Users,
} from "lucide-react";

const HostelSection = () => {
  const facilities = [
    {
      icon: House,
      title: "নিরাপদ আবাসন",
      description: "শিক্ষার্থীদের জন্য নিরাপদ ও পরিচ্ছন্ন পরিবেশ",
    },
    {
      icon: Users,
      title: "সুশৃঙ্খল পরিবেশ",
      description: "পড়াশোনার উপযোগী শান্ত ও নিয়ন্ত্রিত পরিবেশ",
    },
    {
      icon: ShieldCheck,
      title: "নিরাপত্তা ব্যবস্থা",
      description: "শিক্ষার্থীদের নিরাপত্তায় প্রয়োজনীয় ব্যবস্থা",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-8 md:py-10">
      {/* Decorative Shape */}
      <div className="pointer-events-none absolute -right-24 top-10 h-48 w-48 rounded-full bg-[#44A1A4]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-[#325E6A]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#44A1A4]/20 bg-white px-3 py-1 text-xs font-semibold text-[#325E6A] shadow-sm">
            <BedDouble size={14} />
            আবাসিক সুবিধা
          </span>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#224248] md:text-3xl">
            পড়াশোনার সাথে
            <span className="text-[#44A1A4]"> নিশ্চিন্ত আবাসন</span>
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            দূরবর্তী শিক্ষার্থীদের জন্য নিরাপদ, পরিচ্ছন্ন ও পড়াশোনার উপযোগী
            আবাসিক পরিবেশ।
          </p>
        </div>

        {/* Main Card */}
        <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(34,66,72,0.08)]">
          <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
            {/* Image */}
            <div className="relative h-[230px] overflow-hidden sm:h-[260px] lg:h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=85"
                alt="Student hostel accommodation"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#224248]/60 via-[#224248]/10 to-transparent" />

              {/* Image Badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/20 bg-[#224248]/85 px-3 py-2 text-white backdrop-blur-md">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#44A1A4]">
                  <BedDouble size={17} />
                </div>

                <div>
                  <p className="text-[10px] text-white/70">
                    আবাসিক সুবিধা
                  </p>
                  <p className="text-xs font-semibold">
                    শিক্ষার্থীবান্ধব পরিবেশ
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-7">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#44A1A4]">
                  Residential Facility
                </p>

                <h3 className="text-xl font-bold text-[#224248] md:text-2xl">
                  আপনার সন্তানের জন্য
                  <br className="hidden sm:block" />
                  <span className="text-[#325E6A]"> নিরাপদ আবাসন</span>
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  শিক্ষার্থীদের স্বাচ্ছন্দ্য ও পড়াশোনার বিষয়টি গুরুত্ব দিয়ে
                  আবাসিক সুবিধায় রাখা হয়েছে প্রয়োজনীয় পরিবেশ ও নিরাপত্তার
                  ব্যবস্থা।
                </p>
              </div>

              {/* Facilities */}
              <div className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {facilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2.5 transition duration-300 hover:border-[#44A1A4]/20 hover:bg-[#44A1A4]/5"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#224248] text-white">
                        <Icon size={15} />
                      </div>

                      <div className="min-w-0">
                        <h4 className="truncate text-xs font-bold text-[#224248]">
                          {item.title}
                        </h4>

                        <p className="mt-0.5 line-clamp-1 text-[10px] leading-4 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/facilities/hostel"
                  className="group/btn inline-flex items-center gap-2 rounded-lg bg-[#FF9A00] px-4 py-2.5 text-xs font-bold text-white transition duration-300 hover:bg-[#E88900]"
                >
                  বিস্তারিত জানুন
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </Link>

                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#44A1A4]/10 text-[#44A1A4]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  শিক্ষার্থীবান্ধব পরিবেশ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostelSection;