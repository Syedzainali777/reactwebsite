import myImage from "./assets/template.svg";
import myImageLeft from "./assets/Intersect1.png";
import Back from "./assets/background.png";
import righttop from "./assets/righttopleaf.png";
import rightbottom from "./assets/rightbottomleaf.png";
import leftleaf from "./assets/leftleaf.png";
import girl from "./assets/girl.png";
import bed from "./assets/bed.png";
import nurseright from "./assets/patient.png";
import nurseleft from "./assets/massage.png";
import btmback from "./assets/btmbackground.png";
import lastleaf from "./assets/lastleaf.png";
import google from "./assets/google.png";
import star from "./assets/star.png";
import React from "react";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <div className="container">
        <div className="header-section">
          <div className="navbar">
            <div>
              <p>Accueil</p>
            </div>
            <div>
              <p>A propos</p>
            </div>
            <div>
              <p>FAQ</p>
            </div>
            <div>
              <p>Tarifs</p>
            </div>
            <div>
              <p>Contact</p>
            </div>
          </div>
          <div className="heading-top">
            <p>
              Cabinet <br /> Osthéopatie
            </p>
            <p id="heading-name">Cassandra Merzouk</p>
          </div>
          <div className="heading-btn">
            <p id="heading-btn">Prendre rendez-vous</p>
          </div>
          <div className="header-img-wrapper">
            <div className="header-img">
              <img src={myImageLeft} alt="head" />
            </div>
            <div className="header-img2">
              <img src={myImage} alt="head" />
            </div>
          </div>
        </div>
        {/* -------------------content section ------------------------- */}
        <div className="content-section">
          <div className="content-head">
            <p>A propos</p>
          </div>
          <img src={Back} alt="head" />
          <div className="righttop">
            <img src={righttop} alt="rigt" />
          </div>
          <div className="rightbtm">
            <img src={rightbottom} alt="rigt" />
          </div>
          <div className="leftleaf">
            <img src={leftleaf} alt="rigt" />
          </div>
          <div className="girl">
            <img src={girl} alt="rigt" />
          </div>
          <div className="bed">
            <img src={bed} alt="rigt" />
          </div>
          <div className="girl-desc-head">
            <p>Votre Osthéopathe</p>
          </div>
          <div className="girl-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam amet tellus vitae
              cursus magna tempus. Facilisi praesent sed adipiscing convallis
              adipiscing praesent nisl. Magna at non pellentesque at molestie.
              Urna vivamus nulla faucibus et magna. Nibh massa sapien eget
              purus. Egestas velit amet enim venenatis nisi tellus tempor
              facilisi. Facilisi placerat viverra in vitae pharetra sit a dolor
              vitae. Molestie urna lectus urna laoreet. Vestibulum tempus risus
              lectus malesuada pretium ligula felis eu. Quam elit nunc accumsan
              risus mauris lorem. Proin at egestas nibh ornare mi est purus
              consectetur nullam. Eget ut facilisi arcu maecenas. <br />
              Egestas non mattis porta in urna. Metus sem.
            </p>
          </div>
          <div className="bed-desc-head">
            <p>Mon cabinet</p>
          </div>
          <div className="bed-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam amet tellus vitae
              cursus magna tempus. Facilisi praesent sed adipiscing convallis
              adipiscing praesent nisl. Magna at non pellentesque at molestie.
              Urna vivamus nulla faucibus et magna. Nibh massa sapien eget
              purus. Egestas velit amet enim venenatis nisi tellus tempor
              facilisi. Facilisi placerat viverra in vitae pharetra sit a dolor
              vitae. Molestie urna lectus urna laoreet. Vestibulum tempus risus
              lectus malesuada pretium ligula felis eu. Quam elit nunc accumsan
              risus mauris lorem. Proin at egestas nibh ornare mi est purus
              consectetur nullam. Eget ut facilisi arcu maecenas. <br />
              Egestas non mattis porta in urna. Metus sem.
            </p>
          </div>
        </div>
        <div className="photos-section">
          <div className="nurseleft">
            <img src={nurseleft} alt="rigt" />
          </div>
          <div className="nurseright">
            <img src={nurseright} alt="rigt" />
          </div>
        </div>
        {/* -------------------accordian section ------------------------- */}
        <div className="accordian-wrapper">
          <section className="accordion">
            <div className="tab">
              <input
                type="checkbox"
                name="accordion-1"
                id="cb1"
                defaultChecked
              />
              <label htmlFor="cb1" className="tab__label">
                Lorem ipsum dolor sit amet consectetur.
              </label>
              <div className="tab__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam amet tellus
                  vitae cursus magna tempus. Facilisi praesent sed adipiscing
                  convallis adipiscing praesent nisl. Magna at non pellentesque
                  at molestie. Urna vivamus nulla faucibus et magna. Nibh massa
                  sapien eget purus. Egestas velit amet enim venenatis nisi
                  tellus tempor.
                </p>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" name="accordion-1" id="cb2" />
              <label htmlFor="cb2" className="tab__label">
                Lorem ipsum dolor sit amet consectetur.
              </label>
              <div className="tab__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam amet tellus
                  vitae cursus magna tempus. Facilisi praesent sed adipiscing
                  convallis adipiscing praesent nisl. Magna at non pellentesque
                  at molestie. Urna vivamus nulla faucibus et magna. Nibh massa
                  sapien eget purus. Egestas velit amet enim venenatis nisi
                  tellus tempor.
                </p>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" name="accordion-1" id="cb3" />
              <label htmlFor="cb3" className="tab__label">
                Lorem ipsum dolor sit amet consectetur.
              </label>
              <div className="tab__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam amet tellus
                  vitae cursus magna tempus. Facilisi praesent sed adipiscing
                  convallis adipiscing praesent nisl. Magna at non pellentesque
                  at molestie. Urna vivamus nulla faucibus et magna. Nibh massa
                  sapien eget purus. Egestas velit amet enim venenatis nisi
                  tellus tempor.
                </p>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" name="accordion-1" id="cb4" />
              <label htmlFor="cb4" className="tab__label">
                Lorem ipsum dolor sit amet consectetur.
              </label>
              <div className="tab__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam amet tellus
                  vitae cursus magna tempus. Facilisi praesent sed adipiscing
                  convallis adipiscing praesent nisl. Magna at non pellentesque
                  at molestie. Urna vivamus nulla faucibus et magna. Nibh massa
                  sapien eget purus. Egestas velit amet enim venenatis nisi
                  tellus tempor.
                </p>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" name="accordion-1" id="cb5" />
              <label htmlFor="cb5" className="tab__label">
                Lorem ipsum dolor sit amet consectetur.
              </label>
              <div className="tab__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam amet tellus
                  vitae cursus magna tempus. Facilisi praesent sed adipiscing
                  convallis adipiscing praesent nisl. Magna at non pellentesque
                  at molestie. Urna vivamus nulla faucibus et magna. Nibh massa
                  sapien eget purus. Egestas velit amet enim venenatis nisi
                  tellus tempor.
                </p>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" name="accordion-1" id="cb6" />
              <label htmlFor="cb6" className="tab__label">
                Lorem ipsum dolor sit amet consectetur.
              </label>
              <div className="tab__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam amet tellus
                  vitae cursus magna tempus. Facilisi praesent sed adipiscing
                  convallis adipiscing praesent nisl. Magna at non pellentesque
                  at molestie. Urna vivamus nulla faucibus et magna. Nibh massa
                  sapien eget purus. Egestas velit amet enim venenatis nisi
                  tellus tempor.
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* -------------------dropdown section ------------------------- */}
        <div className="dropdown-section">
          <div className="dropdown-back">
            <img src={btmback} alt="rigt" />
          </div>
          <div className="lastleaf">
            <img src={lastleaf} alt="rigt" />
          </div>
          <div className="dropdown-heading">
            <p>Foire aux questions</p>
          </div>
          <div className="tarif-title">
            <p>Tarifs</p>
          </div>
          <div className="tarif-cards">
            <div className="consultaion">
              <p>
                90€ <span>/consultation</span>
              </p>
            </div>
            <div className="consultaion-text">
              <p>Consultations d'Ostéopathie</p>
            </div>
            <div className="bullets">
              <div className="bullet-circle"></div>
              <p>Nec eget purus aliquet ultrices.</p>
            </div>
            <div className="bullets">
              <div className="bullet-circle"></div>
              <p>Nec eget purus aliquet ultrices.</p>
            </div>
            <div className="bullets">
              <div className="bullet-circle"></div>
              <p>Nec eget purus aliquet ultrices.</p>
            </div>
          </div>
          <div className="tarif-cards2">
            <div className="consultaion">
              <p>
                90€ <span>/consultation</span>
              </p>
            </div>
            <div className="consultaion-text">
              <p>Consultations d'Ostéopathie</p>
            </div>
            <div className="bullets">
              <div className="bullet-circle"></div>
              <p>Nec eget purus aliquet ultrices.</p>
            </div>
            <div className="bullets">
              <div className="bullet-circle"></div>
              <p>Nec eget purus aliquet ultrices.</p>
            </div>
            <div className="bullets">
              <div className="bullet-circle"></div>
              <p>Nec eget purus aliquet ultrices.</p>
            </div>
          </div>
          <div className="tarif-btn">
            <p id="tarif-btn">Prendre rendez-vous</p>
          </div>
        </div>
      </div>
      <div className="slider-cards-wrapper">
        <div className="slider-wrapper">
          <div className="slider-main">
            <div className="slider-cards">
              <div className="firstRow brown-color">
                <p>S</p>
              </div>
              <div className="firstName">
                <p>Sabine Michel</p>
                <span>23/03/2024</span>
              </div>
              <div className="firstImg">
                <img src={google} alt="google" />
              </div>
            </div>
            <div className="starimg">
              <img src={star} alt="" />
            </div>
            <div className="card-text">
              <p>
                Sit venenatis et orci integer morbi. Feugiat viverra arcu
                fringilla pretium risus aliquam eu laoreet aliquet. Parturient
                feugiat posuere justo mattis cras ullamcorper ac. Consectetur a
                tincidunt bibendum nunc in. Felis elementum sem mollis
                scelerisque leo leo eget tristique.
              </p>
            </div>
          </div>
        </div>
        <div className="slider-wrapper">
          <div className="slider-main">
            <div className="slider-cards">
              <div className="firstRow grape-color">
                <p>S</p>
              </div>
              <div className="firstName">
                <p>Sabine Michel</p>
                <span>23/03/2024</span>
              </div>
              <div className="firstImg">
                <img src={google} alt="google" />
              </div>
            </div>
            <div className="starimg">
              <img src={star} alt="" />
            </div>
            <div className="card-text">
              <p>
                Sit venenatis et orci integer morbi. Feugiat viverra arcu
                fringilla pretium risus aliquam eu laoreet aliquet. Parturient
                feugiat posuere justo mattis cras ullamcorper ac. Consectetur a
                tincidunt bibendum nunc in. Felis elementum sem mollis
                scelerisque leo leo eget tristique.
              </p>
            </div>
          </div>
        </div>
        <div className="slider-wrapper">
          <div className="slider-main">
            <div className="slider-cards">
              <div className="firstRow black-color">
                <p>S</p>
              </div>
              <div className="firstName">
                <p>Sabine Michel</p>
                <span>23/03/2024</span>
              </div>
              <div className="firstImg">
                <img src={google} alt="google" />
              </div>
            </div>
            <div className="starimg">
              <img src={star} alt="" />
            </div>
            <div className="card-text">
              <p>
                Sit venenatis et orci integer morbi. Feugiat viverra arcu
                fringilla pretium risus aliquam eu laoreet aliquet. Parturient
                feugiat posuere justo mattis cras ullamcorper ac. Consectetur a
                tincidunt bibendum nunc in. Felis elementum sem mollis
                scelerisque leo leo eget tristique.
              </p>
            </div>
          </div>
        </div>
        <div className="slider-wrapper">
          <div className="slider-main">
            <div className="slider-cards">
              <div className="firstRow green-color">
                <p>S</p>
              </div>
              <div className="firstName">
                <p>Sabine Michel</p>
                <span>23/03/2024</span>
              </div>
              <div className="firstImg">
                <img src={google} alt="google" />
              </div>
            </div>
            <div className="starimg">
              <img src={star} alt="" />
            </div>
            <div className="card-text">
              <p>
                Sit venenatis et orci integer morbi. Feugiat viverra arcu
                fringilla pretium risus aliquam eu laoreet aliquet. Parturient
                feugiat posuere justo mattis cras ullamcorper ac. Consectetur a
                tincidunt bibendum nunc in. Felis elementum sem mollis
                scelerisque leo leo eget tristique.
              </p>
            </div>
          </div>
        </div>
        <div className="slider-wrapper">
          <div className="slider-main">
            <div className="slider-cards">
              <div className="firstRow">
                <p>S</p>
              </div>
              <div className="firstName">
                <p>Sabine Michel</p>
                <span>23/03/2024</span>
              </div>
              <div className="firstImg">
                <img src={google} alt="google" />
              </div>
            </div>
            <div className="starimg">
              <img src={star} alt="" />
            </div>
            <div className="card-text">
              <p>
                Sit venenatis et orci integer morbi. Feugiat viverra arcu
                fringilla pretium risus aliquam eu laoreet aliquet. Parturient
                feugiat posuere justo mattis cras ullamcorper ac. Consectetur a
                tincidunt bibendum nunc in. Felis elementum sem mollis
                scelerisque leo leo eget tristique.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
