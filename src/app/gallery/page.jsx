"use client";

import { useState } from "react";
import { FaArrowRight, FaRegImages } from "react-icons/fa6";

import GalleryHero from "@/components/gallery/Hero";
import ImagePreviewModal from "@/components/gallery/ImagePreviewModal";
import SectionShortTitleStyle from "@/components/UI/SectionShortTitleStyle";
import TitleStyle from "@/components/UI/TitleStyle";
import CategoryFilter from "@/components/UI/CategoryFilter";
import SectionTopSubTitle from "@/components/UI/SectionTopSubTitle";

const galleryImages = [
  {
    id: 1,
    title: "আমাদের ক্যাম্পাস",
    titleEn: "Our Campus",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "বন্ধুত্বের মুহূর্ত",
    titleEn: "Moments of Friendship",
    category: "Students",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    title: "প্রযুক্তির হাতে-কলমে শিক্ষা",
    titleEn: "Practical Technology Learning",
    category: "Labs",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    title: "একসঙ্গে শেখা",
    titleEn: "Learning Together",
    category: "Students",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    title: "শিক্ষার সুন্দর পরিবেশ",
    titleEn: "A Place to Learn",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    title: "ব্যবহারিক শিক্ষা",
    titleEn: "Learning by Doing",
    category: "Labs",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    title: "আনন্দঘন আয়োজন",
    titleEn: "Celebrating Together",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    title: "জ্ঞান অর্জনের পরিবেশ",
    titleEn: "A World of Knowledge",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 9,
    title: "শিক্ষার্থী জীবন",
    titleEn: "Student Life",
    category: "Students",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 10,
    title: "প্রযুক্তি ও উদ্ভাবন",
    titleEn: "Technology and Innovation",
    category: "Labs",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 11,
    title: "স্মরণীয় মুহূর্ত",
    titleEn: "Unforgettable Memories",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 12,
    title: "আমাদের শিক্ষাঙ্গন",
    titleEn: "Our Learning Space",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [
  { label: "All Photos", value: "All" },
  { label: "Campus", value: "Campus" },
  { label: "Students", value: "Students" },
  { label: "Events", value: "Events" },
  { label: "Labs & Classes", value: "Labs" },
];

const CampusGalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const changeImage = (direction) => {
    if (!selectedImage || filteredImages.length < 2) return;

    const currentIndex = filteredImages.findIndex(
      (image) => image.id === selectedImage.id,
    );

    const nextIndex =
      (currentIndex + direction + filteredImages.length) %
      filteredImages.length;

    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <GalleryHero />

      {/* GALLERY SECTION */}
      <section
        id="gallery"
        className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADING */}
          <div className="flex flex-col items-center justify-center">
          
            <SectionTopSubTitle text = " Our Memories" />
            <TitleStyle title="ছবিতে আমাদের" highlightedTitle="ক্যাম্পাস" />
            <p className="mt-4 max-w-xl text-center text-sm leading-7 text-slate-500 sm:text-base">
              শিক্ষাঙ্গনের প্রতিটি মুহূর্ত, প্রতিটি অভিজ্ঞতা আমাদের গল্পের একটি
              অংশ।
            </p>
          </div>

          {/* CATEGORY FILTERS */}
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={(category) => {
              setActiveCategory(category);
              setSelectedImage(null);
            }}
          />

          {/* IMAGE GRID */}

          {/* RANDOM / MASONRY GALLERY GRID */}
          <div className="mt-10 grid grid-cols-1 auto-rows-[220px] gap-4 sm:grid-cols-4 sm:auto-rows-[200px] sm:gap-5 lg:grid-cols-5 lg:auto-rows-[190px]">
            {filteredImages.map((image, index) => {
              return (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  aria-label={`${image.title} / ${image.titleEn}`}
                  className={`group relative h-full min-h-0 w-full overflow-hidden rounded-lg bg-slate-100 text-left `}
                >
                  {/* IMAGE */}
                  <img
                    src={image.image}
                    alt={`${image.title} / ${image.titleEn}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              );
            })}
          </div>

          {/* EMPTY STATE */}
          {filteredImages.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center">
              <FaRegImages className="mx-auto text-4xl text-slate-300" />

              <p className="mt-4 font-bold text-slate-800">
                কোনো ছবি পাওয়া যায়নি / No photos found
              </p>

              <p className="mt-2 text-sm text-slate-500">
                অন্য ক্যাটাগরি নির্বাচন করুন / Try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* IMAGE PREVIEW MODAL */}
      <ImagePreviewModal
        selectedImage={selectedImage}
        filteredImages={filteredImages}
        onClose={() => setSelectedImage(null)}
        onChangeImage={changeImage}
      />
    </main>
  );
};

export default CampusGalleryPage;
