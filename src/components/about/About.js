import React, { useState, useRef } from "react";
import "./about.css";

const About = () => {
  const firstParagraphRef = useRef();
  const secondParagraphRef = useRef();
  const thirdParagraphRef = useRef();
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  const paragraphs = [firstParagraphRef, secondParagraphRef, thirdParagraphRef];

  const scrollUp = () => {
    if (currentParagraphIndex > 0) {
      setCurrentParagraphIndex(currentParagraphIndex - 1);
      paragraphs[currentParagraphIndex - 1].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollDown = () => {
    if (currentParagraphIndex < paragraphs.length - 1) {
      setCurrentParagraphIndex(currentParagraphIndex + 1);
      paragraphs[currentParagraphIndex + 1].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="parent-container">
      <div id="top-half">
        <div id="circle-photo"></div>
        <div id='infoPlacementContainer'>
        <div className="upper-right-box">
          <h3 className="all-about-text" id="about-name">
            Edward Baum
          </h3>
          <h4 className="all-about-text" id="about-title">
            Person Trainer & Web Developer
          </h4>

          <div id="paragraphsWindow">
            <p
              className="all-about-text"
              id="firstParagraph"
              ref={firstParagraphRef}
            >
              Edward Baum is a dynamic and dedicated individual who wears many
              hats. As a certified personal trainer, he excels in helping others
              achieve their fitness goals and maintain a healthy lifestyle.
              Edward holds a degree in Kinesiology from the prestigious
              University of Maryland, where he honed his skills in human
              movement, exercise physiology, and overall well-being.
            </p>
            <p
              className="all-about-text"
              id="secondParagraph"
              ref={secondParagraphRef}
            >
              Being fluent in both Spanish and English, Edward is a true global
              citizen with a passion for learning and connecting with people
              from diverse backgrounds. Currently residing in Colombia and
              originally hailing from Washington DC, he appreciates the
              importance of cultural exchange and understanding.
            </p>
            <p
              className="all-about-text"
              id="thirdParagraph"
              ref={thirdParagraphRef}
            >
              In addition to his health and fitness pursuits, Edward is
              currently diving into the world of front-end engineering. As a
              student in this ever-evolving field, he is eager to acquire the
              knowledge and expertise necessary to create innovative and
              user-friendly digital experiences. With his unique skill set and
              unwavering determination, there's no doubt that Edward will
              continue to make a positive impact wherever life takes him.
            </p>
          </div>

          </div>
          <div id='scrollPlacementContainer'>
          <div id="scrollButtonContainer">
            <div className="scrollButton" id="scrollUp" onClick={scrollUp}>
              <ion-icon id="iconArrows" name="chevron-up-sharp"></ion-icon>
            </div>
            <div className="scrollButton" id="scrollDown" onClick={scrollDown}>
              <ion-icon id="iconArrows" name="chevron-down-sharp"></ion-icon>
            </div>
            </div>
            </div>
          {/* scroll button container end */}
          </div>
      </div>
      <div id="bottom-half">
        <div className="bottom-box">
          <h3 className="h3-bottom-box">Languages</h3>
          <div id="code-logo-container">
            <span className="about-icons">
              <ion-icon name="logo-html5"></ion-icon>
              <ion-icon name="logo-css3"></ion-icon>
              <ion-icon name="logo-react"></ion-icon>
              <ion-icon name="logo-javascript"></ion-icon>
            </span>
          </div>
          <h4 className="h4-bottom-box">HTML, CSS, React, JavaScript</h4>
          <span className="about-icons">
            <ion-icon name="chatbubbles-sharp"></ion-icon>
          </span>
          <h4 className="h4-bottom-box">English (fluent)</h4>
          <h4 className="h4-bottom-box">Spanish (level B2)</h4>
        </div>
        <div className="bottom-box">
          <h3 className="h3-bottom-box">Education</h3>
          <span className="about-icons">
            <ion-icon name="school-sharp"></ion-icon>
          </span>
          <h4 className="h4-bottom-box">University of Maryland, B.S.</h4>
          <span className="about-icons">
            <ion-icon name="code-slash-sharp"></ion-icon>
          </span>
          <h4 className="h4-bottom-box">CodeCademy, Front-End Engineering</h4>
          <span className="about-icons">
            <ion-icon name="logo-youtube"></ion-icon>
          </span>
          <h4 className="h4-bottom-box">YouTube University</h4>
        </div>
        <div className="bottom-box">
          <h3 className="h3-bottom-box">Interests</h3>
          <span className="about-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="22"
              width="22"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 112c30.88 0 56-25.12 56-56S286.9 0 256 0S199.1 25.12 199.1 56S225.1 112 256 112zM399.1 448H111.1c-26.51 0-48 21.49-48 47.1C63.98 504.8 71.15 512 79.98 512h352c8.837 0 16-7.163 16-16C447.1 469.5 426.5 448 399.1 448zM511.1 197.4c0-5.178-2.509-10.2-7.096-13.26L476.4 168.2c-2.684-1.789-5.602-2.62-8.497-2.62c-17.22 0-17.39 26.37-51.92 26.37c-29.35 0-47.97-25.38-47.97-50.63C367.1 134 361.1 128 354.6 128h-38.75c-6 0-11.63 4-12.88 9.875C298.2 160.1 278.7 176 255.1 176c-22.75 0-42.25-15.88-47-38.12C207.7 132 202.2 128 196.1 128h-38.75C149.1 128 143.1 134 143.1 141.4c0 18.45-13.73 50.62-47.95 50.62c-34.58 0-34.87-26.39-51.87-26.39c-2.909 0-5.805 .8334-8.432 2.645l-28.63 16C2.509 187.2 0 192.3 0 197.4C0 199.9 .5585 202.3 1.72 204.6L104.2 416h303.5l102.5-211.4C511.4 202.3 511.1 199.8 511.1 197.4z"
                fill="white"
              />
            </svg>
          </span>
          <h4 className="h4-bottom-box">Chess Not Checkers</h4>
          <span className="about-icons">
            <ion-icon name="barbell-outline"></ion-icon>
          </span>
          <h4 className="h4-bottom-box">Anything Gym</h4>
          <span className="about-icons">
            <ion-icon name="airplane-sharp"></ion-icon>
          </span>
          <h4 className="h4-bottom-box">Travel</h4>
        </div>
      </div>
    </div>
  );
};

export default About;

/*
    <div id="parentAboutContainer">
      <div className="text-container">
        <h2 id="abouth2">About Me</h2>
        <div className="about" id="about">
          <div className='icon-div'>
            <ul className='about-me-quick-list'>
            <li>
                <ion-icon name="school-outline"></ion-icon>
                <span className='list-text'>University of Maryland, BS</span>
              </li>
              <li><ion-icon name="barbell-outline"></ion-icon>
                <span className='list-text'>Personal Trainer</span>
              </li>
              <li><ion-icon name="chatbubbles-outline"></ion-icon>
                <span className='list-text'>¡Hablo Español!</span>
              </li>

              <li><ion-icon name="pin-outline"></ion-icon>
                <span className='list-text'>Based in Medellín, Colombia</span>
              </li>
              <li><ion-icon name="code-slash-outline"></ion-icon>
                <span className='list-text'>CodeCademy self-taught</span>
              </li>
              <li><ion-icon name="logo-bitcoin"></ion-icon>
                <span className='list-text'>Bitcoin Enthusiast</span>
              </li>
            </ul>
          
          </div>
          <p className="aboutParagraph" id="firstParagraph">
            Edward Baum is a dynamic and dedicated individual who wears many
            hats. As a certified personal trainer, he excels in helping others
            achieve their fitness goals and maintain a healthy lifestyle. Edward
            holds a degree in Kinesiology from the prestigious University of
            Maryland, where he honed his skills in human movement, exercise
            physiology, and overall well-being.
          </p>
          <p className="aboutParagraph" id="secondParagraph">
            Being fluent in both Spanish and English, Edward is a true global
            citizen with a passion for learning and connecting with people from
            diverse backgrounds. Currently residing in Colombia and originally
            hailing from Washington DC, he appreciates the importance of
            cultural exchange and understanding.
          </p>
          <p className="aboutParagraph" id="thirdParagraph">
            In addition to his health and fitness pursuits, Edward is currently
            diving into the world of front-end engineering. As a student in this
            ever-evolving field, he is eager to acquire the knowledge and
            expertise necessary to create innovative and user-friendly digital
            experiences. With his unique skill set and unwavering determination,
            there's no doubt that Edward will continue to make a positive impact
            wherever life takes him.
          </p>
        </div>
      </div>
      <div className="photo-container"></div>
    </div> */
