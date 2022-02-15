import { MDXRemote } from 'next-mdx-remote'
import Layout from "../../components/layout"
import { getAllProjects, getProjectBySlug } from "../../lib/api"
import { serialize } from 'next-mdx-remote/serialize'

const ProjectPage = ({ post, serializedContent }) => (
  <Layout>
    {post.title}
    <MDXRemote {...serializedContent} />
  </Layout>
)

export async function getStaticProps({ params }) {
  const post = getProjectBySlug(params.slug, [
    "title",
    "excerpt",
    "date",
    "slug",
    "content",
  ])
  const serializedContent = await serialize(post.content)

  return {
    props: { 
      post,
      serializedContent
     },
  }
}

export async function getStaticPaths() {
  const posts = getAllProjects(["slug"])

  return {
    paths: posts.map((post) => {
      return {
        params: { ...post },
      }
    }),
    fallback: false,
  }
}

export default ProjectPage