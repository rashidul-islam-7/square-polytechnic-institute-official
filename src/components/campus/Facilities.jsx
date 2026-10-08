import SectionShortTitleStyle from "../UI/SectionShortTitleStyle";
import TitleStyle from "../UI/TitleStyle";

const FaciliteSection = ({ titleData, mainData }) => {
  console.log(mainData);
  return (
    <section
      id="facilities"
      className="mx-auto max-w-7xl bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-20"
    >
      <div>
        <div className="max-w-2xl ">
          <SectionShortTitleStyle text={titleData.shortTitle} />
          <TitleStyle
            title={titleData.title}
            highlightedTitle={titleData.highlightedTitle}
          />
          <p>{titleData.description}</p>
        </div>

        {/* Bento Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {mainData.map((item, index) => {
            return (
              <div
                key={item.title}
                className={` relative overflow-hidden rounded-lg ${
                  index === 0
                    ? "md:col-span-2 md:row-span-2"
                    : index === 3
                      ? "md:col-span-2"
                      : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover "
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/50 to-transparent" />

                <div
                  className={`relative flex h-full min-h-[200px] flex-col justify-end p-5 ${
                    index === 0 ? "md:min-h-[325px]" : ""
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
                      {item.subtitle}
                    </p>

                    {/* <h3 className=" text-base font-black text-white">
                      {item.title}
                    </h3> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaciliteSection;
