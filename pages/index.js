import Link from 'next/link'
import Layout from '../components/layout'
import { getAllProjects } from '../lib/api'

const Home = ({ projects }) => {
  console.log(projects)
  return (
    <Layout>
      <h2>Full stack developer creating bespoke websites that are fast, accessible, responsive, and SEO-optimized.</h2>
      {projects.map((project, index) => {
        return (
          <li key={index}>
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </li>
        )
      })}
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = getAllProjects([
    "title",
    "date",
    "slug",
  ])

  return {
    props: {
      projects
    },
    revalidate: 1
  }
}

export default Home