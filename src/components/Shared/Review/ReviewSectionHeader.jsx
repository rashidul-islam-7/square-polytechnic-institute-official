import React from "react";
import { Star} from "lucide-react";
const ReviewSectionHeader = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* HEADER  */}
      <div className="mb-8 text-center">
        <div>
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#44A1A4]/20 bg-[#44A1A4]/5 px-4 py-2 text-xs font-semibold text-[#325E6A]">
            <Star size={14} className="fill-[#44A1A4] text-[#44A1A4]" />
            শিক্ষার্থীদের অভিজ্ঞতা
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#224248] md:text-4xl">
            আমাদের শিক্ষার্থীরা <span className="text-[#44A1A4]">কী বলছে?</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500 md:text-base">
            স্কয়ার পলিটেকনিক ইন্সটিটিউটে শিক্ষার্থীদের শেখার অভিজ্ঞতা, পরিবেশ
            এবং শিক্ষক-সহযোগিতা সম্পর্কে তাদের কিছু কথা।
          </p>
        </div>

        {/* Rating */}
        {/* <div className="hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 md:block">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className="fill-[#FF9A00] text-[#FF9A00]"
                />
              ))}
            </div>

            <p className="mt-2 text-xs font-medium text-slate-500">
              শিক্ষার্থীদের সন্তুষ্টিই আমাদের অনুপ্রেরণা
            </p>
          </div> */}
      </div>
    </div>
  );
};

export default ReviewSectionHeader;
