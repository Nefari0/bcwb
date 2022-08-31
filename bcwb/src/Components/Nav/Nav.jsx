import { NavBox } from "./nav.styles"
import { useState,useEffect } from "react"
import { connect } from 'react-redux'
import { getCategories } from "../../ducks/recipeReducer"
import Content from "./content.component"

const Nav = (props) => {

    const [items,setItems] = useState([])

    useEffect(() => { getDB() },[])

    const getDB = async () => {
        const response = await props.getCategories()
        const { data } = response.value
        await setItems(data)
    }

    const mappedItems = items.map(el => {
        return <Content key={el.category_id} content={el} />
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