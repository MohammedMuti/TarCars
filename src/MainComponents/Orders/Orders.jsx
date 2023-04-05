import { useEffect } from "react";
import { useContext } from "react";
import Banner from "../common/banner/banner";
import NavBar from "../common/navbar/navBar";
import ContextProvider from "../Context/ContextProvider";
import "./Orders.css";
import axios from "../../axios";
import { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import Footer from "../Footer/Footer";

const Orders = () => {
  const [{ user }] = useContext(ContextProvider);
  const [approvedOrders, setApprovedOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchApproved = async () => {
      try {
        const res = await axios(`/orders/getApproved/${user._id}`);
        setApprovedOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchPending = async () => {
      try {
        const res = await axios(`/orders/getPending/${user._id}`);
        setPendingOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchApproved();
    fetchPending();
  }, []);

  const handleShow = () => {
    setShow(!show);
  };

  console.log(approvedOrders);

  return (
    <>
      <NavBar />
      <Banner sublink="Orders" />
      <div className="orders">
        <div className="ordersContainer">
          <div className="orderStatus">
            {!user ? (
              <h2>Please login to add items</h2>
            ) : (
              <h2>Hello {user.name}</h2>
            )}
          </div>
          <div className="orderHeading">
            {approvedOrders?.length === 0 && pendingOrders?.length === 0 ? (
              <h2>You Dont have any Orders yet.</h2>
            ) : (
              <h2>Your Orders</h2>
            )}
          </div>
          <div className="orderContentContainer">
            <div className="orderItems">
              {pendingOrders?.length ? (
                <h2 className="message">
                  Please Contact our helpline to Schedule the time of Service.
                </h2>
              ) : null}
              {pendingOrders?.map((item) => {
                return (
                  <div key={item.service._id} className="orderItem">
                    <img src={item.service.imgURl} alt="" />
                    <div className="itemContainer">
                      <div className="start">
                        <h2>{item.service.name}</h2>
                        <p>₹{item.service.price}</p>
                      </div>
                      <div className="end">
                        <button>Pending</button>
                      </div>
                    </div>
                  </div>
                );
              })}
              {approvedOrders?.length !== 0 ? (
                <div className="previousOrders">
                  <div className="selectContainer" onClick={handleShow}>
                    <h2>Previous Orders</h2>
                    <span>
                      {show ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </span>
                  </div>
                  <div className={show ? "show active" : "show"}>
                    {approvedOrders?.map((item) => {
                      return (
                        <div key={item.service._id} className="orderItem">
                          <img src={item.service.imgURl} alt="" />
                          <div className="itemContainer">
                            <div className="start">
                              <h2>{item.service.name}</h2>
                              <p>₹{item.service.price}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
