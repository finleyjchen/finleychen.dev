import React from "react"
import SEO from "../components/seo"
import Project from "../components/project-preview"
import { useProjectsData } from "../hooks/projects-data"

export default function WorkPage() {
  const { edges: projects } = useProjectsData()
  return (
    <>
      <SEO title="Selected Work" />
      <div className="work">
        <div className="projects">
          <div className="projects-list">
            {projects.map(note => (
              <Project
                title={note.node.frontmatter.title}
                period={note.node.frontmatter.period}
                url={note.node.fields.slug}
                key={note.node.fields.slug}
                tech={note.node.frontmatter.tech}
              />
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
