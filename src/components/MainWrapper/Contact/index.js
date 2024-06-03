import React from "react"
import Section from "components/MainWrapper/Section"
import ImageUrl from "../../../assets/profile.jpg"
import { info } from './constant'
import './contact.scss'
import { Box, Typography, Link, Button } from "@mui/material"
import resumePdf from "assets/Ashu_Resume.pdf";
import DownloadIcon from '@mui/icons-material/Download';

const Contact = () => {
  const src = `mailto:${info.email}`
  const tel = `tel:${info.phone}`

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Ashu_Resume.pdf';
    link.click();
  };

  return (
    <Section className="contact" title="Get in Touch">
      <Box className="contact-wrapper">
        <Box>
          <img className="img" src={ImageUrl} alt={info.alt} />
        </Box>
        <Typography className="contact--title" variant="h3">{info.title}</Typography>
        <Typography className="info">
          {/* Looking for an experienced full-stack developer to build your web application? */}
          To start an initial chat, just drop me an email at <Link href={src}>{info.email}</Link> or call me at <Link href={tel}>{info.phone}</Link>
        </Typography>
        <Button color="primary" variant="contained" sx={{ mt: 2 }} onClick={handleDownload}>
          <Typography variant="span"> Download Resume</Typography>
          <DownloadIcon></DownloadIcon>
        </Button>
      </Box>
    </Section>
  )
}

export default Contact
