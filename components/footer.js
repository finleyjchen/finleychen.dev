const Footer = ({ innerRef }) => {

    return (
        <footer className="footer-wrapper" ref={innerRef}>
            <div className="container">

                <div className="footer mono">

                    <p className="mono">Full Stack Web Developer</p>
                    <a
                        href="mailto:finleyjchen@gmail.com?body=Thanks for showing interest in my work. Let me know you might need!"
                        className=""
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer