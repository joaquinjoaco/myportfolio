import githubLogo from '../assets/Github.svg';
import linkedinLogo from '../assets/Linkedin.svg';

const Navbar = () => {
     return (
          <nav>
               <a href="https://github.com/joaquinjoaco" className="nav-link interactable" id="github"><img src={githubLogo} /></a>
               <a href="https://www.linkedin.com/in/joaquingomezleites/" className="nav-link interactable" id="linkedin"><img src={linkedinLogo} /></a>
          </nav>
     );
}

export default Navbar;