import {
  FaBriefcase,
  FaLaptop,
  FaRegLightbulb,
  FaStar,
  FaUsers,
} from "react-icons/fa6";
import SectionTopSubTitle from "../UI/SectionTopSubTitle";
import TitleStyle from "../UI/TitleStyle";
import CustomIcon from "../UI/CustomIcon";

const benefits = [
  {
    icon: FaLaptop,
    title: "ব্যবহারিক প্রশিক্ষণ",
    description: "কম্পিউটারে কাজ করার মাধ্যমে শেখা ও নিয়মিত অনুশীলনের সুযোগ।",
  },
  {
    icon: FaRegLightbulb,
    title: "দক্ষতা উন্নয়ন",
    description:
      "দৈনন্দিন কম্পিউটার ও অফিস অ্যাপ্লিকেশন ব্যবহারের দক্ষতা গড়ে তুলুন।",
  },
  {
    icon: FaBriefcase,
    title: "কর্মজীবনের প্রস্তুতি",
    description:
      "অফিসের সাধারণ কাজের জন্য প্রয়োজনীয় কম্পিউটার দক্ষতা অর্জন করুন।",
  },
  {
    icon: FaUsers,
    title: "শিক্ষার্থীবান্ধব পরিবেশ",
    description:
      "শুরু থেকে শেখার উপযোগী প্রশিক্ষণ পরিবেশে নিজের দক্ষতা বাড়ান।",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="flex justify-center flex-col items-center mb-10 text-center">
          <SectionTopSubTitle text="Learning Benefits" icon={FaStar} />

          <TitleStyle
            title="শেখার প্রতিটি ধাপে"
            highlightedTitle="নিখুত দক্ষতার সনিবেশ"
          />

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            মৌলিক কম্পিউটার ব্যবহার থেকে শুরু করে অফিস অ্যাপ্লিকেশনের ব্যবহারিক
            কাজে নিজেকে সবার থেকে একধাপ এগিয়ে রাখুন।
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="rounded-lg border border-slate-100 bg-white p-6 transition duration-300 hover:border-blue-200 shadow-lg"
              >
                <CustomIcon icon={benefit.icon} className="p-1" size={20} />

                <h3 className="mt-5 font-extrabold text-black">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
