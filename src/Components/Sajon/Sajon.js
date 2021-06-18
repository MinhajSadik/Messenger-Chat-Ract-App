import React from 'react';
import { Link } from 'react-router-dom';
import SajoN from "../../images-videos/sajon.jpg";
import './Sajon.css';


const Sajon = () => {
    return (<>
        <div>
            <Link to="/sajon">
                <img alt="Sajon" src={SajoN} />
            </Link>
      </div>

    </>);
};

export default Sajon;