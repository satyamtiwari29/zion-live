import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../assets/css/Text.css'; // Import your custom CSS

const TextWithUnderline = ({text, color, className}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with optional duration
  }, []);

  return (
    <div className={`text-container ${className}`}>
      <h1 className="underlined-text ">
       {/* <span className='mb-2 d-block'>{text}</span>  */}
       <span className="mb-2 d-block" style={{ color: color }}>
      {text}
    </span>
        <span className="underline text-white" data-aos="flip-right"></span>
      </h1>
    </div>
  );
};

export default TextWithUnderline;
