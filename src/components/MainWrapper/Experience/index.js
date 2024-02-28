import { Box, Typography } from "@mui/material";
import React from "react"
import Section from "components/MainWrapper/Section"
import { experiences } from "./constant";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './experience.scss'

const Experiences = () => {
  return (
      <Section className="experience" title="Work Experiences">
        <Box className="experiene-box">
          {experiences.map( (experience) => (
            <Box className="item">
              <Box className="info">
              <Typography variant="h3" className="company--name">{experience.companyName}</Typography>
              <Typography className="place">
                <LocationOnIcon></LocationOnIcon>
                {experience.location}
              </Typography>
              </Box>
              <Box className="designation">
                <Box>{experience.designation}</Box>
                <Box>
                  <CalendarMonthIcon></CalendarMonthIcon>
                  {experience.duration}
                </Box>
              </Box>
              <Box>
              <Typography variant="p">{experience.jobDesc}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Section>
  )
}

export default Experiences
