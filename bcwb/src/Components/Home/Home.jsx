import './Home.scss'
import LatestRecipes from './LatestRecipes/LatestRecipes'
import FindRecipes from './FindRecipes/FindRecipes'
import { Footer } from '../Footer/Footer'
// import SignIn from '../SignIn/SignIn'

const Home = () => {    

    return(
        <main className='home'>
            {/* <SignIn /> */}
            <h1>The Latest Recipes</h1>
            <LatestRecipes />
            {/* <h1>Find Recipes For...</h1> */}
            {/* <FindRecipes /> */}
            <Footer />
        </main>
    )
}

export default Home