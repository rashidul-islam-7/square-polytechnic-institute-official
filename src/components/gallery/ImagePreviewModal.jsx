"use client";

import { FaXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const ImagePreviewModal = ({
  selectedImage,
  filteredImages,
  onClose,
  onChangeImage,
}) => {
  if (!selectedImage) return null;

  const currentIndex = filteredImages.findIndex(
    (image) => image.id === selectedImage.id,
  );

  const hasMultipleImages = filteredImages.length > 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview / ছবির প্রিভিউ"
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview / প্রিভিউ বন্ধ করুন"
        className=" cursor-pointer absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-white transition hover:bg-white/20"
      >
        <FaXmark />
      </button>

      {/* Previous Image */}
      {hasMultipleImages && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onChangeImage(-1);
          }}
          aria-label="Previous image / আগের ছবি"
          className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:text-or hover:bg-gray-400 cursor-pointer sm:left-6 "
        >
          <FaChevronLeft />
        </button>
      )}

      {/* Preview Content */}
      <div
        className="w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={selectedImage.image}
            alt={`${selectedImage.title} / ${selectedImage.titleEn}`}
            className="max-h-[75vh] w-full object-contain"
          />
        </div>

        {/* Mobile Navigation */}
        {hasMultipleImages && (
          <div className="mt-4 flex justify-center gap-3 sm:hidden">
            <button
              type="button"
              onClick={() => onChangeImage(-1)}
              className="rounded-xl bg-white/10 px-4 py-3 text-sm font-bold text-white"
            >
              আগের ছবি / Previous
            </button>

            <button
              type="button"
              onClick={() => onChangeImage(1)}
              className="rounded-xl bg-teal-600 px-4 py-3 text-sm font-bold text-white"
            >
              পরের ছবি / Next
            </button>
          </div>
        )}
      </div>

      {/* Next Image */}
      {hasMultipleImages && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onChangeImage(1);
          }}
          aria-label="Next image / পরের ছবি"
          className="absolute right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-sm bg-white/10 text-white transition cursor-pointer hover:bg-gray-400 sm:right-6 sm:flex "
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default ImagePreviewModal;
