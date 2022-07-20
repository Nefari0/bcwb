import './Home.scss'
import LatestRecipes from './LatestRecipes/LatestRecipes'
import FindRecipes from './FindRecipes/FindRecipes'
import { Footer } from '../Footer/Footer'

const Home = () => {    

    return(
        <main className='home'>
            <h1>The Latest Recipes</h1>
            <LatestRecipes />
            <h1>Find Recipes For...</h1>
            <FindRecipes />
            <Footer />
        </main>
    )
}

export default Home