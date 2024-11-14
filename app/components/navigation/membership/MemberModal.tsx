import { useState } from "react";
import CreateAccount from "./CreateAccount";
import styles from "./MemberModal.module.css";
import Signin from "./Signin";
import { FaBurger } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

interface MemberModalProps {
  onClose: () => void;
}

export default function MemberModal({ onClose }: MemberModalProps) {
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const toggleContent = () => {
    setShowCreateAccount((prev) => !prev);
  };
  return (
    <div>
      <div className={styles.modalMask} onClick={onClose}></div>
      <div className={styles.modalInner}>
        <button className={styles.closeMemberModal} onClick={onClose}>
          <FaArrowUp className={styles.icon} />
        </button>

        {/* logo */}
        <div
          className="flex items-center space-x-2 justify-center heading"
          style={{ marginBottom: "10px" }}
        >
          <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />
          <h2 className="text-[20px] sm:text-[30px] font-semibold">NextShop</h2>
        </div>

        {showCreateAccount ? (
          <CreateAccount toggleContent={toggleContent} />
        ) : (
          <Signin toggleContent={toggleContent} />
        )}
        {/* Dynamic content */}

        {/* todo create Signup */}
      </div>
    </div>
  );
}
