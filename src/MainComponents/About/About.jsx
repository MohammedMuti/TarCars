import { Link } from "react-router-dom";
import Banner from "../common/banner/banner";
import NavBar from "../common/navbar/navBar";
import Footer from "../Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <NavBar />
      <Banner sublink="About" />
      <div className="padding">
        {/* --------------About---------------- */}
        <div className="about-us">
          <div className="heading">
            <h1>About Us</h1>
          </div>
          <div className="about-container">
            <div className="video">
              <video
                src={require("../../video/videoplayback.mp4")}
                className="About-video"
                loop
                muted
                autoPlay
                controls
              ></video>
            </div>
            <div className="about-content">
              <h2>We Provide The Best Service There Is..</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus inventore, dolores dicta doloremque culpa totam ducimus
                doloribus quia et, possimus fugit corrupti aliquid velit, amet
                accusamus harum perferendis ullam perspiciatis recusandae enim?
                Nostrum id rem ducimus facere blanditiis totam dolores, quia
                eligendi, ratione omnis saepe aliquid fugiat incidunt velit
                numquam.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos molestias repellendus sunt odit ipsa in dolore
                omnis? Culpa sed possimus eos! Tempore a, hic, magnam numquam
                odio, nam iure deleniti consequuntur laboriosam nulla molestias.
                In!
              </p>
            </div>
          </div>
          <div className="aboutBlocks">
            <div className="blockBoxes">
              <div className="box">
                <h2>30+</h2>
                <span>years of experience</span>
              </div>
              <div className="box">
                <h2>30+</h2>
                <span>years of experience</span>
              </div>
              <div className="box">
                <h2>30+</h2>
                <span>years of experience</span>
              </div>
              <div className="box">
                <h2>30+</h2>
                <span>years of experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
