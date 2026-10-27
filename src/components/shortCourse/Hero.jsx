import {
  FaArrowRight,
  FaCircleCheck,
  FaGraduationCap,
  FaLaptop,
  FaRegClock,
} from "react-icons/fa6";
import Btn from "../UI/Btn";

const heroSkills = [
  "Microsof Word and Excel খুঁটিনাটি",
  "প্রফেশনাল প্রেজেন্টেশন তৈরির কলাকৌশল (PowerPoint)",
  "ইন্টারনেট ও আধুনিক অফিস ম্যানেজমেন্ট",
];

const trustIndicators = [
  "হাতে-কলমে প্রশিক্ষণ",
  "৩ ও ৬ মাস মেয়াদি কোর্স",
  "ব্যবহারিক দক্ষতা উন্নয়ন",
];

const courseCards = [
  {
    icon: FaRegClock,
    iconClassName: "text-2xl text-blue-600",
    description: "স্বল্পমেয়াদি প্রশিক্ষণ",
    title: "৩ মাসের কোর্স",
  },
  {
    icon: FaLaptop,
    iconClassName: "text-2xl text-violet-600",
    description: "বিস্তারিত প্রশিক্ষণ",
    title: "৬ মাসের কোর্স",
  },
];

const ShortCourseHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#1a5964] ">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=85"
          alt="কম্পিউটার ও প্রযুক্তিনির্ভর কর্মপরিবেশ"
          className="h-full w-full object-cover opacity-20"
        />

        <div
          className="absolute inset-0 bg-linear-to-r 
           via-[#0d3a42] to-[#0c2428]/80"
        />
      </div>

      <div
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full
           bg-[#224248]/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div className="relative">
          {/* Course Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#44A1A4]/50 bg-[#44A1A4]/10 px-4 py-2 text-sm font-bold text-[#7ED4D2] shadow-sm">
            <FaGraduationCap className="text-lg" />
            <span>ক্যারিয়ার গড়ার সঠিক পদক্ষেপ</span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-6 max-w-3xl text-3xl leading-14 font-black tracking-tight text-white sm:text-4xl md:text-5xl ">
            ক্যারিয়ারে এগিয়ে থাকতে, <br />
            <span className=" text-[#44A1A4]">দক্ষতা অর্জন করুন</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm md:text-base leading-6 text-white">
            আধুনিক কর্মক্ষেত্রে সফল হতে প্রয়োজন বাস্তবমুখী কম্পিউটার দক্ষতা।
            অফিসের সকল আধুনিক দাপ্তরিক কাজ এখন আপনার হাতের মুঠোয়। আমাদের ৩ ও ৬
            মাস মেয়াদি কম্পিউটার অফিস অ্যাপ্লিকেশন কোর্সে শিখবেন—
          </p>

          {/* Skills List */}
          <div className="ml-6 mt-5 ">
            <ul className="">
              {heroSkills.map((skill) => (
                <li key={skill} className="flex items-start gap-3">
                  <FaCircleCheck className="mt-1 shrink-0 text-[#ff9a00]" />
                  <span className="text-sm leading-6 text-white sm:text-base">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Supporting Text */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            নিজের দক্ষতাকে শাণিত করুন, আত্মবিশ্বাস বাড়ান এবং আপনার স্বপ্নের
            ক্যারিয়ার গড়ার পথ সুগম করুন।
          </p>

          {/* CTA Buttons */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Btn text="কোর্সগুলো দেখুন" link="#courses" />

            <a
              href="#admission"
              className="group inline-flex  items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2 font-bold text-white transition-all duration-300 hover:border-[#44A1A4]/60 hover:bg-[#44A1A4]/10"
            >
              ভর্তি সম্পর্কে জানুন
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-300">
            {trustIndicators.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <FaCircleCheck className="shrink-0 text-[#44A1A4]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* HERO IMAGE CARD */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-lg border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"
              alt="কম্পিউটার ও ডিজিটাল দক্ষতা শেখার পরিবেশ"
              className="h-64 w-full rounded-lg object-cover sm:h-80 lg:h-[390px]"
              loading="eager"
            />

            <div className="grid grid-cols-2 gap-3 pt-3">
              {courseCards.map((course) => {
                const CourseIcon = course.icon;

                return (
                  <div
                    key={course.title}
                    className="rounded-lg bg-white p-4 sm:p-5"
                  >
                    <CourseIcon className={course.iconClassName} />

                    <p className="mt-3 text-xs text-slate-500">
                      {course.description}
                    </p>

                    <p className="mt-1 font-extrabold text-slate-900">
                      {course.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortCourseHero;
