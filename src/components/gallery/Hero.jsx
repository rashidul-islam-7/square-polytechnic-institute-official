import React from "react";
import Btn from "../UI/Btn";

const GalleryHero = () => {
  return (
    <section className="">
      <div className="relative w-full isolate overflow-hidden bg-slate-950 ">
        {/* Background Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkLPRD9XP_AmtuJ3C-uzqwBqPQYyPFICaUR5p-q6OiH7SIXxGhHs50Oe4&s=10"
          alt="Campus life and student activities"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-slate-950/95 via-slate-950/75 to-slate-950/35" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-slate-950/70 via-transparent to-slate-950/10" />

        {/* Decorative Accent */}
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl sm:h-96 sm:w-96" />

        {/* Main Content */}
        <div className="mx-auto flex min-h-[540px] max-w-7xl flex-col justify-center px-5 py-12 sm:min-h-[580px] sm:px-10 sm:py-14 lg:min-h-[620px] lg:px-12">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className=" mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-teal-400" />
              <span className="text-[10px]  font-semibold tracking-[0.16em] text-white ">
                CAMPUS LIFE & GALLERY
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl leading-[1.3] font-bold tracking-tight text-white sm:text-4xl sm:leading-[1.2] lg:text-5xl">
              শিক্ষার্থীদের ক্যাম্পাসের
              <span className="mt-2 block text-teal-400">
                গল্প ও স্মৃতিকথা!
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-200 sm:mt-6 sm:text-base sm:leading-8">
              আমাদের ক্যাম্পাসের সুন্দর মুহূর্ত, শিক্ষার্থীদের আনন্দ, সাংস্কৃতিক
              আয়োজন এবং স্মরণীয় অভিজ্ঞতার গল্পগুলো একসঙ্গে দেখুন ছবির মাধ্যমে।
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-8">
              <Btn text="See Gallery" />

              {/* <span className="text-sm text-slate-300">
                প্রতিটি ছবি এক একটি গল্প
              </span> */}
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-12 grid max-w-3xl grid-cols-3 border-t border-white/20 pt-6 sm:mt-14 sm:pt-7">
            <div className="pr-3 sm:pr-6">
              <p className="text-base font-bold text-white sm:text-xl">
                Campus
              </p>
              <p className="mt-1 text-[10px] leading-5 text-slate-300 sm:text-sm">
                Life & Memories
              </p>
            </div>

            <div className="border-l border-white/20 px-3 sm:px-6">
              <p className="text-base font-bold text-white sm:text-xl">
                Events
              </p>
              <p className="mt-1 text-[10px] leading-5 text-slate-300 sm:text-sm">
                Moments & Celebrations
              </p>
            </div>

            <div className="border-l border-white/20 pl-3 sm:pl-6">
              <p className="text-base font-bold text-white sm:text-xl">
                Memories
              </p>
              <p className="mt-1 text-[10px] leading-5 text-slate-300 sm:text-sm">
                Stories Worth Sharing
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-teal-400 via-cyan-400 to-transparent" />
      </div>
    </section>
  );
};

export default GalleryHero;
