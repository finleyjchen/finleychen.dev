import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

const Footer = ({ innerRef }) => {

    return (
        <footer className="footer-wrapper" ref={innerRef}>
            <div className="container">

                <div className="footer ">
                    <p>Finley Chen</p>
                    <div className="social-list">
                        <a
                            href="mailto:finleyjchen@gmail.com?body=Thanks for showing interest in my work. Let me know you might need!"
                            className=""
                        >
                            <EnvelopeClosedIcon />
                            Email
                        </a>
                        <Link href="https://twitter.com/FinleyChen">
                            <TwitterLogoIcon />
                            Twitter
                        </Link>
                        <Link href="https://www.linkedin.com/in/finleychen/">
                            <LinkedInLogoIcon />
                            Linkedin
                        </Link>
                        <Link href="https://github.com/finleyjchen">
                            <GitHubLogoIcon />
                            Github
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer