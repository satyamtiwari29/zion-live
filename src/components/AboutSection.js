import { Link } from "react-router-dom";
import "../assets/css/HomePage.css";
import bgImg from "../assets/images/bg-overlay-55.jpg";

const AboutSection = () => {
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center bg-image"
        style={{
          backgroundImage: bgImg,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height:'60vh'
        }}
      >
        <div className="text-center">
          <h1
            className="text-white mb-4 display-4 fw-medium"
            style={{ wordSpacing: "1rem", letterSpacing: "0.2rem" }}
          >
            IT Infrastructure Solutions & <br /> Managed IT Services
          </h1>
          {/* <Button
            onClick={(e) => (window.location.href = "/contact")}
            classes="btn-primary my-4"
            text="Let's Connect"
          /> */}
          <button className="btn btn-primary">
            <Link to="/contact-us" className="text-decoration-none">
              <span className="fs-5 fw-normal text-white">Contact Us</span>
            </Link>
          </button>
        </div>
      </div>

      <div className="container-fluid theme-color text-black  pt-5 ">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 mb-4">
            {" "}
            {/* Center the column */}
            <h2 className="fs-4 text-center fs-5 fw-light  text-center custom-font-size">
              Zion Computers delivers vendor-independent IT Infrastructure
              solutions and managed services to customers over the last two and
              half decades.
            </h2>
            <h2 className="fs-4 pt-4 text-center fw-light  text-center custom-font-size">
              We have played a significant role in the growth and success of
              several well-known enterprises by providing essential IT
              infrastructure solutions and support. We helped these companies
              from their early stages and have continued to support them as
              they’ve grown. This partnership reflects our reliability and
              expertise in the IT field.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
