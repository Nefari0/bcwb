import './Admin.scss'
import CreateRecipe from './CreateRecipe/CreateRecipe'
import { ViewRecipes } from './ViewRecipes/ViewRecipes'
// import AddPhotos from './Photos/AddPhotos'
import { useState } from 'react'

const Admin = () => {

    const resetAccess = () => {
        localStorage.setItem('text','')
    }
    
    return(
        <main className="admin">
            <button onClick={resetAccess} >logout admin</button>
            <CreateRecipe />
            <ViewRecipes />
            {/* <AddPhotos updateDB={null} label={'add photo'}/> */}
        </main>
    )
}

export default Admin