import React from "react";
import { FaLocationDot, FaBuilding } from "react-icons/fa6";
import Btn from "../UI/Btn";

const ContactBanner = () => {
  return (
    <section className="bg-white px-5 pb-12 sm:px-8 lg:px-10">
      <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-7 overflow-hidden rounded-3xl border border-[#44A1A4]/20 bg-[#F2F9F8] p-6 sm:p-8 lg:flex-row lg:items-center lg:px-10">
        {/* Decorative Shape */}
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#44A1A4]/10 blur-2xl"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
          {/* Icon */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#224248] text-2xl text-white shadow-md shadow-[#224248]/15">
            <FaLocationDot />
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-extrabold text-[#224248] sm:text-xl">
              সরাসরি যোগাযোগ করুন
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              আপনার পছন্দের কোর্স, ভর্তি প্রক্রিয়া ও প্রশিক্ষণ সম্পর্কে
              বিস্তারিত জানতে আমাদের সঙ্গে যোগাযোগ করুন।
            </p>

            {/* Institute Address */}
            <div className="mt-5 flex items-start gap-3 border-t border-[#44A1A4]/20 pt-4">
              <FaBuilding className="mt-1 shrink-0 text-[#44A1A4]" />

              <div>
                <p className="text-sm font-bold text-[#224248]">
                  Square Polytechnic Institute
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  গাড়িদহ বাস স্ট্যান্ড, শেরপুর, বগুড়া।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative shrink-0">
          <Btn link="/contact?short-courses" text="Contact Us" />
        </div>
      </div>
    </section>
  );
};  

export default ContactBanner;
