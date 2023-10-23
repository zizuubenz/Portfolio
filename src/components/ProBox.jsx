import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

function ProBox({
  title,
  img,
  description,
  techno1,
  techno2,
  code,
  demo,
  cName,
  icon,
  date,
}) {
  return (
    <>
      <div className={`pro pro__1 ${cName}`}>
        <div className="pro__img">
          <a target="_blank" href={demo} rel="noreferrer">
            <img
              src={img}
              alt="website"
            />
          </a>
        </div>
        <div className="pro__text">
          <h3>
            {title} <span className="date-class">{date}</span> {icon}
          </h3>
          <p>{description}</p>
          <div className="stack">
            <p>{techno1}</p>
          </div>
          <div className="links">
            <a target="_blank" href={code} rel="noreferrer">
              Code <IconBrandGithub />
            </a>
            <a target="_blank" href={demo} rel="noreferrer">
              Live Demo
              <IconExternalLink />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProBox;
