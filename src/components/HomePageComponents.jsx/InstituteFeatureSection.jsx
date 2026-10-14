import InstituteFeatures from "../Shared/InstituteFeatures";
import Btn from "../UI/Btn";

const InstituteFeatureSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 md:py-20 ">
      <InstituteFeatures />
      {/* More Details Button */}
      <div className="flex justify-center items-center mt-5">
        {" "}
        <Btn text={"আরও বিস্তারিত জানুন"} link="/about" />
      </div>
    </section>
  );
};

export default InstituteFeatureSection;
