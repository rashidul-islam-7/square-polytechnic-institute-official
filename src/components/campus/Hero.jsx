import HeroSlider from "../HomePageComponents.jsx/HomeSlider";

export const campusHeroData = {
  badge: "ক্যাম্পাস পরিচিতি • Campus Experience",

  title: "শিক্ষার জন্য",

  highlightedTitle: "আধুনিক ও প্রাণবন্ত ক্যাম্পাস",

  description:
    "শিক্ষার্থীদের জ্ঞান অর্জন, ব্যবহারিক দক্ষতা বিকাশ এবং সৃজনশীলতা প্রকাশের জন্য স্কয়ার পলিটেকনিক ইন্সটিটিউটে রয়েছে সুন্দর, নিরাপদ ও শিক্ষাবান্ধব ক্যাম্পাস পরিবেশ।",

  slides: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1920&q=80",
      alt: "Modern educational campus",
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80",
      alt: "Educational campus building",
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80",
      alt: "Students on campus",
    },

    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80",
      alt: "Modern learning environment",
    },
  ],

  primaryButton: {
    text: "ক্যাম্পাস সুবিধাসমূহ",
    href: "#facilities",
  },

  secondaryButton: {
    text: "গ্যালারি দেখুন",
    href: "#gallery",
  },
};

const CampusHero = () => {
  return (
    <>
      <HeroSlider {...campusHeroData} />
    </>
  );
};

export default CampusHero;
