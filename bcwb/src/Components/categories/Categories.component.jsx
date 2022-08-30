import axios from "axios"
import { connect } from 'react-redux'
import { getRecipes } from "../../ducks/recipeReducer"
import { useEffect, useState } from "react"
import { CategoriesContainer } from "./categories.styles"
import { RECIPES } from "../../endpoints"
import Recipe from '../RecipeCover/recipe.component'
const { GET_PUBLISHED_RECIPES } = RECIPES
 
const Categories = (props) => {
    const { category } = props.match.params
    const [ items,setItems ] = useState([])

    useEffect(() => {
        if (items[0] === undefined) {getDB()}
    },[])

    const getDB = async () => {
        await axios.get(GET_PUBLISHED_RECIPES).then(res => {
            setItems(res.data)
        })
    }

    const currentCategory = items.filter(el => {
        return el.category === category
    })

    const mappedItems = currentCategory.map(el => {
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
            z:el.z
        }
        return <Recipe key={el.recipe_id} items={items} />
    })

    return (
    <CategoriesContainer>
        <header>{category}<span></span></header>
        <section>{mappedItems}</section>
    </CategoriesContainer>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {getRecipes})(Categories)