import Link from 'next/link'
import ExperienceTabs from '../../components/experienceTabs'
import Layout from '../../components/layout'

const Notes = () => {
    return (
        <Layout title="Notes">
            <section className=''>
                <h2 className='hero-headline'><i className="serif">Notes</i> and other stuff.</h2>
            </section>
            <section className="notes">
                <h4><Link href="/notes/japan">Japan Photos 2022</Link></h4>
            </section>
        </Layout>
    )
}


export default Notes