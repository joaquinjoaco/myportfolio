import { useEffect, useState } from 'react';
import './App.css';
import './Trailer.css';
import Navbar from './components/Navbar';
import Project from './components/Project';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function App() {
  const [showIcon, setShowIcon] = useState(false);
  const [showIcon2, setShowIcon2] = useState(false);

  const mouseTrailing = () => {
    // mouse trailer
    const trailer = document.getElementById("trailer");

    const animateTrailer = (e, interacting) => {
      const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`,
        opacity: `${interacting ? 0.2 : 1}`,
        backgroundColor: `${interacting ? '#4BFDFF' : 'white'}`
      }

      trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
      });
    }

    const getTrailerClass = type => {
      switch (type) {
        case "video":
          return "fa-solid fa-play";
        default:
          return "fa-solid fa-arrow-up-right";
      }
    }

    window.onmousemove = e => {
      const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;

      // console.log(e.target.closest(".interactable").id === "github");

      animateTrailer(e, interacting);

      if (interacting) {
        const isClass = e.target.closest(".interactable").id === "github";
        switch (isClass) {
          case true:
            return setShowIcon(true), setShowIcon2(false);
          default:
            return setShowIcon2(true), setShowIcon(false);
        }
      } else {
        setShowIcon(false);
        setShowIcon2(false);
      }
    }
  }

  useEffect(() => {
    mouseTrailing()
  }
  );

  return (
    <div className="App">

      <div id="trailer">
        {showIcon && <FaGithub id="trailer-icon" />}
        {showIcon2 && <FaLinkedinIn id="trailer-icon" />}
      </div>

      <Navbar />
      <div className="page-hero">
        <h1>Hey there!, I am <span style={{ color: "#3ECED0" }}>Joaquín</span>, a <span style={{ color: "#8F00FF" }}>passionate front-end web developer.</span> <br /><span style={{ color: "#ffffff", fontWeight: "400" }}>Currently up-leveling my skills in <span style={{ color: "#0066CC", fontWeight: "700" }}>React</span>.</span></h1>
      </div>

      <div className="projects-cta">
        <h2>Take a look. 👇</h2>
      </div>


    </div>
  );
}

export default App;
