import React from "react";
import MarketCard from "./MarketCard";
import clsx from "clsx";

const Market = ({isOpen}) => {
  return (
    <div className="lg:mt-10">
      <p className="text-xl font-semibold text-red-500 mb-4">MARKET STORIES</p>
      <div
        className={clsx(
          "grid  gap-6 mt-12 h-[calc(100dvh-300px)] overflow-y-auto 2xl:grid-cols-1 lg:h-auto",
          isOpen ? "grid-cols-1 " : "grid-cols-2"
        )}
      >
        {Array(6)
          .fill(1)
          .map((e, i) => (
            <MarketCard key={i} />
          ))}
      </div>
    </div>
  );
};

export default Market;
