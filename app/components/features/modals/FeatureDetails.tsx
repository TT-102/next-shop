import Image, { StaticImageData } from "next/image";
import styles from "./FeatureDetails.module.css";

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
        <Image src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
