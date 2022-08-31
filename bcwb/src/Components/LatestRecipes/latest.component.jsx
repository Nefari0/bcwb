import axios from "axios";
import { useEffect,useState } from "react";
import { RECIPES } from '../../endpoints';
import { Link } from 'react-router-dom'
import Recipe from '../RecipeCover/recipe.component'
// import { Latest } from '../Home/HomeStyles.styles'
import { Latest } from './latest.styles'

const LatestRecipes = () => {
    const [ items,setItems ] = useState([])
    useEffect(() => {
        getDB()
    }, [])


    const getDB = async () => {
        await axios.get(RECIPES.GET_PUBLISHED_RECIPES).then(res => {
            setItems(res.data)
        })
    }

    const mappedItems = items.map(el => {
        const items = {
            description:el.description,
            title:el.title,
            category:el.category,
            hours:el.hours,
            minutes:el.minutes,
            servings:el.servings,
            author:el.author,
            recipe_id:el.recipe_id,
            cover_image_url:el.cover_image_url,
            x:el.x,
            y:el.y,
            z:el.z,
            angle:el.angle
        }
        return <Recipe key={el.recipe_id}  items={items} />
    })

    return(
        <Latest>
            <header>{'LatestRecipes'}<span></span></header>
            <section>{mappedItems}</section>
        </Latest>
    )
}

export default LatestRecipes