import "./footer.css";
import rightplant from "../assets/rightPlant.png";
import globeIcon from "../assets/globeIcon.png";
import emailIcon from "../assets/emailIcon.png";
import phoneIcon from "../assets/phoneIcon.png";
import busIcon from "../assets/busIcon.png";
import leftPlant from "../assets/leftPlant.png";
import Intersect from "../assets/Intersect.png";
import text from "../assets/text.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";

function footer() {
  return (
    <>
      <div class="container">
        <div class="plant">
          <img src={rightplant} alt="" width="100%" height="100%" />
        </div>
        <h5 class="heading">Contact</h5>
        <div class="form-container">
          <form class="form-wraper">
            <div class="input-filed">
              <div class="input-1">
                <label>Prénom</label>
                <input type="text" />
              </div>
              <div class="input-1">
                <label>Nom</label>
                <input type="text" />
              </div>
            </div>
            <div class="inputs">
              <label>Téléphone</label>
              <input type="text" />
            </div>
            <div class="inputs">
              <label>Mail</label>
              <input type="text" />
            </div>
            <div class="dropdown">
              <label for="cars">Problème</label>
              <select name="cars" id="cars">
                <option value="volvo">
                  At in cursus vel donec enim tempor.
                </option>
                <option value="volvo">
                  At in cursus vel donec enim tempor.
                </option>
                <option value="volvo">
                  At in cursus vel donec enim tempor.
                </option>
                <option value="volvo">
                  At in cursus vel donec enim tempor.
                </option>
                <option value="volvo">
                  At in cursus vel donec enim tempor.
                </option>
              </select>
            </div>
            <div class="text-msg">
              <label>Message</label>
              <textarea type="text" />
            </div>
            <button class="btn">Envoyer</button>
          </form>
          <div class="detail">
            <div class="address">
              <div class="address-img">
                <img src={globeIcon} alt="" width="100%" height="100%" />
              </div>
              <p class="address-text">
                6 Rue Gabriel Péri, 92130 Issy-les-Moulineaux
              </p>
            </div>
            <div class="address">
              <div class="address-img email-img">
                <img src={emailIcon} alt="" width="100%" height="100%" />
              </div>
              <p class="address-text">exemple@mymail.fr</p>
            </div>
            <div class="address">
              <div class="address-img">
                <img src={phoneIcon} alt="" width="100%" height="100%" />
              </div>
              <p class="address-text">
                Cabinet: 0610992435
                <br />A domicile: 06 10 99 24 35
              </p>
            </div>
            <div class="address metero">
              <div class="address-img">
                <img src={busIcon} alt="" width="100%" height="100%" />
              </div>
              <p class="address-text">
                Métro - Mairie d'Issy (ligne 12)
                <br />
                RER - Issy (ligne C)
                <br />
                Bus - D'alembert (ligne 169)
              </p>
            </div>
          </div>
        </div>
        <div class="left-plant">
          <img src={leftPlant} alt="" width="100%" height="100%" />
        </div>
        <div class="map">
          {/* <img src="src\assets\map.png" alt="" width="100%" height="100%" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.962491222489!2d2.271360875998037!3d48.82077710335339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67a81d96c80f7%3A0xa7ef8c9d57a12b71!2s6%20Rue%20Gabriel%20P%C3%A9ri%2C%2092130%20Issy-les-Moulineaux%2C%20France!5e0!3m2!1sen!2s!4v1713975276920!5m2!1sen!2s"
            width="100%"
            height="100%"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="footer">
          <div class="slide">
            <img src={Intersect} alt="" width="100%" height="100%" />
          </div>
          <div class="footer-text">
            <p>
              Mentions légales Déclaration de confidentialité Politique de
              cookies
            </p>
            <div class="social-icon">
              <div class="icon-img">
                <img src={facebook} alt="" width="100%" height="100%" />
              </div>
              <div class="icon-img">
                <img
                  src={insta}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div class="text">
              <img src={text} alt="" width="100%" height="100%" />
            </div>
            <p class="bottom-text">
              Tous droits réservés Cassandra Merzouk | Osthéopathe à
              Issy-les-Moulineaux
              <br />
              Réalisation Charles Costes | Création de site web sur mesure{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
