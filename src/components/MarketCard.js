import React from "react";
import Market from "../static/Market.jpg";
import Image from "next/image";

const MarketCard = () => {
  return (
    <div className="rounded w-[300px] relative xl:w-[200px] lg:w-[400px] sm:w-[300px]">
      <Image src={Market} alt="Market" className="w-[300px] rounded-xl xl:w-[200px] lg:w-[400px] sm:w-[300px]" />
      <div className="bg-black bg-opacity-60 absolute bottom-0 text-white rounded-b-xl p-2 xl:text-xs">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </div>
    </div>
  );
};

export default MarketCard;
