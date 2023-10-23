import AgadirExplorer from "../Media/AGA EXPLORER .jpg"
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
                description="Agadir Explorer: Your digital gateway to Agadir, blending tech and local insights for an immersive journey through the city's culture, history, and attractions."
                techno1="React"
                code="https://github.com/"
                demo="https://agadirexplorer.vercel.app/"
                icon="🗺️"
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
