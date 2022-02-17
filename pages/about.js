import Link from 'next/link'
import ExperienceTabs from '../components/experienceTabs'
import Layout from '../components/layout'

const About = () => {
  return (
    <Layout>
      <section className='grid-2 hero-bio'>
        <h2>Relentless learning &amp; improvement.</h2>
        <div className='measure'>
          <p className="lead">Hi, I&apos;m Finley. I&apos;m a full stack web developer, creating websites at the Boston-based agency <a href="https://digitalimpulse.com">Digital Impulse</a>.</p>
          <p>Working in close collaboration with my clients, I work hard to build digital products that are efficiently architected to deliver on business goals using modern web technologies.</p>
          <p>As a freelancer, I&apos;ve dealt with countless pain points businesses commonly get burned by. I strive to make rock solid websites that are accessible, responsive, and user-friendly on the front-end. On the backend - performant, robust, and intuitively designed to be easy to manage content.</p>
        </div>
      </section>
      <section>
        <div className='job-section'>
        <h2>Where I&apos;ve worked.</h2>
        <div>
          <ExperienceTabs />
        </div>
        </div>
      </section>
      <section className='testimonial-section'>
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p className="testimonial-body">&quot;We have found Finley to be an absolute delight to work with. He has responded to every challenge we have presented and delivered by far the best results we have experienced in our long history of website programming.&quot;</p>
          <span className="testimonial-author">Matt Miller, <span>Paso Robles Ironworks</span></span>
        </div>
        <div className="testimonial">
          <p className="testimonial-body">&quot;I have employed several different tech people over the years and Finley is by far the best I&apos;ve worked with! He is extremely knowledgable in so many different areas. He has the ability to explain things simply to me and not make it too technical. He&apos;s a pleasure to work with and I highly recommend him.&quot;</p>
          <span className="testimonial-author">Nancy Fox, <span>Skinnykitchen</span></span>
        </div>
      </section>
     <section className='grid-2'>
       <h2>Etc</h2>
       <div className="">
       <p>I have a B.A. in Political Science from California Polytechnic State University, San Luis Obispo. I studied the effects of surveillance, the emerging data-driven business model of modern technology companies, and their effects on American democracy and society.</p>
       <p>This site was created with <a href="https://nextjs.org/">Next.js</a> and hosted for free on <a href="https://vercel.com">Vercel</a>. </p>
       <p><a href="https://github.com/finleyjchen/finleychen.dev">View Source</a></p></div>
     </section>
    </Layout>
  )
}


export default About