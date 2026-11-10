"use client";

import React, { useMemo, useState } from "react";
import {
  FaFilter,
  FaXmark,
  FaFilePdf,
  FaDownload,
  FaEye,
  FaBookOpen,
  FaGraduationCap,
  FaCalendarDays,
  FaRotateLeft,
  FaArrowUpRightFromSquare,
  FaFileCircleQuestion,
  FaLayerGroup,
} from "react-icons/fa6";

import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import CustomIcon from "@/components/UI/CustomIcon";
import { MdKeyboardArrowDown, MdOutlineArrowDropDown } from "react-icons/md";

// DEMO QUESTION PAPER DATA
const questionPapers = [
  {
    id: 1,
    department: "Computer Technology",
    departmentShort: "CST",
    semester: "4th",
    subject: "Programming in C",
    subjectBn: "সি প্রোগ্রামিং",
    code: "28541",
    examType: "Final",
    examYear: "2025",
    pdfUrl: "/questions/cst/28541-final-2025.pdf",
    fileSize: "1.2 MB",
  },
  {
    id: 2,
    department: "Computer Technology",
    departmentShort: "CST",
    semester: "4th",
    subject: "Data Structure",
    subjectBn: "ডাটা স্ট্রাকচার",
    code: "28542",
    examType: "Midterm",
    examYear: "2025",
    pdfUrl: "/questions/cst/28542-midterm-2025.pdf",
    fileSize: "950 KB",
  },
  {
    id: 3,
    department: "Computer Technology",
    departmentShort: "CST",
    semester: "2nd",
    subject: "Computer Office Application",
    subjectBn: "কম্পিউটার অফিস অ্যাপ্লিকেশন",
    code: "28522",
    examType: "Final",
    examYear: "2024",
    pdfUrl: "/questions/cst/28522-final-2024.pdf",
    fileSize: "850 KB",
  },
  {
    id: 4,
    department: "Computer Technology",
    departmentShort: "CST",
    semester: "6th",
    subject: "Web Design and Development",
    subjectBn: "ওয়েব ডিজাইন অ্যান্ড ডেভেলপমেন্ট",
    code: "28563",
    examType: "Midterm",
    examYear: "2025",
    pdfUrl: "/questions/cst/28563-midterm-2025.pdf",
    fileSize: "1.1 MB",
  },
  {
    id: 5,
    department: "Civil Technology",
    departmentShort: "CIVIL",
    semester: "4th",
    subject: "Structural Mechanics",
    subjectBn: "স্ট্রাকচারাল মেকানিক্স",
    code: "26441",
    examType: "Final",
    examYear: "2025",
    pdfUrl: "/questions/civil/26441-final-2025.pdf",
    fileSize: "1.4 MB",
  },
  {
    id: 6,
    department: "Civil Technology",
    departmentShort: "CIVIL",
    semester: "2nd",
    subject: "Engineering Drawing",
    subjectBn: "ইঞ্জিনিয়ারিং ড্রয়িং",
    code: "26421",
    examType: "Midterm",
    examYear: "2024",
    pdfUrl: "/questions/civil/26421-midterm-2024.pdf",
    fileSize: "1.3 MB",
  },
  {
    id: 7,
    department: "Civil Technology",
    departmentShort: "CIVIL",
    semester: "6th",
    subject: "Surveying",
    subjectBn: "সার্ভেয়িং",
    code: "26462",
    examType: "Final",
    examYear: "2024",
    pdfUrl: "/questions/civil/26462-final-2024.pdf",
    fileSize: "1.0 MB",
  },
  {
    id: 8,
    department: "Electrical Technology",
    departmentShort: "ELECTRICAL",
    semester: "4th",
    subject: "Electrical Circuits",
    subjectBn: "ইলেকট্রিক্যাল সার্কিট",
    code: "26741",
    examType: "Midterm",
    examYear: "2025",
    pdfUrl: "/questions/electrical/26741-midterm-2025.pdf",
    fileSize: "900 KB",
  },
  {
    id: 9,
    department: "Electrical Technology",
    departmentShort: "ELECTRICAL",
    semester: "6th",
    subject: "Electrical Installation and Maintenance",
    subjectBn: "ইলেকট্রিক্যাল ইনস্টলেশন",
    code: "26762",
    examType: "Final",
    examYear: "2025",
    pdfUrl: "/questions/electrical/26762-final-2025.pdf",
    fileSize: "1.5 MB",
  },
  {
    id: 10,
    department: "Electrical Technology",
    departmentShort: "ELECTRICAL",
    semester: "2nd",
    subject: "Basic Electricity",
    subjectBn: "বেসিক ইলেকট্রিসিটি",
    code: "26721",
    examType: "Final",
    examYear: "2023",
    pdfUrl: "/questions/electrical/26721-final-2023.pdf",
    fileSize: "780 KB",
  },
  {
    id: 11,
    department: "Computer Technology",
    departmentShort: "CST",
    semester: "8th",
    subject: "Project Work",
    subjectBn: "প্রজেক্ট ওয়ার্ক",
    code: "28581",
    examType: "Final",
    examYear: "2024",
    pdfUrl: "/questions/cst/28581-final-2024.pdf",
    fileSize: "1.6 MB",
  },
  {
    id: 12,
    department: "Civil Technology",
    departmentShort: "CIVIL",
    semester: "8th",
    subject: "Construction Management",
    subjectBn: "কনস্ট্রাকশন ম্যানেজমেন্ট",
    code: "26482",
    examType: "Midterm",
    examYear: "2025",
    pdfUrl: "/questions/civil/26482-midterm-2025.pdf",
    fileSize: "1.2 MB",
  },
];

const semesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

const semesterBangla = {
  "1st": "১ম পর্ব",
  "2nd": "২য় পর্ব",
  "3rd": "৩য় পর্ব",
  "4th": "৪র্থ পর্ব",
  "5th": "৫ম পর্ব",
  "6th": "৬ষ্ঠ পর্ব",
  "7th": "৭ম পর্ব",
  "8th": "৮ম পর্ব",
};

const examLabels = {
  All: "সকল পরীক্ষা",
  Midterm: "পর্ব মধ্য পরীক্ষা",
  Final: "পর্ব সমাপনী পরীক্ষা",
};

export default function OldQuestionPapersPage() {
  const [search, setSearch] = useState("");
  const [semester, setSemester] = useState("All");
  const [year, setYear] = useState("All");
  const [department, setDepartment] = useState("All");
  const [examType, setExamType] = useState("All");
  const [activeTab, setActiveTab] = useState("All");
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const years = useMemo(
    () =>
      [...new Set(questionPapers.map((q) => q.examYear))].sort(
        (a, b) => Number(b) - Number(a),
      ),
    [],
  );

  const departments = useMemo(
    () => [...new Set(questionPapers.map((q) => q.department))],
    [],
  );

  const filteredQuestions = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return questionPapers.filter((q) => {
      const matchesSearch =
        !keyword ||
        q.subject.toLowerCase().includes(keyword) ||
        q.subjectBn.toLowerCase().includes(keyword) ||
        q.code.toLowerCase().includes(keyword) ||
        q.department.toLowerCase().includes(keyword);

      const matchesSemester = semester === "All" || q.semester === semester;

      const matchesYear = year === "All" || q.examYear === year;

      const matchesDepartment =
        department === "All" || q.department === department;

      const matchesExam = examType === "All" || q.examType === examType;

      const matchesTab = activeTab === "All" || q.examType === activeTab;

      return (
        matchesSearch &&
        matchesSemester &&
        matchesYear &&
        matchesDepartment &&
        matchesExam &&
        matchesTab
      );
    });
  }, [search, semester, year, department, examType, activeTab]);

  const resetFilters = () => {
    setSearch("");
    setSemester("All");
    setYear("All");
    setDepartment("All");
    setExamType("All");
    setActiveTab("All");
  };

  const hasActiveFilters =
    search ||
    semester !== "All" ||
    year !== "All" ||
    department !== "All" ||
    examType !== "All" ||
    activeTab !== "All";

  const midtermCount = questionPapers.filter(
    (q) => q.examType === "Midterm",
  ).length;

  const finalCount = questionPapers.filter(
    (q) => q.examType === "Final",
  ).length;

  return (
    <div className="min-h-screen bg-[#F7FAFA] pb-20">
      {/* hero  */}
      <section className="relative isolate overflow-hidden bg-linear-to-r from-[#022020] via-[#173F40] to-[#0c6466]">
        <div className="mx-auto max-w-4xl px-5 pb-28 pt-16 sm:px-8 sm:pb-32 sm:pt-20 lg:px-10">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-xs font-medium text-white/55">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/student-care" className="transition hover:text-white">
              Student Care
            </Link>
            <span>/</span>
            <span className="text-[#7ED2C9]">Question Papers</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Previous Question
              <span className="mt-1 block text-[#69C5BC]">Papers</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 ">
              বিগত পর্ব মধ্য ও পর্ব সমাপনী পরীক্ষার প্রশ্নপত্র। বিষয়, বিষয় কোড,
              পর্ব ও পরীক্ষার বছর অনুযায়ী প্রশ্ন দেখুন এবং সহজেই ডাউনলোড করুন।
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-white/65">
              <span className="flex items-center gap-2">
                <FaFilePdf className="text-white" />
                PDF Question Archive
              </span>
              <span className="flex items-center gap-2">
                <FaSearch className="text-white" />
                Smart Search
              </span>
              <span className="flex items-center gap-2">
                <FaDownload className="text-white" />
                Easy Download
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard
            icon={<FaFilePdf />}
            label="মোট প্রশ্নপত্র"
            value={questionPapers.length}
          />
          <StatCard
            icon={<FaGraduationCap />}
            label="পর্ব মধ্য পরীক্ষা"
            value={midtermCount}
          />
          <StatCard
            icon={<FaBookOpen />}
            label="পর্ব সমাপনী পরীক্ষা"
            value={finalCount}
          />
          <StatCard
            icon={<FaLayerGroup />}
            label="বিভাগ"
            value={departments.length}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-12 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold text-[#224248] sm:text-3xl">
              প্রশ্নপত্র খুঁজুন
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              আপনার প্রয়োজনীয় বিষয় ও পরীক্ষার প্রশ্ন সহজেই খুঁজে নিন।
            </p>
          </div>

          {/* <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-600 shadow-sm ring-1 ring-gray-100">
            <span className="h-2 w-2 rounded-full bg-[#44A1A4]" />
            {filteredQuestions.length} টি প্রশ্ন পাওয়া গেছে
          </div> */}
        </div>

        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-[0_8px_35px_rgba(34,66,72,0.04)] sm:p-6">
          {/* Search */}
          <label className="mb-2 block text-sm font-semibold text-[#224248]">
            বিষয় নাম অথবা বিষয় কোড দিয়ে সার্চ করুন
          </label>

          <div
            className="group flex h-12 items-center gap-3 rounded-lg border border-gray-400 bg-[#FAFCFC] px-4 transition focus-within:border-[#44A1A4] focus-within:bg-white focus-within:ring-4
           focus-within:ring-[#44A1A4]/10"
          >
            <FaSearch className="shrink-0 text-lg text-[#44A1A4]" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="যেমন: Programming in C অথবা 28541"
              className="h-full w-full bg-transparent text-sm text-[#224248] outline-none placeholder:text-gray-400"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-red-500"
                aria-label="Clear search"
              >
                <FaXmark />
              </button>
            )}
          </div>

          {/* Filter heading */}
          <div className="mb-4 mt-7 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaFilter className="text-[#44A1A4]" />
              <h3 className="text-sm font-bold text-[#224248]">
                ফিল্টার ব্যবহার করুন
              </h3>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-2 text-xs font-semibold text-[#9e3015] cursor-pointer py-1 px-3 border rounded-full transition hover:text-[#c00a0a]"
              >
                <FaRotateLeft />
                Delete All Filter
              </button>
            )}
          </div>

          {/* Filter grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FilterSelect
              label="বিভাগ নির্বাচন"
              value={department}
              onChange={setDepartment}
            >
              <option value="All">সকল বিভাগ</option>
              {departments.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </FilterSelect>

            <FilterSelect
              label="পর্ব নির্বাচন"
              value={semester}
              onChange={setSemester}
            >
              <option value="All">সকল পর্ব</option>
              {semesters.map((s) => (
                <option key={s} value={s}>
                  {semesterBangla[s]}
                </option>
              ))}
            </FilterSelect>

            <FilterSelect label="পরীক্ষার বছর" value={year} onChange={setYear}>
              <option value="All">সকল বছর</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </FilterSelect>

            <FilterSelect
              label="পরীক্ষার ধরন"
              value={examType}
              onChange={setExamType}
            >
              <option value="All">সকল পরীক্ষা</option>
              <option value="Midterm">পর্ব মধ্য পরীক্ষা</option>
              <option value="Final">পর্ব সমাপনী পরীক্ষা</option>
            </FilterSelect>
          </div>

          {/* Active filters */}
          {hasActiveFilters && (
            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4">
              <span className="mr-1 text-xs font-medium text-gray-500">
                Active filters:
              </span>

              {search && (
                <FilterChip
                  label={`Search: ${search}`}
                  onRemove={() => setSearch("")}
                />
              )}

              {department !== "All" && (
                <FilterChip
                  label={department}
                  onRemove={() => setDepartment("All")}
                />
              )}

              {semester !== "All" && (
                <FilterChip
                  label={semesterBangla[semester]}
                  onRemove={() => setSemester("All")}
                />
              )}

              {year !== "All" && (
                <FilterChip label={year} onRemove={() => setYear("All")} />
              )}

              {examType !== "All" && (
                <FilterChip
                  label={examLabels[examType]}
                  onRemove={() => setExamType("All")}
                />
              )}

              {activeTab !== "All" && (
                <FilterChip
                  label={examLabels[activeTab]}
                  onRemove={() => setActiveTab("All")}
                />
              )}
            </div>
          )}
        </div>

        <div className="mb-7 mt-10">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "All", label: "সকল প্রশ্নপত্র" },
              { id: "Midterm", label: "পর্ব মধ্য পরীক্ষা" },
              { id: "Final", label: "পর্ব সমাপনী পরীক্ষা" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-1.5 text-xs font-semibold transition cursor-pointer sm:text-sm ${
                  activeTab === tab.id
                    ? "bg-[#224248]  text-white shadow-lg shadow-[#224248]/15"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-[#44A1A4] hover:text-[#1d928c]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-[#172d31]">সকল প্রশ্নপত্র</h3>
            <p className="mt-1 text-sm text-gray-600">
              আপনার নির্বাচিত ফিল্টার অনুযায়ী প্রশ্নপত্র
            </p>
          </div>

          <span className="rounded-full bg-[#44A1A4]/10 px-3 py-1.5 shadow text-xs font-bold text-[#0a201f]">
            {filteredQuestions.length} Results
          </span>
        </div>

        {filteredQuestions.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                onPreview={() => setSelectedQuestion(question)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#44A1A4]/10 text-2xl text-[#44A1A4]">
              <FaFileCircleQuestion />
            </div>

            <h3 className="mt-5 text-lg font-bold text-[#224248]">
              কোনো প্রশ্নপত্র পাওয়া যায়নি!
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              আপনার সার্চ অথবা ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।
            </p>

            <button
              onClick={resetFilters}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#224248] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1d928c]"
            >
              <FaRotateLeft />
              সব ফিল্টার মুছুন
            </button>
          </div>
        )}
      </section>

      {selectedQuestion && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#102D30]/80 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedQuestion(null)}
        >
          <div
            className="flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-4 py-4 sm:px-6">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-lg text-red-500">
                  <FaFilePdf />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold text-[#224248] sm:text-base">
                    {selectedQuestion.subject}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">
                    {selectedQuestion.code} · {selectedQuestion.examYear}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedQuestion(null)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-red-50 hover:text-red-500"
                aria-label="Close PDF preview"
              >
                <FaXmark />
              </button>
            </div>

            {/* PDF details */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 bg-[#F8FAFA] px-4 py-3 sm:px-6">
              <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                <span>{selectedQuestion.department}</span>
                <span>•</span>
                <span>{semesterBangla[selectedQuestion.semester]}</span>
                <span>•</span>
                <span>{examLabels[selectedQuestion.examType]}</span>
              </div>

              <a
                href={selectedQuestion.pdfUrl}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-[#224248] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#1d928c]"
              >
                <FaDownload />
                Download PDF
              </a>
            </div>

            {/* PDF viewer */}
            <div className="min-h-[350px] flex-1 bg-[#E8EEEE] sm:min-h-[500px]">
              <iframe
                key={selectedQuestion.pdfUrl}
                src={`${selectedQuestion.pdfUrl}#toolbar=1&navpanes=0`}
                title={`${selectedQuestion.subject} Question Paper`}
                className="h-full min-h-[55vh] w-full"
              />
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-gray-100 px-4 py-3 sm:px-6">
              <p className="text-xs text-gray-400">
                PDF Document · {selectedQuestion.fileSize}
              </p>
              <a
                href={selectedQuestion.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-[#1d928c] hover:text-[#224248]"
              >
                নতুন ট্যাবে খুলুন
                <FaArrowUpRightFromSquare />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white py-3 px-5 shadow-[0_8px_30px_rgba(34,66,72,0.05)] ">
      <div className="flex items-center justify-between gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#44A1A4]/10 text-lg text-[#1d928c]">
          {icon}
        </div>
        <span className="text-xl font-bold text-[#224248] sm:text-2xl">
          {value}
        </span>
      </div>
      <p className="mt-3 text-xs font-medium text-gray-500 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

function FilterSelect({ label, value, onChange, children }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-full cursor-pointer appearance-none rounded-lg border border-gray-400 bg-[#FAFCFC] px-4 pr-10 text-sm text-[#224248] outline-none transition focus:border-[#44A1A4] focus:bg-white focus:ring-4 focus:ring-[#44A1A4]/10"
        >
          {children}
        </select>

        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[20px] text-gray-600">
          <MdKeyboardArrowDown />
        </span>
      </div>
    </div>
  );
}

function FilterChip({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg bg-[#EAF4F2] px-3 py-2 text-xs font-medium text-[#1d928c]">
      {label}
      <button
        onClick={onRemove}
        className="transition hover:text-red-500"
        aria-label={`Remove ${label} filter`}
      >
        <FaXmark />
      </button>
    </span>
  );
}

function QuestionCard({ question, onPreview }) {
  const isFinal = question.examType === "Final";

  return (
    <article className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_5px_25px_rgba(34,66,72,0.035)] transition duration-300  hover:border-[#44A1A4]/40 hover:shadow-[0_15px_40px_rgba(34,66,72,0.09)]">
      {/* Top information */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex p-2 shrink-0 items-center justify-center rounded-full bg-red-100  text-red-500 ">
          <FaFilePdf />
        </div>

        <span
          className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${
            isFinal
              ? "bg-[#EAF4F2] text-[#1d928c]"
              : "bg-amber-50 text-amber-700"
          }`}
        >
          {isFinal ? "পর্ব সমাপনী" : "পর্ব মধ্য"}
        </span>
      </div>

      {/* Subject information */}
      <div className="mt-4 flex-1">
        <p className="text-[11px]  text-[#093a3b]">{question.department}</p>

        {/* <h3 className="mt-2 text-base font-bold leading-snug text-[#224248] ">
          {question.subject}
        </h3> */}

        <p className="mt-2 text-base font-bold leading-snug text-[#224248] ">
          {question.subjectBn}{" "}
          <span className="text-[#197281] text-sm">({question.code})</span>{" "}
        </p>

        {/* Subject code */}
        {/* <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#F5F8F8] px-3 py-2">
          <FaBookOpen className="text-xs text-[#44A1A4]" />
          <span className="text-xs font-semibold text-gray-600">
            বিষয় কোড: {question.code}
          </span>
        </div> */}
      </div>

      {/* Meta information */}
      <div className=" border-t pt-3 mt-3 flex items-center justify-between ">
        <div>
          <p className=" text-xs font-bold text-[#224248]">
            {semesterBangla[question.semester]}
          </p>
        </div>

        <div>
          <p className=" flex items-center gap-1 text-xs font-bold text-[#224248]">
            <FaCalendarDays className="text-[#44A1A4] mb-1" />
            {question.examYear}
          </p>
        </div>

        {/* Action buttons */}

        <button
          onClick={onPreview}
          className=" cursor-pointer bg-[#44A1A4]/5 text-md font-bold text-[#d1971a] "
        >
          <FaEye />
        </button>

        <a
          href={question.pdfUrl}
          download
          className="cursor-pointer text-sm font-bold text-green-700 transition hover:text-[#1d928c]"
        >
          <FaDownload />
        </a>

        {/* <div>
          <p className="text-[10px] text-gray-400">ফাইল সাইজ</p>
          <p className="mt-1 text-xs font-bold text-[#224248]">
            {question.fileSize}
          </p>
        </div> */}
      </div>
    </article>
  );
}
