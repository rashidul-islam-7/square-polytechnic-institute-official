const TitleStyle = ({ title, highlightedTitle }) => {
  return (
    <div className="text-2xl font-bold sm:text-3xl md:text-4xl flex gap-3">
      <h1>
        {title} <span className="text-[#44A1A4]">{highlightedTitle}</span>
      </h1>
    </div>
  );
};

export default TitleStyle;
