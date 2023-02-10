import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  staggerTextContainer,
  staggerAccordionContainer,
} from "@/variants";
import type { FaqDataType, AccordionsType } from "@/types/index";
import Accordion from "@/components/Accordion";
import Image from "next/image";
interface FaqDataPropsType {
  faqData: FaqDataType;
}

const Faq: React.FC<FaqDataPropsType> = ({ faqData }) => {
  const { title, pretitle, boyImg, accordions } = faqData;
  return (
    <section className="min-h-[1150px] lg:bg-faq bg-no-repeat bg-right-top lg:pt-40 lg:pb-24 mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.4 }}
          className="relative flex flex-col lg:flex-row justify-center lg:justify-start items-center pt-8 pb-16 lg:pt-16 lg:pb-32"
        >
          <motion.div variants={fadeInRight} className="lg:w-[45%]">
            <h3 className="h3">{pretitle}</h3>
            <h2 className="h2 mb-6 lg:mb-12">{title}</h2>
          </motion.div>
          <motion.div variants={fadeInLeft} className="lg:absolute lg:-right-16 lg:-top-16">
            <Image src={boyImg} width={708} height={498} alt="img" />
          </motion.div>
        </motion.div>
        <motion.div
          variants={staggerAccordionContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[10px]"
        >
          {accordions.map((accordion: AccordionsType, index: number) => {
            return <Accordion accordion={accordion} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
