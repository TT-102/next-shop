import Image, { StaticImageData } from "next/image";
import styles from "./FeatureDetails.module.css";
import { FaArrowUp } from "react-icons/fa6";

interface FeatureDetailsProps {
  imgSrc: StaticImageData | string;
  title: string;
  description: string;
  onClose: () => void;
}

export default function FeatureDetails({
  imgSrc,
  title,
  description,
  onClose,
}: FeatureDetailsProps) {
  return (
    <div>
      <div className={styles.modalMask} onClick={onClose}></div>
      <div className={styles.modalInner}>
        <button className={styles.closeMemberModal} onClick={onClose}>
          <FaArrowUp className={styles.icon} />
        </button>
        {/* todo add close icon */}
        <Image src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
