import { ArrowDownIcon, ArrowTopRightIcon, CodeIcon, EyeOpenIcon, MoveIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Layout from '../components/layout'
import { getAllProjects } from '../lib/api'
import ProjectSwiper from '../components/projectSwiper'
import { serialize } from 'next-mdx-remote/serialize'
const Home = ({ projects }) => {
  return (
    <Layout>
      <section className='hero'>
        <div className='hero-wrapper'>
          <h2>Modern web development done pragmatically.</h2>
          <span className='scroll-text'><ArrowDownIcon /> scroll to learn more <ArrowDownIcon /></span>
        </div>
      </section>
      <section>
        <div className='services'>
        <h3>Services & Capabilities</h3>
        <div>
          <h4><EyeOpenIcon /> Strategy</h4>
          <p>Identifying business goals, pain points, and potential automation. Strategizing the digital environment for your business processes.</p>
        </div>
        <div>
          <h4><CodeIcon /> Development</h4>
          <p>Crafting custom websites and other digital-facing products that are functional, accessible, and responsive. Creating workflows with your suite of marketing tools.</p>
        </div>
        <div>
          <h4><MoveIcon /> Growth</h4>
          <p>Engineered to last. Best practices for SEO, content editing, marketing analytics, and browser updates. </p>
        </div>
                 
        </div>
      </section>
      
      <ProjectSwiper projects={projects} />



      <section>
        <h3>Notes</h3>
        {/* <Link href={`/notes/${notes.slug}`} key={index}>

        </Link> */}
      </section>
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
    "url",
    "content",
    "images"
  ])



  await Promise.all(projects.map(async (project, index) => {
    projects[index].content = await serialize(project.content)
  }));

  return {
    props: {
      projects: projects.sort(function (a, b) {
        return b.period - a.period;
      })
    },
    revalidate: 1
  }
}

export default Home