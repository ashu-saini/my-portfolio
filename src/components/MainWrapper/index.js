import React from "react"
import Experiences from "./Experience"
import Skills from "./Skills"
import Projects from "./Projects";
import Contact from "./Contact"

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles( (theme) => ({
  container: {
    width: '100%',
    paddingRight: '1rem',
    paddingLeft: '1rem',
    marginRight: 'auto',
    paddingTop: '60px',
    paddingBottom: '60px',
    marginLeft: 'auto'
  }
}))

function MainWrapper() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Experiences />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  )
}

export default MainWrapper
