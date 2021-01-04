import React from "react"
import { Link } from "gatsby"

export default function Project({ title, period, url }) {
  return (
    <Link to={url} className="project-preview">
      <span className="project-preview-title">{title}</span>
      <span className="project-preview-period">{period}</span>
    </Link>
  )
}
