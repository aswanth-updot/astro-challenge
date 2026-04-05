import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { cn } from "../../ui/utils";
import type { SvgComponent } from "astro/types";

const ServicesBlock: React.FC<{
  services: {
    logo: SvgComponent & ImageMetadata;
    title: string;
    desc: string;
  }[];
  title: string;
  desc: string;
}> = ({ services, title, desc }) => {
  return (
    <div className="bg-secondary-bg py-[66px] md:py-[113px]">
      <Carousel opts={{ dragFree: true }}>
        <div className="flex justify-between items-end w-full common-padding-x">
          <div className="flex flex-col gap-3">
            <h2 className="font-sans text-tertiary-text font-medium text-[30px] md:text-[40px]">
              {title}
            </h2>
            <p className="text-secondary-text font-sans font-light text-sm md:text-base">
              {desc}
            </p>
          </div>
          <Handlers className="hidden md:flex" />
        </div>
        <CarouselContent className="mt-[79px] ml-5 sm:ml-[48px] md:ml-[68px]">
          {services.map((service) => (
            <CarouselItem
              key={service.title}
              className="cursor-grab select-none text-secondary-text basis-[calc(1/1.3*100%)] sm:basis-1/2 lg:basis-1/3 w-[416px] min-h-[297px] sm:min-h-[217px] bg-shaded-black mx-3"
            >
              <div className="w-full h-full flex flex-col justify-center items-start px-5 md:px-[50px] py-6 md:py-11">
                <img
                  src={service.logo.src}
                  alt={service.title}
                  height={65}
                  width={72}
                  className="h-[65px] w-auto"
                />
                <h3 className="text-base md:text-xl font-medium font-sans mt-[33px] mb-3">
                  {service.title}
                </h3>
                <p className="text-xs font-sans font-extralight">
                  {service.desc}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <Handlers className="flex md:hidden mt-[50px] justify-center" />
      </Carousel>
    </div>
  );
};

export default ServicesBlock;

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
