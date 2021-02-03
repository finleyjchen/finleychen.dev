import React from "react"
import { DateTime } from "luxon"
import { Link } from "gatsby"
import YinYang from "../icons/yin-yang.svg"
import { useState, useEffect } from 'react';

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


const Sidebar = () => {
  return(
    <aside className="sidebar">
    <div className="bio">
    <div>
      <Link to="/work" activeClassName="active" >01<span> Selected Work</span></Link>
    </div>
    <div>
      <Link to="/about" activeClassName="active" >02<span> About</span></Link>
    </div>
    <div>
      <Link to="/notes" activeClassName="active" >03<span> Notes</span></Link>
    </div>
    
    </div>
    <div>
    <p>Currently available for freelance projects.</p>

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
    </div>
    <div className="meta">
      <YinYang />
      <div className="time">

      <Clock /> 
      San Luis Obispo
      </div>
    </div>
  </aside>
)
}

export default Sidebar