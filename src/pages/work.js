import React from "react"
import SEO from "../components/seo"
import Project from "../components/project-preview"
import { useProjectsData } from "../hooks/projects-data"

export default function WorkPage() {
  const { edges: projects } = useProjectsData()
  return (
    <>
      <SEO title="Finley Chen" />
      <div className="work">
        <div className="projects">
          <div className="projects-list">
            {projects.map(note => (
              <Project
                title={note.node.frontmatter.title}
                period={note.node.frontmatter.period}
                url={note.node.fields.slug}
                key={note.node.fields.slug}
              />
            ))}
          </div>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <p className="testimonial-body">
              "We have found Finley to be an absolute delight to work with. He
              has responded to every challenge we have presented and delivered
              by far the best results we have experienced in our long history of
              website programming."
            </p>
            <span className="testimonial-author">
              Matt Miller, <span>Paso Robles Ironworks</span>
            </span>
          </div>
          <div className="testimonial">
            <p className="testimonial-body">
              "I have employed several different tech people over the years and
              Finley is by far the best I’ve worked with! He is extremely
              knowledgable in so many different areas. He has the ability to
              explain things simply to me and not make it too technical. He’s a
              pleasure to work with and I highly recommend him."
            </p>
            <span className="testimonial-author">
              Nancy Fox, <span>Skinnykitchen</span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
