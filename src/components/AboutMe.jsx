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
              <h3>About me</h3>
              <h4>
              A passionate Front-End Developer And UI/UX Designer<br/> 
              hailing from the enchanting coastal city of Agadir, Morocco 🌊📍
              </h4>
              <p>
My creative journey unfolds through the captivating realms of React, React Native, Figma, and Adobe Illustrator, painting digital masterpieces one line of code at a time.
As a Junior Front-End Developer, I wield a formidable arsenal of skills encompassing HTML, CSS, JavaScript, React and React Native.
My design sensibilities shine through in my work, as I am committed to crafting exquisite, user-friendly websites that seamlessly adapt to all devices. I find my joy in composing dynamic, engaging interfaces, constructing them with immaculate, performance-driven code, and leveraging the latest in web development tools and techniques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
