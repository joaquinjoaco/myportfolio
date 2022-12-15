import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function App() {

  const [switchIcon, setSwitchIcon] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const mouseTrailing = () => {
    // mouse trailer
    let isMobile = window.matchMedia("only screen and (min-width: 1000px)").matches;
    if (isMobile) {
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

      window.onmousemove = e => {
        const interactable = e.target.closest(".interactable"),
          interacting = interactable !== null;
        animateTrailer(e, interacting);

        // shows the icon when interacting with an element that has the class "interactable"
        if (interacting) {
          setShowIcon(true);
          const isClass = e.target.closest(".interactable").id === "github";
          switch (isClass) {
            case true:
              return setSwitchIcon(false);
            default:
              return setSwitchIcon(true);
          }
        } else {
          setShowIcon(false);
        }
      }
    }
  }

  useEffect(() => {
    mouseTrailing();
  });

  return (
    <div className="App">

      <div id="trailer">
        {!switchIcon && showIcon && <FaGithub id="trailer-icon" />}
        {switchIcon && showIcon && <FaLinkedinIn id="trailer-icon" />}
      </div>

      <Navbar />
      <div className="page-hero">
        <h1>Hey there!, I am <span style={{ color: "#3ECED0" }}>Joaquín</span>, a <span style={{ color: "#8F00FF" }}>passionate front-end web developer.</span> <br /><span style={{ color: "#ffffff", fontWeight: "400" }}>Currently up-leveling my skills in <span style={{ color: "#0066CC", fontWeight: "700" }}>React</span>.</span></h1>
      </div>

      <div className="projects-cta">
        <h2>Take a look. 👇</h2>
      </div>

      <div className="projects">
        <Project title="Laundrify CRUD App" desc="Laundromat Crud React app with FireAuth & Firebase" url="https://laundrifycrudtest.netlify.app/" githubUrl={"https://github.com/joaquinjoaco/laundrify-crud"} />
        <Project title="sorvisLater" desc="Mockup of an incident management web app" url="https://sorvislater.netlify.app/" githubUrl={"https://github.com/joaquinjoaco/sorvisLater"} />
        <Project title="Eventyr Banlist" desc="React firebase CRUD web app that utilizes firebase realtime database." url="https://eventyrbanlistfirebaserealtime.netlify.app/" githubUrl={"https://github.com/joaquinjoaco/eventyrbanlist"} />
        <Project title="Eventyr player guide" desc="Eventyr's player guide for new users" url="https://guiaeventyr.netlify.app/" githubUrl={"https://github.com/joaquinjoaco/eventyr-player-guide-react"} />
        <Project title="Bandicoot Informatic Team" desc="Website of a fictional IT company" url="https://bandicoot.netlify.app/" githubUrl={"https://github.com/joaquinjoaco/bandicootproyecto"} />
        <Project title={<b>"La física según dios"</b>} desc="Friend's website quick redesign" url="https://lafisicasegundios.netlify.app/" githubUrl={"https://github.com/joaquinjoaco/la-fisica-segun-dios-redesign"} />
      </div>

    </div>
  );
}

export default App;
