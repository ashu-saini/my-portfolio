import React from "react"
import Section from "components/MainWrapper/Section"
import { projects } from './constant'
import { Box, Typography } from "@mui/material"
import './project.scss'
const Projects = () => {
  return (
      <Section className="projects" title="Projects">
        <Box>
          {projects.map( (project, index) => (
            <Box>
              <Typography className="project--title" variant="h1">{project.title}</Typography>
              <Box className='project-details'>
              <Typography variant="p">{project.desc}</Typography>
              <a href={project.url} target="_blank" rel="noopener noreferrer">View on Github</a>
              <Box>
                {project.key.map((key) => (
                  <Typography>{key}</Typography>
                ))}
              </Box>

              </Box>
            </Box>
          ))}
        </Box>
      </Section>
  )
}

export default Projects
