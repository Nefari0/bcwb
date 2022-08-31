import { Switch,Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import Admin from './Components/Admin/Admin.component'
import Recipe from './Components/Recipe/Recipe'
import SignUp from './Components/Authentication/SignUp/SignUp'
import SignIn from './Components/Authentication/SignIn/SignIn'
import Categories from './Components/categories/Categories.component'
import LatestRecipes from './Components/LatestRecipes/latest.component'

export default (
    <Switch>
        <Route exact path="/" component={LatestRecipes} />
        <Route path="/admin" component={Admin} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/recipe/:recipe_id" component={Recipe} />
        <Route path="/categories/:category" component={Categories} />
    </Switch>
)