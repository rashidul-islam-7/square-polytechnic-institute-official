
"use client"

import Link from "next/link";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">

        <p className="text-sm font-semibold tracking-widest text-[#224248] uppercase">
          Error 404
        </p>

        <h1 className="mt-3 text-5xl md:text-6xl font-bold text-gray-900">
          Page Not Found
        </h1>

        <p className="mt-4 text-gray-500 leading-7">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
          অনুগ্রহ করে URL টি যাচাই করুন অথবা হোম পেজে ফিরে যান।
        </p>

        <div className="mt-7 flex justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg
              bg-[#224248] px-5 py-2.5 text-sm font-medium
              text-white hover:bg-[#19363a] transition"
          >
            <FaHouse className="text-xs" />
            Go to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className=" cursor-pointer inline-flex items-center gap-2 rounded-lg
              border border-gray-300 px-5 py-2.5 text-sm font-medium
              text-gray-700 hover:bg-gray-50 transition"
          >
            <FaArrowLeft className="text-xs" />
            Go Back
          </button>
        </div>

      </div>
    </main>
  );
}

