import React from "react";
import { Star } from "lucide-react";
import SectionTopSubTitle from "@/components/UI/SectionTopSubTitle";
import TitleStyle from "@/components/UI/TitleStyle";

const ReviewSectionHeader = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* HEADER  */}
      <div className="mb-8 text-center">
        <div>
          {/* Badge */}
          <SectionTopSubTitle text=" শিক্ষার্থীদের অভিজ্ঞতা" icon={Star} />
          <div className="flex justify-center">
            <TitleStyle
              title="আমাদের শিক্ষার্থীরা"
              highlightTitle=" কী বলছে?"
            />
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-500 md:text-base">
            স্কয়ার পলিটেকনিক ইন্সটিটিউটে শিক্ষার্থীদের শেখার অভিজ্ঞতা, পরিবেশ
            এবং শিক্ষক-সহযোগিতা সম্পর্কে তাদের কিছু কথা।
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSectionHeader;
