import {
  FaGraduationCap,
  FaCertificate,
  FaGlobe,
  FaIndustry,
  FaMicrochip,
  FaRocket,
} from "react-icons/fa6";

import { FaCog  } from "react-icons/fa";
import { FaTools } from "react-icons/fa";



export const higherStudy = {
  sectionLabel: "Academic Pathways & Global Career",
  title: "ডিপ্লোমা পরবর্তী",
  highlightedTitle: "উচ্চশিক্ষা ও গ্লোবাল ক্যারিয়ার",
  description:
    "ডিপ্লোমা ইন মেকানিক্যাল টেকনোলজি সম্পন্ন করার পর একজন শিক্ষার্থীর সামনে উচ্চশিক্ষা, সরকারি-বেসরকারি চাকরি, শিল্প-কারখানা, manufacturing sector এবং দেশ-বিদেশে বিভিন্ন কারিগরি পেশায় কাজ করার সুযোগ তৈরি হয়। Mechanical Design, Manufacturing, Production, Automobile, HVAC, Industrial Maintenance এবং Mechatronics-এর মতো ক্ষেত্রে দক্ষতা অর্জনের মাধ্যমে ক্যারিয়ারকে আরও সমৃদ্ধ করা সম্ভব।",

  highlight:
    "মেকানিক্যাল টেকনোলজিতে শুধু সার্টিফিকেট নয়—প্র্যাকটিক্যাল স্কিল, Machine Operation, Maintenance, Technical Drawing, Safety এবং Troubleshooting-এর বাস্তব দক্ষতাই একজন দক্ষ Mechanical Professional তৈরির মূল ভিত্তি।",

  careers: [
    {
      id: "pathway-1",
      icon: FaGraduationCap,
      title: "উচ্চশিক্ষা ও বিএসসি (BSc in Engineering)",
      items: [
        "DUET ভর্তি পরীক্ষা ও বিএসসি ডিগ্রি",
        "স্বনামধন্য প্রাইভেট বিশ্ববিদ্যালয়ে ক্রেডিট ওয়েভারসহ বিএসসি",
        "BSc in Mechanical Engineering (ME)",
        "Production, Manufacturing, Industrial ও Automobile Engineering",
      ],
    },

    {
      id: "pathway-2",
      icon: FaCertificate,
      title: "গ্লোবাল ভেন্ডর ও ইন্ডাস্ট্রি সার্টিফিকেশন",
      items: [
        "AutoCAD ও Mechanical Design",
        "CNC Machine Operation ও Programming",
        "Industrial Maintenance ও Machine Safety",
        "HVAC, Welding, Fabrication ও Industrial Training",
      ],
    },

    {
      id: "pathway-3",
      icon: FaGlobe,
      title: "দেশ-বিদেশে চাকরি ও টেকনিক্যাল ক্যারিয়ার",
      items: [
        "Manufacturing ও Production Industry",
        "Power Plant ও Industrial Plant",
        "Construction ও Engineering Company",
        "বিদেশে Mechanical Technician, Maintenance ও Industrial Jobs",
      ],
    },

    {
      id: "pathway-4",
      icon: FaRocket,
      title: "মেকানিক্যাল সার্ভিস ও উদ্যোক্তা",
      items: [
        "Mechanical Maintenance Service",
        "Machine Installation & Repair Service",
        "Fabrication ও Welding Business",
        "CNC, Machining ও Workshop Business",
      ],
    },
  ],

  workAreas: {
    label: "Opportunity Sectors",
    title: "কোথায় কোথায় কাজের সুযোগ রয়েছে?",
    description:
      "Manufacturing থেকে শুরু করে automobile, power plant, construction, garments, textile, shipbuilding, HVAC এবং বিভিন্ন engineering industry-তে Mechanical Technology-এর দক্ষ জনবলের চাহিদা রয়েছে।",

    areas: [
      "Manufacturing Industry",
      "Production Factory",
      "Power Plant",
      "Automobile Industry",
      "Garments & Textile Industry",
      "Construction Company",
      "Engineering Company",
      "Shipbuilding Industry",
      "HVAC & Refrigeration",
      "Government & Private Organizations",
    ],
  },

  higherStudy: {
    id: 1,
    label: "Academic & Research Growth",
    icon: FaGraduationCap,
    title: "উচ্চশিক্ষা ও বিএসসি প্রোগ্রাম",

    description:
      "ডিপ্লোমা শেষে Mechanical Engineering, Production Engineering, Industrial Engineering, Automobile Engineering এবং Manufacturing-related বিষয়ে উচ্চশিক্ষা গ্রহণের সুযোগ রয়েছে। শিক্ষার্থীরা পরবর্তীতে বিভিন্ন বিশ্ববিদ্যালয়ে বিএসসি ও বিশেষায়িত বিষয়ে পড়াশোনা করতে পারে।",

    items: [
      "BSc in Mechanical Engineering (ME)",
      "BSc in Industrial & Production Engineering",
      "Manufacturing, Automobile & Mechatronics Engineering",
      "বিদেশে উচ্চশিক্ষা ও specialized technical training",
    ],

    theme: "light",
  },

  entrepreneurship: {
    id: 2,
    label: "Technical Independence & Business",
    icon: FaIndustry,
    title: "মেকানিক্যাল সার্ভিস ও উদ্যোক্তা",

    description:
      "Mechanical Technology-এর ব্যবহারিক দক্ষতাকে কাজে লাগিয়ে নিজস্ব mechanical workshop, machine maintenance, fabrication, machining অথবা industrial service business গড়ে তোলার সুযোগ রয়েছে।",

    items: [
      "Mechanical Installation & Maintenance Service",
      "Machine Repair & Maintenance",
      "Welding & Fabrication Service",
      "CNC & Machining Service",
      "Mechanical Design & Workshop Business",
    ],

    theme: "dark",
  },

  specialNote: {
    title: "সাফল্যের দিকনির্দেশনা (Pro Tip)",

    description:
      "Mechanical Technology-তে সফল ক্যারিয়ার গড়তে Technical Drawing, Machine Operation, Maintenance, Safety এবং Troubleshooting-এর পাশাপাশি AutoCAD, CNC, CAD/CAM, Industrial Automation, HVAC বা Manufacturing-এর মতো নির্দিষ্ট একটি বিষয়ে দক্ষতা অর্জন করা গুরুত্বপূর্ণ।",
  },
};

export const curriculum = [
  {
    sectionLabel: "Curriculum",
    title: "সেমিস্টারভিত্তিক পাঠ্যক্রম",

    description:
      "মেকানিক্যাল টেকনোলজিতে Mechanical Fundamentals, Engineering Drawing, Workshop Practice, Manufacturing Process, Machine Design, Thermodynamics, Automobile এবং Industrial Technology-এর পাশাপাশি প্রয়োজনীয় ব্যবহারিক বিষয় ধাপে ধাপে শেখানো হয়।",
  },

  {
    semester: "1st Semester",
    subjects: [
      "Engineering Drawing",
      "Basic Workshop Practice",
      "Mathematics-1",
      "English-1",
      "Physics",
    ],
  },

  {
    semester: "2nd Semester",
    subjects: [
      "Mechanical Engineering Materials",
      "Machine Shop Practice",
      "Mathematics-2",
      "Engineering Mechanics",
      "Basic Electrical Engineering",
    ],
  },

  {
    semester: "3rd Semester",
    subjects: [
      "Manufacturing Process",
      "Machine Tools",
      "Thermodynamics",
      "Mechanical Measurement",
      "Mechanical Workshop Practice",
    ],
  },

  {
    semester: "4th Semester",
    subjects: [
      "Fluid Mechanics",
      "Heat Transfer",
      "Machine Design",
      "Automobile Engineering",
      "CAD & Mechanical Drawing",
    ],
  },
];

export const careerData = {
  sectionLabel: "Career & Job Opportunities",
  title: "ক্যারিয়ার ও",
  highlightedTitle: "চাকরির সুযোগ",

  description: (
    <>
      বর্তমান সময়ে কোনো শিল্প-কারখানা, manufacturing industry, construction
      project, power plant, automobile sector কিংবা engineering organization
      দক্ষ Mechanical Professional ছাড়া কার্যকরভাবে পরিচালনা করা কঠিন।
      Production, Manufacturing, Maintenance, Construction এবং Engineering
      Sector-এ দক্ষ Mechanical Professional-এর প্রয়োজন রয়েছে।
      <br />
      <br />
      Mechanical Technology-এর একটি বড় সুবিধা হলো—প্র্যাকটিক্যাল দক্ষতা অর্জনের
      মাধ্যমে দেশে বিভিন্ন প্রতিষ্ঠানে চাকরির পাশাপাশি বিদেশেও Technical ও
      Industrial Sector-এ কাজ করার সুযোগ তৈরি করা যায়।
    </>
  ),

  highlight: (
    <>
      দক্ষতা ও বাস্তব অভিজ্ঞতার মাধ্যমে Mechanical Technology হতে পারে{" "}
      <span className="font-semibold text-[#224248]">
        একটি শক্তিশালী Technical Career-এর ভিত্তি।
      </span>
    </>
  ),

  careers: [
    {
      id: 1,
      title: "ম্যানুফ্যাকচারিং ও প্রোডাকশন",
      icon: FaIndustry,

      items: [
        "Production Management",
        "Manufacturing Process",
        "Machine Operation",
      ],
    },

    {
      id: 2,
      title: "মেকানিক্যাল মেইনটেন্যান্স",
      icon: FaTools,

      items: [
        "Industrial Machine Maintenance",
        "Mechanical Equipment Maintenance",
        "Machine Installation & Repair",
      ],
    },

    {
      id: 3,
      title: "ডিজাইন ও মেশিনিং",
      icon: FaCog,

      items: ["Mechanical Design", "CAD & AutoCAD", "CNC & Machining"],
    },

    {
      id: 4,
      title: "চাকরি ও উদ্যোক্তা",
      icon: FaRocket,

      items: [
        "Government & Private Jobs",
        "Mechanical Workshop Business",
        "Overseas Technical Jobs",
      ],
    },
  ],

  workAreas: {
    label: "Work Areas",
    title: "কোথায় কাজের সুযোগ রয়েছে?",

    description:
      "Mechanical Technology-এর দক্ষ জনবলের প্রয়োজন বর্তমানে বিভিন্ন ধরনের প্রতিষ্ঠান ও শিল্পখাতে রয়েছে। Manufacturing, production, automobile, construction, power plant, textile এবং বিভিন্ন engineering industry-তে বিভিন্ন ধরনের কাজের সুযোগ রয়েছে।",

    areas: [
      "Manufacturing Factory",
      "Production Industry",
      "Power Plant",
      "Government Organization",
      "Private Organization",
      "Automobile Industry",
      "Garments & Textile Industry",
      "Construction Company",
      "Engineering Company",
      "Shipbuilding Industry",
      "HVAC & Refrigeration",
      "Industrial Maintenance Department",
      "Machine Workshop",
      "CNC & Machining Industry",
      "Mechanical Service Business",
      "Overseas Technical Jobs",
    ],
  },

  specialNote: {
    title: "বিশেষ নোট",

    description:
      "Mechanical Technology-তে ক্যারিয়ার গড়তে হলে শুধু theoretical knowledge-এর ওপর নির্ভর না করে practical work, machine operation, technical drawing, maintenance, safety এবং troubleshooting সম্পর্কে বাস্তব দক্ষতা অর্জন করতে হবে। সময়ের সঙ্গে AutoCAD, CNC, CAD/CAM, Industrial Automation, HVAC এবং আধুনিক Manufacturing Technology-এর মতো নতুন প্রযুক্তি শেখা ক্যারিয়ারে এগিয়ে যেতে সহায়তা করবে।",
  },
};

export const faqData = {
  subtitle: "FAQ",
  title: "সাধারণ কিছু",
  highlightedTitle: "প্রশ্ন",

  description:
    "Mechanical Technology সম্পর্কে শিক্ষার্থী ও অভিভাবকদের সাধারণ কিছু প্রশ্নের উত্তর এখানে দেওয়া হলো।",

  faqs: [
    {
      question: "Mechanical Technology কী?",

      answer:
        "Mechanical Technology হলো Machine, Manufacturing Process, Mechanical Design, Thermodynamics, Fluid Mechanics, Automobile, Workshop Practice এবং Industrial Mechanical System সম্পর্কে তাত্ত্বিক ও ব্যবহারিক জ্ঞান অর্জনের একটি প্রযুক্তিভিত্তিক শিক্ষা ক্ষেত্র।",
    },

    {
      question:
        "Mechanical Technology পড়তে আগে থেকে Mechanical সম্পর্কে জানা প্রয়োজন?",

      answer:
        "না। আগে থেকে Mechanical সম্পর্কে বিস্তারিত জানা প্রয়োজন নেই। শুরু থেকেই প্রয়োজনীয় Engineering Drawing, Workshop Practice, Machine এবং Manufacturing-related বিষয়গুলো ধাপে ধাপে শেখানো হয়।",
    },

    {
      question: "এই Department-এ কি Practical কাজ করা হয়?",

      answer:
        "হ্যাঁ। Mechanical Technology-তে workshop practice, machine operation, welding, fabrication, machining, measurement, maintenance এবং বিভিন্ন practical project গুরুত্বপূর্ণ অংশ।",
    },

    {
      question: "পড়াশোনা শেষে কী করা যায়?",

      answer:
        "শিক্ষার্থীরা Manufacturing Factory, Production Industry, Power Plant, Automobile Industry, Construction Company, Engineering Company, Industrial Maintenance এবং বিভিন্ন সরকারি-বেসরকারি প্রতিষ্ঠানে কাজ করতে পারে। এছাড়া উচ্চশিক্ষা ও নিজস্ব mechanical workshop বা service business-এর সুযোগও রয়েছে।",
    },
  ],
};

export const department = {
  name: "Mechanical Technology",
  shortName: "Mechanical",
  subtitle: "Diploma in Engineering",

  description:
    "Mechanical Design, Manufacturing Process, Machine Tools, Thermodynamics, Automobile, Industrial Maintenance, CAD/CAM এবং আধুনিক Mechanical Technology সম্পর্কে তাত্ত্বিক ও ব্যবহারিক জ্ঞান অর্জনের সুযোগ।",

  duration: "৪ বছর",
  education: "Diploma in Engineering",
  learning: "Theory + Practical",
  focus: "Mechanical & Manufacturing Technology",

  heroImage:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
};

export const labImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    title: "Mechanical Practical",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80",
    title: "Machine Workshop",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
    title: "Technical Workshop",
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80",
    title: "Student Activity",
  },

  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1581092918484-8313a4b9b98d?auto=format&fit=crop&w=900&q=80",
    title: "Mechanical Lab",
  },

  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=80",
    title: "Practical Training",
  },

  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    title: "Manufacturing Technology",
  },

  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    title: "Industrial Technology",
  },
];

export const departmentOverviewData = {
  title: "Mechanical Technology কী?",

  description:
    "Mechanical Technology হলো Machine ও Mechanical System সম্পর্কিত বিভিন্ন বিষয় শেখার একটি প্রযুক্তিভিত্তিক শিক্ষাক্ষেত্র। শিক্ষার্থীরা Engineering Drawing থেকে শুরু করে Manufacturing Process, Machine Tools, Thermodynamics, Fluid Mechanics, Automobile এবং Industrial Technology সম্পর্কে ধারণা অর্জন করে।",

  subDescription:
    "Theory জ্ঞানের পাশাপাশি workshop practice, machine operation, welding, fabrication, machining, measurement, maintenance এবং project-based practical work-এর মাধ্যমে বাস্তব দক্ষতা গড়ে তোলার সুযোগ থাকে।",
};

export const whyChooseData = {
  id: 1,

  department: "Mechanical Technology",
  supTitle: "Why Mechanical",

  title: (
    <>
      কেন এবং কারা <span className="text-[#44a1a4]">Mechanical Technology</span>{" "}
      পড়বে?
    </>
  ),

  description:
    "শিল্প ও প্রযুক্তিনির্ভর এই সময়ে Mechanical Technology শুধু একটি technical subject নয়, এটি Manufacturing, Production, Construction, Automobile এবং Industrial sector-এ career গড়ার একটি strong foundation। যারা machine, manufacturing process, mechanical system এবং practical technical work-এর সঙ্গে কাজ করতে চান, তাদের জন্য এই Department হতে পারে একটি practical career path।",

  topics: [
    "Mechanical Design",
    "Manufacturing Process",
    "Machine Tools",
    "Thermodynamics",
    "Industrial Maintenance",
    "Automobile Technology",
  ],

  reasons: [
    "Mechanical Engineering ও Manufacturing Technology সম্পর্কে strong foundation তৈরি করা।",

    "Engineering Drawing ও Technical Drawing সম্পর্কে practical knowledge অর্জন করা।",

    "Machine Tools ও Manufacturing Process সম্পর্কে প্রয়োজনীয় ধারণা নেওয়া।",

    "Machine Installation, Maintenance ও Troubleshooting-এর দক্ষতা অর্জন করা।",

    "Thermodynamics, Fluid Mechanics ও Heat Transfer সম্পর্কে basic ধারণা তৈরি করা।",

    "Workshop Practice, Welding, Fabrication ও Machining-এর বাস্তব দক্ষতা অর্জন করা।",

    "AutoCAD, CAD/CAM ও আধুনিক Mechanical Design সম্পর্কে basic ধারণা অর্জন করা।",

    "Manufacturing Factory, Power Plant, Automobile, Construction ও বিভিন্ন প্রতিষ্ঠানে technical career-এর জন্য প্রস্তুতি নেওয়া।",

    "Diploma শেষে Higher Education ও future engineering career-এর জন্য প্রস্তুতি নেওয়া।",
  ],
};
