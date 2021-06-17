import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Link } from 'react-router-dom';
import JHjoy from '../../images-videos/joynul.jpg';
import Nayeem from '../../images-videos/nayeem.jpg';
import Sajon from '../../images-videos/sajon.jpg';

const Home = () => {
    return (
    <div>
        <div className="group-images">
            <Link to="/joynul"><img alt="Joynul" src={JHjoy}/></Link>
            <img alt="Nayeem" src={Nayeem}/>
            <img alt="Sajon" src={Sajon}/>
            
        </div>

        <MessengerCustomerChat
            pageId="830505353752858"
            appId="1041336330018020"/>
        <MessengerCustomerChat/>
        
    </div>
    );
};

export default Home;