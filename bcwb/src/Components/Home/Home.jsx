import LatestRecipes from './LatestRecipes/LatestRecipes'
// import FindRecipes from './FindRecipes/FindRecipes'
import { SectionText,HomePage } from './HomeStyles.styles'
import { getRecipes } from '../../ducks/recipeReducer';
import { connect } from 'react-redux'
import { useEffect,useContext } from 'react';
import { PhotoContext } from '../Context/photos.context';

const Home = (props) => {    

    const { photos } = useContext(PhotoContext)

    useEffect(() => {
        props.getRecipes()

    },[])

    return(
        <HomePage>
            {/* <SectionText>Find Recipe</SectionText> */}
            {/* <FindRecipes /> */}
            <SectionText>Latest Recipes</SectionText>
            <LatestRecipes />
        </HomePage>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { getRecipes })(Home)