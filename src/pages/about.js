import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
// import Services from "../components/services"
// import Mail from "../icons/mail.svg"
// import Twitter from "../icons/twitter.svg"
// import Github from "../icons/github.svg"
// import LinkedIn from "../icons/linkedin.svg"

const AboutPage = () => (
  <>
    <SEO title="About" />

    <section className="text-block">
      <Image />
      <div className="about-headline">
        <p>
          {" "}
          Hi, I'm Finley. I make things on the web for small businesses. I'm
          currently a full stack web developer at{" "}
          <a href="https://digitalimpulse.com">Digital Impulse</a>.
        </p>
        <p>
          I create custom WordPress websites that are accessible, responsive,
          and user-friendly on the front-end. On the backend, they are
          performant, search engine optimized, and intuitively designed to be
          easy to manage content.{" "}
        </p>
        <div className="hero-links">
          <a
            href="mailto:finleyjchen@gmail.com?subject=Proposal&body=Hi%20Finley,%0D%0A"
            className="button"
          >
            Get In Touch
          </a>
          <a href="/finley-chen-resume-2021.pdf" className="button">
            Download Resume
          </a>
        </div>
      </div>
    </section>

    <section className="text-block">
      <h2 className="">Experience</h2>
      <ul className="experience">
        <li>
          <span className="experience-title">
            Full Stack Web Developer at{" "}
            <a href="https://digitalimpulse.com">Digital Impulse</a>
          </span>
          <span className="experience-date">July 2021 - Present</span>
          <p>
            Creating robust, performant WordPress sites for Digital Impulse, a
            Boston-based web, design, and marketing agency.
          </p>
        </li>
        <li>
          <span className="experience-title">Freelance Web Developer</span>
          <span className="experience-date">2017 - Present</span>
          <p>
            Completed many freelance projects with clients, including custom
            WordPress websites, hosting, custom WordPress plugins, converting
            PSD to HTML/CSS/JS, and more miscellaneous web development work. See
            my <Link to="/work">freelance portfolio</Link>
          </p>
        </li>
        <li>
          <span className="experience-title">
            Frontend Web Developer at{" "}
            <a href="https://allpeople.co/">AllPeople</a>
          </span>
          <span className="experience-date">Jun 2019 – Dec 2019</span>
          <ul>
            <li>
              With another developer, co-created a Shopify site with 7,000+
              products
            </li>
            <li>
              Developed a referral link tracking system in AJAX, Liquid
              templating, jQuery, and vanilla JavaScript
            </li>
            <li>
              Built a similar WooCommerce/WordPress version, writing custom PHP
              functions
            </li>
            <li>Designed eCommerce emails in HTML/CSS</li>
          </ul>
        </li>
        <li>
          <span className="experience-title">
            Student Front End Developer at{" "}
            <a href="https://afd.calpoly.edu">Cal Poly SLO</a>
          </span>
          <span className="experience-date">Jan 2019 – Aug 2019</span>
          <ul>
            <li>
              Worked alongside the UI/UX developer for Cal Poly’s Administration
              and Finance Department (AFD)
            </li>
            <li>Created dynamic forms with JavaScript, jQuery, and PHP</li>
            <li>
              Built responsive department pages using Foundation following best
              practices in accessibility and UI/UX
            </li>
          </ul>
        </li>
        <li>
          <span className="experience-title">
            Web Developer at{" "}
            <a href="https://yourchristmasstore.com">
              Canterbury Gardens &amp; Gifts
            </a>
          </span>
          <span className="experience-date">Apr 2017 – Sep 2018</span>
          <ul>
            <li>creating advertisements for mailing lists and emails</li>
            <li>used marketing tools like MailChimp and Hubspot</li>
            <li>managing a database of 10,000+ SKUs</li>
            <li>web development on Magento</li>
            <li>
              Later rebuilt entire website on WordPress/WooCommerce with a
              custom theme, migrating the Magento database and doing SEO work
              for the website.
            </li>
            <li>
              used custom PHP, Sass, HTML, and JavaScript to convert visitors to
              paying customers
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section className="text-block">
      <h2 className="">Process</h2>
      <div className="process">
        <p>
          I am a full stack web developer who has been making websites for small
          to medium-sized businesses for over 5 years. I have experience working
          with many types of individuals and organizations - churches,
          nonprofits, my university, online stores, and more.{" "}
        </p>
        <p>
          {" "}
          When using WordPress, I extend its functionality to the fullest -
          utilizing its great parts as an admin panel and CMS, while minimizing
          its not-so-great parts, like PHP and database queries. Aside from
          WordPress, I also work end-to-end on full-stack web applications with
          strong front-end skills in JavaScript, PHP, and React with a focus on
          accessible and functional UI/UX and an eye for design and good
          typography.
        </p>

        <ul className="dash">
          <li>WordPress, WooCommerce, Shopify, Laravel</li>
          <li>React, Gatsby, jQuery, Bootstrap, Sass, PHP</li>
          <li>Node.js, Express, Firebase, mySQL, mongoDB</li>
          <li>Nginx, Docker, npm, gulp, Yarn, Composer, Git</li>
          <li>Photo/Graphics: Adobe Photoshop, Illustrator, XD</li>
        </ul>
      </div>
    </section>

    <section className="text-block">
      <h2>Testimonials</h2>
      <div className="testimonials">
        <p className="testimonial-body">
          "We have found Finley to be an absolute delight to work with. He has
          responded to every challenge we have presented and delivered by far
          the best results we have experienced in our long history of website
          programming."
        </p>
        <span className="testimonial-author">
          Matt Miller, <span>Paso Robles Ironworks</span>
        </span>
        <p className="testimonial-body">
          "I have employed several different tech people over the years and
          Finley is by far the best I’ve worked with! He is extremely
          knowledgable in so many different areas. He has the ability to explain
          things simply to me and not make it too technical. He’s a pleasure to
          work with and I highly recommend him."
        </p>
        <span className="testimonial-author">
          Nancy Fox, <span>Skinnykitchen</span>
        </span>
      </div>
    </section>

    <section className="text-block">
      <h2 className="">Etc</h2>
      <div className="">
        <p>
          I have a B.A. in Political Science from California
          Polytechnic State University, San Luis Obispo. I studied the effects of surveillance, the emerging data-driven business model of modern technology companies, and their effects on American democracy and society.
        </p>

        <p>
          This site was statically generated by{" "}
          <a href="https://gatsbyjs.org">Gatsby</a> and hosted for free on{" "}
          <a href="https://netlify.com">Netlify</a> .{" "}
        </p>
        <p>
          <a href="https://github.com/finleyjchen/finleychen.dev">
            View Source
          </a>
        </p>
      </div>
    </section>
  </>
)

export default AboutPage
