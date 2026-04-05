import hundai from "../../../assets/home/hundai.svg";
import IconStarFilled from "../../icons/start";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { cn } from "../../ui/utils";

const ClutchRating = () => {
  return (
    <div className="bg-black-2 py-[66px] md:py-[91px] ">
      <Carousel opts={{ dragFree: true }}>
        <div className="flex justify-between items-end w-full common-padding-x">
          <div className="flex flex-col gap-3">
            <h2 className="font-sans text-secondary-text font-medium text-[30px] md:text-[40px]">
              4.0 is our Clutch Average
            </h2>
            <p className="text-secondary-text font-sans font-light text-sm md:text-base">
              Where success stories and exceptional experiences unfold
            </p>
          </div>
          <Handlers className="hidden md:flex" />
        </div>
        <CarouselContent className="mt-[33px] md:mt-[79px] ml-5 sm:ml-[48px] md:ml-[68px]">
          {reviews.map((review, index) => (
            <CarouselItem
              key={index}
              className="bg-white-1 cursor-grab select-none text-secondary-text basis-[calc(0.9/1*100%)] sm:basis-1/2 lg:basis-1/3 mx-2"
            >
              <div className="px-4 py-6 md:px-[39px] md:py-[39px] w-full font-sans">
                <img
                  src={review.logo.src}
                  alt="Review"
                  className="w-[108px] h-[32.4px]"
                />
                <div className="mt-[39px] md:mt-[52px] flex items-center gap-1 text-[#F4C41E]">
                  <IconStarFilled />
                  <IconStarFilled />
                  <IconStarFilled />
                  <IconStarFilled />
                  <IconStarFilled />
                </div>
                <div className="mt-[15px] font-[11px] sm:font-xs text-primary-text">
                  {review.message}
                </div>
                <div className="mt-[22px] font-medium text-xs text-black-3">
                  {review.name}
                </div>
                <div className="text-[10px] text-shaded-gray-3">
                  {review.position}
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

export default ClutchRating;

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

const reviews = [
  {
    logo: hundai,
    name: "Natish Reddy",
    position: "JMD",
    message:
      "“UPDOT® was consistently professional and easy to work throughout. They were highly responsive and communicative, keeping the client updated on the project's progress through virtual meetings. The team was efficient and quick to understand the business needs, leading to a seamless workflow.”",
  },
  {
    logo: hundai,
    name: "Natish Reddy",
    position: "JMD",
    message:
      "“UPDOT® was consistently professional and easy to work throughout. They were highly responsive and communicative, keeping the client updated on the project's progress through virtual meetings. The team was efficient and quick to understand the business needs, leading to a seamless workflow.”",
  },
  {
    logo: hundai,
    name: "Natish Reddy",
    position: "JMD",
    message:
      "“UPDOT® was consistently professional and easy to work throughout. They were highly responsive and communicative, keeping the client updated on the project's progress through virtual meetings. The team was efficient and quick to understand the business needs, leading to a seamless workflow.”",
  },
  {
    logo: hundai,
    name: "Natish Reddy",
    position: "JMD",
    message:
      "“UPDOT® was consistently professional and easy to work throughout. They were highly responsive and communicative, keeping the client updated on the project's progress through virtual meetings. The team was efficient and quick to understand the business needs, leading to a seamless workflow.”",
  },
];
