import { ThumbnailImage,ImageTag } from "../Styles/Images/images.styles"
import { Link } from 'react-router-dom'

export const Content = (props) => {

    const { content,setSelectedCategory,selectedCategory } = props

    const { x,y,z,
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

    const propObject = {
        category_id:category_id,
        selectedCategory:selectedCategory,
        setSelectedCategory:setSelectedCategory
    }

    return (
            <ThumbnailImage propObject={propObject} onClick={() => setSelectedCategory(category_id)}>
                <Link to={`/categories/${category}`}  ><img src={photo_url} style={positions} />
                    <ImageTag label={category}>{category}</ImageTag>
                </Link>
            </ThumbnailImage>
        )

}