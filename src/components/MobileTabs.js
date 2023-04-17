import clsx from "clsx";
import React from "react";

const MobileTabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="bg-primary text-white w-[500px] flex sm:w-[300px]">
      <button
        className={clsx(
          "w-1/2 p-2",
          selectedTab === 0 && "bg-[#102b4a] border-b-4 border-b-red-300"
        )}
        onClick={() => setSelectedTab(0)}
      >
        Discussion Fourm
      </button>
      <button
        className={clsx(
          "w-1/2 p-2",
          selectedTab === 1 && "bg-[#102b4a] border-b-4 border-b-red-300"
        )}
        onClick={() => setSelectedTab(1)}
      >
        Market Stories
      </button>
    </div>
  );
};

export default MobileTabs;
