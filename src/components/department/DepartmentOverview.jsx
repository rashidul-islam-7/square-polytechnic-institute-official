import React from "react";
import SectionShortTitleStyle from "../UI/SectionShortTitleStyle";

const DepartmentOverview = () => {
  return (
    <section id="overview">
      <div className="mx-auto max-w-7xl px-5 -mt-10 sm:px-8 lg:px-10">
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Content */}
          <div>
            <SectionShortTitleStyle text={"Department Overview"} />

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Computer Technology কী?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Computer Technology হলো Computer ও Information Technology
              সম্পর্কিত বিভিন্ন বিষয় শেখার একটি কারিগরি শিক্ষা ক্ষেত্র। এখানে
              শিক্ষার্থীরা Computer fundamentals থেকে শুরু করে Programming, Web
              Development, Database, Networking এবং Hardware সম্পর্কে ধারণা
              অর্জন করে।
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              তাত্ত্বিক জ্ঞানের পাশাপাশি practical work, laboratory practice এবং
              project-এর মাধ্যমে বাস্তব দক্ষতা গড়ে তোলার সুযোগ থাকে।
            </p>
          </div>

          {/* YouTube Video */}
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-slate-900 shadow-lg">
            <iframe
              className="absolute inset-0 h-full w-full"
              width="788"
              height="443"
              src="https://www.youtube.com/embed/RaivtCsmoz0"
              title="Computer Technology Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentOverview;
