import React from "react"

import './index.scss'

const Conatiner = (props) => {
  return (
   <div class='conatiner'>
       {props.children}
   </div>
  )
}

export default Conatiner
