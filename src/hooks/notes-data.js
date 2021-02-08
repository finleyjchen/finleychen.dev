import { useStaticQuery, graphql } from "gatsby"
export const useNotesData = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { fileAbsolutePath: { regex: "/(notes)/" } }
            ) {
                edges {
                    node {
                        id
                        excerpt(pruneLength: 250)
                        frontmatter {
                            date(formatString: "MMM DD YYYY")
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