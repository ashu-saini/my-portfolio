import React from "react"
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import Container from 'components/Container'
import Experiences  from 'components/MainWrapper/Experience'
import Skills  from 'components/MainWrapper/Skills'
import Projects  from 'components/MainWrapper/Projects'
import Contact  from 'components/MainWrapper/Contact'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    paddingTop: '60px',
    paddingBottom: '60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem'
  }
}))

function MainWrapper() {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.container}>
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
      </Box>
    </Container>
  )
}

export default MainWrapper
