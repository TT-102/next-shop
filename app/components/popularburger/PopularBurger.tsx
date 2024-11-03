"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCard from "./BurgerCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const burgerData = [
  {
    title: "Beefy Bite",
    image: "/images/b1.png",
    reviews: "6",
    price: "100 kr",
  },
  {
    title: "Juicy Delight",
    image: "/images/b2.png",
    reviews: "8",
    price: "130 kr",
  },
  {
    title: "Mega Burger",
    image: "/images/b3.png",
    reviews: "10",
    price: "120 kr",
  },
  {
    title: "Mega Burger",
    image: "/images/b4.png",
    reviews: "8",
    price: "120 kr",
  },
  {
    title: "Mega Burger",
    image: "/images/b5.png",
    reviews: "10",
    price: "120 kr",
  },
  {
    title: "Mega Burger",
    image: "/images/b6.png",
    reviews: "15",
    price: "120 kr",
  },
  {
    title: "Mega Burger",
    image: "/images/b7.png",
    reviews: "8",
    price: "120 kr",
  },
  {
    title: "Mega Burger",
    image: "/images/b8.png",
    reviews: "10",
    price: "120 kr",
  },
  {
    title: "Mega Burger",
    image: "/images/b9.png",
    reviews: "12",
    price: "120 kr",
  },
];

export default function PopularBurger() {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h2 className="heading">
        Bästa <span className="text-orange-500">hamburgare</span>
      </h2>

      <div className="w-[95%] lg:w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          {burgerData.map((burger, index) => (
            <BurgerCard
              key={index}
              title={burger.title}
              image={burger.image}
              reviews={burger.reviews}
              price={burger.price}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
