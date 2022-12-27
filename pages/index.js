import { ArrowDownIcon, ArrowRightIcon, ArrowTopRightIcon, BookmarkIcon, CodeIcon, EyeOpenIcon, IdCardIcon, MoveIcon, StackIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Layout from '../components/layout'
import { getAllProjects } from '../lib/api'
import ProjectSwiper from '../components/projectSwiper'
import { serialize } from 'next-mdx-remote/serialize'
import { useContext, useEffect, useRef, useState } from 'react'
import { StoreContext } from '../context/store'
import { CSSTransition } from 'react-transition-group'
import { useMediaQuery } from 'react-responsive'
const Home = ({ projects }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' })


  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting && isBigScreen) {
  //         setIsVisible(entry.isIntersecting);
  //       }
  //     },
  //     {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 0.1
  //     }
  //   );
  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }
  // }, [ref]);

  return (
    <Layout>
      <section className='hero'>
        <div className='hero-wrapper'>
          <div className='hero-headline'>
            <div className=''>
              <h2>Creating modern <br /> websites, <i className="serif">pragmatically</i>.</h2>
              {/* <CSSTransition mountOnEnter={true} in={isVisible || !isBigScreen} timeout={250} classNames="fade"> */}

              {/* </CSSTransition> */}
            </div>
          </div>

          <div className='hero-main'>
            <div className='hero-head'>
              <p className='lead'>Currently building marketing-focused websites and other cool stuff @ <a className="serif" href="https://digitalimpulse.com">Digital Impulse</a>.</p>
              <p className='lead'>Before that, I was freelancing for various clients in publishing and retail. Open to a few select freelance projects. <Link href="/work"><a>Check out my freelance portfoliio<ArrowRightIcon /></a></Link></p>
            </div>
            <div className='services'>

              <h3 className='supertext'>Services</h3>
              <div className='services-grid'>
                <div>
                  <h4>Strategy</h4>
                  <p>Identifying business goals, pain points, and potential automation. Strategizing the digital environment for your business processes.</p>
                </div>
                <div>
                  <h4>Development</h4>
                  <p>Crafting custom websites and other digital-facing products that are functional, accessible, and responsive. Creating workflows with your suite of marketing tools.</p>
                </div>
                <div>
                  <h4>Growth</h4>
                  <p>Engineered to last. Best practices for SEO, content editing, marketing analytics, and browser updates. </p>
                </div>
              </div>

            </div>
            <div className='services'>
              <h3 className='supertext'>Capabilities &amp; Preferred Technologies</h3>
              <div className='services-grid'>
                <div>
                <h4>Custom CMS solutions</h4>
                <ul>WordPress, Sanity, Shopify, Squarespace</ul>
                </div>
                <div>
                <h4>Ecommerce</h4>
                <ul>WooCommerce, Shopify, Stripe</ul>
                </div>
                <div>
                <h4>JAMStack/Headless</h4>
                <ul>React.js, Next.js, Gatsby.js, GSAP</ul>
                </div>
                <div>
                <h4>Hosting/Devops</h4>
                <ul>Nginx, Apache, Runcloud, Vercel, Git</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='bottom' ref={ref}></div>
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