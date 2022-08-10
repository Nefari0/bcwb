import LatestRecipes from './LatestRecipes/LatestRecipes'
import FindRecipes from './FindRecipes/FindRecipes'
import { SectionText,HomePage } from './HomeStyles.styles'
import { getRecipes } from '../../ducks/recipeReducer';
import { connect } from 'react-redux'
import { useEffect } from 'react';

const Home = (props) => {    

    useEffect(() => {
        props.getRecipes()

    },[])

    return(
        <HomePage>
            <SectionText>Latest Recipes</SectionText>
            <LatestRecipes />
            <SectionText>Find Recipe</SectionText>
            <FindRecipes />
        </HomePage>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { getRecipes })(Home)