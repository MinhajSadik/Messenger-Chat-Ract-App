import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Link } from 'react-router-dom';
import JHjoy from './Components/images-videos/joynul.jpg';
import Nayeem from './Components/images-videos/nayeem.jpg';
import Sajon from './Components/images-videos/sajon.jpg';

const Home = () => {
    return (
    <div>
        <div className="group-images">
            <Link className="nav-link" to="/joynul">Minhaj</Link>
            <img alt="Nayeem" src={Nayeem}/>
            <img alt="Sajon" src={Sajon}/>
            <img alt="Joynul" src={JHjoy}/>
        </div>

        <MessengerCustomerChat
            pageId="830505353752858"
            appId="1041336330018020"/>
        <MessengerCustomerChat/>
        
    </div>
    );
};

export default Home;