import { useStaticQuery, graphql } from "gatsby"
export const useProjectsData = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___period] }
            filter: { fileAbsolutePath: { regex: "/(projects)/" } }
            ) {
                edges {
                    node {
                        id
                        excerpt(pruneLength: 250)
                        frontmatter {
                            period
                            title
                        }
                        fileAbsolutePath
                        fields {
                            slug
                        }
                    }
                }
            }
        }
        `
        )
        
        return allMarkdownRemark
}