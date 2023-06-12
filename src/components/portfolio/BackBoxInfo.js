import React from 'react';

const BackBoxInfo = ({ backBoxClass, backBoxId, text, link, style }) => {
  return (
    <div className={backBoxClass} id={backBoxId} style={style}>
      <div className="back-box-content">
        <p>{text}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default BackBoxInfo;

