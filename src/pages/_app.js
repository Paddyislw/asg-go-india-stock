import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";
import SideDrawer from "@/components/SideDrawer";
import { AppBar } from "@mui/material";
import Card from "@/components/Card";
import FiltersStrip from "@/components/FiltersStrip";
import MarketCard from "@/components/MarketCard";
import { useState } from "react";
import clsx from "clsx";
import Discussion from "@/components/Discussion";
import Market from "@/components/Market";
import MobileTabs from "@/components/MobileTabs";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  console.log(isOpen);
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div className="flex space-x-[100px] bg-[#f4f4f4] xl:space-x-[40px]">
        <SideDrawer setIsOpen={setIsOpen} />
        <div className="">
          <div className="hidden md:block">
            <MobileTabs
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </div>
          <div className="flex space-x-10 pt-3 lg:flex-col md:hidden">
            <Discussion />
            <Market isOpen={isOpen} />
          </div>
          <div className="hidden md:flex ">
            {selectedTab === 0 ? <Discussion /> : <Market isOpen={isOpen} />}
          </div>
        </div>
      </div>
      <div className="hidden  fixed bottom-0 h-[40px] bg-primary w-full text-white justify-between items-center md:flex py-2 px-4">
      <Footer />
      </div>
    </ThemeProvider>
  );
}

export const cardInfo = [
  { name: "Sector 1", variant: "red" },
  { name: "Sector 2", variant: "blue" },
  { name: "Sector 3", variant: "yellow" },
];
