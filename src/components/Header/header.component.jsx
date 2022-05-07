import React from "react";
import logo from "../../images/shared/logo.svg";
import "./header.style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <hr />
      <nav>
        <button
          className="close"
          aria-hidden="true"
          onClick={() => {
            document.querySelector("nav").classList.remove("show");
          }}
        ></button>
        <ul id="site-nav">
          <li>
            <Link
              exact="true"
              to="/"
              className={window.location.pathname === "/" ? "active" : " "}
            >
              <span aria-hidden="true">00</span> Home
            </Link>
          </li>
          <li>
            <Link
              to="/destination"
              className={
                window.location.pathname === "/destination" ? "active" : " "
              }
            >
              <span aria-hidden="true">01</span> Destination
            </Link>
          </li>
          <li>
            <Link
              to="/crew"
              className={window.location.pathname === "/crew" ? "active" : " "}
            >
              <span aria-hidden="true">02</span> Crew
            </Link>
          </li>
          <li>
            <Link
              to="/technology"
              className={
                window.location.pathname === "/technology" ? "active" : " "
              }
            >
              <span aria-hidden="true">03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="menu-btn"
        onClick={() => {
          document.querySelector("nav").classList.add("show");
        }}
      ></button>
    </header>
  );
};

export default Header;
