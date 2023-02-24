/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Image/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
 
import {Link} from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Career",
      icon: <SupportAgentIcon/>,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
     ];
  return (
    <nav className="navbar">
      <Link to='Home' className="nav-logo-container">
        <img src={Logo} alt="" />
      
      </Link>
      <div className="navbar-links-container">
        <a href=""><Link to='Home' smooth={true} duration={1000}>Home</Link></a>
        <a href=""><Link to='About' smooth={true} duration={1000}>About</Link></a>
        <a href=""> <Link to='Career' smooth={true} duration={1000}>Career</Link></a>
        <a href=""> <Link to='Contact' smooth={true} duration={1000}>Contact</Link></a>
        
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 400 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
