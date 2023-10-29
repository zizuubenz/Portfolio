import { useState } from "react";
import "./Styles.css";
import ZaidaneLogo from "../Media/zaidanelogotransparent.png"
import { IconMenu2, IconX } from "@tabler/icons-react";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const navlinks = [
    {
      name: "Accueil",
      link: "#home",
    },
    {
      name: "A propos",
      link: "#about",
    },
    {
      name: "Projets",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
      <nav >
        <img src={ZaidaneLogo} onClick={pageUp} className="logo"></img>
        
        <ul>
          {navlinks.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
          <li onClick={() => hamburgerMenu()}>
            <IconMenu2 className="mobile-menu" width={30} height={30} />
          </li>
        </ul>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()}>
          <IconX width={30} height={30} />
        </span>

        <ul>
          {navlinks.map((item) => (
            <li key={item.name} onClick={() => hamburgerMenu()}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
