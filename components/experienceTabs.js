import { useEffect, useRef, useState } from "react"
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion"
import { PaperPlaneIcon } from "@radix-ui/react-icons";
const jobs = [
    {
        company: "Digital Impulse",
        companyUrl: "https://digitalimpulse.com",
        title: "Full Stack Web Developer",
        date: "July 2021 - Present",
        details: [
            "Working with a team of other developers, designers, and content strategists to deliver websites and cms solutions to a vast array of clients",
            "Internal projects and integration tools using technologies such as Node.js, React, WordPress, Next.js, Sanity, and PHP",
            "We are historically a PHP/Wordpress agency, but we are currently exploring headless WP and other JAMstack solutions",
        ]
    },
    {
        company: "Finley Chen Web Development",
        companyUrl: "https://finleychen.dev",
        title: "Founder",
        date: "2017 - Present",
        details: [
            "Website development, hosting, custom plugin development for multiple small business clients in San Luis Obispo and San Diego",
            "Regular communication with clients",
            "Designing graphics and writing marketing copy, running ad campaigns and conversion analytics using technologies such as Hubspot, HotJar, Google Ads, and Facebook ads"
        ]
    },
    {
        company: "AllPeople",
        title: "Front-end Web Developer",
        companyUrl: "https://allpeople.co",
        date: "Jun 2019 – Dec 2019",
        details: [
            "With another developer, co-created a Shopify site with 7,000+ products",
            "Developed a referral link tracking system in AJAX, Liquid templates, jQuery, and vanilla JavaScript",
            "Built a similar custom WooCommerce/WordPress version of the Shopify site",
            "Designed eCommerce marketing and transactional emails in HTML/CSS"
        ]
    },
    {
        company: "Cal Poly SLO",
        title: "Student Front-end Web Developer",
        companyUrl: "https://afd.calpoly.edu",
        date: "Jan 2019 – Aug 2019",
        details: [
            "Collaborating with AFD's UI/UX developer and other university staff for Cal Poly’s Administration and Finance Department (AFD)",
            "Created dynamic forms with database and CSV import/exports with JavaScript, jQuery, and PHP",
            "Built responsive department pages using the Foundation framework and PHP, following best practices in accessibility and UI/UX"
        ]
    },
    {
        company: "Canterbury Gardens & Gifts",
        title: "Web Developer",
        companyUrl: "https://yourchristmasstore.com",
        date: "Apr 2017 – Sep 2018",
        details: [
            "Creating and managing ad campaigns for mailing lists and emails, using Mailchimp and Hubspot",
            "WordPress, Quickbooks, and  database management and automation for 10,000+ SKUs",
            "web development on Magento",
            "WordPress/WooCommerce custom theme development, migrating the Magento database and doing SEO work for the website.",
            "Devops workflow setup with GCP hosting"
        ]
    },
]
const ExperienceTabs = () => {
    const [activeTabId, setActiveTabId] = useState(0);
    const [tabFocus, setTabFocus] = useState(null);

    const tabs = useRef([]);
    const focusTab = () => {
        if (tabs.current[tabFocus]) {
            tabs.current[tabFocus].focus();
            return;
        }
        // If we're at the end, go to the start
        if (tabFocus >= tabs.current.length) {
            setTabFocus(0);
        }
        // If we're at the start, move to the end
        if (tabFocus < 0) {
            setTabFocus(tabs.current.length - 1);
        }
    };

    // Only re-run the effect if tabFocus changes
    useEffect(() => focusTab(), [tabFocus]);

    // Focus on tabs when using up & down arrow keys
    const onKeyDown = e => {
        switch (e.key) {
            case "ArrowUp": {
                e.preventDefault();
                setTabFocus(tabFocus - 1);
                break;
            }

            case "ArrowDown": {
                e.preventDefault();
                setTabFocus(tabFocus + 1);
                break;
            }

            default: {
                break;
            }
        }
    };
    return (
        <div className="jobs grid-2">
            <div className="tab-list" role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
                {jobs && jobs.map((job, i) => (

                    <button
                        key={i}
                        onClick={() => setActiveTabId(i)}
                        ref={el => (tabs.current[i] = el)}
                        id={`tab-${i}`}
                        role="tab"
                        tabIndex={activeTabId === i ? '0' : '-1'}
                        aria-selected={activeTabId === i ? true : false}
                        aria-controls={`panel-${i}`}
                        className={`tab-button ${activeTabId === i ? `active` : ``}`}
                    >
                        {activeTabId === i &&
                            <motion.div className="dot" layoutId="dot">
                                <PaperPlaneIcon />
                            </motion.div>
                        }
                        <span>{job.company}</span>
                    </button>

                ))}
            </div>
            {jobs && jobs.map((job, i) => (
                <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade">

                    <div
                        id={`panel-${i}`}
                        role="tabpanel"
                        tabIndex={activeTabId === i ? '0' : '-1'}
                        aria-labelledby={`tab-${i}`}
                        aria-hidden={activeTabId !== i}
                        hidden={activeTabId !== i}
                        className="job"
                    >

                        <h4 className="job-name">
                            <span className="job-title">{job.title}</span> at{" "}
                            <a className="job-company serif" href={job.companyUrl}>{job.company}</a>
                        </h4>
                        <p className="job-date">{job.date}</p>
                        <ul className="job-details">
                            {job.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </CSSTransition>
            ))}

        </div>
    )
}

export default ExperienceTabs