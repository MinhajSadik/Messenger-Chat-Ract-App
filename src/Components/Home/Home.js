import React, { useState } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { Link } from "react-router-dom";
import athikVai from "../../images-videos/athiq-vai.jpg";
import JHjoy from "../../images-videos/joynul.jpg";
import NayeeM from "../../images-videos/nayeem.jpg";
import SajoN from "../../images-videos/sajon.jpg";
import "./Home.css";


const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul> */}
        
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
        
        <div>
        <h1>Birthday WebSite & Software</h1>
          {/* <h1>Cool its {darkMode ? "Dark" : "Light"} Mode </h1> */}
        </div>
    </div>

      <div className="perosn-joynul">
        <Link to="/joynul">
          <img alt="Joynul" src={JHjoy} />
        </Link>
      </div>

      <div className="person-nayeem">
        <Link to="/nayeem">
        <img alt="Nayeem" src={NayeeM} />
        </Link>
      </div>

      <div className="perosn-sajon">
        <Link to="/sajon">
        <img alt="Sajon" src={SajoN} />
        </Link>
      </div>

      <div className="person-athikVai">
        <Link to="/athik">
        <img alt="athikVai" src={athikVai} />
        </Link>
      </div>
    </div>

      <MessengerCustomerChat
            pageId="830505353752858"
            appId="1041336330018020"/>
      <MessengerCustomerChat />

    </div>);
};

export default Home;
