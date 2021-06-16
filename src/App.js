/* eslint-disable jsx-a11y/no-distracting-elements */
import MessengerCustomerChat from 'react-messenger-customer-chat';
import {
  BrowserRouter as Link
} from 'react-router-dom';
import './App.css';
import Joynul from './Components/Joynul/Joynul';
import JHjoy from './images-videos/joynul.jpg';
import Nayeem from './images-videos/nayeem.jpg';
import Sajon from './images-videos/sajon.jpg';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>Sajon</li>
          <li>Nayeem</li>
          <li>Joynul</li>
        </ul>
      </nav>
      <div className="group-images">
      <Link className="nav-link" to="/joynul">Minhaj</Link>
      <img alt="Nayeem" src={Nayeem}/>
      <img alt="Sajon" src={Sajon}/>
      <img alt="Joynul" src={JHjoy}/>
      </div>
    <MessengerCustomerChat
    pageId="830505353752858"
    appId="1041336330018020"/>
    <Joynul/>
    </div>
  );
}

export default App;