import Image from "next/image";
import DeliveryImage from "@/public/images/delivery.svg";
import { RiEBike2Fill } from "react-icons/ri";

export default function Delivery() {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[95%] lg:w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        <div>
          <Image src={DeliveryImage} alt="delivery figure" />
        </div>
        <div>
          <h2 className="heading">
            <span className="text-orange-500">Hemlverans</span> av din mat{" "}
          </h2>
          <p className="mt-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            incidunt qui labore deserunt assumenda, aspernatur excepturi! Vitae
            in beatae similique perspiciatis animi illo, consectetur, id quaerat
            dicta at dolorem ad.
          </p>
          <div className="flex items-center space-x-3 mt-[2rem]">
            <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />
            <h3 className="text-[18px] font-bold text-red-500">
              Gratis hemhörning från 350kr
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
