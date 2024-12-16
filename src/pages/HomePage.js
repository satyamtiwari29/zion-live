import React, { useState } from "react";
import ExpertiseCard from "../components/ExpertiseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Text.css";
import AboutSection from "../components/AboutSection";
import FlipRightAnimation from "../components/AnimatedTitle";
import ClientCarousel from "../components/ClientCarousel";
import "../assets/css/Swiper.css";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

const HomePage = () => {
  const cardData = [
    {
      ImageUrl:
        "https://ziongroup.com/wp-content/uploads/2024/06/infrastructure-1.png",
      cardTitle: "Infrastructure Solutions",
      cardDescription:
        "Our infrastructure solutions enhance efficiency, security, and seamless integration.",
    },
    {
      ImageUrl:
        "https://ziongroup.com/wp-content/uploads/2024/06/security-2.png",
      cardTitle: "Security Solutions",
      cardDescription:
        "Our security solutions ensure data protection, threat mitigation, and compliance.",
    },
    {
      ImageUrl:
        "https://ziongroup.com/wp-content/uploads/2024/06/database.png",
      cardTitle: "Cloud Solutions",
      cardDescription:
        "Our cloud solutions deliver scalability, flexibility, enhanced security, and cost efficiency for businesses of all sizes.",
    },
    {
      ImageUrl:
        "https://ziongroup.com/wp-content/uploads/2024/06/database.png",
      cardTitle: "Managed Services",
      cardDescription:
        "Our managed services offer proactive support, reduced downtime, and cost savings.",
    },
    {
      ImageUrl:
        "https://ziongroup.com/wp-content/uploads/2024/06/infrastructure-1.png",
      cardTitle: "Multi-Brand AMC/FMS Services",
      cardDescription:
        "Our Multi-Brand AMC/FMC services ensure optimal performance, maintenance, and longevity..",
    },
    {
      ImageUrl:
        "https://ziongroup.com/wp-content/uploads/2024/06/security-2.png",
      cardTitle: "Remote Infrastructure Management",
      cardDescription:
        "Our Remote Infrastructure Management ensures continuous monitoring, enhanced performance, and cost-effective operations.",
    },
  ];
  
  return (
    <>
      <Helmet>
        <title>Zion — IT Solutions and Services</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>
      <AboutSection />

      {/* Our  Expertise Section*/}

      <div className="theme-color pt-1">
        <div className="container">
          <div className="row mt-4 pb-4 ">
            <div className="pb-4 mb-4">
              <FlipRightAnimation text={"Our Expertise"} />
            </div>
            {cardData.map((card, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-4 mb-4 d-flex align-items-stretch"
              >
                <ExpertiseCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container-fluid mb-5">
        <div className="row">
          <FlipRightAnimation text={"Testimonial"} />
          <ClientCarousel />
        </div>
      </div>
          <Footer/>
    </>
  );
};

export default HomePage;
