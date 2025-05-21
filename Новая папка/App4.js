import React from "react";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../image/logo.png";
import pointIcon from "../image/Point.png";
import peopleIcon from "../image/People.png";
import cardIcon from "../image/Card.png";
import favoriteIcon from "../image/Favorite.png";
import instagramIcon from "../image/instagram.png";
import twitterIcon from "../image/twitter.png";
import facebookIcon from "../image/facebook.png";
import visaIcon from "../image/Visa.png";
import mastercardIcon from "../image/MasterCard.png";
import applepayIcon from "../image/ApplePay.png";
import paypalIcon from "../image/PayPal.png";
import ideaImg1 from "../image/idea1.jpg";
import ideaImg2 from "../image/idea2.jpg";
import ideaImg3 from "../image/idea3.jpg";
import masonryImg1 from "../image/masonry1.jpg";
import masonryImg2 from "../image/masonry2.jpg";
import masonryImg3 from "../image/masonry3.jpg";
import masonryImg4 from "../image/masonry4.jpg";
import masonryImg5 from "../image/masonry5.jpg";
import masonryImg6 from "../image/masonry6.jpg";
import masonryImg7 from "../image/masonry7.jpg";
import masonryImg8 from "../image/masonry8.jpg";
import masonryImg9 from "../image/masonry9.jpg";
import masonryImg10 from "../image/masonry10.jpg";



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
        <a href="/products">Товари</a>
        <a href="/rooms">Кімнати</a>
        <a href="/design">Дизайн</a>
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

const SliderSection = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1.5 } },
    ],
  };

  const slides = Array(7).fill("Назва набору");

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {slides.map((title, index) => (
          <div key={index} className="slider-card">
            <div className="slider-card-box">{title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const IdeasCardsSection = () => {
  const cards = [
    { image: ideaImg1, label: "НОВА КОЛЕКЦІЯ 1" },
    { image: ideaImg2, label: "НОВА КОЛЕКЦІЯ 2" },
    { image: ideaImg3, label: "НОВА КОЛЕКЦІЯ 3" },
  ];

  return (
    <section className="ideas-cards-section">
      <h2 className="ideas-cards-title">НАША НОВА КОЛЕКЦІЯ</h2>
      <div className="ideas-cards-container">
        {cards.map((card, index) => (
          <div className="ideas-card" key={index}>
            <div className="ideas-card-image">
              <img src={card.image} alt={`Card ${index + 1}`} />
            </div>
            <div className="ideas-card-label">{card.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const IdeasMasonrySection = () => {
  const images = [
    masonryImg1,
    masonryImg2,
    masonryImg3,
    masonryImg4,
    masonryImg5,
    masonryImg1,
    masonryImg2,
    masonryImg3,
    masonryImg4,
    masonryImg5,
    masonryImg6,
    masonryImg7,
    masonryImg8,
    masonryImg9,
    masonryImg10
  ];

  return (
    <section className="ideas-masonry-section">
      <h2 className="ideas-masonry-title">ІДЕЇ</h2>
      <div className="ideas-masonry-grid">
        {images.map((img, index) => (
          <div key={index} className="ideas-masonry-card">
            <img src={img} alt={`Ідея ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};
const Footer = () => {
  const footerColumns = Array(4).fill({
    title: "Заголовок підрозділу",
    items: Array(8).fill("Зміст підтеми"),
  });

  return (
    <footer>
      <div className="footer-columns">
        {footerColumns.map((col, index) => (
          <div className="footer-column" key={index}>
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

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
    </footer>
  );
};

const App = () => {
  const ideas = [
  {
    title: "Оформлення гостинної",
    text: "Як підібрати меблі, щоб було стильно та зручно...",
    image: ideaImg1,
  },
  {
    title: "Затишна спальня",
    text: "Поради щодо текстилю, кольорів і світла для спальні.",
    image: ideaImg2,
  },
];

  return (
    <div>
      <TopBar />
      <NavBar />
      <div className="app-container">
        <section className="ideas-wrapper">
          <h2 className="ideas-title">ІДЕЇ ДЛЯ ОФОРМЛЕННЯ</h2>
          <p className="ideas-description">
            Lorem ipsum dolor sit amet consectetur. Habitasse convallis gravida lectus blandit
            convallis a sed. Egestas sapien amet scelerisque mauris tincidunt. Massa est pellentesque
            facilisis vel...
          </p>

{ideas.map((idea, index) => (
  <div className="idea-block" key={index}>
    <div className="idea-image">
      <img src={idea.image} alt={idea.title} />
    </div>
    <div className="idea-text">
      <h3>{idea.title}</h3>
      <p>{idea.text}</p>
    </div>
  </div>
))}

        </section>

        <SliderSection />
        <IdeasCardsSection />
        <IdeasMasonrySection />
        <SliderSection />
      </div>

      <Footer />
    </div>
  );
};

export default App;