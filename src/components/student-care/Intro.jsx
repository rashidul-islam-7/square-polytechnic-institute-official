import { FaChalkboard, FaGraduationCap } from "react-icons/fa6";
import SectionTopSubTitle from "../UI/SectionTopSubTitle";
import TitleStyle from "../UI/TitleStyle";
import { FaChalkboardTeacher } from "react-icons/fa";

// Images
const images = {
  library:
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900&q=85",
  lab: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=85",
  students:
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1000&q=85",
};

export default function Introduction() {
  return (
    <section className="relative overflow-hidden bg-[#F2F9F8] px-5 py-16 sm:px-8 md:py-20 lg:px-14 ">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div>
          <SectionTopSubTitle
            text=" Welcome to Student Care"
            icon={FaGraduationCap}
          />
          <TitleStyle
            title="  শিক্ষাজীবন হোক আরও"
            highlightedTitle=" সুন্দর ও সম্ভাবনাময়"
          />

          <p className="mt-6 max-w-xl leading-7 text-gray-600 ">
            শিক্ষার্থীদের শিক্ষাজীবন কেবল শ্রেণি কক্ষ বা পরীক্ষার খাতার গণ্ডিতে
            সীমাবদ্ধ থাকে না। পড়ালেখার পাশাপাশি একজন শিক্ষার্থীর সঠিক সময়ে সঠিক
            দিকনির্দেশনা, স্কিল ডেভেলপমেন্টের সুযোগ, সহশিক্ষা কার্যক্রম
            (co-curricular activities) এবং একটি সঠিক গাইডের প্রয়োজন সবচেয়ে বেশি।
            <br /> <br />
            শিক্ষার্থীদের মেধা বিকাশ ও উজ্জ্বল ভবিষ্যৎ নিশ্চিত করতে প্রয়োজনীয়
            তথ্য ও সেবা সহজে পৌঁছে দেওয়াই আমাদের Student Care-এর মূল লক্ষ্য।
          </p>

          <p className="mt-4 max-w-xl  leading-7 text-gray-600">
            একাডেমিক সহায়তা থেকে শুরু করে ক্যারিয়ার প্রস্তুতি, দক্ষতা উন্নয়ন
            এবং শিক্ষার্থীদের বিভিন্ন কার্যক্রম—প্রয়োজনে সব সময় সব খানে।
          </p>

          <div className="mt-8 flex items-center gap-2">
            <span className="flex p-1 items-center justify-center rounded-full border border-[#1d928c]/30 bg-[#1d928c]/10 text-[#1d928c]">
              <FaChalkboardTeacher size={17} />
            </span>

            <span className="font-medium tracking-wide text-gray-600">
              শিক্ষার্থীর পাশে, শিক্ষাজীবনের প্রতিটি ধাপে!
            </span>
          </div>
        </div>

        {/* Image Collage */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="grid grid-cols-5 items-center gap-3 sm:gap-4">
            {/* Main Image */}
            <div className="relative col-span-3 overflow-hidden rounded-lg ">
              <img
                src={images.students}
                alt="শিক্ষার্থীরা একসঙ্গে শিক্ষামূলক কার্যক্রমে অংশ নিচ্ছে"
                loading="lazy"
                className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#224248]/30 to-transparent" />
            </div>

            {/* Side Images */}
            <div className="col-span-2 flex flex-col gap-3 sm:gap-4">
              <div className="overflow-hidden rounded-lg ">
                <img
                  src={images.library}
                  alt="কলেজ লাইব্রেরিতে শিক্ষার্থীদের পড়াশোনা"
                  loading="lazy"
                  className="h-[145px] w-full object-cover sm:h-[195px] lg:h-[218px]"
                />
              </div>

              <div className="overflow-hidden rounded-lg ">
                <img
                  src={images.lab}
                  alt="শিক্ষার্থীরা কম্পিউটার ল্যাবে ব্যবহারিক শিক্ষা নিচ্ছে"
                  loading="lazy"
                  className="h-[145px] w-full object-cover sm:h-[195px] lg:h-[218px]"
                />
              </div>
            </div>
          </div>
          {/* Decorative Shape */}
          <div className="pointer-events-none absolute -right-5 -top-5 -z-0 h-24 w-24 rounded-full border-[12px] border-[#44A1A4]/10 sm:-right-8 sm:-top-8 sm:h-32 sm:w-32" />
        </div>
      </div>
    </section>
  );
}
