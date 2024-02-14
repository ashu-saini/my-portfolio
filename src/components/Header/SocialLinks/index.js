import React from "react"
// import { ReactComponent as GithubIcon } from "../SocialLinks/github.svg"
import { ReactComponent as LinkedInIcon } from "../SocialLinks/linkedIn.svg"
import { ReactComponent as SkypeIcon } from "../SocialLinks/skype.svg"
import { SvgIcon, List, ListItem, Link } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';

const Icon = (props) => {
  return <SvgIcon component={props.component} viewBox="0 0 480 512" />
}

const SocialLinks = () => {
  return (
    <List className="links-wrapper">
      <ListItem>
        <Link href="#" color="primary">
          <Icon component={LinkedInIcon} />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#" color="primary">
          <GitHubIcon/>
          {/* <Icon component={GitHubIcon} /> */}
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#" color="primary">
          <Icon component={SkypeIcon} />
        </Link>
      </ListItem>
    </List>
  )
}

export default SocialLinks
