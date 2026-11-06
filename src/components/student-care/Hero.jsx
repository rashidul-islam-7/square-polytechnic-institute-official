import { FaHandsHelping } from "react-icons/fa";
import Btn from "../UI/Btn";
import Btn2 from "../UI/Btn2";

export default function StudentCareHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#224248]">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/videos/student_care.mp4" type="video/mp4" />
      </video>
      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#224248]/70" />

      {/* Hero Content */}
      <div className="mx-auto flex min-h-screen max-w-3xl items-center px-5 py-24 sm:px-8 lg:px-14">
        <div className="relative z-10 max-w-3xl">
          {/* Badge */}
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full border 
            border-white/20 bg-white/10 px-4 py-0.5 text-sm text-white backdrop-blur-sm"
          >
            <FaHandsHelping className="text-[#44A1A4]" />
            <span className="font-medium mt-1">Student Care & Support</span>
          </div>

          <div className="max-w-2xl border-l-3 border-[#d7f1f123] pl-4">
            {/* Heading */}
            <h1 className="text-4xl font-extrabold text-white md:text-5xl ">
              We Care About
              <span className="mt-2 block text-[#44A1A4]">Your Future.</span>
            </h1>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-white/80 md:text-base">
              শিক্ষার্থীদের শিক্ষা, দক্ষতা ও ব্যক্তিগত উন্নয়নে প্রয়োজনীয়
              সহযোগিতা এবং দিকনির্দেশনা দিতে আমরা সবসময় পাশে আছি।
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Btn
              text="Explore Student Services"
              link="#student-services "
              className="py-3"
            />
            <Btn2 text="Student Resources" link="#resources" className="py-3" />
          </div>

          {/* Bottom Highlights */}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-white/20 pt-7">
            <div>
              <p className="text-2xl font-bold text-white">Learn</p>
              <p className="mt-1 text-xs text-white/60">Build knowledge</p>
            </div>

            <div className="h-10 w-px bg-white/20" />

            <div>
              <p className="text-2xl font-bold text-white">Grow</p>
              <p className="mt-1 text-xs text-white/60">Develop skills</p>
            </div>

            <div className="h-10 w-px bg-white/20" />

            <div>
              <p className="text-2xl font-bold text-white">Succeed</p>
              <p className="mt-1 text-xs text-white/60">Build your future</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
