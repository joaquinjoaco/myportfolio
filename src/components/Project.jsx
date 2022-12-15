const Project = ({ title, desc, url, githubUrl }) => {

     return (
          <div className="project">
               <h1>{title}</h1>
               <p>{desc}</p>
               <div className="links">
                    <a className="interactable" href={url}>VIEW LIVE SITE</a>
                    <a className="interactable" href={githubUrl} id="github">View Github</a>
               </div>
          </div>
     );
}

export default Project;