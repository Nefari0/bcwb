import { changeView } from "../../ducks/navReducer"
import { connect } from 'react-redux'
import { ThumbnailImage,ImageTag } from "../Styles/Images/images.styles"

import { Link } from 'react-router-dom'

const Content = (props) => {

    const { content,location,dimensions } = props
    const { currentCategory } = props.currentCategory

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
        position:'absolute',
        transform: `translateX(${0+location}px)`,
        transition: "all 500ms",
        width:`${dimensions}px`,
        height:`${dimensions}px`
    }

    return (
            <Link
                to={`/categories/${category}`}
                style={wrapper}
                onClick={() => {props.changeView(category_id)}}
            >

                <ThumbnailImage props={{category_id,currentCategory}}>
                        <img src={photo_url} style={positions} />
                        <ImageTag label={category}>{category}</ImageTag>
                </ThumbnailImage>

            </Link>
        )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {changeView})(Content)