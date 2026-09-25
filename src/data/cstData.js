import {
  FaLaptopCode,
  FaBrain,
  FaNetworkWired,
  FaRocket,
} from "react-icons/fa6";

export const careerData = {
  sectionLabel: "Career & Job Opportunities",

  title: "ক্যারিয়ার ও",
  highlightedTitle: "চাকরির সুযোগ",

  description: (
    <>
      বর্তমান সময়ে কম্পিউটার ও তথ্যপ্রযুক্তি ছাড়া কোনো প্রতিষ্ঠানই কার্যকরভাবে
      পরিচালনা করা প্রায় অসম্ভব। শিক্ষা প্রতিষ্ঠান, ব্যাংক, হাসপাতাল,
      সরকারি-বেসরকারি অফিস, ব্যবসা প্রতিষ্ঠান, শিল্প-কারখানা থেকে শুরু করে
      অনলাইনভিত্তিক বিভিন্ন সেবায় কম্পিউটার প্রযুক্তির ব্যবহার প্রতিনিয়ত বাড়ছে।
      তাই প্রায় প্রতিটি প্রতিষ্ঠানেই প্রয়োজন হচ্ছে দক্ষ Computer & IT
      Professional।
      <br />
      <br />
      কম্পিউটার প্রযুক্তির একটি বড় সুবিধা হলো—দক্ষতা অর্জন করলে দেশে বা বিদেশে
      চাকরির পাশাপাশি ঘরে বসে Freelancing ও Remote Work-এর মাধ্যমে কাজ করার
      সুযোগও রয়েছে।
    </>
  ),

  highlight: (
    <>
      দক্ষতা অর্জনের মাধ্যমে Computer Technology হতে পারে{" "}
      <span className="font-semibold text-[#224248]">
        একটি বহুমুখী ক্যারিয়ারের ভিত্তি।
      </span>
    </>
  ),

  careers: [
    {
      id: 1,
      title: "ডেভেলপমেন্ট ও ডিজাইন",
      icon: FaLaptopCode,
      items: [
        "Web & Software Development",
        "UI/UX & Web Design",
        "Data & Analytics",
      ],
    },
    {
      id: 2,
      title: "অ্যাডভান্সড টেকনোলজি",
      icon: FaBrain,
      items: ["AI & Machine Learning", "Cyber Security", "Cloud & DevOps"],
    },
    {
      id: 3,
      title: "নেটওয়ার্ক ও সিস্টেম",
      icon: FaNetworkWired,
      items: [
        "Networking & IT Support",
        "Database Management",
        "Server Management",
      ],
    },
    {
      id: 4,
      title: "চাকরি, ফ্রিল্যান্সিং ও উদ্যোক্তা",
      icon: FaRocket,
      items: [
        "Government & Private IT Jobs",
        "Freelancing & Remote Work",
        "IT Entrepreneurship",
      ],
    },
  ],

  workAreas: {
    label: "Work Areas",

    title: "কোথায় কাজের সুযোগ রয়েছে?",

    description:
  "সহজভাবে এক কথায় বলতে গেলে—বর্তমানে প্রায় প্রতিটি প্রতিষ্ঠানেই কম্পিউটার ও IT ব্যবহারে দক্ষ জনবলের প্রয়োজন রয়েছে। প্রযুক্তির ব্যবহার বাড়ার সঙ্গে সঙ্গে এই দক্ষতার চাহিদা ও কর্মসংস্থানের সুযোগও ক্রমেই বৃদ্ধি পাচ্ছে।",

    areas: [
      "সরকারি প্রতিষ্ঠান",
      "বেসরকারি প্রতিষ্ঠান",
      "শিক্ষা প্রতিষ্ঠান",
      "ব্যাংক ও আর্থিক প্রতিষ্ঠান",
      "হাসপাতাল ও স্বাস্থ্যসেবা প্রতিষ্ঠান",
      "NGO",
      "শিল্প প্রতিষ্ঠান",
      "ব্যবসা প্রতিষ্ঠান",
      "IT Company",
      "Software Company",
      "Telecommunication",
      "E-commerce Company",
      "Freelancing",
      "Remote Work",
      "নিজস্ব IT Business",
    ],
  },

  specialNote: {
    title: "বিশেষ নোট",

    description:
      "প্রযুক্তি প্রতিনিয়ত পরিবর্তিত হচ্ছে। তাই Computer Technology-তে ক্যারিয়ার গড়তে হলে নতুন প্রযুক্তি শেখা, নিয়মিত অনুশীলন এবং নিজেকে আপডেট রাখার মানসিকতা থাকতে হবে। সময়ের সঙ্গে নতুন প্রযুক্তি না শিখলে দক্ষতা ও কর্মক্ষেত্রে পিছিয়ে পড়ার সম্ভাবনা থাকে।",
  },
};
