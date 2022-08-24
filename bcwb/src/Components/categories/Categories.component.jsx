// import axios from "axios"
import { connect } from 'react-redux'
import { getRecipes } from "../../ducks/recipeReducer"
import { SmallRecipeItem } from "../SmallRecipeItem/SmallRecipeItem.component"
import { useEffect, useState } from "react"
import { CategoriesContainer } from "./categories.styles"
// import { RECIPES } from "../../endpoints"
// const { GET_BY_CATEGORY } = RECIPES
 
const Categories = (props) => {
    const { category } = props.match.params
    const [ items,setItems ] = useState([])

    useEffect(() => {
        const gettingCatetories = async () => {
            await props.getRecipes().then(res => setItems(res.value.data))
        }
        if (items[0] === undefined) {gettingCatetories()}
    },[])

    const displayedCats = items.filter(el => {
        return el.category === category
    })

    const mappedItems = displayedCats.map(el => {
        var styles = {
            width:`${el.z + 50}px`,
            height:'auto',
            position:'absolute'
        }
        return <SmallRecipeItem key={el.recipe_id} img={el.cover_image_url} title={el.title} id={el.recipe_id} style={styles} />
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