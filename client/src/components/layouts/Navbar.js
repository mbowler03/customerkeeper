
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand">
        <FontAwesomeIcon icon={faIdCard} color="white" size="lg" />
      </a>
      <h5 style={{ marginTop: "6px", color: "white" }}>
        ACME CUSTOMER DATABASE
      </h5>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#paginations"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="paginations">
        <ul className="navbar-nav ml-auto" id="paginations">
          <li className="nav-item" style={{ textAlign: "center" }}>
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item" style={{ textAlign: "center" }}>
            <Link className="nav-link" to="about">
              About Us <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
