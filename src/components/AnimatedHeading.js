import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap import karna

const AnimatedHeading = ({ text }) => {
  const lettersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const letters = entry.target.children;
        if (entry.isIntersecting) {
          for (let i = 0; i < letters.length; i++) {
            // Apply animation when in view
            letters[i].style.animation = `fadeIn 0.5s forwards`;
            letters[i].style.animationDelay = `${i * 0.1}s`;
          }
        } else {
          for (let i = 0; i < letters.length; i++) {
            // Reset for re-animation when out of view
            letters[i].style.opacity = '0';
            letters[i].style.transform = 'translateY(20px)';
          }
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is in view

    if (lettersRef.current) {
      observer.observe(lettersRef.current);
    }

    return () => {
      if (lettersRef.current) {
        observer.unobserve(lettersRef.current);
      }
    };
  }, []);

  const modifiedText = text?.split('').reduce((acc, char) => {
    // Check if the character is an uppercase letter and add a space after it
    if (char === char.toUpperCase() && char.match(/[A-Z]/)) {
      return `${acc}${char} `;
    }
    return `${acc}${char}`;
  }, '');

  return (
    <h1 className="text-center text-black h1" ref={lettersRef} pb-4>
      {modifiedText?.split('')?.map((letter, index) => (
        <span
          key={index}
          className="letter"
          style={{
            display: 'inline-block',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          {letter}
        </span>
      ))}
      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </h1>
  );
};

export default AnimatedHeading;
