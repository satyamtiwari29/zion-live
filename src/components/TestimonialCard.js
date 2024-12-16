import React from "react";
import "../assets/css/Swiper.css";

const TestimonialCard = ({ details }) => {
  return (
    <div className="cardBody rounded-4">
      <div className="cardInfo d-flex flex-column align-items-center px-2">
        <img
          src={details?.image}
          className="rounded-circle my-3"
          alt={details?.name}
          width="80"
          height="80"
        />
        <h5 className="card-title mb-0">{details?.name}</h5>
        <p className="card-text">
          <small>{details?.title}</small>
        </p>
        <p className="card-text fw-normal" style={{ textAlign: 'justify' }}>{details?.text}</p>
      </div>
    </div>
  );
};
export default TestimonialCard;
