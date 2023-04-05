import React, { useContext } from "react";
import "./cityPopup.css";
import { Link } from "react-router-dom";
import { getcities, getcities1, getcities2, getcities3 } from "../utils/cities";
import ContextProvider from "../Context/ContextProvider";

const CityPop = (props) => {
  const state = {
    cities: getcities(),
    cities1: getcities1(),
    cities2: getcities2(),
    cities3: getcities3(),
  };
  const [{ city }, dispatch] = useContext(ContextProvider);

  const handleCity = (title) => {
    console.log(title);
    dispatch({
      type: "ADD_A_CITY",
      city: title,
    });
    // props.serTrigger = false;
  };

  return props.trigger ? (
    <React.Fragment>
      <div className="popup">
        <div className="popup-inner">
          <div className="headContainer">
            <p className="heading">Select City</p>
            <button className="close" onClick={() => props.setTrigger(false)}>
              x
            </button>
          </div>
          <div className="mainContainer">
            <div className="row">
              {state.cities.map((city) => (
                <Link onClick={() => handleCity(city.title)}>
                  <img src={city.src} alt="agra" />
                  <p>{city.title}</p>
                </Link>
              ))}
            </div>
            <div className="row">
              {state.cities1.map((city) => (
                <Link onClick={() => handleCity(city.title)}>
                  <img src={city.src} alt="agra" />
                  <p>{city.title}</p>
                </Link>
              ))}
            </div>
            <div className="row">
              {state.cities2.map((city) => (
                <Link onClick={() => handleCity(city.title)}>
                  <img src={city.src} alt="agra" />
                  <p>{city.title}</p>
                </Link>
              ))}
            </div>
            <div className="row">
              {state.cities3.map((city) => (
                <Link onClick={() => handleCity(city.title)}>
                  <img src={city.src} alt="agra" />
                  <p>{city.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) : (
    ""
  );
};

export default CityPop;
