import React, { useState, useEffect } from "react";
import { NavLink, useMatch } from 'react-router-dom';
import './navBar.css';



const NavBar = () => {

  const CustomNavLink = ({ to, children }) => {
    const match = useMatch(to);
    return (
      <NavLink
        className={`nav-link ${match ? 'nav-link-active' : 'nav-link'}`}
        to={to}
      >
        {children} 
      </NavLink>
    )
  }; 

  const [visible, setVisible] = useState(false);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className={`navbar ${visible ? 'visible' : ''}`}>
      <div className="container">
        <NavLink className="navbar-name" to="/" exact>Edward Baum<span id='dotCom'>.com</span></NavLink>
        <ul className="navbar-list">
          <li className="nav-item">
            <CustomNavLink to="/about" exact>About Me</CustomNavLink>
          </li>
          <li className="nav-item">
          <CustomNavLink to="/portfolio" exact>Portfolio</CustomNavLink>
          </li>
          <li className="nav-item">
          <CustomNavLink to="/blog" exact>Training</CustomNavLink>
          </li>
          <li className="nav-item">
          <CustomNavLink to="/contact" exact>Contact</CustomNavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
