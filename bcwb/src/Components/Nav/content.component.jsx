import { changeView } from "../../ducks/navReducer"
import { connect } from 'react-redux'
import { ThumbnailImage,ImageTag } from "../Styles/Images/images.styles"

import { Link } from 'react-router-dom'
import { useState,useEffect } from "react"

const Content = (props) => {

    const { content,index } = props
    const { currentCategory } = props.currentCategory
    const [style,setStyle] = useState(null)

    useEffect(() => {overrideStyle()}, [])
    
    // --- Moving last element of array to first --- //
    const overrideStyle = () => {
        if (index === 0) {
            setStyle(0)
        } else {setStyle(null)}
    }

    const {
        x,y,z,
        category_id,
        photo_url,
        category
    } = content

    const positions = {
        left:`${x}px`,
        top:`${y}px`,
        width:`${z}px`,
        position:'absolute',
        margin:'auto'
    }

    // --- Move element to back of array --- //
    const wrapper = {
        left:`${style}px`,
        transition:'all 500ms'
    }

    return (
            <span index={index}>
            <ThumbnailImage props={{category_id,currentCategory}} onClick={() => props.changeView(category_id)}>
                <Link to={`/categories/${category}`}  ><img src={photo_url} style={positions} />
                    <ImageTag label={category}>{category}</ImageTag>
                </Link>
            </ThumbnailImage>
            </span>
        )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {changeView})(Content)