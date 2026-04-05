import serviceOne from "../../../assets/home/services/one.svg";
import serviceTwo from "../../../assets/home/services/two.svg";
import serviceThree from "../../../assets/home/services/three.svg";
import ServicesBlock from "../shared/servicesCarousel";

const OurServices = () => {
  return (
    <ServicesBlock
      services={services}
      title="Our Services"
      desc="From Startups to Fortune 500: Our Trusted Partnerships Define Excellence in Digital Transformation with UPDOT"
    />
  );
};

export default OurServices;

const services = [
  {
    logo: serviceOne,
    title: "Web App Development",
    desc: "We believe in high-performing websites. Our experts leverage the latest architectures, We believe in high-",
  },
  {
    logo: serviceTwo,
    title: "Mobile App Development",
    desc: "We believe in high-performing websites. Our experts leverage the latest architectures, We believe in high-",
  },
  {
    logo: serviceThree,
    title: "UI/UX Design",
    desc: "We believe in high-performing websites. Our experts leverage the latest architectures, We believe in high-",
  },
  {
    logo: serviceTwo,
    title: "Digital Marketing",
    desc: "We believe in high-performing websites. Our experts leverage the latest architectures, We believe in high-",
  },
];
