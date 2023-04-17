import React from "react";
import FiltersStrip from "./FiltersStrip";
import { cardInfo } from "@/pages/_app";
import Card from "./Card";

const Discussion = () => {
  return (
    <div className="md:mt-10">
      <p className="text-xl font-semibold text-red-500 mb-4">
        DISCUSSION FOURM
      </p>
      <FiltersStrip cardInfo={cardInfo} />
      <div className="flex flex-col space-y-4 overflow-y-auto h-[calc(100dvh-300px)] p-2 md:h-auto">
        {cardInfo.map((e, i) => (
          <Card tag={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Discussion;
