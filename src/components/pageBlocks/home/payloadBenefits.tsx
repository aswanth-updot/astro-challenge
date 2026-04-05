import IconBullet from "../../icons/bullet";
import PayloadAdvs from "../../../assets/home/payload-adv.svg";

const PayloadBenefits = () => {
  return (
    <div className="bg-primary-bg">
      <div className="pb-[43px] pt-[66px] lg:pb-[113px] lg:pt-[113px] common-padding-x">
        <div className="flex flex-col gap-3">
          <h2 className="font-sans text-primary-text font-medium text-[30px] md:text-[40px]">
            Benefits of Payload
          </h2>
          <p className="text-primary-text font-sans font-light text-sm md:text-base">
            From Startups to Fortune 500: Our Trusted Partnerships Define
            Excellence in Digital Transformation with UPDOT
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-[23px] mt-8 md:mt-16">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-[23px]">
            {benefits.map(({ desc, title }, index) => (
              <div
                key={index}
                className="px-6 sm:px-[31px] py-[39px] text-primary-text border border-shaded-black"
              >
                <div className="flex items-center gap-2">
                  <IconBullet className="text-[#229EFF]" />
                  <p className="text-xl font-medium">{title}</p>
                </div>
                <p className="mt-4 text-xs md:text-sm font-light">{desc}</p>
              </div>
            ))}
          </div>

          <div className="hidden lg:block lg:col-span-2">
            <img
              src={PayloadAdvs.src}
              alt={"Advantages of payload"}
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="block lg:hidden w-full">
        <img
          src={PayloadAdvs.src}
          alt={"Advantages of payload"}
          width={400}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default PayloadBenefits;

const benefits = [
  {
    title: "Web development",
    desc: "We believe in high-performing websites. Our experts leverage the latest architectures, We believe in high",
  },
  {
    title: "Web development",
    desc: "We believe in high-performing websites. Our experts leverage the latest architectures, We believe in high",
  },
  {
    title: "Web development",
    desc: "We believe in high-performing websites. Our experts leverage the latest architectures, We believe in high",
  },
  {
    title: "Web development",
    desc: "We believe in high-performing websites. Our experts leverage the latest architectures, We believe in high",
  },
  {
    title: "Web development",
    desc: "We believe in high-performing websites. Our experts leverage the latest architectures, We believe in high",
  },
  {
    title: "Web development",
    desc: "We believe in high-performing websites. Our experts leverage the latest architectures, We believe in high",
  },
];
