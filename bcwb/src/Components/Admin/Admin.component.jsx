import './Admin.scss'
import CreateRecipe from './CreateRecipe/CreateRecipe'
import { ViewRecipes } from './ViewRecipes/ViewRecipes'
import {updateCharacters} from '../../ducks/breakingBadReducer';
import { getRecipes } from '../../ducks/recipeReducer';
import { connect } from 'react-redux'
import { useEffect,useState } from 'react';
import { AdminHeader,AdminBox } from './Admin.styles';
import ViewCategories from './Categories/ViewCategories.component';
import { ButtonsPrototype } from './Prototyping/buttons.component';
import RecipeContextTesting from './Prototyping/recipes.components';

const Admin = (props) => {

    useEffect(() => {
        getRecipes()
    },[])
    
    const [ currentView,setCurrentView ] = useState('VIEW_RECIPES')

    const changeView = (view) => {
        setCurrentView(view)
        window.scrollTo({
            top: 1200,
            behavior: 'smooth'
        });
    }

    
    
    return(
        <AdminBox>
            <AdminHeader>
                <h4 onClick={() => changeView('VIEW_RECIPES')} >recipes</h4>
                <h4 >new recipe</h4>
                <h4 onClick={() => changeView('VIEW_CATEGORIES')} >categories</h4>
            </AdminHeader>
            {/* <ButtonsPrototype /> */}
            {/* <RecipeContextTesting /> */}
            <CreateRecipe />
            {currentView === 'VIEW_CATEGORIES' ? <ViewCategories /> : null}
            {currentView === 'VIEW_RECIPES' ? <ViewRecipes recipes={props.recipes} /> : null}
        </AdminBox>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { updateCharacters,getRecipes })(Admin)