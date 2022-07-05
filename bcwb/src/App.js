// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import SignIn from './Components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className='hero' />
        {/* <Nav /> */}
      </header>

      <main>
        <SignIn />
      </main>
    </div>
  );
}

export default App;
