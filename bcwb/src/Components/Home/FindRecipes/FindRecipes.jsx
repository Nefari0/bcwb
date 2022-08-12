import { useState,useEffect } from 'react'
import { ThumbnailImage,ImageTag } from '../../StyledComponents.styles'
import { connect } from 'react-redux'
import { getCategories } from '../../../ducks/recipeReducer'

const FindRecipes = (props) => {

    const [ items,setItems ] = useState([])

    useEffect(() => { getDB() },[])

    const getDB = async () => {
        const response = await props.getCategories()
        const { data } = response.value
        await setItems(data)
    }

    const mappedItems= items.map(el => {
        const { x,y,z } = el

        const positions = {
            left:`${x}px`,
            top:`${y}px`,
            width:`${z}px`,
            position:'absolute'
        }

        return <ThumbnailImage key={el.category_id} ><img src={el.photo_url} style={positions} /><ImageTag>{el.category}</ImageTag></ThumbnailImage>
        })    

    return(
        <section  >
            {mappedItems}
        </section>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {getCategories})(FindRecipes)