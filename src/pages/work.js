import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Project from "../components/project-preview"
import { useProjectsData } from "../hooks/projects-data"

export default function WorkPage() {
  const { edges: projects } = useProjectsData()
  return (
    <Layout>
      <SEO title="Finley Chen" />
      <div className="work">
        <div className="projects">
          <div className="projects-list">
            {projects.map(note => (
              <Project
                title={note.node.frontmatter.title}
                period={note.node.frontmatter.period}
                url={note.node.fields.slug  }
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
            <h3 className="testimonial-author">
              Matt Miller, <strong>Paso Robles Ironworks</strong>
            </h3>
          </div>
          <div className="testimonial">
            <p className="testimonial-body">
              "I have employed several different tech people over the years and
              Finley is by far the best I’ve worked with! He is extremely
              knowledgable in so many different areas. He has the ability to
              explain things simply to me and not make it too technical. He’s a
              pleasure to work with and I highly recommend him."
            </p>
            <h3 className="testimonial-author">
              Nancy Fox, <strong>Skinnykitchen</strong>
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}
