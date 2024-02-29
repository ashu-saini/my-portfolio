import React from "react"
import ContactInfo from "components/ContactInfo"
import { Box, Button, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import './intro.scss'

function Intro() {
  return (
    <Box className="intro-wrapper">
      <Box className="intro__text">
      <Box className="intro__text--wrapper">
        <Typography className="intro--name" variant="h1">Hey, I’m Ashu</Typography>
        <Typography className="profile-title" variant="h4">
          Full Stack Web Developer
        </Typography>
        <Typography className="profession" variant="h5">
          Experienced Web Application Developer with a demonstrated history of working in the computer software industry
        </Typography>
        </Box>
        <Button color="primary" variant="contained" className="intro__text--btn" >
        <Typography variant="h6"> Download Resume</Typography>
        <DownloadIcon></DownloadIcon>
        </Button>
      </Box>
      <ContactInfo />
    </Box>
  )
}

export default Intro
