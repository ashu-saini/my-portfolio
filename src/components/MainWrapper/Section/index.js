import React from "react"

import { Paper, Typography } from "@mui/material";
import './index.scss'

const Section = (props) => {
  return (
      <Paper className={`${props.className} section-wrapper`}>
        <Typography variant="h3" className='section-title' >{props.title}</Typography>
        {props.children}
      </Paper>
  )
}

export default Section
