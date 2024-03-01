import React from "react"
import "./App.css"
import { Box } from "@mui/material"
import Header from "components/Header"
import Intro from "components/Intro"
import MainWrapper from "components/MainWrapper"
import ThemeContainer from "Theme"

function App() {
  return (
    <ThemeContainer>
      <Box>
        <Header />
      </Box>
      <Box><Intro /></Box>
      <MainWrapper />
    </ThemeContainer>
  )
}

export default App
