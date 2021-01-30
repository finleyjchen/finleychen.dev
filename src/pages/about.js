import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Services from '../components/services'
import Mail from "../icons/mail.svg"
import Twitter from "../icons/twitter.svg"
import Github from "../icons/github.svg"
import LinkedIn from "../icons/linkedin.svg"

 const AboutPage = () => (
  <Layout>
    <SEO title="Finley Chen" />

    <div class="about-header">
      <Image />
      <div className="about-headline">
      <p>Hi, I'm Finley. I make things on the web for small businesses. I'm currently a freelancer working on several projects, most notably <a href="https://www.skinnykitchen.com">Skinnykitchen</a> and a redesign for <a href="https://ironhardware.com">Paso Robles Ironworks</a>.    </p>     
        <p>I create custom WordPress websites that are fast, accessible, responsive, and SEO-optimized. </p>
        <div class="">

    </div>  
      </div>
    </div>

{/* <Services /> */}

<div class="divider"></div>

## Experience 

<div class="grid-2">
<div>

2017 - *Present*  
**Freelance Web Developer**  

Jun 2019 – Dec 2019  
**Frontend Web Developer at [AllPeople](https://allpeople.co/)**  

Jan 2019 – Aug 2019  
**Student Front End Developer at [Cal Poly SLO](https://afd.calpoly.edu)**  

May 2018 – Aug 2019  
**WordPress Web Developer & DevOps at [Colony Media](https://13starsmedia.com/)**  

Apr 2017 – Sep 2018  
**Web Developer at [Canterbury Gardens & Gifts](https://yourchristmasstore.com)**  


</div>
<p>
I am a Front-End WordPress developer who has been making websites for small businesses for over 3 years. I have experience working with many types of individuals and organizations - churches, nonprofits, my university, online stores,  and more. Aside from WordPress, I also work end-to-end on full-stack web applications with strong front-end skills in JavaScript, PHP, and React with a focus on accessible and functional UI/UX. 
</p>
</div>

<div class="divider"></div>


## Tools I use

<ul class="dash">
    <li>Platforms: WordPress, WooCommerce, Shopify, Laravel</li>
    <li>Front end: React, Gatsby, jQuery, Bootstrap, Sass, PHP</li>
    <li>Back end: Node.js, Express, Firebase, mySQL, mongoDB</li>
    <li>DevOps and Build Tools: Nginx, Docker, npm, gulp, Yarn, Composer, Git</li>
    <li>Photo/Graphics: Adobe Photoshop, Illustrator, XD</li>
</ul>

<div class="divider"></div>

## Etc

I'm also an undergraduate Political Science student at California Polytechnic State University, San Luis Obispo. My academic work in political science studies the effects of different social media on an individual's political knowledge and participation. 


<a href="/files/FinleyChenResume2020.pdf" class="button">Download Resume</a>

  </Layout>
)

export default AboutPage
