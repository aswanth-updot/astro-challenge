import IconArrow from "../../icons/arrow";
import Button from "../../ui/button";
import helloBella from "../../../assets/home/payload-clients/hello-bella.svg";
import microsoft from "../../../assets/home/payload-clients/microsoft.svg";
import sonos from "../../../assets/home/payload-clients/sonos.svg";
import asics from "../../../assets/home/payload-clients/asics.svg";
import cloudflare from "../../../assets/home/payload-clients/cloudflare.svg";
import fanatics from "../../../assets/home/payload-clients/fanatics.svg";

const PayloadClients = () => {
  return (
    <div className="common-padding-x py-[71px] bg-secondary-bg">
      <div className="w-full flex items-center justify-between">
        <h2 className="font-sans text-tertiary-text font-medium text-[30px] md:text-[40px]">
          Payload is trusted by
        </h2>
        <Button
          variant="outline"
          icon={<IconArrow />}
          className="!text-xs !px-3 gap-4 !min-w-[112px] hidden md:flex"
        >
          Connect
        </Button>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-14 md:gap-20 mt-[57px] md:mt-[110px] max-w-[969px] mx-auto">
        {Clients.map(({ name, logo }) => (
          <img
            src={logo.src}
            width="169"
            height="35"
            alt={name}
            className="h-auto w-[89px] md:w-[169px]"
          />
        ))}
      </div>
      <Button
        variant="outline"
        icon={<IconArrow />}
        className="text-xs px-3 gap-4 min-w-[112px] flex md:hidden mx-auto mt-[50px]"
      >
        Connect
      </Button>
    </div>
  );
};

export default PayloadClients;

const Clients = [
  {
    name: "Hello Bella",
    logo: helloBella,
  },
  {
    name: "microsoft",
    logo: microsoft,
  },
  {
    name: "sonos",
    logo: sonos,
  },
  {
    name: "asics",
    logo: asics,
  },
  {
    name: "cloudflare",
    logo: cloudflare,
  },
  {
    name: "fanatics",
    logo: fanatics,
  },
];
