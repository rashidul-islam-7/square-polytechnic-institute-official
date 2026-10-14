import ScholarshipSection from "@/components/about/ScholarshipSection";
import Departments from "@/components/Shared/Department";
import InstituteFeatures from "@/components/Shared/InstituteFeatures";
import Btn from "@/components/UI/Btn";
import CustomIcon from "@/components/UI/CustomIcon";
import SectionShortTitleStyle from "@/components/UI/SectionShortTitleStyle";
import SectionTopSubTitle from "@/components/UI/SectionTopSubTitle";
import TitleStyle from "@/components/UI/TitleStyle";
import React from "react";

import {
  FaGraduationCap,
  FaBullseye,
  FaEye,
  FaBookOpen,
  FaFlask,
  FaLaptopCode,
  FaUsers,
  FaArrowRight,
  FaQuoteLeft,
  FaAward,
  FaLightbulb,
  FaBuildingColumns,
  FaCheck,
  FaStar,
} from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";

const AboutPage = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* HERO */}
      <section className="relative flex min-h-[440px] items-center overflow-hidden sm:min-h-[520px] lg:min-h-[600px]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmuZrAqmfbAt74eDDqiwwsrw4vWWECLC0o6BTdPB9wX-P6PIogi1mr6e0&s=10"
          alt="College campus"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/75 to-slate-950/20" />

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-3 rounded-full border border-white/20
             bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
            >
              <FaGraduationCap />
              <span>Welcome to Our Institution</span>
            </div>

            <h1 className="mt-7 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              আমাদের শিক্ষার্থী,
              <span className="mt-1 block text-[#44a1a4] ">আমাদের গর্ব।</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 ">
              জ্ঞান, দক্ষতা ও নৈতিক মূল্যবোধের সমন্বয়ে একটি আলোকিত প্রজন্ম গড়ে
              তোলার প্রত্যয়ে আমরা প্রতিশ্রুতিবদ্ধ। শিক্ষার প্রতিটি ধাপে
              শিক্ষার্থীদের পাশে থাকাই আমাদের লক্ষ্য।
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Btn text="See Deparments" link="/departments" />
            </div>
          </div>
        </div>
      </section>
      {/* INTRODUCTION */}
      <section id="college-introduction" className="relative py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-32 w-32 rounded-tl-[2rem] border-l-2 border-t-2 border-[#44a1a4] sm:-left-6 sm:-top-6" />

            <div className="relative overflow-hidden rounded-3xl bg-slate-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmuZrAqmfbAt74eDDqiwwsrw4vWWECLC0o6BTdPB9wX-P6PIogi1mr6e0&s=10"
                alt="Our college"
                className="h-[320px] w-full object-cover sm:h-[440px] lg:h-[500px]"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-sm font-medium text-[#c2e9eb]">
                  OUR COMMITMENT
                </p>
                <h3 className="mt-2 text-base font-bold sm:text-xl">
                  শিক্ষা হোক সাফল্যের ভিত্তি
                </h3>
                <p className=" text-sm leading-6 text-slate-100">
                  Building knowledge, character and a brighter future.
                </p>
              </div>
            </div>
          </div>

          <div>
            <SectionShortTitleStyle text=" Who We Are" />

            <TitleStyle title={"আমাদের"} highlightedTitle={"সম্পর্কে"} />

            <p className="mt-6 text-base leading-8 text-slate-600">
              আমাদের কলেজ একটি শিক্ষার্থীকেন্দ্রিক শিক্ষাপ্রতিষ্ঠান, যেখানে
              মানসম্মত শিক্ষা, সৃজনশীল চিন্তা এবং বাস্তবমুখী জ্ঞান অর্জনের ওপর
              গুরুত্ব দেওয়া হয়।
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              আমরা বিশ্বাস করি, শিক্ষা কেবল পরীক্ষায় ভালো ফলাফল অর্জনের মাধ্যম
              নয়; বরং এটি একজন শিক্ষার্থীর চিন্তাশক্তি, আত্মবিশ্বাস, নৈতিকতা
              এবং নেতৃত্বের গুণাবলি বিকাশের গুরুত্বপূর্ণ ভিত্তি।
            </p>

            <div className="mt-8 space-y-4">
              {[
                "মানসম্মত ও শিক্ষার্থীবান্ধব শিক্ষা",
                "সৃজনশীলতা ও ব্যবহারিক দক্ষতার বিকাশ",
                "নৈতিকতা, শৃঙ্খলা ও দায়িত্ববোধ",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#112c2e] text-sm text-white">
                    <FaCheck />
                  </span>
                  <p className="font-medium leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="#mission-vision"
              className="mt-9 group inline-flex items-center gap-3 font-bold text-[#44a1a4] transition-all duration-300 ease-out hover:text-[#2d7f82]"
            >
              আমাদের লক্ষ্য জানুন
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      </section>
      {/* MISSION AND VISION */}
      <section id="mission-vision" className="bg-slate-50 py-16 lg:py-20 ">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto flex flex-col items-center mb-14 max-w-3xl text-center">
            <SectionShortTitleStyle text={"Our Direction"} />

            <TitleStyle
              title="আমাদের"
              highlightedTitle="   লক্ষ্য ও উদ্দেশ্য"
            />

            <p className="mt-3 text-base leading-6 text-slate-600">
              ভবিষ্যৎ প্রজন্মকে দক্ষ, আত্মবিশ্বাসী ও দায়িত্বশীল নাগরিক হিসেবে
              গড়ে তুলতে আমাদের নির্দিষ্ট লক্ষ্য ও সুদূরপ্রসারী পরিকল্পনা
              রয়েছে।
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            <article className="group relative overflow-hidden rounded-3xl bg-[#104042] p-7 text-white sm:p-10">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border-[30px] border-white/5 transition-transform duration-500 group-hover:scale-125" />

              <div className="relative">
                <CustomIcon icon={FaBullseye} />

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#44a1a4] ">
                  Our Mission
                </p>

                <h3 className="mt-2 text-xl md:text-2xl font-bold ">
                  আমাদের লক্ষ্য
                </h3>

                <p className="mt-5 text-sm sm:text-base leading-7 text-green-50">
                  মানসম্মত শিক্ষা, আধুনিক জ্ঞান ও ব্যবহারিক দক্ষতার মাধ্যমে
                  শিক্ষার্থীদের যোগ্য করে তোলা। তাদের মধ্যে সৃজনশীলতা, শৃঙ্খলা,
                  মানবিকতা ও সমস্যা সমাধানের সক্ষমতা বিকাশে কাজ করা।
                </p>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-3xl border bg-gray-400/50 border-slate-200  p-7 shadow-sm sm:p-10">
              <div className="relative">
                <CustomIcon icon={FaEye} />

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#44a1a4] ">
                  Our Vision
                </p>

                <h3 className="mt-2 text-xl md:text-2xl font-bold ">
                  আমাদের স্বপ্ন
                </h3>

                <p className="mt-5 text-sm sm:text-base leading-7 text-gray-800">
                  একটি আধুনিক, অন্তর্ভুক্তিমূলক ও উদ্ভাবনমুখী শিক্ষাপ্রতিষ্ঠান
                  হিসেবে গড়ে ওঠা, যেখানে প্রতিটি শিক্ষার্থী নিজের সম্ভাবনা
                  বিকশিত করে সমাজ ও দেশের উন্নয়নে অবদান রাখতে পারে।
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* FACILITIES */}
      <section className="py-16 md:py-20 ">
        <InstituteFeatures />
      </section>
      {/* PRINCIPAL'S MESSAGE */}
      <section className="bg-slate-950 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative lg:col-span-5">
              <div className="absolute -left-3 -top-3 h-28 w-28 rounded-tl-3xl border-l-2 border-t-2 border-[#44a1a4] sm:-left-5 sm:-top-5" />

              <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-slate-800 to-slate-900 p-8 sm:min-h-[430px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]" />

                <div className="relative text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#44a1a4]/40 bg-[#0d383a] text-5xl text-[#44a1a4] ">
                    <FaGraduationCap />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    অধ্যক্ষের বাণী
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Message from the Principal
                  </p>

                  <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#44a1a4]" />

                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    শিক্ষা, সততা ও নিষ্ঠার পথে এগিয়ে চলাই আমাদের প্রত্যয়।
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <FaQuoteLeft className="text-4xl text-[#44a1a4]/80" />

              <span className="mt-6 block text-sm font-bold uppercase tracking-[0.2em] text-[#44a1a4]">
                Principal's Message
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                প্রতিটি শিক্ষার্থীর
                <span className="mt-2 block text-[#44a1a4]">
                  সম্ভাবনাই আমাদের প্রেরণা।
                </span>
              </h2>

              <p className="mt-7 text-base leading-6 text-slate-300">
                প্রিয় শিক্ষার্থীরা, শিক্ষা তোমাদের স্বপ্ন পূরণের অন্যতম
                শক্তিশালী মাধ্যম। জ্ঞান অর্জনের পাশাপাশি সততা, শৃঙ্খলা,
                অধ্যবসায় ও মানবিক মূল্যবোধকে জীবনের অংশ করে তুলতে হবে।
              </p>

              <p className="mt-4 text-base leading-6 text-slate-300">
                আমরা এমন একটি শিক্ষার পরিবেশ গড়ে তুলতে চাই, যেখানে তোমরা
                নিজেদের প্রতিভা বিকশিত করতে পারবে এবং ভবিষ্যতের চ্যালেঞ্জ
                মোকাবিলায় প্রস্তুত হবে। তোমাদের সাফল্যই আমাদের প্রতিষ্ঠানের
                সবচেয়ে বড় অর্জন।
              </p>

              <div className="mt-8 border-l-2 border-[#44a1a4] pl-5">
                <p className="text-lg font-bold text-white">অধ্যক্ষ</p>
                <p className="mt-1 text-sm text-slate-400">
                  Principal, Our College
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SCHOLARSHIP */}

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#DCE7E8] bg-gradient-to-br from-[#F8FAFA] via-white to-[#EDF7F5] px-7 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          {/* Background Decoration */}
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#44A1A4]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-[#D9A441]/10 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-12">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#44A1A4]/10 text-xl text-[#44A1A4]">
                <FaAward />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#44A1A4] sm:text-sm">
                Scholarship & Student Support
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#224248] sm:text-4xl lg:text-5xl">
                মেধা ও সম্ভাবনার বিকাশে
                <span className="mt-2 block text-[#44A1A4]">
                  শিক্ষার্থীদের পাশে
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#325E6A] sm:text-base sm:leading-8">
                শিক্ষার্থীদের স্বপ্নের পাশে দাঁড়াতে এবং শিক্ষার নতুন দুয়ার
                উন্মোচনে শিক্ষার্থীদের জন্য রয়েছে শিক্ষাবৃত্তি ব্যবস্থা।
              </p>
            </div>

            {/* Right Trophy & Button */}
            <div className="relative flex flex-col items-center justify-center lg:col-span-5">
              {/* Decorative Circles */}
              <div className="absolute top-1/2 left-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#44A1A4]/15 sm:h-64 sm:w-64" />

              <div className="absolute top-1/2 left-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#D9A441]/40 sm:h-52 sm:w-52" />

              {/* Trophy */}
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-[#FFF9E9] via-[#F9EBC9] to-[#E8CB82] shadow-xl shadow-[#D9A441]/15 sm:h-56 sm:w-56">
                <div className="absolute inset-3 rounded-full border border-[#D9A441]/30" />

                <FaTrophy className="relative z-10 text-7xl text-[#B88A2D] drop-shadow-md transition-transform duration-500 hover:scale-110 sm:text-8xl" />

                {/* Sparkles */}
                <FaStar className="absolute right-7 top-7 text-lg text-[#D9A441]" />
                <FaStar className="absolute bottom-9 left-7 text-sm text-[#D9A441]" />
              </div>

              {/* Trophy Caption */}
              <div className="relative mt-7 text-center">
                <h3 className="text-base font-extrabold text-[#224248] sm:text-lg">
                  মেধার স্বীকৃতি, সাফল্যের অনুপ্রেরণা
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-xs leading-6 text-[#325E6A]/80">
                  প্রতিটি অর্জন হোক আগামীর পথচলার নতুন প্রেরণা।
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-4">
                <Btn text={"Apply Now "} link="/admission" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <Departments />
      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-linear-to-br from-[#F8FCFB] via-white to-[#EDF7F5] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-20 top-40 -z-10 h-96 w-96 rounded-full bg-[#44A1A4]/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#D9A441]/20 blur-3xl" />

        {/* Decorative Rings */}
        <div className="pointer-events-none absolute top-24 right-[30%] -z-10 hidden h-31 w-31 rounded-full border-[12px] border-[#44A1A4]/[0.10] lg:block" />

        <div className="pointer-events-none absolute bottom-32 left-[30%] -z-10 hidden h-26 w-26 rounded-full border-[12px] border-[#44A1A4]/[0.08] lg:block" />

        <div className="relative mx-auto max-w-5xl">
          <div className="relative overflow-hidden border rounded-xl p-10 shadow-sm text-center">
            {/* Icon */}

            <CustomIcon
              icon={FaGraduationCap}
              size={30}
              className="p-4 shadow border border-accent"
            />

            {/* Eyebrow */}
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#44A1A4] sm:text-sm">
              Starts Your Journey
            </p>

            {/* Heading */}
            <div className=" flex justify-center items-center mt-4">
              <TitleStyle
                title={" গড়ে তুলি আগামীর"}
                highlightedTitle={"সম্ভাবনা "}
              />
            </div>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#325E6A] sm:text-base sm:leading-8">
              জ্ঞান অর্জন, দক্ষতা বিকাশ ও স্বপ্নপূরণের পথে স্কয়ার শিক্ষাপরিবারের
              সাথে হোক আগামীর পথ চলা। আপনার উজ্জ্বল ভবিষ্যৎ জন্য রইলো দোয়া ও
              ভালোবাসা!
            </p>

            {/* CTA */}
            <div className="mt-8 flex items-center justify-center ">
              <Btn text={"বিস্তারিত জানতে যোগাযোগ করুন "} link="/contact" />
            </div>

            {/* Bottom Accent */}
            <div className="mx-auto mt-10 flex items-center justify-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-[#44A1A4]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#D9A441]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#DCE7E8]" />
            </div>
          </div>
        </div>
        {/* Your Existing Content Goes Here */}
      </section>
    </main>
  );
};

export default AboutPage;
