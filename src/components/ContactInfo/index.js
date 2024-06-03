import { List, ListItem, Link, Box, Typography } from "@mui/material"
import React from "react"
import { contacts } from "./constant"
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LanguageIcon from '@mui/icons-material/Language';
import './ContactInfo.scss'

const ContactInfo = () => {
  return (
    <Box className="contact-info-wraper">
      <List className="contact-links">
        <ListItem className="link-gap">
        <EmailIcon color="primary"/>
          <Link href={`mailto:${contacts.email}`} underline="none">{contacts.email}</Link>
        </ListItem>
        <ListItem className="link-gap">
        <SmartphoneIcon color="primary"/>
          <Link href={`tel:${contacts.phone}`} underline="none">{contacts.phone}</Link>
        </ListItem>
        <ListItem className="link-gap">
        <LanguageIcon color="primary"/>
          <Link href="https://ashu-saini.github.io/my-portfolio" target="_blank" underline="none">{contacts.website}</Link>
        </ListItem>
      </List>
    </Box>
  )
}

export default ContactInfo
