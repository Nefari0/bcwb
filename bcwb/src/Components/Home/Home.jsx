import './Home.scss'
import LatestRecipes from './LatestRecipes/LatestRecipes'
import FindRecipes from './FindRecipes/FindRecipes'
import { SectionText } from './HomeStyles.styles'
import { getRecipes } from '../../ducks/recipeReducer';
import { connect } from 'react-redux'
import { useEffect } from 'react';
import Spinner from '../Spinner/spinner.component';

const Home = (props) => {    

    useEffect(() => {
        props.getRecipes()

    },[])

    return(
        <main className='home'>
            {props.recipes.isLoading ? <Spinner /> : null}
            <SectionText>Latest Recipes</SectionText>
            <LatestRecipes />
            <SectionText>Find Recipe</SectionText>
            <FindRecipes />
        </main>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { getRecipes })(Home)