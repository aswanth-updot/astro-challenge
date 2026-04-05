import one from "../../../assets/home/features/one.svg";
import two from "../../../assets/home/features/two.svg";
import three from "../../../assets/home/features/three.svg";
import four from "../../../assets/home/features/four.svg";
import five from "../../../assets/home/features/five.svg";
import six from "../../../assets/home/features/six.svg";
import seven from "../../../assets/home/features/seven.svg";
import eight from "../../../assets/home/features/eight.svg";
import IconArrow from "../../icons/arrow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import type { SvgComponent } from "astro/types";

const FeatureExpertise = () => {
  return (
    <div className="bg-primary-bg common-padding-x py-10 md:py-20">
      <div className="flex flex-col gap-3">
        <h2 className="font-sans text-primary-text font-medium text-[28px] md:text-[40px]">
          Our Feature Expertise
        </h2>
        <p className="text-primary-text font-sans font-light text-sm md:text-base">
          From Startups to Fortune 500: Our Trusted Partnerships Define
          Excellence in Digital Transformation with UPDOT
        </p>
      </div>
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 w-full gap-4 mt-12">
        {features.map(({ logo, title }) => (
          <FeatureCard logo={logo} title={title} key={title} />
        ))}
      </div>

      <div className="block sm:hidden mt-[22px]">
        <Carousel>
          <CarouselContent>
            {features
              .reduce<(typeof features)[]>((acc, _, i) => {
                if (i % 2 === 0) acc.push(features.slice(i, i + 2));
                return acc;
              }, [])
              .map((pair, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col gap-3">
                    {pair.map(({ logo, title }) => (
                      <FeatureCard key={title} logo={logo} title={title} />
                    ))}
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <div className="flex items-center w-full justify-center gap-5 mt-[39px]">
            <CarouselPrevious
              variant="outline"
              className="relative border border-blue-2 text-primary-text top-0 left-0 rounded-none translate-y-0 h-[50px] w-[50px]"
            />
            <CarouselNext
              variant="outline"
              className="relative border border-blue-2 text-primary-text top-0 left-0 rounded-none translate-y-0 h-[50px] w-[50px]"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default FeatureExpertise;

const features = [
  {
    logo: one,
    title: "Hospitality",
  },
  {
    logo: two,
    title: "Automotive",
  },
  {
    logo: three,
    title: "Information Technology",
  },
  {
    logo: four,
    title: "Realty",
  },
  {
    logo: five,
    title: "Healthcare",
  },
  {
    logo: six,
    title: "Entertainment",
  },
  {
    logo: seven,
    title: "Software",
  },
  {
    logo: eight,
    title: "Foods and Beverages",
  },
];

const FeatureCard = ({
  logo,
  title,
}: {
  logo: SvgComponent & ImageMetadata;
  title: string;
}) => {
  return (
    <div className="min-h-[104px] px-5 py-[27px] bg-white-1 hover:bg-white-2 transition-colors duration-150">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo.src} alt={title} className="w-[37px] h-[26px]" />
          <span className="font-sans text-base">{title}</span>
        </div>
        <IconArrow className="-rotate-[45deg] text-shaded-gray-2" />
      </div>
    </div>
  );
};
