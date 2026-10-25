"use client";

import SectionTopSubTitle from "@/components/UI/SectionTopSubTitle";
import React, { useMemo, useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaGraduationCap,
  FaUsers,
  FaChalkboardTeacher,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaRegCommentDots,
} from "react-icons/fa";

const TABS = [
  { id: "all", label: "সকল রিভিউ", icon: FaRegCommentDots },
  { id: "student", label: "শিক্ষার্থী", icon: FaGraduationCap },
  { id: "parent", label: "অভিভাবক", icon: FaUsers },
  { id: "teacher", label: "শিক্ষক", icon: FaChalkboardTeacher },
];

const TYPE_LABELS = {
  student: "শিক্ষার্থী",
  parent: "অভিভাবক",
  teacher: "শিক্ষক",
};

const PAGE_SIZE = 9;


export default function ReviewsPage({ reviewsContent = [] }) {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const reviews = useMemo(
    () =>
      reviewsContent.filter(
        (review) =>
          review &&
          typeof review.title === "string" &&
          typeof review.comment === "string" &&
          typeof review.studentName === "string",
      ),
    [reviewsContent],
  );

  const filteredReviews = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return reviews.filter((review) => {
      // type: student, parent, or teacher
      const type = review.type || "student";

      const matchesTab = activeTab === "all" || type === activeTab;

      const searchableText = [
        review.title,
        review.comment,
        review.studentName,
        review.department,
        review.session,
        TYPE_LABELS[type],
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesTab && searchableText.includes(keyword);
    });
  }, [reviews, activeTab, search]);

  const totalPages = Math.max(1, Math.ceil(filteredReviews.length / PAGE_SIZE));

  const currentPage = Math.min(page, totalPages);

  const visibleReviews = filteredReviews.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const averageRating = reviews.length
    ? reviews.reduce(
        (sum, review) =>
          sum + Math.min(5, Math.max(0, Number(review.rating) || 0)),
        0,
      ) / reviews.length
    : 0;

  const changeTab = (tab) => {
    setActiveTab(tab);
    setPage(1);
  };

  const changeSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const getInitial = (name) => name?.trim()?.charAt(0) || "?";

  return (
    <main className="min-h-screen bg-[#F7FAFA] text-[#224248]">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#224248]">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#44A1A4]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-[#FF9A00]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
            <FaQuoteLeft className="text-[#FF9A00]" />
            আমাদের পরিবারের অভিজ্ঞতা
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            সবার অভিজ্ঞতা,
            <span className="text-[#70D0CE]">আমাদের অনুপ্রেরণা</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            আমাদের শিক্ষার্থী, সম্মানিত অভিভাবক ও শিক্ষকদের অভিজ্ঞতা, মতামত এবং
            ভালোবাসার গল্প জানুন।
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="relative z-10 mx-auto -mt-7 max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#DCE7E8] bg-white shadow-xl shadow-[#224248]/5 sm:grid-cols-3">
          <div className="border-b border-r border-[#E5EEEE] p-5 text-center sm:border-b-0">
            <p className="text-2xl font-extrabold text-[#224248] sm:text-3xl">
              {reviews.length}
            </p>
            <p className="mt-2 text-xs text-[#325E6A]/75 sm:text-sm">
              মোট রিভিউ
            </p>
          </div>

          <div className="border-b border-[#E5EEEE] p-5 text-center sm:border-b-0 sm:border-r">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl font-extrabold text-[#224248] sm:text-3xl">
                {averageRating.toFixed(1)}
              </span>
              <FaStar className="text-[#FF9A00]" />
            </div>
            <p className="mt-2 text-xs text-[#325E6A]/75 sm:text-sm">
              গড় রেটিং
            </p>
          </div>

          <div className="col-span-2 p-5 text-center sm:col-span-1">
            <p className="text-2xl font-extrabold text-[#224248] sm:text-3xl">
              {TABS.length - 1}
            </p>
            <p className="mt-2 text-xs text-[#325E6A]/75 sm:text-sm">
              রিভিউ ক্যাটাগরি
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews-list"
        className="scroll-mt-8 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#44A1A4]">
            Testimonials
          </p>
          {/* <SectionTopSubTitle text="Testimonials" /> */}

          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
            মতামত ও অভিজ্ঞতা
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#325E6A]/75 sm:text-base">
            আমাদের সম্মানিত শিক্ষক, অভিভাবক এবং শিক্ষার্থীরা আমাদের সম্পর্কে
            তাদের মতামত ও অভিজ্ঞতা প্রকাশ করেছেন।
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex justify-center">
          <div
            role="tablist"
            aria-label="রিভিউ ক্যাটাগরি"
            className="flex max-w-full flex-wrap justify-center gap-2 rounded-2xl border border-[#DCE7E8] bg-white p-2 shadow-sm"
          >
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const selected = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  aria-selected={selected}
                  aria-controls="review-results"
                  onClick={() => changeTab(tab.id)}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 cursor-pointer text-xs font-bold transition-all sm:px-5 sm:text-sm ${
                    selected
                      ? "bg-[#224248] text-white shadow-md"
                      : "text-[#325E6A] hover:bg-[#44A1A4]/10"
                  }`}
                >
                  <Icon className="shrink-0" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & result count */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#325E6A]/75">
            মোট{" "}
            <span className="font-extrabold text-[#224248]">
              {filteredReviews.length}
            </span>{" "}
            টি রিভিউ পাওয়া গেছে
          </p>

          <div className="relative w-full sm:max-w-xs">
            <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#44A1A4]" />
            <input
              type="search"
              value={search}
              onChange={(e) => changeSearch(e.target.value)}
              placeholder="নাম বা রিভিউ খুঁজুন..."
              aria-label="রিভিউ খুঁজুন"
              className="w-full rounded-xl border border-[#DCE7E8] bg-white py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-[#325E6A]/50 focus:border-[#44A1A4] focus:ring-4 focus:ring-[#44A1A4]/10"
            />
          </div>
        </div>

        {/* Review Cards */}
        <div
          id="review-results"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          aria-live="polite"
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleReviews.map((review, index) => {
            const type = review.type || "student";
            const rating = Math.min(5, Math.max(0, Number(review.rating) || 0));

            return (
              <article
                key={review.id ?? `${type}-${review.studentName}-${index}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#DCE7E8] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#44A1A4]/50 hover:shadow-xl hover:shadow-[#224248]/5 sm:p-7"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#44A1A4]/5 transition group-hover:bg-[#44A1A4]/10" />

                <div className="relative mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#44A1A4]/10 text-lg text-[#44A1A4]">
                    <FaQuoteLeft />
                  </div>

                  <span className="rounded-full border border-[#DCE7E8] bg-[#F7FAFA] px-3 py-1.5 text-xs font-bold text-[#325E6A]">
                    {TYPE_LABELS[type] || "শিক্ষার্থী"}
                  </span>
                </div>

                <div
                  className="mb-4 flex items-center gap-1"
                  aria-label={`রেটিং ${rating} এর মধ্যে ৫`}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={
                        star <= rating ? "text-[#FF9A00]" : "text-[#DCE7E8]"
                      }
                    />
                  ))}
                  <span className="ml-2 text-xs font-bold text-[#325E6A]">
                    {rating.toFixed(1)}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold leading-snug text-[#224248]">
                  {review.title}
                </h3>

                <p className="mt-3 flex-1 whitespace-pre-line text-sm leading-7 text-[#325E6A]">
                  {review.comment}
                </p>

                <div className="mt-6 border-t border-[#E5EEEE] pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#224248] text-lg font-extrabold text-white ring-4 ring-[#44A1A4]/10">
                      {review.avatar ? (
                        <img
                          src={review.avatar}
                          alt={review.studentName}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        getInitial(review.studentName)
                      )}
                    </div>

                    <div className="min-w-0">
                      <h4 className="truncate text-sm font-extrabold text-[#224248]">
                        {review.studentName}
                      </h4>
                      <p className="mt-1 text-xs leading-5 text-[#325E6A]/75">
                        {review.department || TYPE_LABELS[type]}
                        {review.session
                          ? ` • ${type === "parent" ? "শিক্ষার্থীর সেশন" : "সেশন"} ${review.session}`
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty State */}
        {visibleReviews.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#DCE7E8] bg-white px-5 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#44A1A4]/10 text-2xl text-[#44A1A4]">
              <FaRegCommentDots />
            </div>
            <h3 className="mt-5 text-lg font-extrabold">
              কোনো রিভিউ পাওয়া যায়নি
            </h3>
            <p className="mt-2 text-sm text-[#325E6A]/75">
              অন্য ক্যাটাগরি নির্বাচন করুন অথবা নতুন শব্দ দিয়ে খুঁজুন।
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredReviews.length > PAGE_SIZE && (
          <nav
            aria-label="রিভিউ পেজ নেভিগেশন"
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
          >
            <button
              disabled={currentPage === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              aria-label="আগের পেজ"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE7E8] bg-white text-[#224248] transition hover:bg-[#44A1A4]/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FaChevronLeft />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => setPage(number)}
                  aria-current={currentPage === number ? "page" : undefined}
                  className={`h-10 min-w-10 rounded-xl px-3 text-sm font-bold transition ${
                    currentPage === number
                      ? "bg-[#224248] text-white"
                      : "border border-[#DCE7E8] bg-white text-[#224248] hover:bg-[#44A1A4]/10"
                  }`}
                >
                  {number}
                </button>
              ),
            )}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              aria-label="পরের পেজ"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE7E8] bg-white text-[#224248] transition hover:bg-[#44A1A4]/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FaChevronRight />
            </button>
          </nav>
        )}
      </section>

      {/* Bottom CTA */}
      {/* <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#224248] px-6 py-10 text-center sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-[#44A1A4]/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-[#FF9A00]/10 blur-2xl" />

          <div className="relative">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              আপনার অভিজ্ঞতাও আমাদের জানান
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              আপনার মতামত আমাদের শিক্ষার পরিবেশ ও সেবার মান উন্নত করতে সাহায্য
              করে।
            </p>
            <a
              href="/contact"
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-[#FF9A00] px-7 py-3.5 text-sm font-extrabold text-[#224248] transition hover:bg-white"
            >
              যোগাযোগ করুন
            </a>
          </div>
        </div>
      </section> */}
    </main>
  );
}
