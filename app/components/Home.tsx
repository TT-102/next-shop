import MainSlider from "./slider/MainSlider";
import Feature from "./features/Feature";
import PopularBurger from "./popularburger/PopularBurger";
import Delivery from "./delivery/Delivery";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <MainSlider />
      <Feature />
      <PopularBurger />
      <Delivery />
      <Footer />
    </div>
  );
}
