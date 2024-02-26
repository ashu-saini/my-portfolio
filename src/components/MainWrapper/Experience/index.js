import { Box, Typography } from "@mui/material";
import React from "react"
import Section from "components/MainWrapper/Section"
import { experiences } from "./constant";
import './experience.scss'

const Experiences = () => {
  return (
      <Section className="experience" title="Work Experience">
        <Box className="experiene-box">
          {experiences.map( (experience) => (
            <Box className="item">
              <Box className="info">
              <Typography variant="h3" className="company--name">{experience.companyName}</Typography>
              <Typography className="place">{experience.location}</Typography>
              </Box>
              <Box className="designation">
                <Box>{experience.designation}</Box>
                <Box>{experience.duration}</Box>
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
