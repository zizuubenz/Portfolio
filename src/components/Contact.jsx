import { IconMail, IconMapSearch } from "@tabler/icons-react";

function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>N'hésitez pas ! Contactez-moi ! 👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <IconMapSearch width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Agadir, Maroc</p>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <IconMail width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3>E-mail</h3>
                  <a href="mailto:Ouchiar.33@gmail.com">
                    zprada95@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
