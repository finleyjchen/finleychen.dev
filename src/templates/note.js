import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
export default function Template({ data }) {
  console.log(data)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title} />
      <div className="blog-post">
        <div className="blog-post-header">
          <h1>{frontmatter.title}</h1>
          <span>{frontmatter.date}</span>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMM DD YYYY")
        title
      }
    }
  }
`
