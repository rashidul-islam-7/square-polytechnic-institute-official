"use client";

import React from "react";
import Link from "next/link";
import { Menu, Phone, GraduationCap, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import SPILogo from "../UI/SPILogo/SPILogo";

const Navbar = () => {
  const pathname = usePathname();

  // =========================
  // Departments
  // =========================
  const departments = [
    {
      name: "Computer Science & Technology",
      link: "/departments/computer",
    },
    {
      name: "Civil Technology",
      link: "/departments/civil",
    },
    {
      name: "Electrical Technology",
      link: "/departments/electrical",
    },
    {
      name: "Mechanical Technology",
      link: "/departments/mechanical",
    },
    {
      name: "Textile Technology",
      link: "/departments/textile",
    },
  ];

  // =========================
  // Others
  // =========================
  const others = [
    {
      name: "নোটিশ",
      link: "/notice",
    },
    {
      name: "যোগাযোগ",
      link: "/contact",
    },
    {
      name: "Student Corner",
      link: "/student-corner",
    },
    {
      name: "শিক্ষকবৃন্দ",
      link: "/teachers",
    },
  ];

  // =========================
  // Main Navigation
  // =========================
  const navLinks = [
    {
      name: "হোম",
      link: "/",
    },
    {
      name: "ক্যাম্পাস",
      link: "/campus",
    },
    {
      name: "গ্যালারি & ইভেন্ট",
      link: "/gallery",
    },
    {
      name: "আমাদের সম্পর্কে",
      link: "/about",
    },
  ];

  // =========================
  // Active Route Check
  // =========================
  const isActive = (link) => {
    if (link === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(link);
  };

  // Department active
  const isDepartmentActive = pathname.startsWith("/departments");

  // Others active
  const isOthersActive = others.some((item) => isActive(item.link));

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* =================================
          TOP BAR
      ================================= */}
      <div className="hidden md:block bg-[#224248] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="py-2 flex items-center justify-between text-xs">
            {/* Government Text */}
            <p className="text-gray-200">
              গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের অনুমোদিত ও BTEB অধিভুক্ত
              প্রতিষ্ঠান
            </p>

            {/* Right Side */}
            <div className="flex items-center gap-8">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#44A1A4]" />

                <span>Admission Helpline: 01849-267660</span>
              </div>

              {/* Admission */}
              <Link
                href="/admission"
                className={`border px-4 py-1 rounded-full cursor-pointer transition ${
                  isActive("/admission")
                    ? "bg-[#FF9A00] border-[#FF9A00] text-white"
                    : "border-white/40 hover:bg-[#FF9A00] hover:border-[#FF9A00]"
                }`}
              >
                Admission
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =================================
          MAIN NAVBAR
      ================================= */}
      <nav className="bg-[#325E6A] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="py-3 md:py-4 flex items-center justify-between">
            {/* =================================
                LEFT SIDE
            ================================= */}
            <div className="flex items-center gap-2">
              {/* =============================
                  MOBILE MENU
              ============================= */}
              <div className="dropdown lg:hidden">
                <button
                  tabIndex={0}
                  className="btn btn-ghost btn-circle text-white hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </button>

                <ul
                  tabIndex={0}
                  className="menu dropdown-content mt-3 z-[1] p-3 shadow-xl bg-white rounded-xl w-72"
                >
                  {/* =============================
                      Mobile Departments
                  ============================= */}
                  <li>
                    <details open={isDepartmentActive}>
                      <summary
                        className={`font-semibold ${
                          isDepartmentActive
                            ? "text-[#224248]"
                            : "text-gray-700"
                        }`}
                      >
                        ডিপার্টমেন্টস
                      </summary>

                      <ul className="p-2">
                        {departments.map((department) => {
                          const active = isActive(department.link);

                          return (
                            <li key={department.link}>
                              <Link
                                href={department.link}
                                className={`py-2 rounded-lg transition ${
                                  active
                                    ? "bg-[#44A1A4]/15 text-[#224248] font-bold"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-[#224248]"
                                }`}
                              >
                                {department.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  </li>

                  {/* =============================
                      Mobile Main Links
                  ============================= */}
                  {navLinks.map((item) => {
                    const active = isActive(item.link);

                    return (
                      <li key={item.link}>
                        <Link
                          href={item.link}
                          className={`py-3 font-medium rounded-lg transition ${
                            active
                              ? "bg-[#44A1A4]/15 text-[#224248] font-bold"
                              : "text-gray-600 hover:bg-gray-100 hover:text-[#224248]"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}

                  {/* =============================
                      Mobile Others
                  ============================= */}
                  <li>
                    <details open={isOthersActive}>
                      <summary
                        className={`font-semibold ${
                          isOthersActive ? "text-[#224248]" : "text-gray-700"
                        }`}
                      >
                        অন্যান্য
                      </summary>

                      <ul className="p-2">
                        {others.map((item) => {
                          const active = isActive(item.link);

                          return (
                            <li key={item.link}>
                              <Link
                                href={item.link}
                                className={`py-2 rounded-lg transition ${
                                  active
                                    ? "bg-[#44A1A4]/15 text-[#224248] font-bold"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-[#224248]"
                                }`}
                              >
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  </li>

                  {/* =============================
                      Mobile Admission
                  ============================= */}
                  <li className="mt-2">
                    <Link
                      href="/admission"
                      className={`justify-center rounded-lg font-semibold transition flex items-center gap-2 ${
                        isActive("/admission")
                          ? "bg-[#FF9A00] text-white"
                          : "bg-[#224248] text-white hover:bg-[#FF9A00]"
                      }`}
                    >
                      <GraduationCap size={18} />
                      ভর্তি আবেদন
                    </Link>
                  </li>
                </ul>
              </div>

              {/* =============================
                  LOGO
              ============================= */}
              <Link href="/" className="flex items-center">
                <SPILogo />
              </Link>
            </div>

            {/* =================================
                DESKTOP NAVIGATION
            ================================= */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex items-center gap-8">
                {/* =============================
                    HOME
                ============================= */}
                <li>
                  <Link
                    href="/"
                    className={`relative text-[15px] cursor-pointer font-semibold transition ${
                      isActive("/")
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    হোম
                    {isActive("/") && (
                      <span className="absolute -bottom-2 left-0 right-0 rounded-full" />
                    )}
                  </Link>
                </li>

                {/* =============================
                    DEPARTMENTS
                ============================= */}
                <li className="relative group">
                  <button
                    className={`relative cursor-pointer flex items-center gap-1 text-[15px] font-semibold transition ${
                      isDepartmentActive
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    ডিপার্টমেন্টস
                    <ChevronDown
                      size={16}
                      className="group-hover:rotate-180 transition-transform duration-200"
                    />
                    {isDepartmentActive && <span className="" />}
                  </button>

                  {/* Dropdown */}
                  <div className="absolute left-0 top-full pt-3 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                    <div className="w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                      {departments.map((department) => {
                        const active = isActive(department.link);

                        return (
                          <Link
                            key={department.link}
                            href={department.link}
                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition ${
                              active
                                ? "bg-[#44A1A4]/15 text-[#224248] font-bold"
                                : "text-gray-700 hover:bg-[#44A1A4]/10 hover:text-[#224248]"
                            }`}
                          >
                            {department.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </li>

                {/* =============================
                    OTHER MAIN LINKS
                ============================= */}
                {navLinks.slice(1).map((item) => {
                  const active = isActive(item.link);

                  return (
                    <li key={item.link}>
                      <Link
                        href={item.link}
                        className={`relative text-[15px] font-semibold cursor-pointer transition ${
                          active
                            ? "text-white"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {item.name}

                        {active && <span className="text-white" />}
                      </Link>
                    </li>
                  );
                })}

                {/* =============================
                    OTHERS DROPDOWN
                ============================= */}
                <li className="relative group">
                  <button
                    className={`relative cursor-pointer flex items-center gap-1 text-[15px] font-semibold transition ${
                      isOthersActive
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    অন্যান্য
                    <ChevronDown
                      size={16}
                      className="group-hover:rotate-180 transition-transform duration-200"
                    />
                  </button>

                  {/* Dropdown */}
                  <div className="absolute right-0 top-full pt-3 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                    <div className="w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                      {others.map((item) => {
                        const active = isActive(item.link);

                        return (
                          <Link
                            key={item.link}
                            href={item.link}
                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition ${
                              active
                                ? "bg-[#44A1A4]/15 text-[#224248] font-bold"
                                : "text-gray-700 hover:bg-[#44A1A4]/10 hover:text-[#224248]"
                            }`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
