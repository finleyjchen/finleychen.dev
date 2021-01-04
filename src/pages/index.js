import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Note from "../components/note-preview"
import { useNotesData } from "../hooks/notes-data"
import { useProjectsData } from "../hooks/projects-data"

export default function IndexPage() {
  const { edges: notes } = useNotesData()
  const { edges: projects } = useProjectsData()
  return (
    <Layout>
      <SEO title="Finley Chen" />
      <div className="hero">
        <p className="headline">
          Hands-on, collaborative development for high converting, quality
          websites.
        </p>
        <div className="hero-links">
          <a href="mailto:finleyjchen@gmail.com">
            <span>Request a Consultation</span></a>
          or
          <Link to="/work">
            <span>See my work</span></Link>
        </div>
      </div>
    </Layout>
  )
}
