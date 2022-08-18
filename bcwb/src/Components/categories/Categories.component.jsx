import axios from "axios"
import { SmallRecipeItem } from "../SmallRecipeItem/SmallRecipeItem.component"
import { useEffect, useState } from "react"
import { CategoriesContainer } from "./categories.styles"
import { RECIPES } from "../../endpoints"
const { GET_BY_CATEGORY } = RECIPES
 
const Categories = (props) => {
    const { category } = props.match.params
    const [ items,setItems ] = useState([])

    useEffect(() => {getItems()},[])

    const getItems = () => {
        axios.post(GET_BY_CATEGORY,{category}).then(res => {
            setItems(res.data)
        })
    }

    const mappedItems = items.map(el => {
        var styles = {
            width:`${el.z}px`,
            height:'auto',
            position:'absolute'
        }
        return <SmallRecipeItem key={el.recipe_id} img={el.cover_image_url} title={el.title} id={el.recipe_id} styles={styles} />
    })

    return (
    <CategoriesContainer>
        <header>{category}</header>
        <section>{mappedItems}</section>
    </CategoriesContainer>
    )
}

export default Categories