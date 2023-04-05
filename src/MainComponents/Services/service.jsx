import React, { useEffect } from "react";
import { useContext } from "react";
import NavBar from "../common/navbar/navBar";
import "./services.css";
import ContextProvider from "../Context/ContextProvider";
import { Link } from "react-router-dom";
import Banner from "../common/banner/banner";

import axios from "../../axios";
import { useState } from "react";
import Footer from "../Footer/Footer";

const Services = () => {
  const [service, setService] = useState([]);
  const [{ user, cart }, dispatch] = useContext(ContextProvider);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios("/services");
        setService(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    async function fetchUserServices() {
      try {
        const res = await axios(`/services/userservices/${user._id}`);
        if (res === null) {
          console.log("hello");
          return dispatch({
            type: "ADD_TO_CART",
            cart: null,
          });
        }
        dispatch({
          type: "ADD_TO_CART",
          cart: res.data,
        });
      } catch (err) {
        dispatch({
          type: "ADD_TO_CART",
          cart: null,
        });
        console.log(err);
      }
    }
    fetchData();
    fetchUserServices();
  }, [user, cart, dispatch]);

  const handleAddItem = async (item) => {
    if (user) {
      try {
        const res = await axios.put("/users/added", {
          id: user._id,
          productId: item._id,
        });
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Please Login to add items!!");
    }
  };

  const handleCartTotal = (cart) => {
    let total = 0;
    for (let i in cart) {
      total += cart[i].price;
    }
    return total;
  };

  return (
    <React.Fragment>
      <NavBar />
      <Banner sublink="Services" />
      <div className="services">
        <div className="checkout-section">
          {user ? (
            <>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h2>Amount Payable:</h2>
                    </td>
                    <td>
                      <h2 style={{ textAlign: "right" }}>
                        ₹{cart ? handleCartTotal(cart) : 0}
                      </h2>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2>Services Selected:</h2>
                    </td>
                    <td>
                      <h2 style={{ textAlign: "right" }}>
                        {" "}
                        {cart ? cart.length : 0}
                      </h2>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Link to="/cart">Go to Cart</Link>
            </>
          ) : (
            <h1 style={{ color: "lightgray", fontSize: "3rem" }}>
              Please Login to Add Items
            </h1>
          )}
        </div>
        <div className="heading">
          <h1>Services We Provide</h1>
        </div>
        <div className="services-container">
          {service.map((service) => {
            return (
              <div key={service._id} className="services-item">
                <img src={service.imgURl} alt="" />
                <h2>{service.name}</h2>
                <p>₹{service.price}</p>
                <button onClick={() => handleAddItem(service)}>
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Services;
