import React from "react"
import "./App.css"
import ThemeContainer from "./Theme"
import TopBar from "./components/TopBar"
import Intro from "./components/Intro"
import ContactInfo from "./components/ContactInfo"
import MainWrapper from "./components/MainWrapper"

function App() {
  return (
    <ThemeContainer>
      <TopBar />
      <Intro />
      <ContactInfo />
      <MainWrapper />
    </ThemeContainer>
  )
}

export default App
