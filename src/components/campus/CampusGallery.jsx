import SectionShortTitleStyle from "../UI/SectionShortTitleStyle";
import TitleStyle from "../UI/TitleStyle";

const CampusGallery = ({ data }) => {
  return (
    <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div>
          <SectionShortTitleStyle text={data.shortTitle} />
          <TitleStyle
            title={data.title}
            highlightedTitle={data.highlightedTitle}
          />
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="overflow-hidden rounded-[1.5rem]">
            {data?.images.map((img, inx) => {
              <div key={inx}>
                <img
                  src={img}
                  alt="Students"
                  className="h-52 w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusGallery;
