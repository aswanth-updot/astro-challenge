import one from "../../../assets/home/spirals.svg";
import two from "../../../assets/home/intersections.svg";
import three from "../../../assets/home/sphere-layout.svg";
import Button from "../../ui/button";

const EngageBlock = () => {
  return (
    <div className="common-padding-x py-20 md:py-[108px] bg-white-1">
      <h2 className="text-primary-text font-sans font-medium text-2xl sm:text-[32px] md:text-[40px]">
        Let’s Engage
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-[38px]">
        {data.map((obj, index) => (
          <div
            key={index}
            className="px-[30px] lg:px-[57px] py-[30px] lg:py-[42px] lg:min-h-[435px] max-h-[435px] font-sans flex flex-col justify-end items-start w-full group bg-primary-bg lg:bg-blue-3 hover:bg-primary-bg transition-color duration-150 select-none"
          >
            <img
              src={obj.logo.src}
              alt={obj.title}
              className="h-[90px] w-auto object-contain"
            />
            <div className="font-medium text-xl md:text-2xl text-primary-text mt-[28px] mb-[5px]">
              {obj.title}
            </div>
            <div className="text-sm md:text-base font-light text-primary-text overflow-hidden h-[120px] lg:h-0 group-hover:h-[120px] transition-[height] duration-150">
              <span>{obj.desc}</span>
            </div>
            <Button variant="primary" className="w-max text-sm mt-[28px]">
              Schedule A Call
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngageBlock;

const data = [
  {
    logo: one,
    title: "Extended Team",
    desc: "Partner with us to build scalable, secure, and business-aligned custom software products that drive growth. We specialize in end-to-end development to help you achieve valuable targets and outperform your competitors.",
  },
  {
    logo: two,
    title: "Fixed Cost",
    desc: "Partner with us to build scalable, secure, and business-aligned custom software products that drive growth. We specialize in end-to-end development to help you achieve valuable targets and outperform your competitors.",
  },
  {
    logo: three,
    title: "Time and Material",
    desc: "Partner with us to build scalable, secure, and business-aligned custom software products that drive growth. We specialize in end-to-end development to help you achieve valuable targets and outperform your competitors.",
  },
];
