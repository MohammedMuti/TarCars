import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";

const Banner = (props) => {
  return (
    <React.Fragment>
      <div className="banner">
        <div className="banner-content">
          <div className="banner-title">
            <h1>{props.sublink}</h1>
          </div>
        </div>
      </div>
      <div className="breadcrumbs">
        <div className="subs">
          <Link to="/Tarcars">
            <p>Home</p>
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <Link>
            <p className="activeC">{props.sublink}</p>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
