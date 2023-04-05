import { useContext, useState } from "react";
import NavBar from "../common/navbar/navBar";
import Footer from "../Footer/Footer";
import "./Checkout.css";
import axios from "../../axios";
import useRazorpay from "react-razorpay";
import { useLocation, useNavigate } from "react-router-dom";
import ContextProvider from "../Context/ContextProvider";
import env from "react-dotenv";

const Checkout = () => {
  const [{ user, cart }, dispatch] = useContext(ContextProvider);

  const [userCart, setUserCart] = useState(cart);

  const [payment, setPayment] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const handlePayment = (e) => {
    setPayment(e.target.value);
  };

  const handleCartTotal = (cart) => {
    let total = 0;
    for (let i in cart) {
      total += cart[i].price;
    }
    return total;
  };

  const Razorpay = useRazorpay();

  const handleOpenRazorpay = async (data) => {
    const options = {
      key: env.KeyId,
      amount: data.amount,
      currency: "INR",
      name: "TARCARS SERVICES",
      description: "Description",
      image:
        "https://mohammedmuti.github.io/Images/intern-services/images/TC.PNG",
      order_id: data.id,
      handler: async function (response) {
        console.log(response);
        try {
          try {
            for (let i in userCart) {
              try {
                const res = await axios.post("/orders/create", {
                  customer: user.email,
                  service: userCart[i]._id,
                });
                console.log(res.data);
              } catch (err) {
                console.log(err);
              }
            }
            navigate("/");
          } catch (err) {
            console.log(err);
          }
          const verifyRes = await axios.post("/payment/verify", {
            response: response,
          });
          console.log(verifyRes.data);
        } catch (err) {
          console.log(err);
        }
      },
      // prefill: {
      //   name: "Mohammed",
      //   email: "mohammedmuti74@example.com",
      //   contact: "9066402200",
      // },
      // notes: {
      //   address: "Razorpay Corporate Office",
      // },
      // theme: {
      //   color: "#3399cc",
      // },
    };
    const rzp1 = new Razorpay(options);
    rzp1.open();
    console.log(data);
  };

  const onPayment = async () => {
    try {
      const res = await axios.post("/payment/create", {
        amount: handleCartTotal(userCart),
      });
      handleOpenRazorpay(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCashPayment = async () => {
    try {
      for (let i in userCart) {
        try {
          const res = await axios.post("/orders/create", {
            customer: user.email,
            service: userCart[i]._id,
          });
          console.log(res.data);
        } catch (err) {
          console.log(err);
        }
      }
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar />
      <div className="checkout">
        <div className="header">
          <h2>Checkout</h2>
        </div>
        <div className="checkoutContent">
          <div className="wrapper">
            <div className="payment">
              <h2>Select a payment method</h2>
              <form className="methods">
                <div className="method">
                  <input
                    type="radio"
                    onChange={handlePayment}
                    value="card"
                    name="payment"
                    id="card"
                  />
                  <label htmlFor="card" className="methodDetails">
                    <h3>Pay with Debit/Credit/ATM Cards</h3>
                    <p>You can save your cards as per new RBI guidelines.</p>
                    {payment === "card" ? <p>Enter Card details</p> : null}
                  </label>
                </div>
                <div className="method">
                  <input
                    type="radio"
                    onChange={handlePayment}
                    value="UPI"
                    name="payment"
                    id="UPI"
                  />
                  <label className="methodDetails" htmlFor="UPI">
                    <h3>Other UPI Apps</h3>
                    {payment === "UPI" ? <p>Please Enter your UPI ID</p> : null}
                  </label>
                </div>
                <div className="method">
                  <input
                    type="radio"
                    onChange={handlePayment}
                    value="cash"
                    name="payment"
                    id="cash"
                  />
                  <label className="methodDetails" htmlFor="cash">
                    <h3>Cash On Delivery/Pay On Delivery</h3>
                    <p>
                      Scan & Pay using QR Code. Cash, UPI, Cards also Accepted.
                    </p>
                  </label>
                </div>
              </form>
            </div>
            <div className="confirmBtn">
              <button
                onClick={payment === "cash" ? handleCashPayment : onPayment}
                disabled={!payment}
              >
                Use this payment method
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
