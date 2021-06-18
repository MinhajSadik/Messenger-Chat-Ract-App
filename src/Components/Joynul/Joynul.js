import React from 'react';
import { Link } from 'react-router-dom';
import JHjoy from '../../images-videos/joynul.jpg';

const Joynul = () => {
    return (<>
        <div>
        <Link to="/joynul">
          <img alt="Joynul" src={JHjoy} />
        </Link>
      </div>

    </>);
};

export default Joynul;