import Link from "next/link";
import type { NavDataType } from "@/types/index";
function Nav({ navData, header }: any) {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-[96px]">
        {navData.map((item: NavDataType, index: number) => (
          <li key={index}>
            <Link
              className={`${
                header ? "text-primary" : "text-white"
              } cursor-pointer hover:text-accent-hover transition`}
              href={item.href}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
