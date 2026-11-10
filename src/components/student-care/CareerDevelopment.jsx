import React from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaBriefcase,
  FaUserTie,
  FaHandshake,
  FaLaptopCode,
} from "react-icons/fa";
import TitleStyle from "../UI/TitleStyle";
import SectionTopSubTitle from "../UI/SectionTopSubTitle";

const careerServices = [
  {
    title: "ক্যারিয়ার পরামর্শ ও গাইডলাইন",
    description:
      "উচ্চশিক্ষার সুযোগ, উপযুক্ত পেশা নির্বাচন এবং ভবিষ্যৎ কর্মজীবনের পরিকল্পনা সম্পর্কে অভিজ্ঞদের কাছ থেকে প্রয়োজনীয় পরামর্শ ও দিকনির্দেশনা প্রদান।",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=85",
    alt: "শিক্ষার্থীরা ক্যারিয়ার নিয়ে আলোচনা করছে",
    icon: FaUserTie,
    href: "/contact",
  },
  {
    title: "চাকরি ও ইন্টার্নশিপ",
    description:
      "বিভিন্ন প্রতিষ্ঠানের চাকরি ও ইন্টার্নশিপের সুযোগ সম্পর্কে তথ্য, আবেদন প্রক্রিয়া এবং কর্মজীবনে প্রবেশের প্রস্তুতিতে প্রয়োজনীয় সহযোগিতা।",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=85",
    alt: "চাকরির ইন্টারভিউ চলছে",
    icon: FaBriefcase,
    href: "/contact",
  },
  {
    title: "Job Placement",
    description:
      "শিক্ষার্থীদের অর্জিত যোগ্যতা ও দক্ষতার সঙ্গে সামঞ্জস্যপূর্ণ কর্মসংস্থানের সুযোগ খুঁজে পেতে এবং নিয়োগদাতা প্রতিষ্ঠানের সঙ্গে যোগাযোগে সহযোগিতা।",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=85",
    alt: "একটি দল একসঙ্গে কাজ করছে",
    icon: FaHandshake,
    href: "/contact",
  },
  {
    title: "দক্ষতা উন্নয়ন প্রশিক্ষণ",
    description:
      "বাস্তব কর্মক্ষেত্রের চাহিদা অনুযায়ী প্রযুক্তিগত, ডিজিটাল ও ব্যবহারিক দক্ষতা অর্জনের জন্য প্রশিক্ষণ এবং হাতে-কলমে শেখার সুযোগ।",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=85",
    alt: "শিক্ষার্থীরা কম্পিউটারে দক্ষতা শিখছে",
    icon: FaLaptopCode,
    href: "/contact",
  },
];

const CareerDevelopment  = () => {
  return (
    <section
      aria-labelledby="career-heading"
      className="bg-[#F2F9F8] py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div>
          <div className="max-w-[440px] ">
            <SectionTopSubTitle text="Carrary Guideline" />
            <TitleStyle
              title="শিক্ষাজীবন থেকেই শুরু হোক "
              highlightedTitle="ক্যারিয়ার গড়ার প্রস্তুতি"
            />
          </div>

          <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            সঠিক ক্যারিয়ার পরিকল্পনা, চাকরি ও ইন্টার্নশিপের সুযোগ এবং
            প্রয়োজনীয় দক্ষতা অর্জনে শিক্ষার্থীদের পরামর্শ ও সহযোগিতা প্রদান
            করা হয়, যেন তারা আত্মবিশ্বাসের সাথে কর্মজীবনে এগিয়ে যেতে পারে।
          </p>
        </div>

        {/* Cards */}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-10">
          {careerServices.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.title} className="h-full">
                <div className=" flex h-full flex-col overflow-hidden rounded-lg border border-[#224248]/10 bg-white ">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E8F5F4]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-lg font-bold leading-snug text-[#224248]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CareerDevelopment;
