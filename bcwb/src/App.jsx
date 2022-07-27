import './App.scss';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
    <div className='App' >
        <Nav />
        {routes}
    </div>
    </HashRouter>
  );
}

export default App;
