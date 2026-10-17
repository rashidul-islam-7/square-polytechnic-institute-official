"use client";

import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import {
  FaUserGraduate,
  FaPhone,
  FaLocationDot,
  FaGraduationCap,
  FaFileArrowUp,
} from "react-icons/fa6";

export default function AdmissionForm() {
  const inputStyle =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

  const labelStyle = "mb-2 block text-sm font-semibold text-slate-700";

  const required = <span className="text-red-500">*</span>;

  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
        {/* Form Header */}
        <div className="bg-lenear-to-r from-blue-700 via-blue-600 to-indigo-600 px-6 py-8 sm:px-10 sm:py-10">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
            <FaUserGraduate />
          </div>

          <p className="mb-2 text-sm font-medium ">ADMISSION APPLICATION</p>

          <h2 className="text-2xl font-bold sm:text-3xl">ভর্তি আবেদন ফরম</h2>

          <p className="mt-3 max-w-xl text-sm leading-7  ">
            আপনার সঠিক তথ্য দিয়ে নিচের ফরমটি পূরণ করুন। ভর্তি সংক্রান্ত তথ্য
            যাচাইয়ের জন্য প্রয়োজনীয় কাগজপত্র আপলোড করুন।
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm">
            <FaRegCheckCircle />
            <span>(*) চিহ্নিত ঘরগুলো পূরণ করা বাধ্যতামূলক</span>
          </div>
        </div>

        <form className="space-y-9 p-5 sm:p-8 lg:p-10">
          {/* Student Information */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelStyle}>শিক্ষার্থীর নাম {required}</label>
                <input
                  type="text"
                  name="studentName"
                  placeholder="সম্পূর্ণ নাম লিখুন"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label className={labelStyle}>
                  শিক্ষার্থীর মোবাইল নম্বর {required}
                </label>
                <input
                  type="tel"
                  name="studentPhone"
                  placeholder="01XXXXXXXXX"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label className={labelStyle}>
                  শিক্ষার্থীর অভিভাবকের মোবাইল নম্বর
                </label>
                <input
                  type="tel"
                  name="guardianPhone"
                  placeholder="01XXXXXXXXX"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className={labelStyle}>ঠিকানা</label>
                <input
                  type="text"
                  name="address"
                  placeholder="গ্রাম / এলাকা, উপজেলা, জেলা"
                  className={inputStyle}
                />
              </div>
            </div>
          </div>

          {/* Admission Information */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={labelStyle}>
                  কোন টেকনোলজিতে ভর্তি হতে চান? {required}
                </label>

                <select
                  name="technology"
                  defaultValue=""
                  className={inputStyle}
                  required
                >
                  <option value="" disabled>
                    টেকনোলজি নির্বাচন করুন
                  </option>
                  <option value="computer">
                    কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি
                  </option>
                  <option value="electrical">ইলেকট্রিক্যাল টেকনোলজি</option>
                  <option value="civil">সিভিল টেকনোলজি</option>
                  <option value="mechanical">মেকানিক্যাল টেকনোলজি</option>
                  <option value="electronics">ইলেকট্রনিক্স টেকনোলজি</option>
                  <option value="other">অন্যান্য</option>
                </select>
              </div>

              <div>
                <label className={labelStyle}>রোল নম্বর (SSC) {required}</label>
                <input
                  type="text"
                  name="sscRoll"
                  placeholder="SSC রোল নম্বর"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label className={labelStyle}>
                  রেজিস্ট্রেশন নম্বর (SSC) {required}
                </label>
                <input
                  type="text"
                  name="sscRegistration"
                  placeholder="SSC রেজিস্ট্রেশন নম্বর"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label className={labelStyle}>প্রাপ্ত GPA</label>
                <input
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
                <label className={labelStyle}>বিভাগ / গ্রুপ (SSC)</label>
                <select name="sscGroup" defaultValue="" className={inputStyle}>
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
                <label className={labelStyle}>বোর্ডের নাম {required}</label>
                <select
                  name="sscBoard"
                  defaultValue=""
                  className={inputStyle}
                  required
                >
                  <option value="" disabled>
                    শিক্ষা বোর্ড নির্বাচন করুন
                  </option>
                  <option value="dhaka">ঢাকা</option>
                  <option value="rajshahi">রাজশাহী</option>
                  <option value="cumilla">কুমিল্লা</option>
                  <option value="jashore">যশোর</option>
                  <option value="chattogram">চট্টগ্রাম</option>
                  <option value="barishal">বরিশাল</option>
                  <option value="sylhet">সিলেট</option>
                  <option value="dinajpur">দিনাজপুর</option>
                  <option value="mymensingh">ময়মনসিংহ</option>
                  <option value="madrasah">মাদ্রাসা</option>
                  <option value="technical">কারিগরি</option>
                  <option value="other">অন্যান্য</option>
                </select>
              </div>

              <div>
                <label className={labelStyle}>পাশের সাল</label>
                <select
                  name="passingYear"
                  defaultValue=""
                  className={inputStyle}
                >
                  <option value="" disabled>
                    পাশের সাল নির্বাচন করুন
                  </option>
                  {Array.from({ length: 15 }, (_, i) => 2026 - i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ),
                  )}
                </select>
              </div>
            </div>
          </div>

          {/* Scholarship */}
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
            <h3 className="font-bold text-slate-800">স্কলারশিপ ও ভর্তি ছাড়</h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              আপনি কি স্কলারশিপ ও ভর্তি ছাড়ের সুযোগ পেতে চান?
            </p>

            <div className="mt-4 flex flex-wrap gap-5">
              <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-700">
                <input
                  type="radio"
                  name="scholarship"
                  value="yes"
                  className="h-4 w-4 accent-emerald-600"
                />
                হ্যাঁ, চাই
              </label>

              <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-700">
                <input
                  type="radio"
                  name="scholarship"
                  value="no"
                  className="h-4 w-4 accent-emerald-600"
                />
                না
              </label>
            </div>
          </div>

          {/* Document Uploads */}
          <div>
            <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <FaFileArrowUp />
              </div>

              <div>
                <h3 className="font-bold text-slate-800">
                  প্রয়োজনীয় কাগজপত্র আপলোড
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Required Documents
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className={labelStyle}>
                  এডমিট কার্ডের ছবি আপলোড করুন {required}
                </label>
                <input
                  type="file"
                  name="admitCard"
                  accept="image/*,.pdf"
                  multiple
                  required
                  className={`${inputStyle} file:mr-3 file:rounded-lg file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-blue-700`}
                />
                <p className="mt-2 text-xs text-slate-500">
                  সর্বোচ্চ ৫টি ফাইল · PDF বা ছবি · প্রতিটি সর্বোচ্চ ১০ MB
                </p>
              </div>

              <div>
                <label className={labelStyle}>
                  রেজিস্ট্রেশন কার্ডের ছবি আপলোড করুন {required}
                </label>
                <input
                  type="file"
                  name="registrationCard"
                  accept="image/*,.pdf"
                  multiple
                  required
                  className={`${inputStyle} file:mr-3 file:rounded-lg file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-blue-700`}
                />
                <p className="mt-2 text-xs text-slate-500">
                  সর্বোচ্চ ৫টি ফাইল · PDF বা ছবি · প্রতিটি সর্বোচ্চ ১০ MB
                </p>
              </div>

              <div>
                <label className={labelStyle}>
                  আপনার ছবি আপলোড করুন {required}
                </label>
                <input
                  type="file"
                  name="studentPhoto"
                  accept="image/*,.pdf"
                  required
                  className={`${inputStyle} file:mr-3 file:rounded-lg file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-blue-700`}
                />
                <p className="mt-2 text-xs text-slate-500">
                  ১টি ফাইল · PDF বা ছবি · সর্বোচ্চ ১০ MB
                </p>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="border-t border-slate-100 pt-6">
            <p className="mb-5 text-xs leading-6 text-slate-500">
              আবেদন জমা দেওয়ার আগে আপনার দেওয়া সকল তথ্য ও আপলোড করা কাগজপত্র
              সঠিক আছে কি না যাচাই করুন।
            </p>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 sm:w-auto sm:min-w-52"
            >
              <FaCheckCircle />
              ভর্তি আবেদন জমা দিন
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
