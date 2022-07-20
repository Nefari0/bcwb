import './App.css';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import { Link } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
    <div>
      <header className="App-header">
        <Link to='/' ><img className='hero' /></Link>
        <Nav />
        </header>
        {routes}
    </div>
    </HashRouter>
  );
}

export default App;
