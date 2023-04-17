import { Avatar, Chip } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useState } from "react";
import clsx from "clsx";

const Card = ({ image, tag }) => {
  const [showImg, setShowImg] = useState(false);
  return (
    <div
      className={clsx(
        "rounded-xl shadow-xl h-[180px] w-[600px] py-2 px-10 border bg-white 2xl:w-[500px] xl:w-[420px] xl:h-[200px] lg:w-[500px] sm:w-[300px] sm:px-1 sm:h-[220px]",
        // showImg && "h-[300px]"
      )}
      onClick={() => setShowImg((prev) => !prev)}
    >
      <p className="text-right text-blue-600">2 mins ago</p>
      {/* {showImg && (
        <div>
          <p className="text-center text-9xl">HHHH</p>
        </div>
      )} */}

      <div className="flex space-x-4">
        <div>
          <Avatar />
        </div>
        <div>
          <div className="flex space-x-2 items-center">
            <p className="font-bold">Lorem ipsum</p>
            <Chip
              label={tag.name}
              sx={{ background: colorsOfChip[tag.variant], color: "white" }}
            />
          </div>
          <p className="my-3">
            Lorem ipsum is simply dummy text of the printing and typesettin
            industry. Lorem ipsum is
          </p>
          <div className="flex justify-between">
            <FavoriteBorderIcon />
            <RemoveRedEyeOutlinedIcon />
            <ChatBubbleOutlineOutlinedIcon />
            <ShareOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

const colorsOfChip = {
  red: "#af271e",
  blue: "#2359a2",
  yellow: "#ecca5b",
};

export default Card;
