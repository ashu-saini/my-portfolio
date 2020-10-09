import React from "react"
import Section from "../Section"
import { skills, skillTitle } from "./constant";
import './skills.scss'

const Skills = () => {
  return (
      <Section className="skills" title="Skills Overview">
        <div>
          <p className="skill-title">
              {skillTitle}
          </p>
          <div>
            {skills.map( (skill) => (
              <div>
              <div>
                <img src="addd"/>
              </div>
              <ul>
                {skill.key.map((key) => (
                  <li>
                    {key}
                  </li>
                ))}
              </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>
  )
}

export default Skills
