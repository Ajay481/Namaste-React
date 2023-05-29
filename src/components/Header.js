import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [show, setShow] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() =>
              show === "Login" ? setShow("Logout") : setShow("Login")
            }
          >
            {show}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
