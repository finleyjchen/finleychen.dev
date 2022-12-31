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
import Services from '../components/process'
import Capabilities from '../components/capabilities'
import Hero from '../components/hero'
import Process from '../components/process'
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
        <Layout
            title="Home"
            description="Finley Chen's personal website. Full-stack web engineer/developer based in Cambridge, MA. Contact for availability."
        >
            <Hero />
            <Process />
            <Capabilities />
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