import React from "react"

import { makeStyles } from "@mui/styles";
import { Paper } from "@mui/material";

const useStyles = makeStyles( (theme) => ({
  section: {
    padding: '45px',
    // marginBottom: '45px',
    borderRadius: '2px',
    backgroundClip: 'padding-box',
    width: '80%'
  },
  title: {
    marginTop: '0px',
    marginBottom: '45px',
    fontSize: '24px',
    textAlign: 'center'
  }
}))

const Section = (props) => {
  const classes = useStyles(makeStyles)
  return (
      <Paper className={`${props.className} ${classes.section}`}>
        <h2 className={classes.title}>{props.title}</h2>
        {props.children}
      </Paper>
  )
}

export default Section
