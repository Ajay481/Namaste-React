import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState("Login");
  // console.log("Header render");

  // If no dependency array => useEffect is calledon every render
  // If dependency array is empty = [] => useEffect is called on initial render(just once)
  // If dependency array is [show] => called everytime show is updated
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
