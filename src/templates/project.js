import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title} />
      <div className="project">
        <div className="project-header">
          <span className="project-period">{frontmatter.period}</span>
          <div class="project-text">
            <h1 className="project-title">{frontmatter.title}</h1>
            <h2 className="project-description">{frontmatter.description}</h2>
          </div>
        </div>
        <div className="project-body">
          <div className="project-meta">
            Project Description
          </div>
          <div className="project-text">
          <div
            className="project-content"
            dangerouslySetInnerHTML={{ __html: html }}
            />
            </div>
        </div>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        period
        title
        description
      }
    }
  }
`
