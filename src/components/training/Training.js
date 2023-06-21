import React from "react";
import "./training.css";
import TrainingComp from './TrainingComp'; 

function Training() {
  const principles = [
    "Movement",
    "Sun",
    "Food",
    "Sleep",
    "Relationships",
  ];

  return (
      <div className="training-parent-div">
          <p className='training-p'>Life's quality and health are upheld by five essential pillars: Movement, Sunlight, Sleep, Food Quality, and Relationships. Movement is our vitality, pushing us towards growth. Sunlight connects us to nature, vital for our wellbeing. Sleep, a restorative power, is crucial for rejuvenation. Food Quality impacts our health, shaping our body and mind. Relationships, fundamental to our emotional state, remind us of the value of connection and love. Nurturing these pillars fosters conditions for a thriving life.</p>
      <div className="five-columns-container">
        {principles.map((principle, index) => (
          <div key={index} className="column">
            <h2>{principle}</h2>
            <p>Description of {principle}</p>
          </div>
        ))}
          </div>
          <TrainingComp />
    </div>
  );
}

export default Training;
