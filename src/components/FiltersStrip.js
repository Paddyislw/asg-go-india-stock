import { SearchIcon } from "@/static/Svg";
import { Chip, TextField } from "@mui/material";
import React from "react";

const FiltersStrip = ({ cardInfo }) => {
  return (
    <div className="h-[100px]">
      <p className="font-bold mb-1">Fitlers</p>
      <div className="rounded-xl border shadow justify-between flex items-center p-2 bg-white">
        {cardInfo.map((e, i) => (
          <Chip
            label={e.name}
            sx={{ background: colorsOfChip[e.variant], color: "white" }}
            key={i}
            className="sm:w-[60px] sm:text-[8px] sm:p-0"
          />
        ))}
        <TextField
          InputProps={{ startAdornment: <SearchIcon /> }}
          className="w-[200px] bg-[#e0e0e0] sm:w-[100px]"
          inputProps={{ style: { padding: "8px 4px" } }}
          placeholder="Search Here..."
        />
      </div>
    </div>
  );
};

const colorsOfChip = {
  red: "#af271e",
  blue: "#2359a2",
  yellow: "#ecca5b",
};
export default FiltersStrip;
