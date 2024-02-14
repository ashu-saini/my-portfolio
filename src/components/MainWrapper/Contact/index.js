import React from "react"
import Section from "components/MainWrapper/Section"
import ImageUrl from "../../../assets/profile.jpg"
import { info } from './constant'
import Button from 'components/@system/Button'
import './contact.scss'
import { Box, Typography } from "@mui/material"

const Contact = () => {
  const src = `mailto:${info.email}`
  const tel = `tel:${info.phone}`
  return (
      <Section className="contact" title="Get in Touch">
        <Box className="contact-wrapper">
          <Box>
            <img className="img" src={ImageUrl} alt={info.alt} />
          </Box>
          <Typography variant="h3">{info.title}</Typography>
          <Typography className="info">
            Looking for an experienced full-stack developer to build your web app or ship your software product? To start
            an initial chat, just drop me an email at <a href={src}>{info.email}</a> or call me at <a href={tel}>{info.phone}</a>
          </Typography>
          <Button href={src}>Let's Talk</Button>
        </Box>
      </Section>
  )
}

export default Contact
