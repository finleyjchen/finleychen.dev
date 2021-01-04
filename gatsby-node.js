const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const slugify = require(`slugify`)


// add slugs
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `projects` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}


exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              url
            }
            fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(node.fields.slug)
    if(node.frontmatter.url) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/project.js`),
      })
    } else {

      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/note.js`),
      })
    }
  })
}
