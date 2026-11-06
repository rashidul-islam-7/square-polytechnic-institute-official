"use client";

import React, { useMemo, useState } from "react";
import {
  FaBullhorn,
  FaCalendarDays,
  FaDownload,
  FaFilePdf,
  FaMagnifyingGlass,
  FaArrowRight,
  FaFilter,
  FaXmark,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import Btn from "@/components/UI/Btn";

const notices = [
  {
    id: 6,
    title: "ল্যাব ক্লাসের নতুন সময়সূচি",
    description: "সকল বিভাগের ব্যবহারিক ক্লাসের নতুন সময়সূচি প্রকাশ করা হয়েছে।",
    date: "2026-10-10",
    category: "একাডেমিক",
    pdf: "/notices/lab-routine.pdf",
    isNew: false,
  },
];

const categories = [
  "সকল নোটিশ",
  "ভর্তি",
  "পরীক্ষা",
  "একাডেমিক",
  "অনুষ্ঠান",
  "অন্যান্য",
];

const formatDate = (date) => {
  const [year, month, day] = date.split("-").map(Number);

  return new Date(year, month - 1, day).toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function NoticePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("সকল নোটিশ");
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 5;

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const matchesSearch =
        notice.title.toLowerCase().includes(search.toLowerCase()) ||
        notice.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "সকল নোটিশ" || notice.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filteredNotices.length / perPage);

  const paginatedNotices = filteredNotices.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );

  const resetFilters = () => {
    setSearch("");
    setCategory("সকল নোটিশ");
    setCurrentPage(1);
  };

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategory = (value) => {
    setCategory(value);
    setCurrentPage(1);
  };

  return (
    <main className="mx-auto min-h-screen  bg-white pb-14 text-left">
      {/* Compact Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-r to-[#44A1A4] from-[#0d494b] via-[#146366] px-4 md:px-16 py-20 text-white ">
        <div className="relative mx-auto max-w-3xl">
          <div
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15
           bg-white/10 px-3 py-1.5 text-xs font-medium text-[#BCE5E2]"
          >
            <FaBullhorn />
            Institute Announcement
          </div>

          <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            নোটিশ বোর্ড
            <span className="mt-1 block text-[#44A1A4]">
              Square Polytechnic Institute
            </span>
          </h1>

          <p className="mt-3 max-w-xl leading-6 text-white/70">
            প্রতিষ্ঠানের সকল গুরুত্বপূর্ণ বিজ্ঞপ্তি, একাডেমিক আপডেট ও পরীক্ষার
            সময়সূচি এখানে প্রকাশ করা হয়।
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/75">
            <span className="flex items-center gap-2">
              <FaBullhorn className="text-[#44A1A4]" />
              মোট নোটিশ: {notices.length} টি
            </span>

            <span className="flex items-center gap-2">
              <FaCalendarDays className="text-[#FF9A00]" />
              নিয়মিত আপডেট
            </span>
          </div>
        </div>
      </section>

      {/* Main Notice Section */}
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#44A1A4]">
              Latest Updates
            </span>

            <h2 className="mt-1 text-xl font-bold text-[#224248] sm:text-2xl">
              সকল বিজ্ঞপ্তি
            </h2>

            <p className="mt-1 text-sm text-[#325E6A]/70">
              প্রয়োজনীয় নোটিশ ও বিজ্ঞপ্তি
            </p>
          </div>

          <p className="text-sm text-[#325E6A]/70">
            <span className="font-bold text-[#224248]">
              {filteredNotices.length}
            </span>{" "}
            টি নোটিশ
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 rounded-xl border border-[#E5EEEE] bg-[#F8FBFB] p-3 sm:p-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Search */}
            <div className="relative flex-1">
              <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#44A1A4]" />

              <input
                type="text"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="নোটিশের শিরোনাম বা বিষয় দিয়ে খুঁজুন..."
                aria-label="Search notices"
                className="w-full rounded-lg border border-[#DCE7E8] bg-white py-3 pl-11 pr-10 text-sm text-[#224248] outline-none transition placeholder:text-gray-400 focus:border-[#44A1A4] focus:ring-2 focus:ring-[#44A1A4]/10"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => handleSearch("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#325E6A] hover:text-red-500"
                >
                  <FaXmark />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="relative sm:w-48">
              <FaFilter className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#44A1A4]" />

              <select
                value={category}
                onChange={(e) => handleCategory(e.target.value)}
                aria-label="Filter by category"
                className="w-full cursor-pointer appearance-none rounded-lg border border-[#DCE7E8] bg-white py-3 pl-10 pr-4 text-sm text-[#224248] outline-none focus:border-[#44A1A4]"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Notice List */}
        <div className="space-y-3">
          {paginatedNotices.length > 0 ? (
            paginatedNotices.map((notice, index) => (
              <article
                key={notice.id}
                className="group rounded-xl border border-[#E5EEEE] bg-white p-4 transition duration-300 hover:shadow-md hover:shadow-[#224248]/5 sm:p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  {/* PDF Icon */}
                  <div
                    className="flex p-3 shrink-0 items-center justify-center rounded-lg
                   bg-[#44A1A4]/10 text-xl text-[#1a6f72]"
                  >
                    <FaFilePdf />
                  </div>

                  {/* Notice Details */}
                  <div className="min-w-0 flex-1">
                    {/* Category and New Badge */}
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-lg bg-[#44A1A4]/10 px-2.5 py-1 text-[11px] font-semibold text-[#224248]">
                        {notice.category}
                      </span>

                      {notice.isNew && (
                        <span className="rounded-md bg-[#FFF2DF] px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#D47B00]">
                          NEW
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold leading-snug text-[#224248] sm:text-[17px]">
                      {notice.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-[#325E6A]/75">
                      {notice.description}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#325E6A]/65">
                      <span className="flex items-center gap-1.5">
                        <FaCalendarDays className="text-[#44A1A4]" />
                        {formatDate(notice.date)}
                      </span>

                      {/* <span className="flex items-center gap-1.5">
                        <FaBullhorn className="text-[#44A1A4]" />
                        Square Polytechnic Institute
                      </span> */}
                    </div>
                  </div>

                  {/* Download */}
                  <div className="shrink-0 border-t border-[#E5EEEE] pt-3 sm:border-0 sm:pt-0">
                    <a
                      href={notice.pdf}
                      download
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#224248] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#44A1A4] sm:w-auto sm:text-sm"
                    >
                      <FaDownload />
                      PDF
                    </a>
                  </div>
                </div>
              </article>
            ))
          ) : (
            /* Empty State */
            <div className="rounded-xl border border-dashed border-[#DCE7E8] bg-[#F8FBFB] px-5 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#44A1A4]/10 text-xl text-[#44A1A4]">
                <FaMagnifyingGlass />
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#224248]">
                কোনো নোটিশ পাওয়া যায়নি
              </h3>

              <p className="mt-2 text-sm text-[#325E6A]/70">
                অন্য কোনো শব্দ দিয়ে সার্চ করুন অথবা ক্যাটাগরি পরিবর্তন করুন।
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#E5EEEE] pt-5">
            <p className="text-xs text-[#325E6A]/70">
              পৃষ্ঠা {currentPage} / {totalPages}
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                aria-label="Previous page"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#DCE7E8] bg-white text-sm text-[#224248] transition hover:bg-[#44A1A4]/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <FaChevronLeft />
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    type="button"
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`h-9 w-9 rounded-lg text-sm font-semibold transition ${
                      currentPage === page
                        ? "bg-[#224248] text-white"
                        : "border border-[#DCE7E8] bg-white text-[#224248] hover:bg-[#44A1A4]/10"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                aria-label="Next page"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#DCE7E8] bg-white text-sm text-[#224248] transition hover:bg-[#44A1A4]/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-10 flex flex-col justify-between gap-4 rounded-xl border border-[#44A1A4]/15 bg-[#F0F8F7] p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <h3 className="text-base font-bold text-[#224248] sm:text-lg">
              কোনো নোটিশ সম্পর্কে জানতে?
            </h3>

            <p className="mt-1 text-sm leading-6 text-[#325E6A]/80">
              বিস্তারিত তথ্যের জন্য যোগাযোগ করুন।
            </p>
          </div>

          <Btn text="Contact us" link="/contact" />
        </div>
      </section>
    </main>
  );
}
