import React from "react"
import Section from "../Section"
import { projects } from './constant'

const Projects = () => {
  return (
    <div>
      <Section className="projects" title="Projects">
        <div>
          {projects.map( (project, index) => (
            <div>
              <h1>{project.title}</h1>
              <p>{project.desc}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">View on Github</a>
              <div>
                {project.key.map((key) => (
                  <span>{key}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Projects
