import { ImCross } from "react-icons/im";
import Link from "next/link";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

export default function MobileNav({ showNav, closeNav }: Props) {
  const navStyle = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div
      className={`${navStyle} fixed right-0 transition-all duration-500 left-0 top-0 bottom-0 h-[100vh] 
    bg-[#000000e0] z-[1002]`}
      onClick={closeNav}
    >
      <ImCross
        onClick={closeNav}
        className="absolute top-[2rem] left-[2rem] w-[2rem] h-[2rem] text-white"
      />

      <div
        className={`${navStyle} bg-emerald-700 transition-all duration-500 delay-200 flex flex-col items-center
      justify-center w-[78%] h-[100%] right-0 absolute`}
      >
        <ul className="space-y-10">
          <li className="text-[18px] font-medium tracking-wide text-white">
            <Link href="/">HEM</Link>
          </li>
          <li className="text-[18px] font-medium tracking-wide text-white">
            <Link href="/about">OM OSS</Link>
          </li>
          <li className="text-[18px] font-medium tracking-wide text-white">
            <Link href="/">MENY</Link>
          </li>
          <li className="text-[18px] font-medium tracking-wide text-white">
            <Link href="/">KONTAKT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
