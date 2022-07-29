import './App.scss';
import Nav from './Components/Nav/Nav';
import { Footer } from './Components/Footer/Footer';
import routes from './routes';
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
    <div >
        <Nav />
        {routes}
        <Footer />
    </div>
    </HashRouter>
  );
}

export default App;
