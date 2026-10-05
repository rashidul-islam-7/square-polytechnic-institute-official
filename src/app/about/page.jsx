
"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaBookOpen,
  FaBullseye,
  FaCheck,
  FaEye,
  FaGraduationCap,
  FaQuoteLeft,
} from "react-icons/fa6";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#224248]">

        {/* Decorative Circle */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-28">

          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-white/50" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                About Our Institution
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              জ্ঞান ও দক্ষতার মাধ্যমে
              <span className="block text-white/70">
                ভবিষ্যৎ গড়ার প্রত্যয়
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              আমাদের প্রতিষ্ঠান শিক্ষার্থীদের মানসম্মত শিক্ষা,
              ব্যবহারিক দক্ষতা ও নৈতিক মূল্যবোধের সমন্বয়ে
              ভবিষ্যতের জন্য প্রস্তুত করতে কাজ করে যাচ্ছে।
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="py-20 md:py-28">

        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-2 lg:items-center">

          {/* Image */}
          <div className="relative">

            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/college.jpg"
                alt="College Campus"
                className="h-[400px] w-full object-cover md:h-[500px]"
              />
            </div>

            {/* Founded Box */}
            <div className="absolute -bottom-6 right-5 rounded-xl bg-white px-6 py-5 shadow-xl md:right-8">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Established
              </p>

              <p className="mt-1 text-2xl font-bold text-[#224248]">
                2000
              </p>
            </div>

          </div>


          {/* Content */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#224248]">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              আমাদের প্রতিষ্ঠান সম্পর্কে
            </h2>

            <div className="mt-6 space-y-5 text-gray-600">

              <p className="leading-8">
                আমাদের কলেজ একটি আধুনিক ও শিক্ষাবান্ধব শিক্ষা প্রতিষ্ঠান।
                প্রতিষ্ঠার পর থেকে আমরা শিক্ষার্থীদের জ্ঞান অর্জনের পাশাপাশি
                বাস্তব জীবনের প্রয়োজনীয় দক্ষতা অর্জনের সুযোগ করে দিতে কাজ করে
                আসছি।
              </p>

              <p className="leading-8">
                পরিবর্তনশীল বিশ্ব ও কর্মক্ষেত্রের চাহিদার সাথে তাল মিলিয়ে
                প্রযুক্তিনির্ভর এবং ব্যবহারিক শিক্ষার ওপর আমরা গুরুত্ব দিয়ে
                থাকি। আমাদের লক্ষ্য শিক্ষার্থীদের এমনভাবে প্রস্তুত করা,
                যাতে তারা উচ্চশিক্ষা ও কর্মজীবনে নিজেদের প্রতিষ্ঠিত করতে পারে।
              </p>

            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-600">
                <FaCheck className="text-[#224248]" />
                মানসম্মত শিক্ষা
              </div>

              <div className="flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-600">
                <FaCheck className="text-[#224248]" />
                ব্যবহারিক দক্ষতা
              </div>

              <div className="flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-600">
                <FaCheck className="text-[#224248]" />
                প্রযুক্তিনির্ভর শিক্ষা
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK FACTS
      ====================================================== */}
      <section className="border-y border-gray-100 bg-gray-50">

        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

          <div className="border-r border-gray-200 px-6 py-10 text-center">
            <p className="text-3xl font-bold text-[#224248]">20+</p>
            <p className="mt-2 text-sm text-gray-500">
              বছরের অভিজ্ঞতা
            </p>
          </div>

          <div className="border-b border-gray-200 px-6 py-10 text-center md:border-b-0 md:border-r">
            <p className="text-3xl font-bold text-[#224248]">5000+</p>
            <p className="mt-2 text-sm text-gray-500">
              শিক্ষার্থী
            </p>
          </div>

          <div className="border-r border-gray-200 px-6 py-10 text-center">
            <p className="text-3xl font-bold text-[#224248]">50+</p>
            <p className="mt-2 text-sm text-gray-500">
              শিক্ষক ও কর্মকর্তা
            </p>
          </div>

          <div className="px-6 py-10 text-center">
            <p className="text-3xl font-bold text-[#224248]">10+</p>
            <p className="mt-2 text-sm text-gray-500">
              শিক্ষা কার্যক্রম
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          HISTORY
      ====================================================== */}
      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="grid gap-12 lg:grid-cols-[250px_1fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#224248]">
                Our Journey
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                আমাদের পথচলা
              </h2>
            </div>

            <div className="max-w-3xl">

              <p className="text-lg leading-9 text-gray-600">
                একটি ছোট পরিসরের শিক্ষা কার্যক্রম থেকে শুরু করে
                আজকের আধুনিক শিক্ষা প্রতিষ্ঠানে পরিণত হওয়ার পেছনে রয়েছে
                দীর্ঘদিনের পরিশ্রম, শিক্ষক-শিক্ষার্থী ও অভিভাবকদের
                সম্মিলিত প্রচেষ্টা।
              </p>

              <p className="mt-5 leading-8 text-gray-500">
                সময়ের সাথে সাথে আমাদের শিক্ষা কার্যক্রম, অবকাঠামো ও
                প্রযুক্তিগত সুবিধা সম্প্রসারিত হয়েছে। তবে শিক্ষার্থীদের
                জন্য একটি মানসম্মত ও সুন্দর শিক্ষার পরিবেশ নিশ্চিত করার
                মূল লক্ষ্যটি সবসময় একই রয়েছে।
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRINCIPAL MESSAGE
      ====================================================== */}
      <section className="bg-[#224248] py-20 md:py-24">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[280px_1fr] lg:items-center">

          {/* Principal */}
          <div>

            <div className="overflow-hidden rounded-2xl bg-white/10">
              <img
                src="/images/principal.jpg"
                alt="Principal"
                className="h-80 w-full object-cover"
              />
            </div>

            <div className="mt-4">
              <p className="font-semibold text-white">
                অধ্যক্ষের নাম
              </p>

              <p className="mt-1 text-sm text-white/50">
                অধ্যক্ষ
              </p>
            </div>

          </div>


          {/* Message */}
          <div>

            <FaQuoteLeft className="text-4xl text-white/20" />

            <p className="mt-6 max-w-3xl text-2xl font-medium leading-10 text-white md:text-3xl">
              “শিক্ষার্থীদের শুধু পরীক্ষার জন্য নয়,
              বরং বাস্তব জীবন ও ভবিষ্যৎ কর্মজীবনের জন্য
              প্রস্তুত করাই আমাদের শিক্ষার অন্যতম উদ্দেশ্য।”
            </p>

            <div className="mt-7 h-px w-16 bg-white/30" />

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION & VISION
      ====================================================== */}
      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#224248]">
              Mission & Vision
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              আমাদের লক্ষ্য ও ভবিষ্যৎ ভাবনা
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* Mission */}
            <div className="rounded-2xl border border-gray-200 p-8 md:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#224248]/10 text-xl text-[#224248]">
                <FaBullseye />
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                আমাদের মিশন
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                মানসম্মত শিক্ষা, ব্যবহারিক প্রশিক্ষণ ও প্রযুক্তির
                যথাযথ ব্যবহারের মাধ্যমে শিক্ষার্থীদের জ্ঞান,
                দক্ষতা ও নৈতিক মূল্যবোধ বিকাশে সহায়তা করা।
              </p>

            </div>


            {/* Vision */}
            <div className="rounded-2xl border border-gray-200 p-8 md:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#224248]/10 text-xl text-[#224248]">
                <FaEye />
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                আমাদের ভিশন
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                এমন একটি আধুনিক শিক্ষা পরিবেশ তৈরি করা,
                যেখানে শিক্ষার্থীরা উচ্চশিক্ষা, কর্মসংস্থান
                এবং সমাজে ইতিবাচক ভূমিকা রাখার জন্য প্রয়োজনীয়
                জ্ঞান ও দক্ষতা অর্জন করতে পারে।
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EDUCATIONAL APPROACH
      ====================================================== */}
      <section className="bg-gray-50 py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#224248]">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                আমরা কীভাবে শিক্ষার্থীদের প্রস্তুত করি?
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                আমাদের শিক্ষা কার্যক্রমে একাডেমিক জ্ঞানের পাশাপাশি
                ব্যবহারিক শিক্ষা, প্রযুক্তি, সৃজনশীলতা ও নেতৃত্বের
                দক্ষতার ওপর গুরুত্ব দেওয়া হয়।
              </p>

            </div>


            <div className="space-y-4">

              <div className="flex gap-5 rounded-xl bg-white p-6 shadow-sm">
                <FaGraduationCap className="mt-1 shrink-0 text-xl text-[#224248]" />

                <div>
                  <h3 className="font-bold">
                    একাডেমিক উৎকর্ষ
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    পাঠ্যক্রমভিত্তিক মানসম্মত শিক্ষা ও নিয়মিত মূল্যায়ন।
                  </p>
                </div>
              </div>


              <div className="flex gap-5 rounded-xl bg-white p-6 shadow-sm">
                <FaBookOpen className="mt-1 shrink-0 text-xl text-[#224248]" />

                <div>
                  <h3 className="font-bold">
                    ব্যবহারিক শিক্ষা
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    বাস্তব কাজ ও ব্যবহারিক প্রশিক্ষণের মাধ্যমে দক্ষতা অর্জন।
                  </p>
                </div>
              </div>


              <div className="flex gap-5 rounded-xl bg-white p-6 shadow-sm">
                <FaEye className="mt-1 shrink-0 text-xl text-[#224248]" />

                <div>
                  <h3 className="font-bold">
                    ভবিষ্যৎ প্রস্তুতি
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    উচ্চশিক্ষা ও কর্মজীবনের জন্য প্রয়োজনীয় দক্ষতা বিকাশ।
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAREER / FUTURE
      ====================================================== */}
      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="rounded-3xl bg-[#224248] px-7 py-12 md:px-14 md:py-16">

            <div className="max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/50">
                Future Ready
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                শিক্ষার পরবর্তী ধাপের জন্য প্রস্তুত
              </h2>

              <p className="mt-5 leading-8 text-white/65">
                আমাদের বিভিন্ন শিক্ষা কার্যক্রমের মাধ্যমে শিক্ষার্থীরা
                উচ্চশিক্ষা, সরকারি ও বেসরকারি চাকরি, শিল্পপ্রতিষ্ঠান,
                প্রযুক্তিখাত এবং উদ্যোক্তা হওয়ার মতো বিভিন্ন
                ক্যারিয়ার পথে এগিয়ে যাওয়ার জন্য প্রয়োজনীয় ভিত্তি তৈরি করতে পারে।
              </p>

              <Link
                href="/departments"
                className="mt-8 inline-flex items-center gap-3 rounded-lg
                  bg-white px-6 py-3 text-sm font-semibold text-[#224248]
                  transition hover:bg-gray-100"
              >
                আমাদের বিভাগসমূহ
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="border-t border-gray-100 py-16">

        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            আমাদের সম্পর্কে আরও জানতে চান?
          </h2>

          <p className="mt-4 leading-7 text-gray-500">
            ভর্তি, বিভাগ, যোগাযোগ ও অন্যান্য তথ্যের জন্য
            আমাদের ওয়েবসাইটের সংশ্লিষ্ট পেজগুলো দেখুন।
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/departments"
              className="rounded-lg bg-[#224248] px-6 py-3
                text-sm font-semibold text-white transition
                hover:bg-[#19363a]"
            >
              বিভাগসমূহ
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-gray-300 px-6 py-3
                text-sm font-semibold text-gray-700 transition
                hover:bg-gray-50"
            >
              যোগাযোগ
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

