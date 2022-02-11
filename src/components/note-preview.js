import React from "react"
import { Link } from "gatsby"

export default function Note({ title, date, url }) {
  return (
    <Link to={url} className="note-preview">
      <h3>{title}</h3>
      <span>{date}</span>
    </Link>
  )
}
