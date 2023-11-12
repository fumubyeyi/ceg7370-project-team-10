import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

class Navbar extends React.Component {
  state = {  } 
  render() { 
    return (
          <header>
            <nav
              className="navbar navbar-expand-lg navbar-white"
              style={{
                backgroundColor: "rgb(14, 8, 8)",
                position: "relative",
                top: "0",
              }}
              id="navbarToggleExternalContent"
            >
              <div className="container-fluid ml-0">
                <a className="navbar-brand" href="#navbarToggleExternalContent">
                  <img src="..." width="40px" height="40px" alt="..." />
                </a>
                <div className="collapse navbar-collapse navbar-brand" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <span className="nav-link">
                        <Link spy={true} smooth={true} to="products">
                        Our Products
                        </Link>
                      </span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link">
                        <Link spy={true} smooth={true} to="contact">
                        FAQ
                        </Link>
                      </span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link">
                        <Link spy={true} smooth={true} to="contact">
                          About Us
                        </Link>
                      </span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link">
                        <Link spy={true} smooth={true} to="contact">
                          Contact Us
                        </Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </nav> <br />
          </header>);
  }
}
 
export default Navbar;
