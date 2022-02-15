import Link from 'next/link'
import Layout from '../components/layout'
import { getAllProjects } from '../lib/api'

const Home = ({ projects }) => {
  console.log(projects)
  return (
    <Layout>
      <section>

      <h2>Modern web development done pragmatically.</h2>

      </section>
      <section>
        <h2>Services &amp; Capabilities</h2>
      </section>
      <ul className='project-list'>
        {projects.map((project, index) => {
          return (
            <li key={index}>
              <Link href={`/projects/${project.slug}`}>
                <h3>
                  <span>{project.title}</span> /
                  <span>{project.description}</span>
                </h3>

                
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = getAllProjects([
    "title",
    "date",
    "slug",
    "tech",
    "period",
    "description",
  ])

  return {
    props: {
      projects
    },
    revalidate: 1
  }
}

export default Home