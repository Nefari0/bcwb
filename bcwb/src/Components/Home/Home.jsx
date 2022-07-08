import './Home.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
import LatestRecipes from './LatestRecipes/LatestRecipes'
import FindRecipes from './FindRecipes/FindRecipes'

const Home = () => {    

    const [item,setItem] = useState([])

    useEffect(() => {
        axios.get('/api/photos/get').then(res => {
            setItem(res.data)
        })
    })

    return(
        <main className='home'>
            <h1>The Latest Recipes</h1>
            <LatestRecipes />
            <h1>Find Recipes For...</h1>
            <FindRecipes />
        </main>
    )
}

export default Home