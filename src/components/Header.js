import { LOGO_URL } from "./utils/constants";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  useEffect(() => {
    console.log("useEffect is getting called");
  }, [btnName]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li>Cart</li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnName == "login" ? setBtnName("logout") : setBtnName("login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
