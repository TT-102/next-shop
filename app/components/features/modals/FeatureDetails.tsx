import Image, { StaticImageData } from "next/image";

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
      <div className="modal-mask" onClick={onClose}></div>
      <div className="modal-inner">
        <Image src={imgSrc} alt={title} className="detail-img"/>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
