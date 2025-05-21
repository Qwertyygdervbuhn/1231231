import React from "react";
import "./App.css";
import logo from "./components/logo.png";
import pointIcon from "./components/Point.png";
import peopleIcon from "./components/People.png";
import cardIcon from "./components/Card.png";
import favoriteIcon from "./components/Favorite.png";
import instagramIcon from "./components/instagram.png";
import twitterIcon from "./components/twitter.png";
import facebookIcon from "./components/facebook.png";
import visaIcon from "./components/Visa.png";
import mastercardIcon from "./components/MasterCard.png";
import applepayIcon from "./components/ApplePay.png";
import paypalIcon from "./components/PayPal.png";
import sadIcon from "./components/sad.png";

const TopBar = () => {
  const texts = [
    "#buy now", "#вседлядому", "#швидкотазручно",
    "#buy now", "#вседлядому", "#buy now",
    "#вседлядому", "#швидкотазручно", "#buy now", "#вседлядому"
  ];

  return (
    <div id="up">
      <div className="scroll-content">
        {texts.map((text, index) => (
          <p className="textLine" key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

const NavBar = () => (
  <nav>
    <div id="navLeft">
      <div id="divForBurgerMenu">
        <div id="burgerMenu">
          <hr className="lineInBurgerMenu" />
          <hr className="lineInBurgerMenu" />
          <hr className="lineInBurgerMenu" />
        </div>
        <h3 id="h3ForBurgerMenu">Menu</h3>
      </div>
      <img src={logo} alt="logo" id="logoInNav" />
      <div id="divForTegA">
        <a href="#">Товари</a>
        <a href="#">Кімнати</a>
        <a href="#">Дизайн</a>
      </div>
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Пошук" />
    </div>
    <div id="navRight">
      <div id="kiev">
        <img src={pointIcon} alt="Location" />
        <p>Київ</p>
      </div>
      <div id="login-pass">
        <img src={peopleIcon} alt="User" />
        <p>Привіт! Увійдіть в систему</p>
      </div>
      <div id="card">
        <img src={cardIcon} alt="Card" />
      </div>
      <div id="favorite">
        <img src={favoriteIcon} alt="Favorite" />
      </div>
    </div>
  </nav>
);

const EmptyCart = () => (
  <div className="main">
    <h1>ВАШ СПИСОК БАЖАНЬ ПУСТИЙ...</h1>
    <img src={sadIcon} alt="Sad face" className="sadIcon" />
  </div>
);

const Footer = () => {
  const footerCols = Array(4).fill(0).map((_, i) => (
    <div className="footer-col" key={i}>
      <h4>Заголовок підрозділу</h4>
      {Array(8).fill(0).map((_, j) => (
        <p key={j}>Зміст підтеми</p>
      ))}
    </div>
  ));

  const icons = [instagramIcon, twitterIcon, facebookIcon, visaIcon, mastercardIcon, applepayIcon, paypalIcon];

  return (
    <footer>
      <div className="footer-columns">
        {footerCols}
      </div>
      <div className="footer-icons-row">
<div className="footer-icons-row">
  <div className="social-icons">
    <img src={instagramIcon} alt="Instagram" />
    <img src={twitterIcon} alt="Twitter" />
    <img src={facebookIcon} alt="Facebook" />
  </div>
  <div className="payment-icons">
    <img src={visaIcon} alt="Visa" />
    <img src={mastercardIcon} alt="MasterCard" />
    <img src={applepayIcon} alt="ApplePay" />
    <img src={paypalIcon} alt="PayPal" />
  </div>
</div>
      </div>
    </footer>
  );
};


function App() {
  return (
    <div className="app-container">
      <TopBar />
      <div id="mainDiv">
        <NavBar />
      </div>
      <div className="wrapper">
        <EmptyCart />
        <Footer />
      </div>
    </div>
  );
}

export default App;
