import './Admin.scss'
import CreateRecipe from './CreateRecipe/CreateRecipe'
import { ViewRecipes } from './ViewRecipes/ViewRecipes'
import Spinner from '../Spinner/spinner.component';
import {updateCharacters} from '../../ducks/breakingBadReducer';
import { getRecipes } from '../../ducks/recipeReducer';
import { connect } from 'react-redux'
import { useEffect } from 'react';

const Admin = (props) => {

    useEffect(() => {
        getRecipes()
    },[])
    
    const resetAccess = () => {
        localStorage.setItem('text','')
    }
    
    return(
        <main className="admin">
            <button onClick={resetAccess} >logout admin</button>
            <CreateRecipe />
            {props.recipes.isLoading ? <Spinner /> : null}
            <ViewRecipes recipes={props.recipes} />
        </main>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { updateCharacters,getRecipes })(Admin)