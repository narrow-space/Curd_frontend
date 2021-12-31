import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-auto mb-2 mb-lg-0 p-2">
              <li className="nav-item">
                <Link to='/home' className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/adduser' className="nav-link active" aria-current="page" >
                 ADD A User
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/dashboard' className="nav-link active" aria-current="page" >
                 Dashboard
                </Link>
              </li>
              
             
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
