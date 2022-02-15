import Link from 'next/link'
import Layout from '../components/layout'

const About = () => {
  return (
    <Layout>
      <section className='about-grid'>
      <h2>Relentless learning & improvement.</h2>
      <div>
        <p className='lead'>Hi, I'm Finley. I'm a full stack web developer, creating websites at the Boston-based agency <a href="https://digitalimpulse.com">Digital Impulse</a>.</p>
        <p>I create custom WordPress websites that are accessible, responsive, and user-friendly on the front-end. On the backend, they are performant, search engine optimized, and intuitively designed to be easy to manage content.</p>
      </div>
      </section>
      <section className='about-grid'>
        <h2>Experience</h2>
        <div>
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
            PSD to HTML/CSS/JS, and more miscellaneous web development work. 
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
        </div>
      </section>
    </Layout>
  )
}


export default About