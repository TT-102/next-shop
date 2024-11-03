import { BiPhone } from "react-icons/bi";
import Reservation from "./Reservation";

export default function Footer() {
  return (
    <div
      className="pt-[5rem] relative mt-[2rem] pb-[5rem] mb-[3rem] bg-center bg-cover
    bg-[url('/images/bg-black.jpg')]"
    >
      <div className="absolute w-full h-full bg-[000000a6] top-0 left-0 right-0 bottom-0"></div>
      <div className="w-[90%] lg:w-[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]">
        <div>
          <h2 className="backdrop-blur-md bg-black/60 rounded-lg pl-[15px] text-[30px] md:text-[40px] text-white font-bold leading-[3rem] md:leading-[4rem]">
            Goda hamburgare!
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            ipsum vero iste vel dolore odit alias ducimus tempore optio sunt cum
            dolorem, mollitia quaerat fuga. Rem, amet iure! Fuga, ratione?
          </p>
          <div className="flex mt-[2rem] items-center space-x-4">
            <div className="w-[3rem] h-[3rem] bg-orange-600 rounded-full flex items-center justify-center flex-col">
              <BiPhone className="w-[1.7rem] h-[1.7rem] text-white" />
            </div>
            <div>
              <p className="text-[20px] text-white font-semibold">Ring oss</p>
              <p className="text-[25px] text-orange-600 text-white font-bold">
                0123 123 123
              </p>
            </div>
          </div>
          <div>
            <p className="text-[20px] text-white font-semibold mt-[2rem]">
              Öppettider
            </p>
            <p className="text-[25px] text-white font-semibold">
              Mån - fre: 08- 20:00
            </p>
            <p className="text-[25px] text-white font-semibold">
              Lör - sön: 11- 21:00
            </p>
          </div>
        </div>

        <Reservation />
      </div>
    </div>
  );
}
