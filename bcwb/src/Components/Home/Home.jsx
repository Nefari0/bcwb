import './Home.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import LatestRecipes from './LatestRecipes/LatestRecipes'
import FindRecipes from './FindRecipes/FindRecipes'

const Home = () => {    

    const [item,setItem] = useState([])

    return(
        <main className='home'>
            <h1>The Latest Recipes</h1>
            <LatestRecipes />
            <h1>Find Recipes For...</h1>
            <FindRecipes />
            {/* <Photos /> */}
            {/* <Pinterest /> */}
            <footer>
                <Link to="/admin" ><h1>admin</h1></Link>
                <h1>footer</h1>
            </footer>
        </main>
    )
}

export default Home