import React from "react"
import CustomButton from "../@system/Button"
import SocialLinks from "./SocialLinks"
import imgSrc from "../../assets/profile.jpg";

function TopBar() {
  
  return (
    <header>
      <img src={imgSrc} alt={"Ashu Saini"} />
      <h3>Ashu Saini</h3>
      <div>
      <SocialLinks />
      </div>
      <div>
      <CustomButton href="www.example.com" openNewTab={true} >
        {'HIRE ME'}
      </CustomButton>
      <CustomButton href="www.example.com" openNewTab={true} >
        {'DOWNALOAD MY RESUME'}
      </CustomButton>
      </div>
    </header>
  )
}

export default TopBar
