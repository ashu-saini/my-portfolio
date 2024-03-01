import React from "react"
import { Box, Typography } from "@mui/material";
import imgSrc from "assets/profile.jpg";
import SocialLinks from "./SocialLinks";
import './header.scss'

function Header() {
  return (
    <header className="header">
      <img className="img" src={imgSrc} alt={"Ashu Saini"} />
      <Typography className="title" variant="h5">Ashu Saini</Typography>
      <Box className="social">
        <SocialLinks />
      </Box>
    </header>
  )
}

export default Header
