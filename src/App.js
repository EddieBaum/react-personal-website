//Components and more
import NavBar from "./components/navbar/NavBar";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Porfolio";
import About from "./components/about/About";
import Homepage from "./components/homepage/Homepage";


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import React from "react";

import "./App.css";

function App() {
  

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App-container">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}; 
export default App;

/* 
import eddieWall from "./images/eddieWall.jpeg";
import eddiePlantWall from "./images/eddiePlantWall.jpeg";
import macDeskLamp from "./images/macDeskLamp.jpeg";
import miamiBeach from "./images/miamiBeach.JPG";
import eddieStoneWall from "./images/eddieStoneWall.jpeg";




  const toggleValue = (value) => {
    switch (value) {
      case "gameMenu":
        setShowGameMenu(!showGameMenu);
        break;
      case "weatherApp":
        setShowWeatherApp(!showWeatherApp);
        break;
    }
  };

`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${miamiBeach})` 

  const toggleWeather = () => {
    setShowWeatherApp(!showWeatherApp);
  };

const handleNavSelection = (componentName) => {
    setSelectedComponent(componentName);

    switch (componentName) {
      case "about":
        setBackgroundImage(
          `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${miamiBeach})`
        );
        break;
      case "portfolio":
        setBackgroundImage(
          `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${eddiePlantWall})`
        );
        break;
      case "contact":
        setBackgroundImage(
          `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${eddieWall})`
        );
        break;
      default:
        setBackgroundImage(
          `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${eddieStoneWall})`
        );
    }
  };
  
  */
