import './App.scss';
import Nav from './Components/Nav/Nav';
import { Footer } from './Components/Footer/Footer';
import routes from './routes';
import { HashRouter } from 'react-router-dom'
import Spinner from './Components/Spinner/spinner.component';

function App() {
  return (
    <HashRouter>
    <div >
        <Nav />
        {/* <Spinner /> */}
        {routes}
        <Footer />
    </div>
    </HashRouter>
  );
}

export default App;
