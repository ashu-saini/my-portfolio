import React from "react"
import { ReactComponent as GithubIcon } from "../SocialLinks/github.svg"
import { ReactComponent as LinkedInIcon } from "../SocialLinks/linkedIn.svg"
import { ReactComponent as SkypeIcon } from "../SocialLinks/skype.svg"
import { SvgIcon } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const Icon = (props) => {
  return <SvgIcon component={props.component} viewBox="0 0 480 512" />
}

const SocialLinks = () => {
  return (
    <ul>
      <li>
        <a href="#">
          <Icon component={LinkedInIcon} />
        </a>
      </li>
      <li>
        <a href="#">
          <Icon component={GithubIcon} />
        </a>
      </li>
      <li>
        <a href="#">
          <Icon component={SkypeIcon} />
        </a>
      </li>
    </ul>
  )
}

export default SocialLinks
