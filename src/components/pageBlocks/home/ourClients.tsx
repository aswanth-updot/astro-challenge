import chaumet from "../../../assets/home/clients/chaumet.svg";
import remax from "../../../assets/home/clients/remax.svg";
import kia from "../../../assets/home/clients/kia.svg";
import karma from "../../../assets/home/clients/karma.svg";
import ge from "../../../assets/home/clients/ge.svg";
import hisense from "../../../assets/home/clients/hisense.svg";
import novo from "../../../assets/home/clients/novo.svg";
import synamedia from "../../../assets/home/clients/synamedia.svg";
import modon from "../../../assets/home/clients/modon.svg";
import barbeque from "../../../assets/home/clients/barbeque.svg";

const OurClients = () => {
  return (
    <div className="common-padding-x bg-secondary-bg font-sans text-secondary-text py-10 md:py-14">
      <h2 className="text-start sm:text-center font-medium text-[32px] md:text-[40px]">
        Our Clientele
      </h2>
      <p className="mt-3 text-xs md:text-base text-start sm:text-center">
        Building Success Stories with <strong>Fortune 500 and Beyond</strong>
      </p>
      <div className="mt-[80px] md:mt-[100px] grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-20 max-w-[1300px] mx-auto">
        {clients.map(({ logo }) => (
          <div
            key={logo.src}
            className="w-full flex justify-center items-center"
          >
            <img
              src={logo.src}
              alt="Logo"
              className="w-auto h-auto max-w-[120px] sm:max-w-[163px] m-auto opacity-60 hover:opacity-100 transition-opacity duration-150"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;

const clients = [
  {
    logo: barbeque,
  },
  {
    logo: chaumet,
  },
  {
    logo: remax,
  },
  {
    logo: kia,
  },
  {
    logo: karma,
  },
  {
    logo: ge,
  },
  {
    logo: hisense,
  },
  {
    logo: novo,
  },
  {
    logo: modon,
  },
  {
    logo: synamedia,
  },
];
