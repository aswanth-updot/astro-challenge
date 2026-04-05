import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { cn } from "../../ui/utils";
import karma from "../../../assets/home/case-studies/karma.png";
import kumms from "../../../assets/home/case-studies/kumms.png";
import awcws from "../../../assets/home/case-studies/awcws.png";

const CaseStudies = () => {
  return (
    <div className="bg-secondary-bg py-[66px] md:pb-[80px] md:py-[113px]">
      <Carousel opts={{ dragFree: true }}>
        <div className="flex justify-between items-end w-full common-padding-x">
          <div className="flex flex-col gap-3">
            <h2 className="font-sans text-tertiary-text font-medium text-[30px] md:text-[40px]">
              Explore our case studies
            </h2>
            <p className="text-secondary-text font-sans font-light text-sm md:text-base">
              From Startups to Fortune 500: Our Trusted Partnerships Define
              Excellence in Digital Transformation with UPDOT
            </p>
          </div>
          <Handlers className="hidden md:flex" />
        </div>
        <CarouselContent className="mt-[33px] md:mt-[79px] ml-5 sm:ml-[48px] md:ml-[68px]">
          {caseStudies.map((study) => (
            <CarouselItem
              key={study.title}
              className="cursor-grab select-none text-secondary-text basis-[calc(0.9/1*100%)] sm:basis-1/2 lg:basis-1/3  sm:min-h-[506px] mx-3"
            >
              <div className="w-full font-sans overflow-hidden">
                <div className="w-full overflow-hidden">
                  <img
                    src={study.image.src}
                    alt={study.name}
                    height={297}
                    className="w-full h-auto object-cover hover:scale-110 transition-all"
                  />
                </div>
                <div className="w-full flex flex-col px-5 py-[14px] md:px-[30px] md:py-5 bg-primary-bg">
                  <p className="text-shaded-gray text-[13px] uppercase">
                    {study.name} | . 4 Days ago
                  </p>
                  <h3 className="font-semibold text-primary-text text-[22px] leading-7 mt-[17px] mb-[17px]">
                    {study.title}
                  </h3>
                  <p className="text-xs text-primary-text">{study.desc}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <Handlers className="flex md:hidden mt-[50px] justify-center" />
      </Carousel>
    </div>
  );
};

export default CaseStudies;

const Handlers = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      <CarouselPrevious
        variant="outline"
        className="relative top-0 left-0 rounded-none translate-y-0 h-[50px] w-[50px]"
      />
      <CarouselNext
        variant="outline"
        className="relative top-0 left-0 rounded-none translate-y-0 h-[50px] w-[50px]"
      />
    </div>
  );
};

const caseStudies = [
  {
    image: karma,
    name: "Karma",
    title: "Built a sensational DXP iPad app for Hyundai",
    desc: "UPDOT successfully aided Hyundai in launching a Digital Experience(DXP) iPad app during the World Expo 2020 in which Hyundai showcased 3 car models.",
  },
  {
    image: awcws,
    name: "AWCWS",
    title: "Built a sensational DXP iPad app for Hyundai",
    desc: "UPDOT successfully aided Hyundai in launching a Digital Experience(DXP) iPad app during the World Expo 2020 in which Hyundai showcased 3 car models.",
  },
  {
    image: kumms,
    name: "Kumms",
    title: "Built a sensational DXP iPad app for Hyundai",
    desc: "UPDOT successfully aided Hyundai in launching a Digital Experience(DXP) iPad app during the World Expo 2020 in which Hyundai showcased 3 car models.",
  },
];
