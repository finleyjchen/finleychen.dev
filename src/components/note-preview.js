import React from "react"
import { Link } from "gatsby"

export default function Note({ title, date, url }) {
  return (
    <Link to={url} className="note-preview">
      <span>{title}</span>
      <span>{date}</span>
    </Link>
  )
}
