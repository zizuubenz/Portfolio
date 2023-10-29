import AgadirExplorer from "../Media/AGA EXPLORER .jpg"


import Bytebuild from "../Media/HomeBytebuild.png"

import ProBox from "./ProBox";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Chaque projet est une pièce de développement unique.🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Agadir Explorer"
                img={AgadirExplorer}
                description="Agadir Explorer: Votre passerelle numérique vers Agadir, mêlant technologie et connaissances locales pour une immersion dans la culture, l'histoire et les attractions de la ville."
                techno1="React"
                code="https://github.com/zizuubenz"
                demo="https://agadirexplorer.vercel.app/"
                icon="🗺️"
              />

            </div>
            <div className="projects-grid">
              <ProBox
                title="ByteBuild"
                img={Bytebuild}
                description="ByteBuild:L'entreprise ByteBuild est spécialisée dans le marketing numérique et le développementssir. Nous  Si vous cherchez une entreprise de marketing numérique et de développement fiable et compétente, faites confiance à ByteBuild pour construire votre avenir en ligne.."
                techno1="React"
                code="https://github.com/zizuubenz"
                demo="https://agadirexplorer.vercel.app/"
                icon="🗺️"
              />

            </div>

          </div>

          <h2 className="new-projects">De nouveaux projets arrivent bientôt... 🤠</h2>
        </div>
      </section>
    </>
  );
}

export default Projects;
