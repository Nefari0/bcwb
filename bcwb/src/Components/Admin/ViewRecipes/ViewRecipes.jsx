import axios from "axios"
import { useState,useEffect } from "react"
import Recipe from "../../Recipe/Recipe"
import { RecipeListItem } from "./RecipeListItem"
import { Link } from 'react-router-dom'

export const ViewRecipes = () => {

    const [ items,setItems] = useState([])

    useEffect(() => {getAllRecipes()},[])

    const getAllRecipes = () => {
        axios.get('/api/recipes/get/all').then(res => {
            setItems(res.data)
        })
    }

    const mappedItems = items.map(el => {
        return (
            <Link key={el.recipe_id} to={`/recipe/${el.recipe_id}`} ><RecipeListItem  items={el} /></Link>
        )
    })

    return(
        <>
            {mappedItems}
        </>
    )
}