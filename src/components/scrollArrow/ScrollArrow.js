import React from 'react';
import './scrollArrow.css';

const ScrollArrow = () => {
const handleScrollDown = () => {
    const secondParagraph = document.getElementById('secondParagraph');
    if (secondParagraph) {
        secondParagraph.scrollIntoView({ behavior: 'smooth' });
    }
    };
      

  return (
    <div className="scroll-down" onClick={handleScrollDown}></div>
  );
};

export default ScrollArrow;
