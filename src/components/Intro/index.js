import React from "react"
import ContactInfo from "components/ContactInfo"
import { Box, Button, Typography } from "@mui/material"
import './intro.scss'

function Intro() {
  return (
    <Box className="intro-wrapper">
      <Box>
        <Typography variant="h1">Hey, I’m Shamko</Typography>
        <Typography variant="h4">Freelance Creative & Professional
        <br/>
        Graphics Designer
        </Typography>
        <Button color="primary" variant="contained">Hire Me</Button>
      </Box>
      <ContactInfo />
    </Box>
  )
}

export default Intro
