import { useState,useEffect } from 'react'
import { ThumbnailImage,ImageTag } from '../../StyledComponents.styles'
import { connect } from 'react-redux'
import { getCategories } from '../../../ducks/recipeReducer'
import { Link } from 'react-router-dom'

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
            position:'absolute',
        }

        return <ThumbnailImage key={el.category_id} ><Link to={`/categories/${el.category}`} style={{width:'0px',backgroundColor:'blue'}} ><img src={el.photo_url} style={positions} /><ImageTag label={el.category}>{el.category}</ImageTag></Link></ThumbnailImage>
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