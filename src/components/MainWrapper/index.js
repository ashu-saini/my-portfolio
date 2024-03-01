import React from "react"
import { Box } from "@mui/material";
import Container from 'components/Container'
import Experiences  from 'components/MainWrapper/Experience'
import Skills  from 'components/MainWrapper/Skills'
import Projects  from 'components/MainWrapper/Projects'
import Contact  from 'components/MainWrapper/Contact'

import './index.scss'


function MainWrapper() {
  return (
    <Container>
      <Box className='main-wrapper'>
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
      </Box>
    </Container>
  )
}

export default MainWrapper
