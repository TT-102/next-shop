import { FaBurger } from "react-icons/fa6";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";
// import { BsBagHeartFill } from "react-icons/bs";
import { HiBars3BottomRight } from "react-icons/hi2";
import MemberModal from "./membership/MemberModal";
import { useState } from "react";

interface Props {
  openNav: () => void;
}

export default function Nav({ openNav }: Props) {
  const [showMemberModal, handleMemberModal] = useState<boolean>(false);
  return (
    <div className="h-[8vh] bg-white">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] item-center justify-between">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />
          <h2 className="text-[20px] sm:text-[30px] font-semibold">NextShop</h2>
        </div>

        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[18px] font-medium hover:text-orange-600 tracking-wide">
            <Link href="/">HEM</Link>
          </li>
          <li className="text-[18px] font-medium hover:text-orange-600 tracking-wide">
            <Link href="/">BUTIK</Link>
          </li>
          <li className="text-[18px] font-medium hover:text-orange-600 tracking-wide">
            <Link href="/">MENY</Link>
          </li>
          <li className="text-[18px] font-medium hover:text-orange-600 tracking-wide">
            <Link href="/">KONTAKT</Link>
          </li>
        </ul>

        {/* todo: fix style for mobile */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleMemberModal(true)}
            style={{ color: "rgb(32, 32, 32)", fontSize: "40px" }}
          >
            <span>
              <IoPersonCircleOutline />
            </span>
          </button>

          {/* todo fix this later */}
          {/* <button
            className="px-4 sm:px-6 sm:py-3 text-[14px] sm:text-[16px] bg-orange-600 
          transition-all duration-200 hover:bg-red-600 flex items-center rounded-md space-x-2 text-white"
          >
            <span>
              <BsBagHeartFill className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]" />
            </span>
          </button> */}

          <HiBars3BottomRight
            onClick={openNav}
            className="lg:hidden w-[2rem] h-[2rem]"
          />
        </div>
      </div>
      {/* For membership */}
      {showMemberModal && (
        <MemberModal onClose={() => handleMemberModal(false)} />
      )}
    </div>
  );
}
