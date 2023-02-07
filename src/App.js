import React, { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import Slider from "./components/slider/slider";

const productImages = {
  1: require("./images/bottle1.jpg"),
  2: require("./images/bamboo1.jpg"),
  3: require("./images/bag2.jpg"),
  4: require("./images/com_bag1.jpg"),
  5: require("./images/charger.jpg"),

  // 1: require("./images/reusable-water-bottle.jpg"),
  // 2: require("./images/bamboo-utensils.jpg"),
  // 3: require("./images/cloth-shopping-bags.jpg"),
  // 4: require("./images/compostable-trash-bags.jpg"),
  // 5: require("./images/solar-charger.jpg"),
};

const logo = require("./images/logo1.jpg");

function App() {
  const productsRef = useRef(null);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Reusable Water Bottle",
      description:
        "A high-quality, reusable water bottle to reduce plastic waste.",
    },
    {
      id: 2,
      name: "Bamboo Utensils",
      description: "A set of bamboo utensils for sustainable eating on-the-go.",
    },
    {
      id: 3,
      name: "Cloth Shopping Bags",
      description:
        "A set of reusable cloth shopping bags to replace single-use plastic bags.",
    },
    {
      id: 4,
      name: "Compostable Trash Bags",
      description:
        "A pack of compostable trash bags for a more eco-friendly waste disposal option.",
    },
    {
      id: 5,
      name: "Solar Charger",
      description:
        "A portable solar charger for off-grid charging of electronic devices.",
    },
  ]);

  const [showProducts, setShowProducts] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: productsRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: productsRef.current.offsetTop,
        behavior: "smooth",
      });
    }, 100);
  }, [showProducts]);

  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const videoRef = useRef(null);
  return (
    <div>
      <div className="LandingPage">
        <div className="jumbo">
          <div className="sec1">
            <header>
              <nav>
                <img src={logo} alt="The Sustainable Kit" data-aos="zoom-in" />
                <h1 data-aos="fade-left">The Sustainable Kit</h1>
              </nav>
            </header>
            <div>
              <h2 class="lead">
                Start your journey towards a more sustainable lifestyle with our
                comprehensive sustainability starter kit
              </h2>
              {/* <p>
                Our kit includes 5 essential elements that will help you reduce
                your environmental impact and live a more sustainable life.
                Whether you're a university student or a professional, our kit
                is designed to fit your needs and lifestyle.
              </p> */}
            </div>
            {/* <main>
        {products.map((product) => (
          <div key={product.id} className="product" data-aos="fade-up">
            <img src={productImages[product.id]} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </main> */}

            <main>
              <h1>Start living sustainably with our kit</h1>
              <p>
                Our kit contains 5 essential products to help you live a more
                sustainable life.
              </p>
              <button
                onClick={() => {
                  setShowProducts(true);
                }}
                style={{ display: showProducts ? "none" : "" }}
              >
                Discover our products
              </button>
            </main>
          </div>
          <div className="vidSection">
            {/* <video width="100%" height="50%" loop controls>
              <source
                src={require("../src/assets/greenEarth.mp4")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video> */}

            <video ref={videoRef} autoPlay loop muted>
              <source
                src={require("../src/assets/greenEarth.mp4")}
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        {showProducts && (
          <div className="products" ref={productsRef}>
            <h1 className="prodHeading">Our Products</h1>
            {products.map((product) => (
              <div key={product.id} className="product " data-aos="fade-up">
                <img src={productImages[product.id]} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="button-container">
                  <button className="buy-button">Buy</button>
                  <button className="cart-button">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <footer className="footer">
          <div className="footer-left">
            <p>The Sustainable Kit &copy; {new Date().getFullYear()}</p>
          </div>
          <div className="footer-center">Made with ❤️ @somnath</div>
          <div className="footer-right">
            <nav className="social-icons">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaWhatsapp />
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
