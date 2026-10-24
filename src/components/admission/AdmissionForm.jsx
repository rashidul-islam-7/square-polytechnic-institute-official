"use client";

import {
  FaUserGraduate,
  FaFileArrowUp,
  FaGraduationCap,
  FaShieldHalved,
} from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import CustomIcon from "../UI/CustomIcon";
import Btn from "../UI/Btn";

export default function AdmissionForm() {
  const inputStyle =
    "w-full min-w-0 rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-[#071B36] outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-[#3F969B]/60 focus:border-[#3F969B] focus:ring-4 focus:ring-[#3F969B]/15";

  const labelStyle =
    "mb-2 block text-sm font-semibold leading-6 text-[#071B36]";

  const required = <span className="text-[#FF9A00]">*</span>;

  const sectionTitleStyle =
    "mb-6 flex items-center gap-3 border-b border-slate-100 pb-4";

  const iconBoxStyle =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3F969B]/10 text-lg text-[#3F969B]";

  const uploadStyle = `${inputStyle} cursor-pointer file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-[#3F969B]/10 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-[#071B36] hover:file:bg-[#3F969B]/20`;

  const years = Array.from({ length: 15 }, (_, i) => 2026 - i);

  const technologies = [
    ["computer", "কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি"],
    ["electrical", "ইলেকট্রিক্যাল টেকনোলজি"],
    ["civil", "সিভিল টেকনোলজি"],
    ["mechanical", "মেকানিক্যাল টেকনোলজি"],
    ["electronics", "ইলেকট্রনিক্স টেকনোলজি"],
    ["other", "অন্যান্য"],
  ];

  const boards = [
    ["dhaka", "ঢাকা"],
    ["rajshahi", "রাজশাহী"],
    ["cumilla", "কুমিল্লা"],
    ["jashore", "যশোর"],
    ["chattogram", "চট্টগ্রাম"],
    ["barishal", "বরিশাল"],
    ["sylhet", "সিলেট"],
    ["dinajpur", "দিনাজপুর"],
    ["mymensingh", "ময়মনসিংহ"],
    ["madrasah", "মাদ্রাসা"],
    ["technical", "কারিগরি"],
    ["other", "অন্যান্য"],
  ];

  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-[#071B36]/5">
        {/* Header */}
        <div className="relative overflow-hidden bg-linear-to-br from-[#071B36] via-[#0C3047] to-[#3F969B] px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
          <div className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border-[30px] border-white/5" />

          <div className="relative">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-2xl shadow-lg backdrop-blur-sm">
              <FaUserGraduate />
            </div>

            <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#FFBE5C] sm:text-sm">
              ADMISSION APPLICATION
            </p>

            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
              ভর্তি আবেদন ফরম
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-100 sm:text-base">
              আপনার সঠিক তথ্য দিয়ে নিচের ফরমটি পূরণ করুন। ভর্তি আবেদন সম্পন্ন
              করার জন্য প্রয়োজনীয় তথ্য ও কাগজপত্র প্রদান করুন।
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-slate-100 sm:text-sm">
              <FaRegCheckCircle className="shrink-0 text-[#FF9A00]" />
              <span>
                <span className="font-bold text-[#FF9A00]">*</span> চিহ্নিত
                ঘরগুলো পূরণ করা বাধ্যতামূলক
              </span>
            </div>
          </div>
        </div>

        <form
          className="space-y-10 p-5 sm:p-8 lg:p-10"
          encType="multipart/form-data"
        >
          {/* Student Information */}
          <section>
            <div className={sectionTitleStyle}>
              <div>
                <CustomIcon icon={FaUserGraduate} size="20" />
              </div>

              <div>
                <h3 className="text-base font-bold text-[#071B36] sm:text-lg">
                  শিক্ষার্থীর ব্যক্তিগত তথ্য
                </h3>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Student Information
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <div>
                <label htmlFor="studentName" className={labelStyle}>
                  শিক্ষার্থীর নাম {required}
                </label>
                <input
                  id="studentName"
                  type="text"
                  name="studentName"
                  placeholder="সম্পূর্ণ নাম লিখুন"
                  className={inputStyle}
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label htmlFor="studentPhone" className={labelStyle}>
                  শিক্ষার্থীর মোবাইল নম্বর {required}
                </label>
                <input
                  id="studentPhone"
                  type="tel"
                  name="studentPhone"
                  placeholder="01XXXXXXXXX"
                  className={inputStyle}
                  autoComplete="tel"
                  required
                />
              </div>

              <div>
                <label htmlFor="guardianPhone" className={labelStyle}>
                  অভিভাবকের মোবাইল নম্বর
                </label>
                <input
                  id="guardianPhone"
                  type="tel"
                  name="guardianPhone"
                  placeholder="01XXXXXXXXX"
                  className={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="address" className={labelStyle}>
                  বর্তমান ঠিকানা
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="গ্রাম / এলাকা, উপজেলা, জেলা"
                  className={inputStyle}
                  autoComplete="street-address"
                />
              </div>
            </div>
          </section>

          {/* Admission Information */}
          <section>
            <div className={sectionTitleStyle}>
              <div>
                <CustomIcon icon={FaGraduationCap} size="20" />
              </div>

              <div>
                <h3 className="text-base font-bold text-[#071B36] sm:text-lg">
                  ভর্তি ও শিক্ষাগত তথ্য
                </h3>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Admission & Academic Information
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <div>
                <label htmlFor="technology" className={labelStyle}>
                  পছন্দের টেকনোলজি {required}
                </label>
                <select
                  id="technology"
                  name="technology"
                  defaultValue=""
                  className={inputStyle}
                  required
                >
                  <option value="" disabled>
                    টেকনোলজি নির্বাচন করুন
                  </option>
                  {technologies.map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="sscRoll" className={labelStyle}>
                  SSC রোল নম্বর {required}
                </label>
                <input
                  id="sscRoll"
                  type="text"
                  name="sscRoll"
                  placeholder="SSC রোল নম্বর"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label htmlFor="sscRegistration" className={labelStyle}>
                  SSC রেজিস্ট্রেশন নম্বর {required}
                </label>
                <input
                  id="sscRegistration"
                  type="text"
                  name="sscRegistration"
                  placeholder="রেজিস্ট্রেশন নম্বর"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label htmlFor="gpa" className={labelStyle}>
                  প্রাপ্ত GPA
                </label>
                <input
                  id="gpa"
                  type="number"
                  name="gpa"
                  placeholder="যেমন: 4.50"
                  min="0"
                  max="5"
                  step="0.01"
                  className={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="sscGroup" className={labelStyle}>
                  বিভাগ / গ্রুপ (SSC)
                </label>
                <select
                  id="sscGroup"
                  name="sscGroup"
                  defaultValue=""
                  className={inputStyle}
                >
                  <option value="" disabled>
                    বিভাগ নির্বাচন করুন
                  </option>
                  <option value="science">বিজ্ঞান</option>
                  <option value="humanities">মানবিক</option>
                  <option value="business">ব্যবসায় শিক্ষা</option>
                  <option value="vocational">ভোকেশনাল</option>
                  <option value="other">অন্যান্য</option>
                </select>
              </div>

              <div>
                <label htmlFor="sscBoard" className={labelStyle}>
                  শিক্ষা বোর্ডের নাম {required}
                </label>
                <select
                  id="sscBoard"
                  name="sscBoard"
                  defaultValue=""
                  className={inputStyle}
                  required
                >
                  <option value="" disabled>
                    শিক্ষা বোর্ড নির্বাচন করুন
                  </option>
                  {boards.map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="passingYear" className={labelStyle}>
                  SSC পাসের সাল
                </label>
                <select
                  id="passingYear"
                  name="passingYear"
                  defaultValue=""
                  className={inputStyle}
                >
                  <option value="" disabled>
                    পাসের সাল নির্বাচন করুন
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Scholarship */}
          <section className="rounded-2xl border border-[#3F969B]/20 bg-gradient-to-br from-[#3F969B]/10 to-white p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <CustomIcon icon={FaShieldHalved} size="18" />
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-[#071B36]">
                  স্কলারশিপ ও ভর্তি ছাড়
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  আপনি কি স্কলারশিপ ও ভর্তি ছাড়ের সুযোগ পেতে আগ্রহী?
                </p>

                <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                  <label className="flex cursor-pointer items-center gap-2.5 text-sm font-medium text-[#071B36]">
                    <input
                      type="radio"
                      name="scholarship"
                      value="yes"
                      className="h-4 w-4 accent-[#3F969B]"
                    />
                    হ্যাঁ, আগ্রহী
                  </label>

                  <label className="flex cursor-pointer items-center gap-2.5 text-sm font-medium text-[#071B36]">
                    <input
                      type="radio"
                      name="scholarship"
                      value="no"
                      className="h-4 w-4 accent-[#3F969B]"
                    />
                    না
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Document Uploads */}
          <section>
            <div className={sectionTitleStyle}>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF9A00]/10 text-lg text-[#FF9A00]">
                <FaFileArrowUp />
              </div>

              <div>
                <h3 className="text-base font-bold text-[#071B36] sm:text-lg">
                  প্রয়োজনীয় কাগজপত্র
                </h3>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Required Documents
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="min-w-0 rounded-2xl border border-slate-200 p-4 transition-colors hover:border-[#3F969B]/50 sm:p-5">
                <label htmlFor="admitCard" className={labelStyle}>
                  এডমিট কার্ড {required}
                </label>
                <input
                  id="admitCard"
                  type="file"
                  name="admitCard"
                  accept="image/*,.pdf"
                  multiple
                  required
                  className={uploadStyle}
                />
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  সর্বোচ্চ ৫টি ফাইল · PDF বা ছবি · প্রতিটি সর্বোচ্চ ১০ MB
                </p>
              </div>

              <div className="min-w-0 rounded-2xl border border-slate-200 p-4 transition-colors hover:border-[#3F969B]/50 sm:p-5">
                <label htmlFor="registrationCard" className={labelStyle}>
                  রেজিস্ট্রেশন কার্ড {required}
                </label>
                <input
                  id="registrationCard"
                  type="file"
                  name="registrationCard"
                  accept="image/*,.pdf"
                  multiple
                  required
                  className={uploadStyle}
                />
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  সর্বোচ্চ ৫টি ফাইল · PDF বা ছবি · প্রতিটি সর্বোচ্চ ১০ MB
                </p>
              </div>

              <div className="min-w-0 rounded-2xl border border-slate-200 p-4 transition-colors hover:border-[#3F969B]/50 sm:col-span-2 sm:p-5">
                <label htmlFor="studentPhoto" className={labelStyle}>
                  শিক্ষার্থীর ছবি {required}
                </label>
                <input
                  id="studentPhoto"
                  type="file"
                  name="studentPhoto"
                  accept="image/*"
                  required
                  className={uploadStyle}
                />
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  ১টি ছবি · সর্বোচ্চ ১০ MB
                </p>
              </div>
            </div>
          </section>

          {/* Submission Notice */}
          <div className="rounded-xl border border-[#3F969B]/20 bg-[#3F969B]/5 p-4">
            <div className="flex items-start gap-3">
              <FaRegCheckCircle className="mt-0.5 shrink-0 text-[#3F969B]" />
              <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                আবেদন জমা দেওয়ার আগে আপনার দেওয়া সকল তথ্য ও আপলোড করা কাগজপত্র
                সঠিক আছে কি না যাচাই করুন।
              </p>
            </div>
          </div>

          {/* Submit */}
          <div className="border-t border-slate-100 pt-6">
            <div>
              <Btn text={"ভর্তি ফরম জমা দিন"} />
            </div>

            <p className="mt-3 text-center text-xs text-slate-400 sm:text-right">
              <span className="font-bold text-[#FF9A00]">*</span> চিহ্নিত
              তথ্যগুলো অবশ্যই পূরণ করতে হবে।
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
