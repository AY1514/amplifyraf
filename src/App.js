import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Galatians 2:20</h1>
        <p>
        I have been tcrucified with Christ. 
        It is no longer I who live, but Christ who lives uin me. 
        And the life I now live in the flesh I live by faith in the Son of God,
        vwho loved me and wgave himself for me.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
