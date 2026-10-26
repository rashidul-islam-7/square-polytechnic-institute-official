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
} from "@/data/civilData";

// SEO Meta Data Configuration
export const metadata = {
  metadataBase: new URL("https://square.edu.bd"),

  title: {
    default: "Diploma in Civil Engineering | Square Polytechnic Institute",
    template: "%s | Square Polytechnic Institute",
  },

  description:
    "Explore the Diploma in Civil Engineering at Square Polytechnic Institute, Punnatola Mor, College Road, Sherpur, Bogura, Bangladesh. Learn about construction technology, surveying, structural design, practical labs, and career opportunities. স্কয়ার পলিটেকনিক ইনস্টিটিউট, পুন্নাতলা মোড়, কলেজ রোড, শেরপুর, বগুড়ায় সিভিল ইঞ্জিনিয়ারিংয়ে ডিপ্লোমা, ব্যবহারিক শিক্ষা ও ক্যারিয়ারের সুযোগ সম্পর্কে জানুন।",

  applicationName: "Square Polytechnic Institute",

  keywords: [
    // English keywords
    "Square Polytechnic Institute",
    "Square Polytechnic Institute Bogura",
    "Square Polytechnic Institute Sherpur",
    "Polytechnic Institute in Bogura",
    "Polytechnic Institute in Sherpur",
    "Civil Engineering",
    "Diploma in Civil Engineering",
    "Diploma Civil Engineering Bangladesh",
    "Civil Engineering Department",
    "Civil Engineering Diploma Course",
    "Civil Engineering Polytechnic",
    "Civil Engineering Technology",
    "Construction Engineering",
    "Structural Engineering",
    "Surveying and Mapping",
    "Building Construction",
    "Construction Management",
    "Civil Engineering Laboratory",
    "Civil Engineering Career Opportunities",
    "Road and Bridge Construction",
    "AutoCAD Civil Engineering",

    // Bangla keywords
    "স্কয়ার পলিটেকনিক ইনস্টিটিউট",
    "স্কয়ার পলিটেকনিক ইনস্টিটিউট বগুড়া",
    "স্কয়ার পলিটেকনিক ইনস্টিটিউট শেরপুর",
    "বগুড়া পলিটেকনিক ইনস্টিটিউট",
    "শেরপুর বগুড়া পলিটেকনিক",
    "সিভিল ইঞ্জিনিয়ারিং",
    "ডিপ্লোমা ইন সিভিল ইঞ্জিনিয়ারিং",
    "সিভিল ইঞ্জিনিয়ারিং বিভাগ",
    "নির্মাণ প্রযুক্তি",
    "ভবন নির্মাণ",
    "জরিপ ও সার্ভেয়িং",
    "স্ট্রাকচারাল ডিজাইন",
    "সিভিল ইঞ্জিনিয়ারিং ক্যারিয়ার",
    "সড়ক ও সেতু নির্মাণ",
    "সিভিল ইঞ্জিনিয়ারিং ল্যাব",
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
    canonical: "https://square.edu.bd/departments/civil",
  },

  openGraph: {
    title: "Civil Engineering Department | Square Polytechnic Institute",
    description:
      "Study Civil Engineering at Square Polytechnic Institute, Sherpur, Bogura. Explore construction technology, surveying, practical lab facilities, and future career opportunities.",
    url: "https://square.edu.bd/departments/civil",
    siteName: "Square Polytechnic Institute",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    type: "website",
    images: [
      {
        url: "/images/civil-engineering-og.jpg",
        width: 1200,
        height: 630,
        alt: "Civil Engineering Department at Square Polytechnic Institute, Bogura",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diploma in Civil Engineering | Square Polytechnic Institute",
    description:
      "Explore Civil Engineering education, practical training, curriculum, and career opportunities at Square Polytechnic Institute, Bogura.",
    images: ["/images/civil-engineering-og.jpg"],
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

export default function CivilPage() {
  const civilStudentReview = filterStudentsByDepartment(
    studentsFeedback,
    "Civil",
  );

  // Schema.org Course Structured Data for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Diploma in Civil Engineering",
    description:
      "4-Year Diploma program covering construction technology, structural design, surveying, and building construction.",
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
      <DiplomaGlance focus={"Information & Technology"} />
      <DepartmentOverview departmentOverviewData={departmentOverviewData} />

      {/* LABS & PRACTICAL FACILITIES*/}
      <LabsSection
        labImages={labImages}
        lab={
          "https://ayinfotechgh.com/wp-content/uploads/2019/10/AY-Infotechgh-Computer-lab.jpg"
        }
        alt={"civil lab"}
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
        <OneSlider reviewsContent={civilStudentReview} />
      </div>

      {/* FAQ */}
      <Faq faq={faqData} />
    </main>
  );
}
