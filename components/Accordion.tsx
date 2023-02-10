import { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeInRight } from "@/variants";

const Accordion: React.FC<any> = ({ accordion }) => {
  const { question, answer } = accordion;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div variants={fadeInRight} className="max-w-[550px] mx-auto">
      <div
        className="drop-shadow-primary bg-white cursor-pointer rounded-[10px] h-[90px] px-[35px] flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-full flex justify-between items-center">
          <p className="lead font-medium leading-snug max-w-[400px]">
            {question}
          </p>

          <div className="duration-500 transition-all">
            {isOpen ? (
              <motion.div
                initial="initial"
                animate={{
                  rotate: 180,
                }}
              >
                <HiOutlineMinus className="text-[28px] text-accent" />
              </motion.div>
            ) : (
              <motion.div
                initial="initial"
                animate={{
                  rotate: 0,
                }}
              >
                <HiOutlinePlus className="text-[28px] text-accent" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen
            ? "max-h-[160px] p-8 bg-[#fff7f5] rounded-[10px] drop-shadow-primary my-2"
            : "max-h-0"
        } h-[160px] overflow-hidden transition-all`}
      >
        <p className="lead leading-[30px] mt-2">{answer}</p>
      </div>
    </motion.div>
  );
};

export default Accordion;
