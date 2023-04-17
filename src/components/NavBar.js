import { Avatar, Button, TextField } from "@mui/material";
import React from "react";
import { SearchIcon } from "@/static/Svg";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-6 border-b sm:px-1 h-[60px] sticky top-0 bg-white z-50">
      <div>
        <p className="text-primary font-bold">Go India Stocks</p>
      </div>
      <div>
        <TextField
          InputProps={{ endAdornment: <SearchIcon /> }}
          className="w-[500px] bg-[#e0e0e0] lg:w-[300px] sm:w-[180px]"
          inputProps={{ style: { padding: '8px 4px'} }}
        />
      </div>
      <div className="space-x-2 md:hidden">
        <Button variant="text" className="text-xs font-bold">Contact Us</Button>
        <Button variant="outlined"  className="text-xs font-bold">Sign Up</Button>
        <Button variant="outlined" className="text-xs font-bold">Sign In</Button>
      </div>
      <div className="hidden md:block">
        <Avatar/>
      </div>
    </div>
  );
};

export default NavBar;
