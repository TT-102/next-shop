import { GrRestaurant } from "react-icons/gr";

export default function Reservation() {
  return (
    <div className="bg-green-700 p-6 rounded-lg">
      <GrRestaurant className="w-[5rem] h-[5rem] text-white mt-[1rem] md:mt-[2rem] mx-auto" />
      <h3 className="text-center text-white font-bold uppercase text-[30px] md:text-[40px] mt-[0.5rem]">
        Boka bord
      </h3>
      <div className="mt-[2rem]">
        <div
          className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center w-[100%] mx-auto 
          ustify-between md:gap-8"
        >
          <select
            className="w-[100%] px-5 py-3 bg-transparent rounded-lg outline-none font-bold border-[2px] 
            text-white border-gray-100"
            name="people"
            id="people"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <input
            type="date"
            className="w-[100%] px-5 py-2.5 bg-transparent rounded-lg outline-none font-bold border-[2px] 
            text-white border-gray-100"
          />
        </div>
        <input
          type="time"
          className="w-[100%] px-5 py-2.5 bg-transparent block w-[100%] mx-auto mt-[1rem] rounded-lg outline-none font-bold 
            border-[2px] text-white border-gray-100"
        />
        <div className="mt-[2rem] w-[100%] text-center mx-auto">
          <button className="px-8 py-3 rounded-lg mb-[3rem] w-full bg-orange-600 text-white font-bold hover:bg-red-600">
            Boka
          </button>
        </div>
      </div>
    </div>
  );
}
