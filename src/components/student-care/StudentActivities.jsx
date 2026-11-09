import {
  FaArrowRight,
  FaFutbol,
  FaMicrophone,
  FaMusic,
  FaUsers,
} from "react-icons/fa6";
import SectionTopSubTitle from "../UI/SectionTopSubTitle";
import TitleStyle from "../UI/TitleStyle";
import Link from "next/link";

const IMG = {
  academic:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=85",
  lecture:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&q=85",
  assignment:
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1000&q=85",
  career:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85",
  internship:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&q=85",
  placement:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=85",
  skill:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&q=85",
  sports:
    "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=1000&q=85",
  cultural:
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1000&q=85",
  club: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&q=85",
  seminar:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&q=85",
  tour: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=85",
  tourVideo:
    "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1000&q=85",
  hostel:
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=85",
};

const activities = [
  {
    icon: FaFutbol,
    title: "খেলাধুলা ও প্রতিযোগিতা",
    description: "খেলাধুলার মাধ্যমে শারীরিক সুস্থতা ও দলগত মনোভাব গড়ে তোলা।",
    image: IMG.sports,
    alt: "শিক্ষার্থীদের খেলাধুলা ও প্রতিযোগিতা",
  },
  {
    icon: FaMusic,
    title: "সাংস্কৃতিক অনুষ্ঠান ও উৎসব",
    description: "সাংস্কৃতিক অনুষ্ঠান ও বিভিন্ন উৎসবে অংশগ্রহণ।",
    image: IMG.cultural,
    alt: "সাংস্কৃতিক অনুষ্ঠান ও উৎসব",
  },
  {
    icon: FaUsers,
    title: "ক্লাব ও সহশিক্ষা কার্যক্রম",
    description:
      "ক্লাবভিত্তিক কার্যক্রমে অংশ নিয়ে নেতৃত্ব ও যোগাযোগ দক্ষতা বাড়ানো।",
    image: IMG.club,
    alt: "শিক্ষার্থীদের দলগত কার্যক্রম",
  },
  {
    icon: FaMicrophone,
    title: "বিতর্ক, কুইজ ও সেমিনার",
    description: "জ্ঞানচর্চা, যুক্তি উপস্থাপন ও নতুন বিষয় শেখার সুযোগ।",
    image: IMG.seminar,
    alt: "শিক্ষার্থীদের সেমিনার ও আলোচনা",
  },
];

const focusRing =
  "focus:outline-none focus-visible:ring-4 focus-visible:ring-[#44A1A4]/50 focus-visible:ring-offset-2";

const StudentActivities = () => {
  return (
    <section
      aria-labelledby="activities"
      className="bg-white px-5 sm:px-10 md:px-16 py-16 sm:py-20 "
    >
      <div className="max-w-7xl m-auto">
        <div>
          <div>
            <SectionTopSubTitle text="Campus Life" />

            <TitleStyle
              title="শ্রেণিকক্ষের বাইরেও "
              highlightedTitle=" শেখার সুযোগ"
            />

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              শিক্ষাজীবন শুধু ক্লাস ও পরীক্ষার মধ্যে সীমাবদ্ধ নয়। খেলাধুলা,
              সাংস্কৃতিক অনুষ্ঠান ও বিভিন্ন সহশিক্ষা কার্যক্রমে অংশ নিয়ে
              শিক্ষার্থীরা নিজেদের প্রতিভা বিকাশের সুযোগ পায়।
            </p>
          </div>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-10">
          {activities.map((item, index) => {
            const Icon = item.icon;

            return (
              <li key={item.title}>
                <Link
                  href="/gallery"
                  className={` relative flex aspect-[4/5] overflow-hidden rounded-lg bg-[#224248] ${focusRing}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover "
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#122a2e] via-[#122a2e]/45 to-transparent" />

                  <div className="relative mt-auto w-full p-6 text-white">
                    <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full text-white bg-[#2F7F82]/40">
                      <Icon size={18} />
                    </span>

                    <h3 className="text-xl font-bold leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-white/75">
                      {item.description}
                    </p>

                    {/* <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold">
                    বিস্তারিত দেখুন
                    <FaArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span> */}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default StudentActivities;
