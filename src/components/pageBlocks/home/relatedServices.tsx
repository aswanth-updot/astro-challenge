import serviceOne from "../../../assets/home/services/one.svg";
import serviceTwo from "../../../assets/home/services/two.svg";
import serviceThree from "../../../assets/home/services/three.svg";
import ServicesBlock from "../shared/servicesCarousel";

const RelatedServices = () => {
  return (
    <ServicesBlock
      services={services}
      title="Related Services"
      desc="UI/UX design is the cornerstone of creating digital products. Think of UI as the look and feel of your digital platform."
    />
  );
};

export default RelatedServices;

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
