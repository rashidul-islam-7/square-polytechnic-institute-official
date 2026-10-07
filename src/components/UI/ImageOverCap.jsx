const ImageOverCap = ({
  data = {},
  imgClassName = "",
  className = "",
  minHeight = "min-h-[200px]",
  featuredHeight = "md:min-h-[325px]",
  overlay = true,
}) => {
  return (
    <div className={`group relative overflow-hidden rounded-lg ${className}`}>
      {/* Image */}
      <img
        src={data.image || image}
        alt={data.title || title || "Image"}
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${imgClassName}`}
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      )}

      {/* Content */}
      <div
        className={`relative flex h-full flex-col justify-end p-5 ${minHeight} ${
          index === 0 ? featuredHeight : ""
        }`}
      >
        <div>
          {/* Subtitle */}
          {data.subtitle ||
            (subtitle && (
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
                {data.subtitle || subtitle}
              </p>
            ))}

          {/* Title */}
          {data.title ||
            (title && (
              <h3 className="text-xl font-black text-white">
                {data.title || title}
              </h3>
            ))}

          {/* Description */}
          {data.description ||
            (description && (
              <p className="mt-1 max-w-lg text-sm leading-5 text-slate-200">
                {data.description || description}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageOverCap;
