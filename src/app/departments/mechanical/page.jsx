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
} from "@/data/mechanicalData";

// SEO Metadata Configuration
export const metadata = {
  metadataBase: new URL("https://square.edu.bd"),

  title: {
    default: "Diploma in Mechanical Technology | Square Polytechnic Institute",
    template: "%s | Square Polytechnic Institute",
  },

  description:
    "Explore the Diploma in Mechanical Technology at Square Polytechnic Institute, Punnatola Mor, College Road, Sherpur, Bogura, Bangladesh. Learn about thermodynamics, CAD/CAM, machine design, RAC, hydraulics, practical workshop facilities, and career opportunities. স্কয়ার পলিটেকনিক ইনস্টিটিউট, পুন্নাতলা মোড়, কলেজ রোড, শেরপুর, বগুড়ায় মেকানিক্যাল টেকনোলজিতে ডিপ্লোমা, ব্যবহারিক শিক্ষা, মেকানিক্যাল ওয়ার্কশপ ল্যাব ও ক্যারিয়ারের সুযোগ সম্পর্কে জানুন।",

  applicationName: "Square Polytechnic Institute",

  keywords: [
    // English keywords
    "Square Polytechnic Institute",
    "Square Polytechnic Institute Bogura",
    "Square Polytechnic Institute Sherpur",
    "Polytechnic Institute in Bogura",
    "Polytechnic Institute in Sherpur",
    "Mechanical Department",
    "Mechanical Technology",
    "Diploma in Mechanical Technology",
    "Diploma in Mechanical Engineering",
    "Mechanical Engineering Diploma Bangladesh",
    "Mechanical Technology Polytechnic",
    "Mechanical Engineering Course",
    "Thermodynamics and Heat Engines",
    "CAD CAM Design",
    "Machine Shop and Lathe Operations",
    "Hydraulics and Pneumatics",
    "Refrigeration and Air Conditioning RAC",
    "Mechanical Workshop Laboratory",
    "Automobile Engineering Fundamentals",
    "Mechanical Engineering Career Opportunities",
    "Mechanical Engineering Curriculum",

    // Bangla keywords
    "স্কয়ার পলিটেকনিক ইনস্টিটিউট",
    "স্কয়ার পলিটেকনিক ইনস্টিটিউট বগুড়া",
    "স্কয়ার পলিটেকনিক ইনস্টিটিউট শেরপুর",
    "বগুড়া পলিটেকনিক ইনস্টিটিউট",
    "শেরপুর বগুড়া পলিটেকনিক",
    "মেকানিক্যাল বিভাগ",
    "মেকানিক্যাল টেকনোলজি",
    "ডিপ্লোমা ইন মেকানিক্যাল টেকনোলজি",
    "ডিপ্লোমা ইন মেকানিক্যাল ইঞ্জিনিয়ারিং",
    "মেকানিক্যাল ইঞ্জিনিয়ারিং ডিপ্লোমা",
    "মেকানিক্যাল ওয়ার্কশপ",
    "মেশিন শপ ও লেথ অপারেশন",
    "অটোমোবাইল ইঞ্জিনিয়ারিং",
    "হাইড্রোলিক্স ও নিউমেটিক্স",
    "মেকানিক্যাল ল্যাব",
    "মেকানিক্যাল টেকনোলজি ক্যারিয়ার",
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
    canonical: "https://square.edu.bd/departments/mechanical",
  },

  openGraph: {
    title: "Mechanical Technology Department | Square Polytechnic Institute",
    description:
      "Discover the Diploma in Mechanical Technology program at Square Polytechnic Institute, Bogura. Explore machine design, thermodynamics, practical workshop training, and career opportunities.",
    siteName: "Square Polytechnic Institute",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    type: "website",
    url: "https://square.edu.bd/departments/mechanical",
    images: [
      {
        url: "/images/mechanical-department-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mechanical Technology Department at Square Polytechnic Institute, Bogura",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diploma in Mechanical Technology | Square Polytechnic Institute",
    description:
      "Explore mechanical technology education, machine workshop training, CAD/CAM, and career opportunities at Square Polytechnic Institute, Bogura.",
    images: ["/images/mechanical-department-og.jpg"],
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

export default function MechanicalPage() {
  const mechanicalStudentReview = filterStudentsByDepartment(
    studentsFeedback,
    "Mechanical",
  );

  // Schema.org Course Structured Data for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Diploma in Mechanical Technology",
    description:
      "4-Year Diploma program covering machine design, thermodynamics, CAD/CAM, hydraulics, RAC, and practical workshop training.",
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
      <DiplomaGlance focus={"Mechanical Technology"} />
      <DepartmentOverview departmentOverviewData={departmentOverviewData} />

      {/* LABS & PRACTICAL FACILITIES*/}
      <LabsSection
        labImages={labImages}
        lab={
          "https://ayinfotechgh.com/wp-content/uploads/2019/10/AY-Infotechgh-Computer-lab.jpg"
        }
        alt={"mechanical lab"}
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
        <OneSlider reviewsContent={mechanicalStudentReview} />
      </div>

      {/* FAQ */}
      <Faq faq={faqData} />
    </main>
  );
}
