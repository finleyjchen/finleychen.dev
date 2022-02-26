const Footer = ({innerRef}) => {

  return (
    <footer className="footer-wrapper" ref={innerRef}>
      <div className="footer container">

        <p className="description">Full Stack Web Developer</p>
        <a
          href="mailto:finleyjchen@gmail.com?body=Thanks for showing interest in my work. Let me know you might need!"
          className=""
        >
          Get In Touch
        </a>
      </div>
    </footer>
  )
}

export default Footer