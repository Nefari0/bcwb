import { Switch,Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import Admin from './Components/Admin/Admin'
import Home from './Components/Home/Home'
import Recipe from './Components/Recipe/Recipe'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
        <Route path="/recipe/:recipe_id" component={Recipe} />
    </Switch>
)