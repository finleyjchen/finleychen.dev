import Image from 'next/image'
import Link from 'next/link'
import ExperienceTabs from '../components/experienceTabs'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout title="About" description="Full stack developer specializing in WordPress, ReactJS to create bespoke websites.">
            <section className='grid-2 hero-bio'>
                <Image src={'/images/finley-quebec.jpeg'} width="400" height="600" alt="finley-chen" />
                <div>
                    <p className="lead">Hi, I&apos;m Finley. I&apos;m a full stack web developer, creating websites at the Boston-based agency <a href="https://digitalimpulse.com">Digital Impulse</a>.</p>
                    <p>Working in close collaboration with my clients, I build digital products that are efficiently architected to deliver on business goals using modern web technologies.</p>
                    <p>I&apos;ve had the privilege of working with wide variety clients - agencies, blogs, startups, universities, portfolios, mom-and-pop shops, and more. I strive to make rock solid websites that are accessible, responsive, and user-friendly on the front-end. On the backend - performant, robust, and intuitively designed to be easy to manage content.</p>
                </div>
            </section>
            <section>
                <div className='job-section'>
                    <h3 className='serif'>Experience</h3>
                    <div>
                        <ExperienceTabs />
                    </div>
                </div>
            </section>
            <section className='grid-2'>
                <h3 className='serif'>Testimonials</h3>
                <div className='testimonial-section'>
                    <blockquote className="testimonial">
                        <q className="testimonial-body">&quot;We have found Finley to be an absolute delight to work with. He has responded to every challenge we have presented and delivered by far the best results we have experienced in our long history of website programming.&quot;</q>
                        <cite className="testimonial-author">Matt Miller, <strong className='serif'>Paso Robles Ironworks</strong></cite>
                    </blockquote>
                    <blockquote className="testimonial">
                        <q className="testimonial-body">&quot;I have employed several different tech people over the years and Finley is by far the best I&apos;ve worked with! He is extremely knowledgable in so many different areas. He has the ability to explain things simply to me and not make it too technical. He&apos;s a pleasure to work with and I highly recommend him.&quot;</q>
                        <cite className="testimonial-author">Nancy Fox, <strong className='serif'>Skinnykitchen</strong></cite>
                    </blockquote>
                </div>
            </section>
            <section className='grid-2'>
                <h3>Etc</h3>
                <div className="">
                    <p>I earned a B.A in Political Science from California Polytechnic State University, San Luis Obispo. I studied the effects of surveillance, the emerging data-driven business model of modern technology companies, and their effects on American democracy and society.</p>
                    <p>When not developing, I enjoy video games, skateboarding and cooking. If I could eat ramen every meal I would.</p>
                    <p>This site was created with <a href="https://nextjs.org/">Next.js</a> and hosted for free on <a href="https://vercel.com">Vercel</a>. </p>
                    <p><a href="https://github.com/finleyjchen/finleychen.dev">View Source</a></p></div>

            </section>
        </Layout>
    )
}


export default About