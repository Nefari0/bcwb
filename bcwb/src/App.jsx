
import './App.css';
import Nav from './Components/Nav/Nav';
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img className='hero' />
          <Nav />
      </header>
        <Home />
    </div>
  );
}

export default App;
