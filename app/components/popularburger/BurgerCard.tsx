import Image from "next/image";
import { BsBagHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

interface Props {
  title: string;
  image: string;
  price: string;
  reviews: string;
}

export default function BurgerCard({ title, image, price, reviews }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg m-3">
      <div className="w-[200px] mx-auto h-[200px]">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-[100%] h-[100%] object-cover"
        />
      </div>

      <h3 className="mt-[1.3rem] text-[25px] font-semibold">{title}</h3>
      <div className="flex items-center mt-[0.5rem] space-x-3">
        <div className="flex items-center">
          <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
        </div>
        <div className="opacity-60">({reviews})</div>
      </div>
      <p className="mt-[0.5rem] ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        modi minima facere quod, soluta voluptatum corporis obcaecati numquam
        deleniti in. Vero quam praesentium repudiandae necessitatibus natus unde
        delectus error exercitationem.
      </p>

      <div className="flex mt-[1.4rem] items-center justify-between">
        <h4 className="text-[20px] font-bold text-red-600">{price}</h4>
        <button
          className="px-4 py-2 hover:bg-red-600 transition-all duration-200 bg-orange-600 
        flex items-center rounded-md text-white"
        >
          <BsBagHeartFill className="w-[1.3rem] h-[1.3rem]" />
        </button>
      </div>
    </div>
  );
}
