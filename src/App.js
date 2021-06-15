/* eslint-disable jsx-a11y/no-distracting-elements */
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './App.css';
import Joynul from './Components/Joynul/Joynul';
import Navbar from './Components/Navbar/Navbar';
import JHjoy from './images-videos/joynul.jpg';
import Nayeem from './images-videos/nayeem.jpg';
import Sajon from './images-videos/sajon.jpg';

function App() {
  return (
    <div className="">
      <marquee>আপনি যার জন্মদিন এর শুভেচ্চা দেখতে চান তার ছবিতে ক্লিক করেন! Have agood day, See You Soon!
    </marquee>
      <nav>
        <ul>
          <li>Sajon</li>
          <li>Nayeem</li>
          <li>Joynul</li>
        </ul>
      </nav>
      <div className="group-images">
      <img alt="Nayeem" src={Nayeem}/>
      <img alt="Sajon" src={Sajon}/>
      <img alt="Joynul" src={JHjoy}/>
      </div>
    <MessengerCustomerChat
    pageId="830505353752858"
    appId="1041336330018020"/>

    <Navbar/>
    <Joynul/>
    </div>
  );
}

export default App;