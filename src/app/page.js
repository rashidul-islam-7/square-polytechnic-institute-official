export const metadata = {
  title: "Square Polytechnic",
  description:
    "Square Polytechnic Institute offers quality technical education, modern academic departments, practical learning, campus facilities, and career-focused programs in Bangladesh.স্কয়ার পলিটেকনিক ইন্সটিটিউটের নিজস্ব স্কলারশিপ সুবিধা সম্পর্কে জানুন। যোগ্য শিক্ষার্থীদের জন্য রয়েছে বিশেষ শিক্ষাবৃত্তির সুযোগ।",

  alternates: {
    canonical: "https://square.edu.bd",
  },

  openGraph: {
    title: "Square Polytechnic Institute | Official Website",
    description:
      "Build your future with quality technical education, modern technology, practical learning, and career opportunities at Square Polytechnic Institute.",
    url: "https://square.edu.bd",
    siteName: "Square Polytechnic Institute",
    locale: "bn_BD",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Square Polytechnic Institute",
    description:
      "Explore technical education, academic programs, campus facilities, and career opportunities.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

import React from "react";
import HeroSlider from "@/components/HomePageComponents.jsx/HomeSlider";
import CareerSection from "@/components/Shared/CareerSection";
import GallerySection from "@/components/Shared/GallerySection";
import HostelSection from "@/components/Shared/HostelSection";
import StudentReviews from "@/components/Shared/Review/StudentReviews";
import ScholarshipSection from "@/components/Shared/ScholarshipSection";
import HomePageMarquee from "@/components/UI/Marquee/HomePageMarquee";
import Departments from "@/components/Shared/Department";
import InstituteFeatureSection from "@/components/HomePageComponents.jsx/InstituteFeatureSection";

export const homeHeroData = {
  badge: "Build Your Burght Futute With AI Teechnology!",
  title: "স্বপ্ন হোক বাস্তব,",
  highlightedTitle: "ক্যারিয়ার হোক প্রযুক্তিনির্ভর",
  description:
    "সঠিক শিক্ষা, আধুনিক প্রযুক্তি ও বাস্তবমুখী শিক্ষার সমন্বয়ে তৈরি হোক আপনার আগামীর সম্ভাবনাময় ক্যারিয়ার।",

  slides: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
      alt: "Students",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80",
      alt: "Computer students",
    },
  ],

  primaryButton: {
    text: "Explore All Departments",
    href: "/departments/departmentPage",
  },

  secondaryButton: {
    text: "Admission",
    href: "/admission",
  },
};

export default function HomePage() {
  return (
    <div className="">
      <HeroSlider {...homeHeroData} />
      <HomePageMarquee />
      <Departments />
      <InstituteFeatureSection />
      <ScholarshipSection />
      <HostelSection />
      <GallerySection />
      <CareerSection />
      <StudentReviews />
    </div>
  );
}
