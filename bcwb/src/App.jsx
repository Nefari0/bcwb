import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import routes from './routes';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/' ><img className='hero' /></Link>
        <Nav />
      </header>
        {routes}
    </div>
  );
}

export default App;
