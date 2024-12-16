import { useNavigate } from "react-router-dom";
import "../assets/css/AboutsUs.css";
import ceo from "../assets/images/ceo.png";
import FlipRightAnimation from "../components/AnimatedTitle";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { endpoint } from "../assets/api/endpoint";
import { apiHandler } from "../assets/api";
import Footer from "../components/Footer";

const AboutPage = () => {
  const navigate = useNavigate();
  const [aboutPage, setAboutPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultDescription = `By leveraging our strategic design, engineering expertise, industry capabilities, and comprehensive deployment and support services, we empower our clients to navigate the digital landscape and accelerate their growth. With a team of over 200 professionals, a client base exceeding 200 active clients, and a state-of-the-art 24×7 operations center in New Delhi, we ensure seamless management of technology, talent, and tools to enhance the end-user experience and maintain continuous digital infrastructure availability. We prioritize business-centric solutions, enabling our clients to innovate and succeed today while paving the way for a prosperous future.`;

  const onAboutPage = async () => {
    try {
      const result = await apiHandler({
        url: endpoint.GET_ABOUT_PAGE,
        method: "GET",
        // authToken: auth.authToken,
      });
      const aboutPageData = result.data.find(
        (page) =>
          page.slug === "about-us-2" || page.title.rendered.toLowerCase() === "about us"
      );
      setAboutPage(aboutPageData);
      console.log('onAboutPage', result);
    } catch (error) {
      console.error("Error fetching attendance data: ", error);
      setError("Failed to load page content.");
    } finally {
      setLoading(false);
    }

  }
  useEffect(() => {
    onAboutPage();
  }, [])

  if (loading) {
    return (
      <div className="loading-spinner  d-flex align-items-center justify-content-center" style={{height:'80vh',}}>
        <div class="spinner-grow " role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message d-flex align-items-center justify-content-center" style={{height:'80vh',}}>
        <p>{error}</p>
      </div>
    );
  }

  return (
      <>
      <div className="container-fluid  bg-black">
        <div className="row d-flex flex-column justify-content-center align-items-center about-us-hero">
          <div className="col-lg-6 col-11 d-flex flex-column text-center">
            <h1 className=" text-white mb-4 display-4 fw-medium"  style={{ wordSpacing: "1rem" }}>Get to know Insight</h1>
            <p className="text-white fs-6 text-center">
              Who we are and what we do goes far beyond providing technology
              solutions. Learn how we’re making a difference in the world around
              us.{" "}
            </p>
            <p>
              <Button
                onClick={() => navigate("/contact-us")}
                classes="btn-primary my-2"
                text="Talk to a Specialist"
              />
            </p>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="text-center my-4">
          <FlipRightAnimation text="About Us" className="mb-5" />
        </div>
      </div>

      <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mx-auto">
              <div
                className="about-page-description text-left"
                dangerouslySetInnerHTML={{
                  __html: aboutPage?.content?.rendered || defaultDescription
                }}
              />
            </div>
          </div>
        


      </div>

      <div className="container-fluid p-0">
        <div className="d-flex flex-column gap-2 justify-content-center align-items-center about-us-insight">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6 mb-4 ceo-img">
                <figure>
                  <img
                    alt="Zion CEO"
                    src={ceo}
                    style={{
                      maxWidth: "450px",
                      maxHeight: "auto",
                      borderRadius: "5rem",
                    }}
                  />
                </figure>
              </div>

              <div className="col-md-6 text-white fs-6 d-flex flex-column gap-2">
                <div className="fs-4">
                  "At Zion, our focus is on cultivating impactful partnerships that transform challenges into opportunities for our clients, partners, and team."
                </div>
                <div>
                  <strong>Shaji Jacob</strong>
                  <br />
                  <span className="fs-6">
                  Founder and Chief Executive Officer, Zion
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center mb-0 mt-4 mt-md-0">
            <Button
              onClick={() => navigate("/contact-us")}
              classes="btn-primary"
              text="Talk to a Specialist"
            />
          </p>
        </div>
      </div>
      <Footer/>
      </>
  );
};

export default AboutPage;
