import React, { useEffect } from "react";
import "./training.css";
import TrainingComp from "./TrainingComp";
import anime from "animejs";



function Training() {
  const principles = ["Movement", "Sun", "Food", "Sleep", "Relationships"];

  useEffect(() => {
    var textWrappers = document.querySelectorAll(".ml3 ");

    textWrappers.forEach((textWrapper) => {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    });

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml3 .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i + 1),
      })
      .add({
        targets: ".ml3",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }, []); // closing brace was here

  return (
    <div className="training-parent-div">
        <h1 className="ml3">Movement.</h1>
      <h1 className="ml3">Sleep.</h1>
      <h1 className="ml3">Nutrition.</h1>
      <h1 className="ml3">Sunlight.</h1>
      <h1 className="ml3">Relationships.</h1>
    </div>
  );
}

export default Training;

/* 
        {principles.map((principle, index) => (
          <div key={index} className="column">
            <h2>{principle}</h2>
            <p>Description of {principle}</p>
          </div>
        ))}
        */
