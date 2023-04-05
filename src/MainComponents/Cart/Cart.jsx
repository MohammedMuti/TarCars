import axios from "../../axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Banner from "../common/banner/banner";
import NavBar from "../common/navbar/navBar";
import ContextProvider from "../Context/ContextProvider";
import "./Cart.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Cart = () => {
  const [{ user, cart }, dispatch] = useContext(ContextProvider);

  const [userCart, setUserCart] = useState(cart);

  const handleRemoveItem = async (item) => {
    console.log(item._id);
    try {
      const res = await axios.put(`/services/removeservice/${user._id}`, {
        itemId: item._id,
      });
      dispatch({
        type: "ADD_TO_CART",
        cart: res.data,
      });
      setUserCart(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
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
      <Banner sublink="Cart" />
      <div className="cart">
        <div className="cart-container">
          <div className="cart-status">
            {!user ? (
              <h2>Please login to add items</h2>
            ) : (
              <h2>Hello {user.name}</h2>
            )}
          </div>
          <div className="cart-heading">
            {userCart?.length === 0 ? (
              <h2>Your Services Cart is Empty</h2>
            ) : (
              <h2>Your Services Cart</h2>
            )}
          </div>
          <div className="cart-content">
            {userCart?.length === 0 ? (
              <p>
                You have no items in your cart. To buy one or more items, click
                "Add to basket" next to item.
              </p>
            ) : (
              <div className="cart-content-container">
                {/* <div className="cart-items">
                  {userCart?.map((item) => {
                    return (
                      <div key={item._id} className="cart-item">
                        <img src={item.imgURl} alt="" />
                        <h2>{item.name}</h2>
                        <p>₹{item.price}</p>
                        <button onClick={() => handleRemoveItem(item)}>
                          Remove from Cart
                        </button>
                      </div>
                    );
                  })}
                </div> */}
                {userCart !== null ? (
                  <div className="cart-proceed">
                    {console.log(userCart)}
                    {userCart?.map((item) => {
                      return (
                        <div className="proceed-items">
                          <div className="itemImg">
                            <img src={item.imgURl} alt="" />
                          </div>
                          <div className="itemContent">
                            <h2>{item.name}</h2>
                            <p>₹{item.price}</p>
                            <button onClick={() => handleRemoveItem(item)}>
                              Remove item
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    <div className="proceed-details">
                      <h2>PRICE DETAILS ({userCart?.length} Item )</h2>
                      <table>
                        <tr>
                          <td>Total MRP</td>
                          <td style={{ textAlign: "right" }}>
                            ₹{userCart ? handleCartTotal(userCart) : 0}
                          </td>
                        </tr>
                        <tr>
                          <td>Discount on MRP</td>
                          <td style={{ textAlign: "right" }}>₹0</td>
                        </tr>
                        <tr>
                          <td>Convenience Fee</td>
                          <td style={{ textAlign: "right" }}>
                            {" "}
                            <span style={{ textDecoration: "line-through" }}>
                              ₹99
                            </span>{" "}
                            FREE
                          </td>
                        </tr>
                      </table>
                      <div className="total">
                        <span>Total Amount</span>
                        <span style={{ textAlign: "right" }}>
                          ₹{userCart ? handleCartTotal(userCart) : 0}
                        </span>
                      </div>
                      <div className="placeOrder">
                        <p>{userCart?.length} Item selected for order</p>
                        <Link
                          to="/Tarcars/checkout"
                          state={userCart ? handleCartTotal(userCart) : 0}
                        >
                          <button>PLACE ORDER</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Cart;
