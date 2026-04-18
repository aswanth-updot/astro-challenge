import IconBubbleHeadset from "../../icons/bubble-headset";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import Button from "../../ui/button";

const FaqBlock = () => {
  return (
    <div className="common-padding-x py-20 md:py-[108px] bg-primary-bg font-sans">
      <h2 className="text-primary-text font-sans font-medium text-2xl sm:text-[32px] md:text-[40px]">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-11 mt-12">
        <div className="w-full lg:col-span-2">
          <Accordion type="single" collapsible defaultValue="item-1">
            {faqs.map((fq) => (
              <AccordionItem value={fq.ans} className="cursor-pointer mb-5">
                <AccordionTrigger className="font-light text-lg md:text-xl font-sans pb-5">
                  {fq.qstn}
                </AccordionTrigger>
                <AccordionContent className="font-light text-sm md:text-base font-sans">
                  {fq.ans}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="w-full bg-white-3 px-[22px] py-6 pb-14 h-fit">
          <IconBubbleHeadset />
          <p className="font-light text-xs text-primary-text mt-[11px] mb-[41px]">
            UI/UX design is the cornerstone of creating digital products. Think
            of UI as the look and feel of your digital platform, while UX
            focuses on the overall experience and usability.
          </p>
          <Button variant="primary" className="text-sm">
            Schedule a call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FaqBlock;

const faqs = [
  {
    qstn: "What is UI/UX Design, and Why is it Vital for My Business?",
    ans: "UI/UX design is the cornerstone of creating digital products. Think of UI as the look and feel of your digital platform, while UX focuses on the overall experience and usability. A good UI/UX design is not just about one.",
  },
  {
    qstn: "What is UI/UX Design, and Why is it Vital for My Business?",
    ans: "UI/UX design is the cornerstone of creating digital products. Think of UI as the look and feel of your digital platform, while UX focuses on the overall experience and usability. A good UI/UX design is not just about two.",
  },
  {
    qstn: "What is UI/UX Design, and Why is it Vital for My Business?",
    ans: "UI/UX design is the cornerstone of creating digital products. Think of UI as the look and feel of your digital platform, while UX focuses on the overall experience and usability. A good UI/UX design is not just about three.",
  },
  {
    qstn: "What is UI/UX Design, and Why is it Vital for My Business?",
    ans: "UI/UX design is the cornerstone of creating digital products. Think of UI as the look and feel of your digital platform, while UX focuses on the overall experience and usability. A good UI/UX design is not just about four.",
  },
  {
    qstn: "What is UI/UX Design, and Why is it Vital for My Business?",
    ans: "UI/UX design is the cornerstone of creating digital products. Think of UI as the look and feel of your digital platform, while UX focuses on the overall experience and usability. A good UI/UX design is not just about five.",
  },
];
