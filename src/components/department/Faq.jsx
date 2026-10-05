import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import TitleStyle from "../UI/TitleStyle";
import SectionShortTitleStyle from "../UI/SectionShortTitleStyle";

const Faq = ({ faq }) => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-20 sm:px-8 lg:py-24">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl">
          <SectionShortTitleStyle text={faq.subtitle} />

          <TitleStyle
            title={faq.title}
            highlightedTitle={faq.highlightedTitle}
          />

          <p className="mt-4 leading-7 text-slate-600 text-base">
            {faq.description}
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faq.faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#224248]/30 hover:shadow-md open:border-[#224248]/30"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 sm:px-6">
                {/* Number */}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#224248]/10 text-xs font-bold text-[#224248]">
                  {String(index + 2).padStart(2, "0")}
                </span>

                {/* Question */}
                <span className="flex-1 text-left text-sm font-semibold leading-6 text-slate-800 sm:text-base">
                  {faq.question}
                </span>

                {/* Icon */}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 group-hover:bg-[#224248]/10 group-hover:text-[#224248] group-open:rotate-180">
                  <FaChevronDown className="text-xs" />
                </span>
              </summary>

              {/* Answer */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <div className="ml-0 border-t border-slate-100 pt-4 sm:ml-[52px]">
                  <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
