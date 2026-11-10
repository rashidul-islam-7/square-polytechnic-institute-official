const TitleStyle = ({ title, highlightedTitle }) => {
  return (
    <div className="text-3xl font-bold sm:text-4xl leading-[55px] md:text-[44px] flex gap-3">
      <h1>
        {title} <span className="text-[#44A1A4]">{highlightedTitle}</span>
      </h1>
    </div>
  );
};

export default TitleStyle;
