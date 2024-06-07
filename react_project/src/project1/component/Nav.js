import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#qa">Q&A</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
