import { Route, Routes, HashRouter as Router } from "react-router-dom";
import Home from "./MainComponents/home/home";
import Login from "./MainComponents/login/login";
import SignUp from "./MainComponents/sign-up/sign-up";
import Services from "./MainComponents/Services/service";
import Cart from "./MainComponents/Cart/Cart";
import ContextProvider from "./MainComponents/Context/ContextProvider";
import { useContext, useEffect } from "react";
import Checkout from "./MainComponents/Checkout/Checkout";
import About from "./MainComponents/About/About";
import Contact from "./MainComponents/Contact/Contact";
import Orders from "./MainComponents/Orders/Orders";

function App() {
  const [{ user, cart }, dispatch] = useContext(ContextProvider);
  // console.log(user);

  useEffect(() => {
    localStorage.setItem("TarcarsUsername", JSON.stringify(user));
    localStorage.setItem("TarcarsCart", JSON.stringify(cart));
  }, [user, cart]);

  return (
    <Router>
      <Routes>
        {/* basename = /TarCars */}
        {/* Main */}
        <Route path="/orders" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
