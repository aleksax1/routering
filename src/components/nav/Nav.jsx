import React from "react";
import "./nav.css";

import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <div
        className="nav2"
        style={{
          height: "7vh",
          display: "flex",
          alignItems: "center",
          padding: "0 10vw",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <Link to="/" className="link">
            HOME
          </Link>
        </div>
        <div>
          <Link to="/products" className="link">
            PRODUCTS
          </Link>
        </div>
        <div>
          <Link to="/about" className="link">
            ABOUT
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
