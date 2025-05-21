import React from "react";
import "./App.css";

import logo from "../image/logo.png";
import pointIcon from "../image/Point.png";
import peopleIcon from "../image/People.png";
import cardIcon from "../image/Card.png";
import favoriteIcon from "../image/Favorite.png";
import product1 from "../image/product1.png";
import product2 from "../image/product2.png";
import product3 from "../image/product3.png";
import product4 from "../image/product4.png";
import product5 from "../image/product5.png";
import instagramIcon from "../image/instagram.png";
import twitterIcon from "../image/twitter.png";
import facebookIcon from "../image/facebook.png";
import visaIcon from "../image/Visa.png";
import mastercardIcon from "../image/MasterCard.png";
import applepayIcon from "../image/ApplePay.png";
import paypalIcon from "../image/PayPal.png";
import productLeftImg from "../image/product-left.jpg"; 
import product11 from "../image/product11.jpg";
import product22 from "../image/product22.jpg";
import product33 from "../image/product33.jpg";

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


const ProductSlider = () => {
  const products = [
    { id: 1, title: "Шафа", desc: "Дерево, білий", img: product1 },
    { id: 2, title: "Стілець", desc: "Метал, сірий", img: product2 },
    { id: 3, title: "Диван", desc: "Тканина, синій", img: product3 },
    { id: 4, title: "Комод", desc: "Дерево, коричневий", img: product4 },
    { id: 5, title: "Крісло", desc: "Шкіра, чорне", img: product5 }
  ];

  return (
    <div className="product-slider">
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.img} alt={item.title} />
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
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

function App() {
  return (
    <div className="app-container" style={{ fontFamily: "sans-serif" }}>
      <TopBar />
      <NavBar />

      <section style={{ padding: "0 40px" }}>
        <h2>ТОВАРИ</h2>
        <ProductSlider />
      </section>

      <section>
  <h2>ТОВАРИ З ОДНОГО НАБОРУ</h2>
  <p style={{ maxWidth: "700px" }}>
    Lorem ipsum dolor sit amet consectetur, adipisci velit. Et tempora molestiae est.
  </p>

  <div className="combo-section">
    <div className="combo-left image-wrapper large">
      <img src={productLeftImg} alt="Основний товар" />
    </div>

    <div className="combo-right">
      <div className="combo-right-item image-wrapper small">
        <img src={productLeftImg} alt="Товар 1" />
      </div>
      <div className="combo-right-item image-wrapper small">
        <img src={productLeftImg} alt="Товар 2" />
      </div>
    </div>
  </div>
  <div className="combo-footer image-wrapper wide">
  <img src={productLeftImg} alt="Комбо підвал" />
</div>
</section>


      <div style={{ padding: "40px" }}>
     <section>
  <h2>НОВИНКИ</h2>
  <div className="cozy-sets">
    {[product11, product22, product33].map((img, i) => (
      <div key={i}>
        <div className="cozy-card">
          <img src={img} alt={`Новинка ${i + 1}`} />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, gravida convallis.</p>
      </div>
    ))}
  </div>
</section>

         <section>
  <h2>ЗАТИШНІ НАБОРИ</h2>
  <div className="cozy-sets">
    {[product11, product22, product33].map((img, i) => (
      <div key={i}>
        <div className="cozy-card">
          <img src={img} alt={`Новинка ${i + 1}`} />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, gravida convallis.</p>
      </div>
    ))}
  </div>
</section>
      <section>
  <h2>ТОВАРИ З ОДНОГО НАБОРУ</h2>
  <p style={{ maxWidth: "700px" }}>
    Lorem ipsum dolor sit amet consectetur, adipisci velit. Et tempora molestiae est.
  </p>
  <div className="combo-section">
    <div className="combo-left image-wrapper large">
      <img src={productLeftImg} alt="Головний товар" />
    </div>
    <div className="combo-right">
      <div className="combo-right-item image-wrapper small">
        <img src={product11} alt="Супутній товар 1" />
      </div>
      <div className="combo-right-item image-wrapper small">
        <img src={product22} alt="Супутній товар 2" />
      </div>
    </div>
  </div>
  <div className="combo-footer image-wrapper wide">
    <img src={product33} alt="Комбо підвал" />
  </div>
</section>

        <section className="icons-section">
          {["Доставка🚚", "Оплата💳", "Оформлення📝", "Повернення↩️"].map((title, i) => (
            <div className="icon-card" key={i}>
              <div className="icon-placeholder">📦</div>
              <strong>{title}</strong>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          ))}
        </section>

        {[1, 2, 3].map((_, i) => (
          <section key={i}>
            <h2>НАЗВА РОЗДІЛУ</h2>
            <p className="text-block">
            Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. Purus vitae risus laoreet vel quis volutpat facilisi justo sed.
 Sit morbi cras vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed.
 Pellentesque odio feugiat volutpat amet 
sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. 
Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in
 ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. 
Commodo risus dolor turpis suspendisse convallis.
sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. 
Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in
 ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. 
Commodo risus dolor turpis suspendisse convallis..
            </p>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
