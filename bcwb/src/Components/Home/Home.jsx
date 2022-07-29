import './Home.scss'
import LatestRecipes from './LatestRecipes/LatestRecipes'
import FindRecipes from './FindRecipes/FindRecipes'
import { SectionText } from './HomeStyles.styles'

const Home = () => {    

    return(
        <main className='home'>
            <SectionText>Latest Recipes</SectionText>
            <LatestRecipes />
            <SectionText>Find Recipe</SectionText>
            <FindRecipes />
        </main>
    )
}

export default Home