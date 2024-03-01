import React from "react"

import './index.scss'

const Conatiner = (props) => {
  return (
   <div className='conatiner'>
       {props.children}
   </div>
  )
}

export default Conatiner
