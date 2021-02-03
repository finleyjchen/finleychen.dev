import { Link } from "gatsby"
import React from "react"
import { DateTime } from "luxon"
import { useState, useEffect } from "react"
function getTime() {
  var local = new DateTime.local();
  var rezoned = local.setZone("America/Los_Angeles");
  return rezoned;
}
function Clock(props) {
  const [date, setDate] = useState(getTime());
  
 //Replaces componentDidMount and componentWillUnmount
 useEffect(() => {
  var timerID = setInterval( () => tick(), 1000 );

  return function cleanup() {
      clearInterval(timerID);
    };
 });

   function tick() {
    setDate(getTime());
   }

   return (
      <div>
        <time>{date.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)}</time>
      </div>
    );
}
const Footer = () => (
  <footer>
    <div>
      <Link to="/" className="logo">
        Finley Chen
      </Link>
    </div>
    <ul className="social-links">
  <li className="menu-item">
    <a href="mailto:finleyjchen@gmail.com">
      {/* <Mail /> */}
      email
    </a>
  </li>
  <li className="menu-item">
    <a href="https://github.com/finleyjchen">
      {/* <Github /> */}
      github
    </a>
  </li>
  <li className="menu-item">
    <a href="https://twitter.com/finleychen">
      {/* <Twitter /> */}
      twitter
    </a>
  </li>
  <li className="menu-item">
    <a href="https://www.linkedin.com/in/finleychen/">
      {/* <LinkedIn /> */}
      linkedin
    </a>
  </li>
</ul>
    <div>
      <a href="https://github.com/finleyjchen/finleychen.dev">View Source</a>
    </div>
  </footer>
)

export default Footer
