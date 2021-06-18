import React, { useState } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { Link } from "react-router-dom";
import athikVai from "../../images-videos/athiq-vai.jpg";
import JHjoy from "../../images-videos/joynul.jpg";
import Nayeem from "../../images-videos/nayeem.jpg";
import Sajon from "../../images-videos/sajon.jpg";
import "./Home.css";


const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="container">
          <span style={{ color: darkMode ? "grey" : "black" }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
        </div>
        <div>
          <h1>Cool its {darkMode ? "Dark" : "Light"} Mode </h1>
        </div>
      

      <div className="group-images">
        <Link to="/joynul">
          <img alt="Joynul" src={JHjoy} />
        </Link>
        <img alt="Nayeem" src={Nayeem} />
        <img alt="Sajon" src={Sajon} />
        <img alt="athikVai" src={athikVai} />
      </div>

      <MessengerCustomerChat
        pageId="830505353752858"
        appId="1041336330018020"
      />
      <MessengerCustomerChat />
      </div>
    </div>
  );
};

export default Home;
