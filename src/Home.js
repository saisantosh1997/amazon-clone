import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_1x._CB419795291_.jpg"
        alt=""
      ></img>
      <div className="home__row">
        <Product
          id="12341"
          title="RUNMUS Stereo Gaming Headset for PS4, Xbox One, Nintendo Switch, PC, PS3, Mac, Laptop, Over Ear Headphones"
          price={38.85}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SL1500_.jpg"
        />
        <Product
          id="12342"
          title="SAMSUNG 65-inch Class QLED Q80T Series - 4K UHD Direct Full Array 12X Quantum HDR 12X Smart TV"
          price={1497.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61DIUfDxBtL._AC_SL1000_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12343"
          title="APEMAN Dash Cam 1080P FHD DVR Car Driving Recorder 3 Inch LCD Screen 170° Wide Angle, Parking Monitor"
          price={44.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/817NMJ%2B1GwL._AC_SL1500_.jpg"
        />
        <Product
          id="12345"
          title="Apple iPhone 11 Pro, 64GB, Midnight Green - Fully Unlocked"
          price={1199}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61vflt1U5gL._AC_SL1024_.jpg"
        />
        <Product
          id="12346"
          title="Fortnite RAVEN-X Gaming Chair, RESPAWN by OFM Reclining Ergonomic Chair"
          price={193.21}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71T-ojnDn0L._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12347"
          title="2016 Enclave Audio CineHome HD 5.1 Wireless Home Theater System"
          price={799.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51oENxN8taL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
