import { NavBox } from "./nav.styles"
import { useState,useEffect } from "react"
import { connect } from 'react-redux'
import { getCategories } from "../../ducks/recipeReducer"
import { Content } from "./content.component"

const Nav = (props) => {

    const [items,setItems] = useState([])
    const [selectedCategory,setSelectedCategory] = useState(0)

    useEffect(() => { getDB() },[])

    const getDB = async () => {
        const response = await props.getCategories()
        const { data } = response.value
        await setItems(data)
    }

    const selectionHandler = (id) => {
        setSelectedCategory(id)
        window.scrollTo({
            top: 160,
            behavior: 'smooth'
        });
    }

    const mappedItems = items.map(el => {
        return <Content key={el.category_id} content={el} selectedCategory={selectedCategory} setSelectedCategory={selectionHandler} />
    })

    return (
        <NavBox>
            {mappedItems}
        </NavBox>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {getCategories})(Nav)