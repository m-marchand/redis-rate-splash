import logo from './redisrate.png';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>RedisRate is an analytical tool to monitor<br></br> pertinent Redis Performance metrics</h2>
        <h4>Built for developers, by developers</h4>
        <Button variant='outlined'>Get Started</Button>
      </header>
      <div>
        SCREENSHOTS
      </div>
      <div>
        THE TEAM
      </div>
    </div>
  );
}

export default App;
