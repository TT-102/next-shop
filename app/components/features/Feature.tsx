"use client";
import { useState } from "react";
import Img1 from "@/public/images/f1.jpg";
import Img2 from "@/public/images/f2.jpg";
import Img3 from "@/public/images/f3.jpg";
import Image, { StaticImageData } from "next/image";
import FeatureDetails from "./modals/FeatureDetails";

interface BurgerCardProps {
  imgSrc: StaticImageData | string;
  title: string;
  description: string;
  additionalClass?: string;
  onClick?: () => void;
}

const BurgerCard: React.FC<BurgerCardProps> = ({
  imgSrc,
  title,
  description,
  additionalClass,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`card-wrapper p-6 hover:bg-white rounded-lg hover:rounded-3xl transition-all duration-200 ${additionalClass}`}
  >
    <Image src={imgSrc} alt={title} className="rounded-3xl" />
    <h3 className="font-semibold text-[20px] mt-[20px]">{title}</h3>
    <p className="mt-[0.2rem]">{description}</p>
  </div>
);

export default function Feature() {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [modalData, setModalData] = useState<{
    imgSrc: StaticImageData | string;
    title: string;
    description: string;
  } | null>(null);

  const handleCardClick = (
    imgSrc: StaticImageData | string,
    title: string,
    description: string
  ) => {
    setModalData({ imgSrc, title, description });
    setShowDetails(true);
  };

  const burgerCards = [
    {
      imgSrc: Img1,
      title: "Smashed burger",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veniam ducimus tempora deserunt magni! Temporibus, odio molestiae commodi quam nisi aperiam repellendus. Porro unde deserunt veritatis, totam accusamus vitae sit!",
    },
    {
      imgSrc: Img2,
      title: "Hamburage måltid",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veniam ducimus tempora deserunt magni! Temporibus, odio molestiae commodi quam nisi aperiam repellendus. Porro unde deserunt veritatis, totam accusamus vitae sit!",
      additionalClass: "lg:translate-y-[3rem]",
    },
    {
      imgSrc: Img3,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veniam ducimus tempora deserunt magni! Temporibus, odio molestiae commodi quam nisi aperiam repellendus. Porro unde deserunt veritatis, totam accusamus vitae sit!",
    },
  ];

  return (
    <div>
      <div className="pt-[5rem] pb-[3rem]">
        <h1 className="heading">Hamburgare tillagad med kärlek</h1>

        <div
          className="w-[100%] lg:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1
      md:grid-cols-2 lg:grid-cols-3 gap-{3rem}"
        >
          {burgerCards.map((card, index) => (
            <BurgerCard
              key={index}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
              additionalClass={card.additionalClass}
              onClick={() =>
                handleCardClick(card.imgSrc, card.title, card.description)
              }
            />
          ))}
        </div>
      </div>
      <div>
        {showDetails && modalData && (
          <FeatureDetails
            imgSrc={modalData.imgSrc}
            title={modalData.title}
            description={modalData.description}
            onClose={() => setShowDetails(false)}
          />
        )}
      </div>
    </div>
  );
}
