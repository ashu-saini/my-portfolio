import React from "react"

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles( (theme) => ({
  section: {
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.14)',
    padding: '45px',
    background: '#fff',
    marginBottom: '45px',
    borderRadius: '2px',
    backgroundClip: 'padding-box',
    marginRight: '40px'
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
    <div className={`${props.className} ${classes.section}`}>
      <h2 className={classes.title}>{props.title}</h2>
      {props.children}
    </div>
  )
}

export default Section
