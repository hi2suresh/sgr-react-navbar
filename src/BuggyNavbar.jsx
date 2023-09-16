import { useRef, useState } from 'react';
import { links, social } from './data';
import { FaBars } from 'react-icons/fa';
import logo from './logo.svg';

const BuggyNavbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => setShowLinks((current) => !current);
  const linksStyle = {
    // height: showLinks
    //   ? `${linksRef.current.getBoundingClientRect().height}px`
    //   : '0px',
  };
  console.log(linksRef.current);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksRef} style={linksStyle}>
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default BuggyNavbar;
