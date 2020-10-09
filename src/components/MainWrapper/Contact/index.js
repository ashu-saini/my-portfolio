import React from "react"
import Section from "../Section"
import ImageUrl from "../../../assets/profile.jpg"
import { info } from './constant'
import Button from '../../@system/Button'
import './contact.scss'

const Contact = () => {
  const src = `mailto:${info.email}`
  const tel = `tel:${info.tel}`
  return (
      <Section className="contact" title="Get in Touch">
        <div className="contact-wrapper">
          <div>
            <img className="img" src={ImageUrl} alt={info.alt} />
          </div>
          <h3>{info.title}</h3>
          <p className="info">
            Looking for an experienced full-stack developer to build your web app or ship your software product? To start
            an initial chat, just drop me an email at <a href={src}>{info.email}</a> or call me at <a href={tel}>{info.phone}</a>
          </p>
          <Button name="Let's Talk" href={src}/>
        </div>
      </Section>
  )
}

export default Contact
