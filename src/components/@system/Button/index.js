import React from "react"

const CustomButton = ({href, openNewTab, children}) => {
  return (
    <a 
      href={href}
      target={openNewTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default CustomButton
