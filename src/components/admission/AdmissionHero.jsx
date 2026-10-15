import { FaChevronCircleRight } from "react-icons/fa";
import Btn from "../UI/Btn";
import SectionTopSubTitle from "../UI/SectionTopSubTitle";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBookOpen,
  FaCheck,
  FaChevronDown,
  FaClipboardCheck,
  FaClock,
  FaFileAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaPhone,
  FaRegCalendarCheck,
  FaRegCircleCheck,
  FaRegFileLines,
  FaShieldHalved,
  FaUserGraduate,
  FaWrench,
} from "react-icons/fa6";
import CustomIcon from "../UI/CustomIcon";

const AdmissionHeroSection = () => {
  return (
    <section className="relative isolate bg-[#071b36] text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <div
        className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 
      lg:grid-cols-[1.05fr_0.95fr] lg:py-20"
      >
        <div>
          <SectionTopSubTitle text={"Build Your Future "} />
          <h1
            className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl 
            lg:text-5xl"
          >
            <span className="text-white"> তোমার স্বপ্ন, তোমার </span>
            <span className="mt-2 block text-[#44a1a4] ">
              শুরু হোক তোমার স্বপ্নের পথচলা।
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 ">
            দক্ষতা অর্জন, প্রযুক্তিনির্ভর শিক্ষা এবং বাস্তব অভিজ্ঞতার মাধ্যমে
            গড়ে তোলো তোমার আগামী দিনের ক্যারিয়ার। তোমার পছন্দের টেকনোলজি বেছে
            নাও এবং এগিয়ে যাও স্বপ্নপূরণের পথে।
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Btn text={"Apply Now"} link="#admission-form" />
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <FaChevronCircleRight className="text-cyan-300" />
              ক্যারিয়ারমুখী শিক্ষা
            </span>
            <span className="flex items-center gap-2">
              <FaChevronCircleRight className="text-cyan-300" />
              ব্যবহারিক প্রশিক্ষণ
            </span>
          </div>
        </div>

        {/* Hero information card */}

        {/* Admission Required Documents Card */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-2xl" />

          <div
            className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] 
          p-5 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-cyan-200">
                  ADMISSION REQUIREMENTS
                </p>

                <h2 className="mt-3 text-2xl font-extrabold sm:text-2xl">
                  ভর্তির জন্য প্রয়োজনীয় কাগজপত্র
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  ভর্তি হওয়ার আগে প্রয়োজনীয় কাগজপত্রগুলো প্রস্তুত রাখুন।
                </p>
              </div>

              <CustomIcon icon={FaRegFileLines} />
            </div>

            <div className="my-6 h-px bg-white/5" />

            <div className="space-y-3">
              {[
                "SSC / সমমান পরীক্ষার মূল নম্বরপত্র।",
                "প্রশংসাপত্র মূল কপি।",
                "শিক্ষার্থীর সাম্প্রতিক পাসপোর্ট সাইজের ৪ কপি ছবি।",
                "শিক্ষার্থীর জন্মনিবন্ধন কপি।",
                "শিক্ষার্থীর পিতা-মাতার জাতীয় পরিচয়পত্রের কপি।",
              ].map((document, index) => (
                <div key={document} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-sm text-emerald-300">
                    <FaCheck />
                  </div>

                  <p className="text-sm leading-6 text-slate-200">{document}</p>
                </div>
              ))}
            </div>

            <a
              href="#admission-form"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl
               bg-white px-5 py-4 font-bold text-[#071b36] transition hover:bg-gray-300"
            >
              আবেদন ফর্ম পূরণ করুন
              <FaArrowRight />
            </a>

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              চূড়ান্ত কাগজপত্রের তালিকা প্রতিষ্ঠানের ভর্তি বিজ্ঞপ্তি থেকে যাচাই
              করুন।
            </p>
          </div>
        </div>
      </div>

      <div className="h-1 bg-linear-to-r from-blue-500 via-cyan-300 to-emerald-400" />
    </section>
  );
};

export default AdmissionHeroSection;
