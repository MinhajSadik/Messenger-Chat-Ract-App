import React from 'react';
import { Link } from 'react-router-dom';
import athikVai from "../../images-videos/athiq-vai.jpg";
import './Athik.css';
const Athik = () => {
    return (<div>
            <Link to="/athik">
                <img alt="athikVai" src={athikVai} />
            </Link>
        </div>);
};

export default Athik;