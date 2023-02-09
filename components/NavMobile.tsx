import Link from "next/link";
import type { NavDataType } from '@/types/index';

function NavMobile({ navData }: any) {
  return (
    <div className="bg-accent w-full p-4">
      <ul className="flex flex-col gap-y-6">
        {navData.map((item: NavDataType, index: number) => (
          <li key={index}>
            <Link className="text-white hover:text-accent" href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavMobile;
