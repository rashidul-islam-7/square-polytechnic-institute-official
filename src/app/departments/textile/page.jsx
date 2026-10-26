import DepartmentHeroSection from "../../../components/department/Hero";
import DiplomaGlance from "@/components/department/DiplomaGlance";
import DepartmentOverview from "@/components/department/DepartmentOverview";
import LabsSection from "@/components/department/Lab";
import WhyChoose from "@/components/department/WhyChoose";
import CareerSection from "@/components/department/CareerSection";
import HigherStudy from "@/components/department/HigherStudy";
import Curriculum from "@/components/department/Curriculum";
import ReviewSectionHeader from "@/components/Shared/Review/ReviewSectionHeader";
import OneSlider from "@/components/Shared/Slider/OneSlider";
import { studentsFeedback } from "@/data/feedbackData/studentsFeedback";
import { filterStudentsByDepartment } from "@/utils/filterStudentsComment";
import Faq from "@/components/department/Faq";
import Action from "@/components/department/Action";
import {
  higherStudy,
  whyChooseData,
  labImages,
  department,
  faqData,
  curriculum,
  departmentOverviewData,
  careerData,
} from "@/data/textileData";

// SEO Metadata Configuration
export const metadata = {
  metadataBase: new URL("https://square.edu.bd"),

  title: {
    default: "Diploma in Textile Engineering | Square Polytechnic Institute",
    template: "%s | Square Polytechnic Institute",
  },

  description:
    "Explore the Diploma in Textile Engineering at Square Polytechnic Institute, Punnatola Mor, College Road, Sherpur, Bogura, Bangladesh. Learn about yarn manufacturing, fabric structure, wet processing, garments production, textile testing labs, and career opportunities. স্কয়ার পলিটেকনিক ইনস্টিটিউট, পুন্নাতলা মোড়, কলেজ রোড, শেরপুর, বগুড়ায় টেক্সটাইল ইঞ্জিনিয়ারিংয়ে ডিপ্লোমা, ব্যবহারিক শিক্ষা, টেক্সটাইল ল্যাব ও ক্যারিয়ারের সুযোগ সম্পর্কে জানুন।",

  applicationName: "Square Polytechnic Institute",

  keywords: [
    // English keywords
    "Square Polytechnic Institute",
    "Square Polytechnic Institute Bogura",
    "Square Polytechnic Institute Sherpur",
    "Polytechnic Institute in Bogura",
    "Polytechnic Institute in Sherpur",
    "Textile Department",
    "Textile Technology",
    "Textile Engineering",
    "Diploma in Textile Engineering",
    "Diploma in Textile Technology",
    "Textile Engineering Diploma Bangladesh",
    "Textile Polytechnic",
    "Yarn Manufacturing",
    "Fabric Manufacturing",
    "Wet Processing Technology",
    "Dyeing and Printing",
    "Garments Merchandising",
    "Textile Testing and Quality Control",
    "Textile Laboratory",
    "Textile Engineering Career Opportunities",
    "Textile Engineering Curriculum",

    // Bangla keywords
    "স্কয়ার পলিটেকনিক ইনস্টিটিউট",
    "স্কয়ার পলিটেকনিক ইনস্টিটিউট বগুড়া",
    "স্কয়ার পলিটেকনিক ইনস্টিটিউট শেরপুর",
    "বগুড়া পলিটেকনিক ইনস্টিটিউট",
    "শেরপুর বগুড়া পলিটেকনিক",
    "টেক্সটাইল বিভাগ",
    "টেক্সটাইল টেকনোলজি",
    "টেক্সটাইল ইঞ্জিনিয়ারিং",
    "ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং",
    "টেক্সটাইল ইঞ্জিনিয়ারিং ডিপ্লোমা",
    "ইয়ার্ন ম্যানুফ্যাকচারিং",
    "ফেব্রিক ম্যানুফ্যাকচারিং",
    "ডাইং ও প্রিন্টিং",
    "গার্মেন্টস মার্চেন্ডাইজিং",
    "টেক্সটাইল ল্যাব",
    "টেক্সটাইল ইঞ্জিনিয়ারিং ক্যারিয়ার",
    "টেক্সটাইল কোয়ালিটি কন্ট্রোল",
  ],

  authors: [
    {
      name: "Square Polytechnic Institute",
    },
  ],

  creator: "Square Polytechnic Institute",
  publisher: "Square Polytechnic Institute",
  category: "Education",

  alternates: {
    canonical: "https://square.edu.bd/departments/textile",
  },

  openGraph: {
    title: "Textile Engineering Department | Square Polytechnic Institute",
    description:
      "Discover the Diploma in Textile Engineering program at Square Polytechnic Institute, Bogura. Explore yarn production, fabric manufacturing, wet processing, practical labs, and career opportunities.",
    siteName: "Square Polytechnic Institute",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    type: "website",
    url: "https://square.edu.bd/departments/textile",
    images: [
      {
        url: "/images/textile-department-og.jpg",
        width: 1200,
        height: 630,
        alt: "Textile Engineering Department at Square Polytechnic Institute, Bogura",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diploma in Textile Engineering | Square Polytechnic Institute",
    description:
      "Explore textile technology education, yarn and fabric manufacturing, dyeing laboratories, and career opportunities at Square Polytechnic Institute, Bogura.",
    images: ["/images/textile-department-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function TextilePage() {
  const textileStudentReview = filterStudentsByDepartment(
    studentsFeedback,
    "Textile",
  );

  // Schema.org Course Structured Data for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Diploma in Textile Engineering",
    description:
      "4-Year Diploma program covering yarn manufacturing, fabric structure, wet processing, dyeing, garments production, and practical testing labs.",
    provider: {
      "@type": "EducationalOrganization",
      name: "Square Polytechnic Institute",
      sameAs: "https://square.edu.bd",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Punnatola Mor, College Road",
        addressLocality: "Sherpur",
        addressRegion: "Bogura",
        addressCountry: "BD",
      },
    },
  };

  return (
    <main className="bg-white text-slate-800">
      {/* Google Rich Snippets / Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO / DEPARTMENT OVERVIEW */}
      <DepartmentHeroSection department={department} />

      {/* AT A GLANCE */}
      <DiplomaGlance focus={"Textile Technology"} />
      <DepartmentOverview departmentOverviewData={departmentOverviewData} />

      {/* LABS & PRACTICAL FACILITIES*/}
      <LabsSection
        labImages={labImages}
        lab={
          "https://ayinfotechgh.com/wp-content/uploads/2019/10/AY-Infotechgh-Computer-lab.jpg"
        }
        alt={"textile lab"}
      />

      {/* WHY CHOOSE THIS DEPARTMENT */}
      <WhyChoose data={whyChooseData} />

      {/* CAREER & INDUSTRY */}
      <CareerSection careerData={careerData} />

      {/* HIGHER STUDY & ENTREPRENEURSHIP */}
      <HigherStudy higherStudy={higherStudy} />

      {/* CURRICULUM */}
      <Curriculum curriculum={curriculum} />

      {/* CTA */}
      <Action />

      {/* ALUMNI SUCCESS STORIES */}
      <div className="py-16 md:py-20">
        <ReviewSectionHeader />
        <OneSlider reviewsContent={textileStudentReview} />
      </div>

      {/* FAQ */}
      <Faq faq={faqData} />
    </main>
  );
}
