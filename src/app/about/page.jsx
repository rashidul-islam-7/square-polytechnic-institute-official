import Btn from "@/components/UI/Btn";
import CustomIcon from "@/components/UI/CustomIcon";
import SectionShortTitleStyle from "@/components/UI/SectionShortTitleStyle";
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
} from "react-icons/fa6";

const facilities = [
  {
    icon: FaBookOpen,
    title: "সমৃদ্ধ লাইব্রেরি",
    subtitle: "Rich Library",
    description:
      "পাঠ্যবই, রেফারেন্স বই ও জ্ঞানচর্চার জন্য শিক্ষার্থীদের উপযোগী পরিবেশ।",
  },
  {
    icon: FaLaptopCode,
    title: "আধুনিক কম্পিউটার ল্যাব",
    subtitle: "Computer Lab",
    description:
      "প্রযুক্তিগত জ্ঞান ও ব্যবহারিক দক্ষতা অর্জনের জন্য আধুনিক কম্পিউটার সুবিধা।",
  },
  {
    icon: FaFlask,
    title: "বিজ্ঞানাগার",
    subtitle: "Science Laboratory",
    description:
      "পরীক্ষা-নিরীক্ষা ও হাতে-কলমে শেখার মাধ্যমে বিজ্ঞানের ব্যবহারিক জ্ঞান অর্জন।",
  },
  {
    icon: FaUsers,
    title: "শিক্ষার্থীবান্ধব পরিবেশ",
    subtitle: "Student Friendly Campus",
    description:
      "শিক্ষার্থীদের ব্যক্তিগত ও একাডেমিক বিকাশে সহায়ক শিক্ষার পরিবেশ।",
  },
];

const departments = [
  {
    number: "01",
    title: "বিজ্ঞান বিভাগ",
    subtitle: "Science",
    description: "বিজ্ঞান, অনুসন্ধান ও প্রযুক্তিনির্ভর জ্ঞানচর্চা।",
    icon: FaFlask,
  },
  {
    number: "02",
    title: "মানবিক বিভাগ",
    subtitle: "Humanities",
    description: "ইতিহাস, সমাজ, সংস্কৃতি ও মানবিক মূল্যবোধের চর্চা।",
    icon: FaBookOpen,
  },
  {
    number: "03",
    title: "ব্যবসায় শিক্ষা",
    subtitle: "Business Studies",
    description: "ব্যবসা, অর্থনীতি ও ব্যবস্থাপনা বিষয়ে জ্ঞান অর্জন।",
    icon: FaBuildingColumns,
  },
];

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
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionShortTitleStyle title=" Campus Facilities" />

              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                শিক্ষার জন্য প্রয়োজনীয় সুবিধা
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                শিক্ষার্থীদের একাডেমিক ও ব্যক্তিগত বিকাশে সহায়ক পরিবেশ এবং
                প্রয়োজনীয় সুযোগ-সুবিধা।
              </p>
            </div>

            <span className="hidden text-sm font-semibold text-green-700 md:block">
              Learn • Explore • Grow
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;

              return (
                <article
                  key={facility.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-2xl text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
                    <Icon />
                  </div>

                  <p className="mt-6 text-xs font-bold tracking-widest text-green-700">
                    FACILITY 0{index + 1}
                  </p>

                  <h3 className="mt-3 text-lg font-bold text-slate-900">
                    {facility.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-slate-400">
                    {facility.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {facility.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRINCIPAL'S MESSAGE */}
      <section className="bg-slate-950 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative lg:col-span-5">
              <div className="absolute -left-3 -top-3 h-28 w-28 rounded-tl-3xl border-l-2 border-t-2 border-green-500 sm:-left-5 sm:-top-5" />

              <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:min-h-[430px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]" />

                <div className="relative text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-green-400/40 bg-green-400/10 text-5xl text-green-300">
                    <FaGraduationCap />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    অধ্যক্ষের বাণী
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Message from the Principal
                  </p>

                  <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-green-500" />

                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    শিক্ষা, সততা ও নিষ্ঠার পথে এগিয়ে চলাই আমাদের প্রত্যয়।
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <FaQuoteLeft className="text-4xl text-green-400/80" />

              <span className="mt-6 block text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                Principal's Message
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                প্রতিটি শিক্ষার্থীর
                <span className="mt-2 block text-green-400">
                  সম্ভাবনাই আমাদের প্রেরণা।
                </span>
              </h2>

              <p className="mt-7 text-base leading-8 text-slate-300">
                প্রিয় শিক্ষার্থীরা, শিক্ষা তোমাদের স্বপ্ন পূরণের অন্যতম
                শক্তিশালী মাধ্যম। জ্ঞান অর্জনের পাশাপাশি সততা, শৃঙ্খলা,
                অধ্যবসায় ও মানবিক মূল্যবোধকে জীবনের অংশ করে তুলতে হবে।
              </p>

              <p className="mt-4 text-base leading-8 text-slate-300">
                আমরা এমন একটি শিক্ষার পরিবেশ গড়ে তুলতে চাই, যেখানে তোমরা
                নিজেদের প্রতিভা বিকশিত করতে পারবে এবং ভবিষ্যতের চ্যালেঞ্জ
                মোকাবিলায় প্রস্তুত হবে। তোমাদের সাফল্যই আমাদের প্রতিষ্ঠানের
                সবচেয়ে বড় অর্জন।
              </p>

              <div className="mt-8 border-l-2 border-green-500 pl-5">
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
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-green-700 px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border-[45px] border-white/5" />
          <div className="absolute -bottom-28 right-1/3 h-64 w-64 rounded-full bg-green-500/30 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl text-white">
                <FaAward />
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-green-200">
                Scholarship & Student Support
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                মেধা ও সম্ভাবনার বিকাশে
                <span className="mt-2 block text-green-200">
                  শিক্ষার্থীদের পাশে
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-green-50">
                মেধাবী ও যোগ্য শিক্ষার্থীদের উৎসাহিত করা এবং শিক্ষার সুযোগ
                সম্প্রসারণে বৃত্তি ও সহায়তামূলক উদ্যোগ গুরুত্বপূর্ণ ভূমিকা
                রাখতে পারে।
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <div className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-green-800 shadow-lg">
                <FaLightbulb className="text-xl" />
                স্বপ্ন দেখুন, এগিয়ে যান
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section id="departments" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Academic Departments
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
              আমাদের বিভাগসমূহ
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              শিক্ষার্থীদের আগ্রহ, যোগ্যতা ও ভবিষ্যৎ পরিকল্পনার ভিত্তি গড়ে
              তুলতে বিভিন্ন শিক্ষাধারায় জ্ঞান অর্জনের সুযোগ।
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => {
              const Icon = department.icon;

              return (
                <article
                  key={department.number}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl sm:p-8"
                >
                  <div className="absolute right-5 top-4 text-5xl font-black text-slate-100 transition group-hover:text-green-50">
                    {department.number}
                  </div>

                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-2xl text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
                      <Icon />
                    </div>

                    <h3 className="mt-7 text-xl font-bold text-slate-900">
                      {department.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-green-700">
                      {department.subtitle}
                    </p>

                    <p className="mt-4 min-h-14 text-sm leading-7 text-slate-600">
                      {department.description}
                    </p>

                    <div className="mt-6 h-1 w-12 rounded-full bg-green-600 transition-all duration-300 group-hover:w-20" />
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm leading-7 text-slate-500">
            দ্রষ্টব্য: বিভাগগুলোর নাম উদাহরণ হিসেবে দেওয়া হয়েছে। আপনার কলেজের
            প্রকৃত বিভাগ অনুযায়ী পরিবর্তন করুন।
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-700">
            <FaGraduationCap />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            গড়ে তুলি আগামীর সম্ভাবনা
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            জ্ঞান অর্জন, দক্ষতা বিকাশ ও স্বপ্নপূরণের পথে আমাদের শিক্ষাপরিবারের
            সঙ্গে এগিয়ে চলুন।
          </p>

          <a
            href="#college-introduction"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-green-700 px-7 py-4 font-bold text-white transition hover:bg-green-800"
          >
            আমাদের সম্পর্কে আরও জানুন
            <FaArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
