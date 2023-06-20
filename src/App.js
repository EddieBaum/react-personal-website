//Components and more
import NavBar from "./components/navbar/NavBar";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Porfolio";
import About from "./components/about/About";
import Training from "./components/training/Training"; 
import Homepage from "./components/homepage/Homepage";
import RedditApp from "./components/portfolio/reddit/RedditApp"; 


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import React from "react";

import "./App.css";

function App() {
  

  return (
    <Router basename={process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/'}>
      <div className="App-container">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/training" element={<Training />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/redditApp" element={<RedditApp />} />
        </Routes>
      </div>
    </Router>
  );
}; 
export default App;

/* 
 basename={process.env.PUBLIC_URL} *USE THIS FOR ROUTER PROPERY*

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
