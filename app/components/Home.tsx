import MainSlider from "./slider/MainSlider";
import Feature from "./features/Feature";
import PopularBurger from "./popularburger/PopularBurger";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <MainSlider />
      <Feature />
      <PopularBurger />
    </div>
  );
}
