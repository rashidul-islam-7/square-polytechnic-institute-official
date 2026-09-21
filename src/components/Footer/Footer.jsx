"use client";

import React from "react";
import Link from "next/link";
import {
  FaArrowUpRightFromSquare,
  FaBuildingColumns,
  FaChevronRight,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaMessage,
} from "react-icons/fa6";

import SPILogo from "../UI/SPILogo/SPILogo";

const quickLinks = [
  {
    name: "হোম",
    href: "/",
  },
  {
    name: "আমাদের সম্পর্কে",
    href: "/about",
  },
  {
    name: "সুবিধাসমূহ",
    href: "/#features",
  },
  {
    name: "গ্যালারি",
    href: "/#gallery",
  },
  {
    name: "ইন্টার্নশীপ ও জব প্লেসমেন্ট",
    href: "/#internship",
  },
  {
    name: "যোগাযোগ",
    href: "/contact",
  },
];

const departments = [
  {
    name: "কম্পিউটার টেকনোলজি",
    href: "/departments/computer",
  },
  {
    name: "সিভিল টেকনোলজি",
    href: "/departments/civil",
  },
  {
    name: "ইলেকট্রিক্যাল টেকনোলজি",
    href: "/departments/electrical",
  },
  {
    name: "মেকানিক্যাল টেকনোলজি",
    href: "/departments/mechanical",
  },
  {
    name: "টেক্সটাইল টেকনোলজি",
    href: "/departments/textile",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    name: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/8801712371281",
    icon: FaWhatsapp,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#224248] text-white">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#44A1A4]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#325E6A]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr] lg:py-16">
          {/* ================= INSTITUTE INFO ================= */}
          <div>
            <SPILogo />

            <p className="mt-5 max-w-sm text-base leading-7 text-white/65">
              গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের অনুমোদিত এবং বাংলাদেশ কারিগরি
              শিক্ষা বোর্ড (BTEB) অধিভুক্ত একটি বেসরকারি পলিটেকনিক
              ইন্সটিটিউট।
            </p>

            {/* Tagline */}
            <div className="mt-6 border-l-2 border-[#44A1A4] pl-4">
              <p className="text-base font-semibold text-white/85">
                “স্বপ্ন পূরণের বিশ্বস্ত সহযোগী”
              </p>
            </div>

            {/* Institute Info */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/55">
                EIIN: 139309
              </span>

              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/55">
                Institute Code: 20294
              </span>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#44A1A4]/10">
                <FaMessage className="text-sm text-[#44A1A4]" />
              </div>

              <h3 className="text-base font-bold text-white">
                গুরুত্বপূর্ণ লিংক
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-3 text-base text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <FaChevronRight className="text-[10px] text-[#44A1A4] transition-transform duration-300 group-hover:translate-x-1" />

                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* ================= DEPARTMENTS ================= */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#44A1A4]/10">
                <FaBuildingColumns className="text-sm text-[#44A1A4]" />
              </div>

              <h3 className="text-base font-bold text-white">
                আমাদের টেকনোলজি
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {departments.map((department) => (
                <Link
                  key={department.name}
                  href={department.href}
                  className="group flex items-center gap-3 text-base text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <FaChevronRight className="text-[10px] text-[#44A1A4] transition-transform duration-300 group-hover:translate-x-1" />

                  <span>{department.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#44A1A4]/10">
                <FaMessage className="text-sm text-[#44A1A4]" />
              </div>

              <h3 className="text-base font-bold text-white">
                যোগাযোগ
              </h3>
            </div>

            <div className="mt-6 space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#44A1A4]">
                  <FaLocationDot className="text-sm" />
                </div>

                <p className="text-base leading-7 text-white/60">
                  গাড়িদহ বাসস্ট্যান্ড,
                  <br />
                  শেরপুর, বগুড়া
                </p>
              </div>

              {/* Phone 1 */}
              <a
                href="tel:01712371281"
                className="group flex items-center gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#44A1A4]">
                  <FaPhone className="text-sm" />
                </div>

                <div>
                  <p className="text-xs text-white/40">হেল্পলাইন</p>

                  <p className="text-base text-white/70 transition-colors group-hover:text-white">
                    01712-371281
                  </p>
                </div>
              </a>
         
              {/* Email */}
              <a
                href="mailto:squarepoly@gmail.com"
                className="group flex items-center gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#44A1A4]">
                  <FaEnvelope className="text-sm" />
                </div>

                <p className="break-all text-base text-white/70 transition-colors group-hover:text-white">
                  squarepoly@gmail.com
                </p>
              </a>
            </div>

             {/* Social Media */}
            <div className="mt-7">
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#44A1A4] hover:bg-[#44A1A4] hover:text-white"
                    >
                      <Icon className="text-base transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ================= ADMISSION CTA ================= */}
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-sm md:flex-row md:items-center md:px-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#44A1A4]">
                Admission 2026–27
              </p>

              <h3 className="mt-2 text-lg font-bold text-white md:text-xl">
                আপনার ভবিষ্যতের যাত্রা শুরু হোক আজ থেকেই।
              </h3>

              <p className="mt-2 text-base text-white/50">
                দক্ষতা অর্জনের পথে SPI থাকছে আপনার পাশে।
              </p>
            </div>

            <Link
              href="/admission"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#FF9A00] px-6 py-3.5 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E88900] hover:shadow-lg hover:shadow-orange-900/20"
            >
              ভর্তি আবেদন করুন

              <FaArrowUpRightFromSquare className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* ================= BOTTOM FOOTER ================= */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          {/* Copyright */}
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Square Polytechnic Institute. All
            Rights Reserved.
          </p>

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:justify-end">
            <Link
              href="/privacy-policy"
              className="text-white/40 transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="text-white/10">|</span>

            <Link
              href="/terms"
              className="text-white/40 transition-colors duration-300 hover:text-white"
            >
              Terms & Conditions
            </Link>

            <span className="text-white/10">|</span>

            {/* Developer */}
            <span className="text-white/50">
              Developed by{" "}
              <span className="font-semibold text-white/80">
                Rashidul Islam
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;