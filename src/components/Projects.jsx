import AgadirExplorer from "../Media/AgadirExplorer.webp"
import ProBox from "./ProBox";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Agadir Explorer"
                img={AgadirExplorer}
                date="(February 2023)"
                description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                techno1="React"
                code="https://github.com/"
                demo="https://agadirexplorer.vercel.app/"
                scrollY="-83%"
                icon="🚗"
              />

            </div>
          </div>
          <h2 className="new-projects">New projects coming soon.. 🤠</h2> 
        </div>
      </section>
    </>
  );
}

export default Projects;
