import React from "react"
import Section from "components/MainWrapper/Section"
import { skills, skillTitle } from "./constant";
import './skills.scss'
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const Skills = () => {
  return (
      <Section className="skills" title="Skills Overview">
        <Box>
          <Typography className="skill-title" variant="p">{skillTitle}</Typography>
          <Box className="skills__container">
            {skills.map( (skill) => (
              
              <Box className="skills__cards">
              <Box className="skills__wrapper">
                <img className="skills__Icons" src={skill.icon}/>
                <Typography className="skills__heading-text">{skill.title}</Typography>
              </Box>
              <List className="skills__items">
                {skill.key.map((key) => (
                  <ListItem>
                    {key}
                  </ListItem>
                ))}
              </List>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>
  )
}

export default Skills
