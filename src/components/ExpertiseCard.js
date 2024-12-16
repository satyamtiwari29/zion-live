import React from "react";
import "../assets/css/HomePage.css";

const ExpertiseCard = ({ ImageUrl, cardTitle, cardDescription }) => {
  return (
    <div className="card text-center border-0 p-5 cursor-pointer">
      {/* Icon Section */}
      <div className="d-flex justify-content-center mb-3">
        <div className="connect-primary-button rounded-circle p-3">
          <img
            src={ImageUrl} // Replace with your actual image/icon
            alt="Icon"
            className="rounded-circle"
            style={{ width: "48px", height: "48px" }}
          />
        </div>
      </div>
      {/* Title */}
      <h5 className="card-title fs-5  ">{cardTitle}</h5>
      {/* Description */}
      <p className="card-text pt-3">{cardDescription}</p>
    </div>
  );
};

export default ExpertiseCard;
