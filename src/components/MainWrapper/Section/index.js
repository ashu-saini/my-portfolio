import React from "react"

import { makeStyles } from "@mui/styles";
import { Paper, Typography } from "@mui/material";

const useStyles = makeStyles( (theme) => ({
  section: {
    padding: '45px',
    // marginBottom: '45px',
    borderRadius: '2px',
    backgroundClip: 'padding-box',
    width: '80%'
  },
  title: {
    marginBottom: '45px !important',
    textAlign: 'center',
    fontWeight: '600 !important'
  }
}))

const Section = (props) => {
  const classes = useStyles(makeStyles)
  return (
      <Paper className={`${props.className} ${classes.section}`}>
        <Typography variant="h4" className={classes.title} >{props.title}</Typography>
        {props.children}
      </Paper>
  )
}

export default Section
