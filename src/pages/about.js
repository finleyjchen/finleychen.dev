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
    <SEO title="Finley Chen" />
    <div className="about-header">
      <Image />
      <div className="about-headline">
        <h1>Hi, I'm Finley.</h1>
        <p>
          {" "}
          I make things on the web for small businesses. I'm currently a
          freelancer working on several projects, most notably{" "}
          <a href="https://www.skinnykitchen.com">Skinnykitchen</a> and a
          redesign for{" "}
          <a href="https://ironhardware.com">Paso Robles Ironworks</a>.{" "}
        </p>
        <p>
          I create custom WordPress websites that are fast, accessible,
          responsive, and SEO-optimized.{" "}
        </p>
        <div className=""></div>
      </div>
    </div>
    {/* <Services /> */}
    <div className="divider"></div>
    <h2 className="center">Experience</h2>
    <ul className="experience">
      <li>
        <span className="experience-title">Freelance Web Developer</span>
        <span className="experience-date">2017 - Present</span>
        <p>
          Completed many freelance projects with clients, including custom
          WordPress websites, hosting, custom WordPress plugins, converting PSD
          to HTML/CSS/JS, and more miscellaneous web development work. See my{" "}
          <Link to="/work">freelance portfolio</Link>
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
          WordPress Web Developer &amp; DevOps at{" "}
          <a href="https://13starsmedia.com/">Colony Media</a>
        </span>
        <span className="experience-date">May 2018 – Aug 2019</span>
        <ul>
          <li>
            Created and maintained WordPress sites using custom themes and
            plugins
          </li>
          <li>
            DevOps for deploying, backing up, and hosting 10+ sites on two
            VPS’s, worked with phpMyAdmin, Linux, Apache, NGINX
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
            Later rebuilt entire website on WordPress/WooCommerce with a custom
            theme, migrating the Magento database and doing SEO work for the
            website.
          </li>
          <li>
            used custom PHP, Sass, HTML, and JavaScript to convert visitors to
            paying customers
          </li>
        </ul>
      </li>
    </ul>
    <h2 className="center">Process</h2>
    <div className="process">
      <p>
        I am a Front-End WordPress developer who has been making websites for
        small businesses for over 3 years. I have experience working with many
        types of individuals and organizations - churches, nonprofits, my
        university, online stores, and more. Aside from WordPress, I also work
        end-to-end on full-stack web applications with strong front-end skills
        in JavaScript, PHP, and React with a focus on accessible and functional
        UI/UX.
      </p>

      <ul className="dash">
        <li>Platforms: WordPress, WooCommerce, Shopify, Laravel</li>
        <li>Front end: React, Gatsby, jQuery, Bootstrap, Sass, PHP</li>
        <li>Back end: Node.js, Express, Firebase, mySQL, mongoDB</li>
        <li>
          DevOps and Build Tools: Nginx, Docker, npm, gulp, Yarn, Composer, Git
        </li>
        <li>Photo/Graphics: Adobe Photoshop, Illustrator, XD</li>
      </ul>
    </div>
    <div className="divider"></div>
    ## Etc I'm also an undergraduate Political Science student at California
    Polytechnic State University, San Luis Obispo. My academic work in political
    science studies the effects of different social media on an individual's
    political knowledge and participation.
    <a href="/files/FinleyChenResume2020.pdf" className="button">
      Download Resume
    </a>
  </>
)

export default AboutPage
