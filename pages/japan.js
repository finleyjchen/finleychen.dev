import Link from 'next/link'
import ExperienceTabs from '../components/experienceTabs'
import Gallery from '../components/gallery'
import Layout from '../components/layout'

const tokyo = [
    {
        url: "/images/japan/R0000322.jpeg",
        aspectRatio: 1.5
    },
    {
        url: "/images/japan/R0000434.jpeg",
        aspectRatio: 1.5
    },
    {
        url: "/images/japan/R0000858.jpeg",
        aspectRatio: 1.5
    },
    {
        url: "/images/japan/R0000931.jpeg",
        aspectRatio: 0.75
    },
    {
        url: "/images/japan/R0000933.jpeg",
        aspectRatio: 1.5
    },
]

const Japan = () => {
    return (
        <Layout>
            <section>
                <h2>Japan, 2022</h2>
                <p className="mono">Tokyo: December 16 - December 19</p>
                <Gallery images={tokyo} />
            </section>
        </Layout>
    )
}


export default Japan