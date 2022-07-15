import './App.css';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <header className="App-header">
        <Link to='/' ><img className='hero' /></Link>
        <Nav />
        </header>
        {routes}
    </div>
  );
}

export default App;
