import TitleStyle from "../UI/TitleStyle";
import { IoCamera } from "react-icons/io5";
import SectionTopSubTitle from "../UI/SectionTopSubTitle";

const CampusGallery = ({ data }) => {
  return (
    <section className="bg-white px-5 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div>
          {data.shortTitle && (
            <SectionTopSubTitle text={data.shortTitle} icon={IoCamera} />
          )}

          <TitleStyle
            title={data.title}
            highlightedTitle={data.highlightedTitle}
          />
          <p className="mt-4 text-base max-w-2xl text-gray-600">
            {data.description}
          </p>
        </div>

        {/* Campus Gallery */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3  ">
          {data?.images?.map((img, inx) => (
            <div key={inx} className="group overflow-hidden rounded-xl">
              <img
                src={img}
                alt={`Campus gallery image ${inx + 1}`}
                loading="lazy"
                className="h-52 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusGallery;
