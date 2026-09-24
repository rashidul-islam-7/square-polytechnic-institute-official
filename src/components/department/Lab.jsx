import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionShortTitleStyle from "../UI/SectionShortTitleStyle";

const LabsGallery = ({ labImages, lab, alt }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(labImages.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* header content  */}
        <div>
          <SectionShortTitleStyle text={"Labs & Practical Facilities"} />
          <div>
            <h1 className="text-teal-950 text-3xl sm:text-4xl font-bold">
              {" "}
              হাতে-কলমে শেখার সুযোগ
            </h1>
            <p className="text-base max-w-2xl leading-6 mt-4 mb-10">
              Theory জ্ঞানের পাশাপাশি বিভিন্ন lab ও practical activity-এর
              মাধ্যমে বাস্তব অভিজ্ঞতা অর্জনের সুযোগ।
            </p>
          </div>
        </div>
        {/* lab gallery  */}
        <div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            {/*LEFT MAIN FEATURED CARD  */}
            <div className="group relative h-[270px] sm:h-[300px] lg:h-[390px] overflow-hidden rounded-3xl lg:col-span-2 shadow-md">
              <img src={lab} alt={alt} className="h-full w-full object-cover" />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-300 backdrop-blur-md">
                  Labs & Practical Facilities
                </span>

                <h3 className="mt-3 text-2xl font-bold">আধুনিক ল্যাব</h3>

                <p className="mt-2 text-sm text-slate-200">
                  আধুনিক সুবিধাসম্পন্ন ল্যাবে শিক্ষার্থীদের হাতে-কলমে শেখার
                  সুযোগ।
                </p>
              </div>
            </div>

            {/* RIGHT SLIDER GALLERY */}
            <div className="flex flex-col justify-between lg:col-span-3">
              {/* Slider Viewport */}
              <div className="overflow-hidden rounded-2xl">
                {/* Slider Track */}
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {/* Each Slide */}
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                    const slideImages = labImages.slice(
                      slideIndex * itemsPerSlide,
                      slideIndex * itemsPerSlide + itemsPerSlide,
                    );

                    return (
                      <div key={slideIndex} className="min-w-full">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                          {slideImages.map((item) => (
                            <div
                              key={item.id}
                              className="group relative sm:h-[150px] overflow-hidden rounded-2xl shadow-sm"
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-cover "
                              />

                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                              <h4 className="absolute bottom-3 left-3 right-3 text-xs sm:text-sm font-semibold text-white line-clamp-1">
                                {item.title}
                              </h4>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/*  CONTROLS & PAGINATION */}
              <div className="mt-6 flex items-center justify-between">
                {/* Pagination Dots */}
                <div className="flex gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "w-8 bg-orange-500"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white active:scale-95"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next Slide"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white active:scale-95"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsGallery;
