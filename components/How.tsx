import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerTextContainer } from "@/variants";
import type { HowDataType } from "@/types/index";

interface HowDataPropsType {
  howData: HowDataType;
}

const How: React.FC<HowDataPropsType> = ({ howData }) => {
  const { girlImg, title, subtitle } = howData;
  return (
    <section className="mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row gap-x-10 items-center"
        >
          <motion.div variants={fadeInRight} className="flex-1">
            <Image src={girlImg} width={720} height={678} alt="img" />
          </motion.div>
          <motion.div variants={fadeInLeft} className="flex-1 flex justify-end">
            <div className="max-w-[455px]">
              <h3 className="h3">{title}</h3>
              <p className="lead">{subtitle}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default How;
