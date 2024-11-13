import styles from "./MemberModal.module.css";
import Signin from "./Signin";
import { FaArrowUp } from "react-icons/fa6";

interface MemberModalProps {
  onClose: () => void;
}

export default function MemberModal({ onClose }: MemberModalProps) {
  return (
    <div>
      <div className={styles.modalMask} onClick={onClose}></div>
      <div className={styles.modalInner}>
        <button className={styles.closeMemberModal} onClick={onClose}>
          <FaArrowUp className={styles.icon} />
        </button>
        {/* Dynamic content */}
        <Signin />
        {/* todo create Signup */}
      </div>
    </div>
  );
}
