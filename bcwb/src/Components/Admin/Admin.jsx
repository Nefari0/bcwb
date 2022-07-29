import './Admin.scss'
import CreateRecipe from './CreateRecipe/CreateRecipe'
import { ViewRecipes } from './ViewRecipes/ViewRecipes'

const Admin = () => {

    const resetAccess = () => {
        localStorage.setItem('text','')
    }
    
    return(
        <main className="admin">
            <button onClick={resetAccess} >logout admin</button>
            <CreateRecipe />
            <ViewRecipes />
        </main>
    )
}

export default Admin