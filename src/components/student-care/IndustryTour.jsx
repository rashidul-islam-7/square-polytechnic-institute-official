import Link from "next/link";
import {
  FaArrowRight,
  FaBus,
  FaPlay,
  FaImages,
  FaFileAlt,
} from "react-icons/fa";
import { IoMdBus } from "react-icons/io";

import Btn from "../UI/Btn";
import SectionTopSubTitle from "../UI/SectionTopSubTitle";
import TitleStyle from "../UI/TitleStyle";

const IMG = {
  tour: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=85",
  tourVideo:
    "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1000&q=85",
  report:
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1000&q=85",
};

const IndustryTour = () => {
  return (
    <section
      aria-labelledby="industry-tour"
      className="bg-[#F2F9F8] px-5 py-16 sm:px-8 sm:py-20 md:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:gap-16">
        {/* Section Content */}
        <div>
          <SectionTopSubTitle icon={IoMdBus} text="Industry Visit" />

          <div className="max-w-[400px] ">
            <TitleStyle
              title="শিল্পপ্রতিষ্ঠানকে জানার"
              highlightedTitle="বাস্তব অভিজ্ঞতা"
            />
          </div>

          <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
            শিল্পপ্রতিষ্ঠান ও কর্মক্ষেত্র সম্পর্কে বাস্তব ধারণা পেতে ইন্ডাস্ট্রি
            ট্যুর গুরুত্বপূর্ণ ভূমিকা রাখে। এসব কার্যক্রমের ছবি, ভিডিও ও
            প্রতিবেদন এক জায়গায় দেখুন।
          </p>

          <div className="mt-7">
            <Btn text="ট্যুর দেখুন" link="/industry-tour" />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 sm:h-[440px] sm:grid-rows-2">
          {/* Main Tour Image */}
          <Link
            href="/industry-tour/photos"
            className={`group relative col-span-2 flex min-h-[230px] overflow-hidden rounded-lg bg-[#224248] sm:col-span-1 sm:row-span-2`}
          >
            <img
              src={IMG.tour}
              alt="শিক্ষার্থীদের ইন্ডাস্ট্রি ট্যুর"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover "
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#122a2e]/85 via-[#122a2e]/10 to-transparent" />

            <div className="relative mt-auto w-full p-5 sm:p-6">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                <FaBus size={20} />
              </div>

              <h5 className="flex items-center justify-between text-base font-bold text-white ">
                ট্যুরের ছবি
                {/* <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" /> */}
              </h5>

              {/* <p className="mt-2 text-sm text-white/75">
                বিভিন্ন শিল্পপ্রতিষ্ঠান পরিদর্শনের মুহূর্ত
              </p> */}
            </div>
          </Link>

          {/* Tour Videos */}
          <Link
            href="#"
            className={`group relative flex min-h-[180px] overflow-hidden rounded-lg bg-[#224248]`}
          >
            <img
              src={IMG.tourVideo}
              alt="ইন্ডাস্ট্রি ট্যুরের ভিডিও"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover "
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#122a2e]/85 via-[#122a2e]/10 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#224248] shadow-lg ">
                <FaPlay size={17} className="ml-1" />
              </span>
            </div>

            <div className="relative mt-auto w-full p-4 sm:p-5">
              <h5 className="flex items-center justify-between text-base font-bold text-white">
                ট্যুর ভিডিও
                {/* <FaArrowRight className="transition-transform duration-300 " /> */}
              </h5>
            </div>
          </Link>

          {/* Tour Reports */}
          <Link
            href="/industry-tour/reports"
            className={`group relative flex min-h-[180px] overflow-hidden rounded-lg bg-[#224248] `}
          >
            <img
              src={IMG.report}
              alt="ইন্ডাস্ট্রি ট্যুরের প্রতিবেদন"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#122a2e]/90 via-[#122a2e]/10 to-transparent" />

            <div className="relative mt-auto w-full p-5 sm:p-6">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                <FaBus size={20} />
              </div>

              <h5 className="flex items-center justify-between text-base font-bold text-white ">
                ট্যুরের ছবি
                {/* <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" /> */}
              </h5>
            </div>

            {/* <div className="relative mt-auto w-full p-4 sm:p-5">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                <FaFileAlt size={17} />
              </div>

              <h3 className="flex items-center justify-between text-base font-bold text-white">
                ট্যুর প্রতিবেদন
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/75">
                ট্যুরের অভিজ্ঞতা ও বিস্তারিত পড়ুন
              </p>
            </div> */}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustryTour;
