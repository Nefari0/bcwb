import './App.scss';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import { HashRouter } from 'react-router-dom'
import { MobileUserBar } from './Components/MobileUserBar/MobileUserBar.component';

function App() {
  return (
    <HashRouter>
    <div >
        <Nav />
        <MobileUserBar />
        {routes}
    </div>
    </HashRouter>
  );
}

export default App;
