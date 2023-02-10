import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, footerTruckAnim, staggerFooterContainer } from "@/variants";
import { CgArrowLongRight } from "react-icons/cg";

const Footer: React.FC<any> = ({ footerData }) => {
  const { truckImg, hillImg, text, logo, links, form } = footerData;
  return (
    <footer className="bg-darkblue lg:bg-transparent lg:bg-footer lg:bg-no-repeat lg:bg-left-bottom lg:min-h-[738px] pt-12 lg:pt-0 relative">
      <motion.div
        variants={staggerFooterContainer}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.1 }}
        className=" container mx-auto lg:min-h-[738px] flex flex-col justify-between"
      >
        <motion.div
          variants={footerTruckAnim}
          className="hidden lg:flex absolute -top-24 -left-[6.8%]"
        >
          <Image src={truckImg} width={430} height={210} alt="img" />
        </motion.div>
        <div className="hidden lg:flex absolute z-10 top-[22px] left-0">
          <Image src={hillImg} width={137} height={92} alt="img" />
        </div>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col lg:flex-row items-center lg:pr-[95px] lg:gap-x-[95px] gap-y-10 lg:gap-y-0"
        >
          <div className="flex-1 text-white border-l-[10px] border-accent py-4 lg:mt-24">
            <p className="max-w-[330px] text-[20px] leading-[30px] ml-[40px]">
              {text}
            </p>
          </div>
          <form className="w-full max-w-[550px] bg-white flex-1 rounded-[10px] lg:order-2 flex flex-col px-[35px] lg:px-[75px] py-[25px] lg:py-[52px] space-y-[40px] drop-shadow-primary">
            <div className="flex flex-col">
              <label className="font-light mb-[10px]" htmlFor="">
                {form.labelName}
              </label>
              <input
                className="input"
                type="text"
                id="name"
                placeholder={form.placeholderName}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-light mb-[10px]" htmlFor="">
                {form.labelEmail}
              </label>
              <input
                className="input"
                type="text"
                id="email"
                placeholder={form.placeholderEmail}
              />
            </div>
            <button className="btn self-start hover:bg-accent-hover transition">
              {form.btnText} <CgArrowLongRight className="text-[30px]" />
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="py-[120px] flex flex-col lg:flex-row justify-between lg:pr-24"
        >
          <div className="mb-6 mx-auto lg:mb-0 lg:mx-0">
            <Link href={"/"}>
              <Image src={logo} width={170} height={41} alt="img" />
            </Link>
          </div>
          <ul className="flex flex-col items-center lg:flex-row gap-y-4 lg:gap-y-0 gap-x-[100px] text-center">
            {links.map((item: any, index: number) => (
              <li
                key={index}
                className="text-white font-light hover:text-accent transition"
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
