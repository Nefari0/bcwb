import axios from "axios";
import { useEffect,useState } from "react";
import { RECIPES } from '../../../endpoints';
import { Link } from 'react-router-dom'
import Recipe from '../RecipeCover/recipe.component'

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
            recipe_id:el.id_recipe,
            cover_image_url:el.cover_image_url,
            x:el.x,
            y:el.y,
            z:el.z
        }
        return <Link to={`/recipe/${el.recipe_id}`} key={el.recipe_id} style={{textDecoration:'none',width:'300px'}} ><Recipe items={items} /></Link>
    })

    return(
        <section>
            {/* <Recipe /> */}
            {mappedItems}
        </section>
    )
}

export default LatestRecipes