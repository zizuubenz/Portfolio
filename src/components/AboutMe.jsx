import AboutImg from "../Media/AboutMe_Image.jpg";
import WorkingEmoji from "../Media/Working_Emoji.png";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji bg" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
            </div>
            <div className="text-side">
              <h3>A propos de moi</h3>
              <h4>
              
Un passionné de développement Front-End et de conception UI/UX venant de la charmante ville côtière d'Agadir, au Maroc 🌊📍.
              </h4>
              <p>
              Mon parcours créatif se dévoile à travers les fascinantes sphères de React, React Native, Figma et Adobe Illustrator, peignant des chefs-d'œuvre numériques, une ligne de code à la fois. En tant que Développeur Front-End Junior, je manie un formidable arsenal de compétences englobant HTML, CSS, JavaScript, React et React Native. Mes sensibilités en matière de design se manifestent dans mon travail, car je m'engage à concevoir des sites web exquis et conviviaux qui s'adaptent parfaitement à tous les appareils. Je trouve ma joie dans la création d'interfaces dynamiques et captivantes, les construisant avec un code impeccable axé sur les performances, et tirant parti des derniers outils et techniques de développement web.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
