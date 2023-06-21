import React, { useState } from "react"; //START OF NEW CODE
import BackBoxInfo from "./BackBoxInfo.js";

import "./portfolio.css";

const Portfolio = () => {
  const [flipBoxA, setFlipBoxA] = useState(false);
  const [flipBoxB, setFlipBoxB] = useState(false);
  const [flipBoxC, setFlipBoxC] = useState(false);
  const [flipBoxD, setFlipBoxD] = useState(false);
  const [flipBoxE, setFlipBoxE] = useState(false); 

  const handleMouseClick = (boxId) => {
    switch (boxId) {
      case "A":
        setFlipBoxA(true);
        break;
      case "B":
        setFlipBoxB(true);
        break;
      case "C":
        setFlipBoxC(true);
        break;
      case "D":
        setFlipBoxD(true);
        break;
      case "E":
        setFlipBoxE(true);
        break;
      default:
    }
  };

  const handleMouseLeave = (boxId) => {
    switch (boxId) {
      case "A":
        setFlipBoxA(false);
        break;
      case "B":
        setFlipBoxB(false);
        break;
      case "C":
        setFlipBoxC(false);
        break;
      case "D":
        setFlipBoxD(false);
        break;
      case "E":
        setFlipBoxE(false);
        break;
      default:
    }
  };

  const getBoxStyle = (flipBox) => {
    return { transform: flipBox ? "rotateY(180deg)" : "rotateY(0deg)" };
  };

  return (
    <div className="portfolio-container slider-thumb">
      <div className="square-container">
        <div
          className="wrapper"
          id="wrapperA"
          onClick={() => handleMouseClick("A")}
          onMouseLeave={() => handleMouseLeave("A")}
        >
          <div
            className="front box"
            id="boxAfront"
            style={getBoxStyle(flipBoxA)}
          ></div>

          <BackBoxInfo
            backBoxClass="back box"
            backBoxId="boxAback"
            text="A simple landing page project using flexbox with CSS and HTML."
            link="https://eddiebaum.github.io/rendezvous/"
            style={getBoxStyle(!flipBoxA)}
          />
        </div>
        <div
          className="wrapper"
          id="wrapperB"
          onClick={() => handleMouseClick("B")}
          onMouseLeave={() => handleMouseLeave("B")}
        >
          <div
            className="front box"
            id="boxBfront"
            style={getBoxStyle(flipBoxB)}
          ></div>
          <BackBoxInfo
            backBoxClass="back box"
            backBoxId="boxBback"
            text="An unbeatable Tic-Tac-Toe game that utilizes the MiniMax algorithm and fun CSS styles."
            link="https://eddiebaum.github.io/MiniMaxTicTacToe/"
            style={getBoxStyle(!flipBoxB)}
          />
        </div>
        <div
          className="wrapper"
          id="wrapperC"
          onClick={() => handleMouseClick("C")}
          onMouseLeave={() => handleMouseLeave("C")}
        >
          <div
            className="front box"
            id="boxCfront"
            style={getBoxStyle(flipBoxC)}
          ></div>
          <BackBoxInfo
            backBoxClass="back box"
            backBoxId="boxCback"
            text="A ROCK-PAPER-SISSORS game that utilizes Java Script logic and fun CSS styles."
            link="https://eddiebaum.github.io/Rock_Paper_Scissors/"
            style={getBoxStyle(!flipBoxC)}
          />
        </div>
        <div
          className="wrapper"
          id="wrapperD"
          onClick={() => handleMouseClick("D")}
          onMouseLeave={() => handleMouseLeave("D")}
        >
          <div
            className="front box"
            id="boxDfront"
            style={getBoxStyle(flipBoxD)}
          ></div>
          <BackBoxInfo
            backBoxClass="back box"
            backBoxId="boxDback"
            text="React, BrowswerRouter, Switch, useState and my face all in one place."
            link="localhost:3000"
            style={getBoxStyle(!flipBoxD)}
          />
        </div>
        <div
          className="wrapper"
          id="wrapperE"
          onClick={() => handleMouseClick("E")}
          onMouseLeave={() => handleMouseLeave("E")}
        >
          <div
            className="front box"
            id="boxEfront"
            style={getBoxStyle(flipBoxE)}
          ><ion-icon name="logo-github"></ion-icon></div>
          <BackBoxInfo
            backBoxClass="back box"
            backBoxId="boxEback"
            text="Get you some Git Hub"
            link="https://github.com/EddieBaum"
            style={getBoxStyle(!flipBoxE)}
          />
        </div> 
      </div> 
    </div> 
  );
};
export default Portfolio;
