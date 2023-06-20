import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const BackBoxInfoEx = ({ backBoxClass, backBoxId, text, link, style }) => {
  return (
    <div className={backBoxClass} id={backBoxId} style={style}>
      <div className="back-box-content">
        <p>{text}</p>
        <Link to={link} rel="noopener noreferrer">  {/* Replace <a> with <Link> */}
          Visit Website
        </Link>
      </div>
    </div>
  );
};

export default BackBoxInfoEx;
