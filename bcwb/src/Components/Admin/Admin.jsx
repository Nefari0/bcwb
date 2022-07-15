import './Admin.scss'
import CreateRecipe from './CreateRecipe/CreateRecipe'
import { ViewRecipes } from './ViewRecipes/ViewRecipes'

const Admin = () => {
    
    return(
        <main className="admin">
            <ViewRecipes />
            <CreateRecipe />
        </main>
    )
}

export default Admin