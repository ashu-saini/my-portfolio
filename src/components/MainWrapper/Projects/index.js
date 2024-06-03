import React from "react"
import Section from "components/MainWrapper/Section"
import { projects } from './constant'
import { Box, List, ListItem, Typography, Button } from "@mui/material"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './project.scss'

const Projects = () => {
  return (
    <Section className="projects" title="Projects">
      <Box className="projects__container">
        {projects.map((project, index) => (
          <Box className="projects__cards">
            <Box className='project-details'>
            <Typography className="project--title" variant="h4">{project.title}</Typography>
              <Typography variant="p">{project.desc}</Typography>
              <List className="tech__container">
                {project.key.map((key) => (
                  <ListItem className="tech__items">
                    <Typography variant="span" className="tech-badge">{key}</Typography>
                    </ListItem>
                ))}
              </List>
            </Box>
            <Box className="button__wrap">
            <Button href={project.url} target="_blank"  rel={'external'} variant="contained" color="primary" className="view__icon">
              <Typography variant="span">{project?.github ? 'View on Github' : 'Visit Website'}</Typography>
              <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  )
}

export default Projects
