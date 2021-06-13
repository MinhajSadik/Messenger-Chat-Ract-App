import MessengerCustomerChat from 'react-messenger-customer-chat';
import './App.css';
import Joynul from './images-videos/joynul.jpg';
import Nayeem from './images-videos/nayeem.jpg';

function App() {
  return (
    <div>
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
      <img alt="Joynul" src={Joynul}/>
      </div>
     
     
    



      {/* <nav>
          <iframe title="_blank" src="https://react-portfolio-resume.netlify.app/"></iframe>
      </nav> */}

    <MessengerCustomerChat
    pageId="830505353752858"
    appId="1041336330018020"
    />
    </div>
  );
}

export default App;