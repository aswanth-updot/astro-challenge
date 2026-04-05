import IconArrow from "../../icons/arrow";
import Button from "../../ui/button";
import payloadLogo from "../../../assets/payload.svg";
import heroImage from "../../../assets/home/hero.png";

const HomeHero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full py-20 md:py-[40px]">
      <div className="common-padding-x flex flex-col w-full md:pt-20">
        <img
          src={payloadLogo.src}
          width="195"
          height="44"
          alt="Payload Logo"
          className="h-auto w-[190px] md:w-[195px]"
        />
        <h1 className="font-devanagari text-3xl md:text-[44px] text-primary leading-9 md:leading-12 mt-[25px] md:mt-9">
          PAYLOAD CMS DEVELOPMENT
        </h1>
        <p className="my-5 md:my-8 font-sans text-sm md:text-base font-light">
          UI/UX design is the cornerstone of creating digital products. Think of
          UI as the look and feel of your digital platform.UI/UX design is the
          cornerstone of creating digital products. Think of UI as the look and
          feel of your digital platform.UI/UX design is the cornerstone of
          creating digital products. Think of UI as the look and feel of your
          digital platform.
        </p>
        <Button
          variant="primary"
          icon={<IconArrow className="-rotate-12" />}
          className="w-max"
        >
          Let's chat
        </Button>
      </div>
      <div className="w-full">
        <img
          src={heroImage.src}
          width="195"
          height="469"
          alt="Payload Logo"
          className="w-full h-auto sm:h-full xl:h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HomeHero;
