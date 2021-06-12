import MessengerCustomerChat from 'react-messenger-customer-chat';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    <MessengerCustomerChat
    pageId="<830505353752858>"
    appId="<1041336330018020>"
  />
    </div>
  );
}

export default App;
