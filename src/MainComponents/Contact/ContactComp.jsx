import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import schema from "./validate";
import axios from "axios";
import "./Contact.css";

const ContactComp = () => {
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState();
  const [messageError, setMessageError] = useState("");
  const [errorMessage, setErrorMessage] = useState(true);
  const [verfied, setVerfied] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(false);

  const [mailerState, setMailerState] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitEmail = async (e) => {
    e.preventDefault();
    // console.log({ mailerState });
    const validation = await validate(mailerState);
    console.log(validation);
    // console.log(mailerState);

    if (validation === true) {
      console.log("You're good!");
      alert("Message Sent Successfully!!");
      setMailerState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    }

    if (validation === true) {
      const responsetoself = await axios(
        "http://localhost:8000/api/mail/sendToUser",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          data: mailerState,
        }
      )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      const responseToMuti = await axios(
        "http://localhost:8000/api/mail/sendToMuti",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          data: mailerState,
        }
      )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            console.log("Message Sent");
          } else if (res.status === 402) {
            console.log("Message failed to send");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const validate = (mailerState) => {
    const result = schema.validate(
      {
        fullName: mailerState.fullName,
        email: mailerState.email,
        number: mailerState.phone,
        message: mailerState.message,
      },
      { abortEarly: false }
    );

    if (!result.error) {
      setFullNameError("");
      setPhoneError("");
      setMessageError("");
      setEmailError("");
      setErrorMessage(false);
      return true;
    }

    for (let i in result.error.details) {
      if (result.error.details[i].context.label === "Name") {
        setFullNameError(result.error.details[i].message);
        setErrorMessage(true);
        break;
      } else setFullNameError("");
      setErrorMessage(false);
    }

    for (let i in result.error.details) {
      if (result.error.details[i].context.label === "Email") {
        setEmailError(result.error.details[i].message);
        setErrorMessage(true);
        break;
      } else setEmailError("");
      setErrorMessage(false);
    }

    for (let i in result.error.details) {
      if (result.error.details[i].context.label === "Number") {
        setPhoneError(result.error.details[i].message);
        setErrorMessage(true);
        break;
      } else setPhoneError("");
      setErrorMessage(false);
    }

    for (let i in result.error.details) {
      if (result.error) {
        if (result.error.details[i].context.label === "Message") {
          setMessageError(result.error.details[i].message);
          setErrorMessage(true);
          break;
        }
      } else setMessageError("");
      setErrorMessage(false);
    }

    if (!result.error) {
      setFullNameError("");
      setPhoneError("");
      setMessageError("");
      setEmailError("");
      setErrorMessage(false);
      return true;
    } else {
      return false;
    }
  };

  function onChange(value) {
    if (value) setVerfied(true);
    // console.log("Captcha value:", value);
  }

  return (
    <>
      <section className="contact" id="contact">
        <div className="heading">
          <h1>Contact</h1>
        </div>
        <div className="row">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14676.076183382833!2d77.60700385227963!3d13.023555620349676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17fb66ca2d95%3A0xea8c3e0488bf6f40!2sASA%20Building%20Demolition%20Contractor%20Bangalore!5e0!3m2!1sen!2sin!4v1675286800879!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <iframe
            className="map"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14676.076183382833!2d77.60700385227963!3d13.023555620349676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17fb66ca2d95%3A0xea8c3e0488bf6f40!2sASA%20Building%20Demolition%20Contractor%20Bangalore!5e0!3m2!1sen!2sin!4v1675286800879!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <form onSubmit={submitEmail} action="">
            <h3>Contact Now</h3>
            <input
              type="text"
              placeholder="Name"
              name="fullName"
              className="box"
              value={mailerState.fullName}
              onChange={handleStateChange}
            />
            {fullNameError ? (
              <p className="errorMessage">{fullNameError}</p>
            ) : null}

            <input
              type="email"
              placeholder="Email"
              name="email"
              className="box"
              value={mailerState.email}
              onChange={handleStateChange}
            />
            {emailError ? <p className="errorMessage">{emailError}</p> : null}

            <input
              type="number"
              placeholder="Phone"
              name="phone"
              className="box"
              value={mailerState.phone}
              onChange={handleStateChange}
            />
            {phoneError ? <p className="errorMessage">{phoneError}</p> : null}

            <textarea
              name="message"
              placeholder="Message"
              className="box"
              id=""
              cols="30"
              rows="10"
              value={mailerState.message}
              onChange={handleStateChange}
            />
            {messageError ? (
              <p className="errorMessage">{messageError}</p>
            ) : null}

            <div
              style={{ transformOrigin: "0 0", width: "100%" }}
              className="captcha"
            >
              <ReCAPTCHA
                sitekey="6LePrU4kAAAAAJtpRmNFy9i-u7PNdMnjp-PIeAsP"
                onChange={onChange}
              />
            </div>

            <input type="submit" value="send message" className="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactComp;
