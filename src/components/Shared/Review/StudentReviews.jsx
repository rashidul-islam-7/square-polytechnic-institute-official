"use client";

import React from "react";
import OneSlider from "../Slider/OneSlider";

import { studentsFeedback } from "@/data/feedbackData/studentsFeedback";
import ReviewSectionHeader from "./ReviewSectionHeader";

// const reviews = [
//   {
//     title: "একটি অসাধারণ শিক্ষার পরিবেশ",
//     studentName: "Rafi",
//     session: "2020–2021",
//     rating: 3,
//     department: "Computer Technology",
//     comment:
//       "এই পলিটেকনিকের শিক্ষার পরিবেশ অনেক ভালো। শিক্ষকরা খুবই আন্তরিক এবং ব্যবহারিক শিক্ষার উপর গুরুত্ব দেন। এখানে পড়াশোনা করে আমি আমার ক্যারিয়ার নিয়ে আরও আত্মবিশ্বাসী হয়েছি।",
//   },
//   {
//     title: "দক্ষতা অর্জনের জন্য ভালো জায়গা",
//     studentName: "Sakib",
//     session: "2021–2022",
//     rating: 4,
//     department: "Civil Technology",
//     comment:
//       "এখানে শুধু বইয়ের পড়াশোনা নয়, বাস্তব কাজের মাধ্যমে শেখার সুযোগ পাওয়া যায়। শিক্ষকদের সহযোগিতা এবং সুন্দর পরিবেশ আমার শেখার অভিজ্ঞতাকে আরও ভালো করেছে।",
//   },
//   {
//     title: "আমার ক্যারিয়ারের নতুন যাত্রা",
//     studentName: "Nusrat",
//     session: "2022–2023",
//     rating: 5,
//     department: "Electrical Technology",
//     comment:
//       "SPI-তে পড়াশোনার সময় অনেক নতুন কিছু শেখার সুযোগ পেয়েছি। শিক্ষকরা নিয়মিত গাইড করেছেন এবং বিভিন্ন practical কাজের মাধ্যমে আমাদের দক্ষতা বাড়াতে সাহায্য করেছেন।",
//   },
//   {
//     title: "আমার ক্যারিয়ারের নতুন যাত্রা",
//     studentName: "Nusrat",
//     session: "2022–2023",
//     rating: 5,
//     department: "Electrical Technology",
//     comment:
//       "SPI-তে পড়াশোনার সময় অনেক নতুন কিছু শেখার সুযোগ পেয়েছি। শিক্ষকরা নিয়মিত গাইড করেছেন এবং বিভিন্ন practical কাজের মাধ্যমে আমাদের দক্ষতা বাড়াতে সাহায্য করেছেন।",
//   },
//   {
//     title: "আমার ক্যারিয়ারের নতুন যাত্রা",
//     studentName: "Nusrat",
//     session: "2022–2023",
//     rating: 5,
//     department: "Electrical Technology",
//     comment:
//       "SPI-তে পড়াশোনার সময় অনেক নতুন কিছু শেখার সুযোগ পেয়েছি। শিক্ষকরা নিয়মিত গাইড করেছেন এবং বিভিন্ন practical কাজের মাধ্যমে আমাদের দক্ষতা বাড়াতে সাহায্য করেছেন।",
//   },
//   {
//     title: "আমার ক্যারিয়ারের নতুন যাত্রা",
//     studentName: "Nusrat",
//     session: "2022–2023",
//     rating: 5,
//     department: "Electrical Technology",
//     comment:
//       "SPI-তে পড়াশোনার সময় অনেক নতুন কিছু শেখার সুযোগ পেয়েছি। শিক্ষকরা নিয়মিত গাইড করেছেন এবং বিভিন্ন practical কাজের মাধ্যমে আমাদের দক্ষতা বাড়াতে সাহায্য করেছেন।",
//   },
//   {
//     title: "আমার ক্যারিয়ারের নতুন যাত্রা",
//     studentName: "Nusrat",
//     session: "2022–2023",
//     rating: 5,
//     department: "Electrical Technology",
//     comment:
//       "SPI-তে পড়াশোনার সময় অনেক নতুন কিছু শেখার সুযোগ পেয়েছি। শিক্ষকরা নিয়মিত গাইড করেছেন এবং বিভিন্ন practical কাজের মাধ্যমে আমাদের দক্ষতা বাড়াতে সাহায্য করেছেন।",
//   },
//   {
//     title: "আমার ক্যারিয়ারের নতুন যাত্রা",
//     studentName: "Nusrat",
//     session: "2022–2023",
//     rating: 5,
//     department: "Electrical Technology",
//     comment:
//       "SPI-তে পড়াশোনার সময় অনেক নতুন কিছু শেখার সুযোগ পেয়েছি। শিক্ষকরা নিয়মিত গাইড করেছেন এবং বিভিন্ন practical কাজের মাধ্যমে আমাদের দক্ষতা বাড়াতে সাহায্য করেছেন।",
//   },
// ];

const StudentReviews = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#44A1A4]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#224248]/5 blur-3xl" />

      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*HEADER */}
        <ReviewSectionHeader />
        {/* REVIEWS */}
        <OneSlider reviewsContent={studentsFeedback} />
      </div>
    </section>
  );
};

export default StudentReviews;
