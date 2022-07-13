import { Switch,Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import Admin from './Components/Admin/Admin'
import Home from './Components/Home/Home'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
    </Switch>
)