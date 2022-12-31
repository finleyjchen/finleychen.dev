import { serialize } from "next-mdx-remote/serialize";
import Layout from "../components/layout";
import ProjectSwiper from "../components/projectSwiper";
import { getAllProjects } from "../lib/api";

const WorkPage = ({ projects }) => {
    return (
        <Layout title="Work" description="Finley Chen's portfolio of selected websites he's developed.">
            <section >
                <h2 className="hero-headline">Selected <i className="serif">Work</i>.</h2>
            </section>
            <ProjectSwiper projects={projects} />
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

export default WorkPage