import '../Home.scss'
import axios from "axios";
import { useEffect,useState } from "react";
// import Content from '../Content/Content';
import { PortraitImage } from '../../StyledComponents.styles';
import { LatestRecipeItem } from './LatestRecipeItem';
import { RECIPES } from '../../../endpoints';
import { Link } from 'react-router-dom'

const style = { // Styling for Content.js
    width:'50px',
    margin:'auto',

}

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
        return <Link to={`/recipe/${el.recipe_id}`} key={el.recipe_id} ><LatestRecipeItem  img={el.cover_image_url} id={el.id} title={el.title} /></Link>
    })

    return(
        <section>
            {mappedItems}
        </section>
    )
}

export default LatestRecipes