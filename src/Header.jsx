import "./App.css";
import logo from "./images/logo.svg";
import hamburger from "./images/icon-hamburger.svg";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="crowdfund logo" className="nav__logo" />
        <img
          src={hamburger}
          alt="menu hamberger icon"
          className="nav__menu"
          onClick={toggleMenu}
        />
        <ul className={`nav__list ${menu ? "visible" : ""}`}>
          <li style={{ cursor: "pointer" }}>About</li>
          <li style={{ cursor: "pointer" }}>Discover</li>
          <li style={{ cursor: "pointer" }}>Get Started</li>
        </ul>
      </nav>
    </header>
  );
}
