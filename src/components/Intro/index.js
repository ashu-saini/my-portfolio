import React from "react"
import ContactInfo from "components/ContactInfo"
import { Box, Button, Typography } from "@mui/material"
import './intro.scss'

function Intro() {
  return (
    <Box className="intro-wrapper">
      <Box className="intro__text">
        <Box className="intro__text--wrapper">
        <Typography className="intro--name" variant="h1">Hey, I’m Shamko</Typography>
        <Typography className="profession" variant="h4">Freelance Creative & Professional
        <br/>
        Graphics Designer
        </Typography>
        </Box>
        <Button className="intro__text--btn" color="primary" variant="contained">Hire Me</Button>
      </Box>
      <ContactInfo />
    </Box>
  )
}

export default Intro
