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
          <Box>
            {skills.map( (skill) => (
              <Box>
              <Box>
                <img src="addd"/>
              </Box>
              <List>
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
