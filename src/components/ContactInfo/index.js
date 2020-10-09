import React from "react"
import { contacts } from "./constant"

const ContactInfo = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="#">{contacts.email}</a>
        </li>
        <li>
          <a href="#">{contacts.phone}</a>
        </li>
        <li>
          <a href="#">{contacts.website}</a>
        </li>
      </ul>
    </div>
  )
}

export default ContactInfo
