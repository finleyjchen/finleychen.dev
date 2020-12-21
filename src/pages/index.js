import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Note from "../components/note"
import "normalize.css"

export default function IndexPage() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
              }
            }
          }
        }
      }
    `
  )

  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Finley Chen" />
      <div className="hero">
        <p className="headline">
          Hands-on, collaborative development for high converting, quality
          websites.
        </p>
      {edges.map((note) => (
        <Note title={note.node.frontmatter.title} date={note.node.frontmatter.date} url={note.node.frontmatter.path} />
      ))}
        <Link to="/about">About Me</Link>
      </div>
    </Layout>
  )
}
