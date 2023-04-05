import Banner from "../common/banner/banner";
import NavBar from "../common/navbar/navBar";
import Footer from "../Footer/Footer";
import ContactComp from "./ContactComp";

const Contact = () => {
  return (
    <>
      <NavBar />
      <Banner sublink="Contact" />
      <ContactComp />
      <Footer />
    </>
  );
};

export default Contact;
