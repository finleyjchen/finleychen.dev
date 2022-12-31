import Link from 'next/link'
import ExperienceTabs from '../components/experienceTabs'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout>
            <section className=''>
                <h2 className='hero-headline'><i className="serif">Notes</i> and other stuff.</h2>
            </section>
            <section className="notes">
                <h4><Link href="/japan">Japan Photos 2022</Link></h4>
            </section>
        </Layout>
    )
}


export default About