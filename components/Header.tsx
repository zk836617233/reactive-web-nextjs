import type { HeroPropsType } from "@/types/index";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import { HiMenu } from "react-icons/hi";

const Header = ({ headerData, navData }: any) => {
  const { logoImgV1, logoImgV2, btnText } = headerData;
  const [header, setHeader] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white p-3 rounded-md drop-shadow-primary" : "py-[40px]"
      } fixed w-fill left-0 right-0 mx-auto max-w-[90vw] lg:max-w-[1120px] z-20 flex justify-between items-center transition-all duration-500`}
    >
      <Link href={"/"}>
        <Image
          src={header ? logoImgV2 : logoImgV1}
          width={header ? 180 : 212}
          height={50}
          alt="img"
        />
      </Link>
      <div className="hidden lg:flex gap-x-[96px]">
        <Nav navData={navData} header={header} />
        <button className="btn">{btnText}</button>
      </div>

      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setNavMobile(!navMobile)}
      >
        <HiMenu className="text-4xl text-accent-hover" />
      </div>

      <div
        className={`${
          navMobile ? "max-h-[154px]" : "max-h-0"
        } lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl transition-all`}
      >
        <NavMobile navData={navData} />
      </div>
    </header>
  );
};

export default Header;
