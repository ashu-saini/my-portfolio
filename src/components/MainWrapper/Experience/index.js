import React from "react"
import Section from "../Section"
import { experiences } from "./constant";
import './experience.scss'

const Experiences = () => {
  return (
      <Section className="experience" title="Work Experience">
        <div className="experiene-box">
          {experiences.map( (experience) => (
            <div className="item">
              <div className="info">
              <h3>{experience.companyName}</h3>
              <span className="place">{experience.location}</span>
              </div>
              <div className="designation">
                <div>{experience.designation}</div>
                <div>{experience.duration}</div>
              </div>
              <div>
              <p>{experience.jobDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
  )
}

export default Experiences
