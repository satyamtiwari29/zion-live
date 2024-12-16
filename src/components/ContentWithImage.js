import React from "react";
import ConnectButton from "./ConnectButton";

const ContentWithImage = ({ heading, body, img }) => {
  return (
    <div className="container-fluid my-5">
      <h1 className="display-3 text-center mb-5 fw-medium">{heading}</h1>
      <div className="mb-5">
        <img
          src={img}
          alt={heading}
          style={{ shapeOutside: 'initial', float: "right", shapeMargin: '1rem' }}
          className="img-fluid"
        />
        <div className="fs-6" dangerouslySetInnerHTML={{ __html: body }}></div>
      </div>
      <div className="d-flex justify-content-center">
        {/* <button className="btn btn-hover color-1 btn-lg fw-medium px-4 py-2">
          {buttonText}
        </button> */}
        <ConnectButton/>
      </div>
    </div>
  );
}

export default ContentWithImage;