import React from "react"
import { Link } from "gatsby"

export default function Project({ title, period, url }) {
  return (
    <Link to={url} className="project-preview">
      <h1 className="project-preview-title">{title}</h1>
      <span className="project-preview-period">{period}</span>
    </Link>
  )
}
