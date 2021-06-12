import MessengerCustomerChat from 'react-messenger-customer-chat';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <MessengerCustomerChat
    pageId="<830505353752858>"
    appId="<1041336330018020>"
  />
    </div>
  );
}

export default App;
