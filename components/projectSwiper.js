import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay'
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

const ProjectSwiper = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => {
        return (
          <section className='project-card' key={index}>
            <div className='project-info'>

              <p className='project-period'>{project.period}</p>
              <h3>
                <span className='project-title'>{project.title}</span>
                <span className='project-description'>{project.description}</span>
              </h3>

              <div className='project-content'>
                <MDXRemote {...project.content} />
              </div>

            </div>
            <div className='project-images'>
              <div className='project-meta'>
                <ul className="project-tech">
                  {project.tech.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <a href={project.url} className="project-url">Visit<ArrowTopRightIcon /></a>
              </div>
              <Swiper
                className='project-swiper'
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                centeredSlides={true}
                loop={true}
              >
                {project?.images && project?.images.map((image, index) => (

                  <SwiperSlide key={index}>
                    <div className='project-image-wrapper'>
                      <img class="project-image" src={`/images/${image}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>

          </section>
        )
      })}
    </>
  )
}

export default ProjectSwiper