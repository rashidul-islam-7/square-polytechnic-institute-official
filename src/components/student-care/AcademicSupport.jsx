import React from "react";
import {
  FaPlay,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaLightbulb,
} from "react-icons/fa";

import CustomIcon from "../UI/CustomIcon";
import SectionTopSubTitle from "../UI/SectionTopSubTitle";
import TitleStyle from "../UI/TitleStyle";

const supportItems = [
  {
    id: "01",
    icon: FaPlay,
    title: "ক্লাস ও লেকচার ভিডিও",
    description:
      "ক্লাসে শেখানো বিষয়গুলো আবার বোঝার জন্য রয়েছে লেকচার ভিডিও ও প্রয়োজনীয় শিক্ষাসামগ্রী।",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=85",
    alt: "Students watching online lecture",
  },
  {
    id: "02",
    icon: FaChalkboardTeacher,
    title: "অতিরিক্ত ক্লাস",
    description:
      "শিক্ষার্থীদের জন্য রয়েছে কঠিন বিষয়গুলো সহজভাবে বুঝতে এবং পরীক্ষার প্রস্তুতি নিতে অতিরিক্ত ক্লাসের ব্যবস্থা।",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=85",
    alt: "Teacher conducting classroom lesson",
  },
  {
    id: "03",
    icon: FaClipboardCheck,
    title: "অ্যাসাইনমেন্ট ও প্রজেক্ট",
    description:
      "প্রতিটি অ্যাসাইনমেন্ট ও প্রজেক্ট তৈরির ক্ষেত্রে শিক্ষকদের প্রয়োজনীয় পরামর্শ ও দিকনির্দেশনা থাকে সব সময়।",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=900&q=85",
    alt: "Student working on an academic project",
  },
  {
    id: "04",
    icon: FaLightbulb,
    title: "পরামর্শ ও গাইডলাইন",
    description:
      "শিক্ষার্থীদের পড়াশোনার পরিকল্পনা, বিষয়ভিত্তিক জটিলতা সমাধান এবং পরীক্ষার প্রস্তুতিতে প্রয়োজনীয় পরামর্শ ও সঠিক দিকনির্দেশনা প্রদান।",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=85",
    alt: "Students discussing academic guidance",
  },
];

const AcademicSupport = () => {
  return (
    <section className="relative overflow-hidden bg-[#F2F9F8] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionTopSubTitle text="Academic Support" />

          <div className="max-w-xl">
            <TitleStyle
              title="পড়াশোনায় ভালো করতে বাড়তি "
              highlightedTitle="সহযোগিতা সবসময়"
            />
          </div>

          <p className="mt-4 leading-7 text-gray-600 ">
            শুধু নিয়মিত ক্লাস নয়, শিক্ষার্থীদের শেখার সুবিধার্থে রয়েছে অতিরিক্ত
            ক্লাস, লেকচার ভিডিও, অ্যাসাইনমেন্ট সহায়তা এবং প্রয়োজনীয় অভিজ্ঞদের একাডেমিক পরামর্শ— শিক্ষার্থীদের শিক্ষাজীবনের প্রতিটি ধাপে আমরা সব সময় সর্বোচ্চ সাপোর্ট দেওয়ার চেষ্টা করি।
          </p>
        </div>

        {/* Support Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {supportItems.map((item) => (
            <div
              key={item.id}
              className=" flex flex-col overflow-hidden rounded-lg border border-[#224248]/5 bg-white shadow-[0_5px_25px_rgba(34,66,72,0.05)] sm:flex-row transition duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-[38%]">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#142F33]/50 via-transparent to-transparent" />

                {/* Icon */}
                <div className="absolute right-3 top-3">
                  <CustomIcon
                    icon={item.icon}
                    size={20}
                    color="#224248"
                    bg="#FFFFFF"
                    rounded="rounded-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-center p-5 sm:p-4 md:p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1 w-6 rounded-full bg-[#44A1A4]" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#44A1A4]">
                    Academic Support
                  </span>
                </div>

                <h3 className="text-lg font-bold leading-snug text-[#224248] ">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSupport;
