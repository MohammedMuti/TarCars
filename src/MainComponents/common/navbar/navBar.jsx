import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CityPop from "../cityPop";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ContextProvider from "../../Context/ContextProvider";

const NavBar = () => {
  const [{ city, user }, dispatch] = useContext(ContextProvider);
  // console.log(city);
  const [click, setClick] = useState(true);
  const [triggerPopup, setTriggerPopup] = useState(false);

  const handleCity = () => {
    setTriggerPopup(true);
  };

  const handleClick = () => {
    setClick(!click);
  };

  const handleLogoutUser = () => {
    dispatch({
      type: "SET_USER",
      user: "",
    });
    dispatch({
      type: "ADD_TO_CART",
      cart: [],
    });
  };

  return (
    <div className="div">
      <div className="nav">
        <nav>
          {/* ---------Nav Left side------------  */}
          <div className="nav-logo">
            <Link className="title" to={"/"}>
              <span>TC</span>
              <h1>TarCars</h1>
            </Link>
          </div>

          {/* -- ------------Nav Right side-----------  */}
          <div className="nav-content">
            <ul className={click ? "navbar" : "navbar active"}>
              <Link className="Nav_Link" to={"/services"}>
                <li>Services</li>
              </Link>
              <Link className="Nav_Link" to={"/cart"}>
                <li>Track & Pay</li>
              </Link>
              <Link className="Nav_Link" to={"/orders"}>
                <li>Orders</li>
              </Link>
              <Link className="Nav_Link" to={"/about"}>
                <li>About</li>
              </Link>
              <Link className="Nav_Link" to={"/contact"}>
                <li>Contact</li>
              </Link>
              {user ? (
                <Link onClick={handleLogoutUser} className="Nav_Link_login">
                  <li>Logout</li>
                </Link>
              ) : (
                <Link className="Nav_Link_login" to={"/login"}>
                  <li>Login</li>
                </Link>
              )}
            </ul>
            <FontAwesomeIcon
              onClick={handleClick}
              icon={faBars}
              className="menu-btn"
            />
          </div>
        </nav>
      </div>
      <CityPop trigger={triggerPopup} setTrigger={setTriggerPopup} />
    </div>
  );
};

export default NavBar;
