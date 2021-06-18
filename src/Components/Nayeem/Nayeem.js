import React from 'react';
import { Link } from 'react-router-dom';
import NayeeM from '../../images-videos/nayeem.jpg';

const Nayeem = () => {
    return (<>
        <div>
            <Link to="/nayeem">
            <img alt="Nayeem" src={NayeeM} />
            </Link>
        </div>
    </>);
};

export default Nayeem;