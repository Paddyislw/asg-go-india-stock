import { NotificationIcon } from "@/static/Svg";
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { ExpandMore, StarBorder } from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import PaidIcon from "@mui/icons-material/Paid";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const SideDrawer = ({ setIsOpen }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [open, setOpen] = React.useState({ Dis: false, Mar: false });

  const handleClick = () => {
    setOpen(prev);
  };
  const drawerWidth = 240;
  return (
    <div className="flex h-[calc(100dvh-60px)] sticky top-[60px] md:fixed z-50 md:h-[calc(100dvh-100px)]">
      {openDrawer && (
        <Box className="bg-primary shadow-2xl shadow-primary" sx={{ color: "white" }}>
          <div className="w-[250px]  p-2">
            <div className="flex justify-between items-center">
              <Avatar sx={{ width: 30, height: 30 }} />
              <p className="text-[#fff]">Hello, User</p>
              <NotificationIcon />
            </div>
          </div>
          <Divider className="bg-[#fff]" />
          <ListItemButton
            onClick={(prev) => setOpen((prev) => ({ ...prev, Dis: !prev.Dis }))}
          >
            <ListItemIcon>
              <ChatIcon className="text-[#fff]" />
            </ListItemIcon>
            <ListItemText primary="Discussion Fourm" />
            {open.Dis ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open.Dis} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <div className="pl-20">
                {DrawerList[0].items.map((e, i) => (
                  <ListItemText key={i} primary={e} />
                ))}
              </div>
            </List>
          </Collapse>
          <ListItemButton
            onClick={(prev) => setOpen((prev) => ({ ...prev, Mar: !prev.Mar }))}
          >
            <ListItemIcon>
              <PaidIcon className="text-[#fff]" />
            </ListItemIcon>
            <ListItemText primary="Market Stories" />
            {open.Mar ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open.Mar} timeout="auto" unmountOnExit>
            <List>
              <div className="pl-20">
                {DrawerList[1].items.map((e, i) => (
                  <ListItemText key={i} primary={e} />
                ))}
              </div>
            </List>
          </Collapse>
        </Box>
      )}
      <div className="flex items-center">
        <button
          onClick={(e) => {
            setOpenDrawer((prev) => !prev);
            setIsOpen(!openDrawer);
          }}
          className="bg-primary h-24 rounded-tr-lg rounded-br-lg"
        >
          {openDrawer ? (
            <ArrowLeftIcon sx={{ color: "white" }} />
          ) : (
            <ArrowRightIcon sx={{ color: "white" }} />
          )}
        </button>
      </div>
    </div>
  );
};

const DrawerList = [
  {
    name: "Discussion Fourm",
    items: ["General", "Introductions", "News", "Politics", "Science", "Arts"],
  },
  {
    name: "Market Stories",
    items: ["Sentiment", "Market", "Sector", "WatchList", "Events", "News"],
  },
];

export default SideDrawer;
