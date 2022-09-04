import './App.scss';
import Hero from './Components/Hero/hero.component';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import { HashRouter } from 'react-router-dom';
import MobileUserBar from './Components/UserBar/userbar.component';
import Spinner from './Components/Spinner/spinner.component';
import { setSpinner } from './ducks/recipeReducer';
import { connect } from 'react-redux'

function App(props) {

  const { isLoading } = props.recipes

  return (
    <HashRouter>
    <div >
        <Hero />
        <MobileUserBar />
        <Nav/>
        {isLoading ? <Spinner /> : null}
        {routes}
    </div>
    </HashRouter>
  );
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(mapStateToProps, {setSpinner})(App)