"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerIgm1 from "@/public/images/b1.png";
import BurgerIgm2 from "@/public/images/b2.png";
import Image, { StaticImageData } from "next/image";
import { BiCycling } from "react-icons/bi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

interface BurgerSectionProps {
  imgSrc: StaticImageData;
  imgAlt: string;
  title: string;
  imgBackground: string;
}

const BurgerSection: React.FC<BurgerSectionProps> = ({
  imgSrc,
  imgAlt,
  title,
  imgBackground,
}) => (
  <div
    className={`${imgBackground} w-full h-[88vh] flex items-center justify-center flex-col md:clip_path`}
  >
    <div className="w-[90%] lg:w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2em] mx-auto">
      <Image src={imgSrc} alt={imgAlt} className="hidden md:block" />
      <div>
        <h2 className="text-[40px] font-semibold text-yellow-400">
          Bäst säljare
        </h2>
        <h2 className="text-[90px] leading-[5rem] uppercase text-white font-bold tracking-wide">
          {title}
        </h2>
        <div className="backdrop-blur-md bg-white/30 border border-white/20 p-3 rounded-lg shadow-lg mt-[10px]">
          <p className=" text-white text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima
            autem corrupti quibusdam quia, perspiciatis ad, qui quas, minus
            ipsum molestiae rerum provident adipisci? Architecto reiciendis
            consequatur vel nisi voluptates!
          </p>
        </div>
        <button
          className="mt-[2rem] px-8 py-3 text-[16px] bg-orange-500 transition-all duration-200 hover:bg-red-600 flex 
        items-center rounded-md space-x-2 text-white"
        >
          <BiCycling className="w-[1.7rem] h-[1.7rem]" />
          <span className="font-semibold">Beställ nu!</span>
        </button>
      </div>
    </div>
  </div>
);

export default function MainSlider() {
  return (
    <Carousel
      additionalTransfrom={0}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
    >
      <BurgerSection
        imgSrc={BurgerIgm1}
        imgAlt="burger 1"
        title="godaste hamburgare"
        imgBackground="bg-blue-950"
      />
      <BurgerSection
        imgSrc={BurgerIgm2}
        imgAlt="burger 2"
        title="Lorem ipsum"
        imgBackground="bg-red-950"
      />
    </Carousel>
  );
}
