import { changeView } from "../../ducks/navReducer"
import { connect } from 'react-redux'
import { ThumbnailImage,ImageTag } from "../Styles/Images/images.styles"
import { Link } from 'react-router-dom'

const Content = (props) => {

    const { content } = props
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
    }

    return (
            <ThumbnailImage props={{category_id,currentCategory}} onClick={() => props.changeView(category_id)}>
                <Link to={`/categories/${category}`}  ><img src={photo_url} style={positions} />
                    <ImageTag label={category}>{category}</ImageTag>
                </Link>
            </ThumbnailImage>
        )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {changeView})(Content)