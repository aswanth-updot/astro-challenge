import bgImage from "../../../assets/home/partners-bg.png";
import payloadWhite from "../../../assets/payload-white.svg";
import updotWhite from "../../../assets/updot-white.svg";

const PayloadPartners = () => {
  return (
    <div className="common-padding-x py-10 md:py-[71px] bg-secondary-bg relative">
      <img
        src={bgImage.src}
        alt={"Background"}
        width={1200}
        height={592}
        className="absolute left-0 top-0 w-full h-full z-0"
      />
      <div className="text-secondary-text flex flex-col justify-center items-center w-full relative z-10 max-w-[1022px] mx-auto">
        <h2 className="font-sans text-center text-[30px] md:text-[40px]">
          Official Payload Partners
        </h2>
        <p className="font-sans font-light text-center text-sm md:text-base mt-8 mb-[66px] md:mb-[106px]">
          UI/UX design is the cornerstone of creating digital products. Think of
          UI as the look and feel of your digital platform.UI/UX design is the
          cornerstone of creating digital products. Think of UI as the look and
          feel of your digital platform.UI/UX design is the cornerstone of
          creating digital products.
        </p>
        <div className="flex flex-col md:flex-row mx-auto items-center gap-5 md:gap-[95px]">
          <img
            src={updotWhite.src}
            alt={"updot"}
            width={220}
            height={35}
            className="h-[26px] md:h-[35px] w-auto"
          />
          <p className="font-montserrat text-[42px] md:text-[58px]">X</p>
          <img
            src={payloadWhite.src}
            alt={"payload"}
            width={220}
            height={53}
            className="h-[39px] md:h-[53px] w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PayloadPartners;
