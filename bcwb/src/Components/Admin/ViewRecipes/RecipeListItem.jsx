import { ThumbnailImage,ImageTag } from "../../Styles/Images/images.styles";

export const RecipeListItem = (props) => {
    
    const { items } = props

    const propObject = {
        category_id:0,
        selectedCategory:null,
        setSelectedCategory:null
    }

    const style = {
        left:'-0px',
        top:'10px',
        transform:'rotate(0deg)'
    }

    return (
        <ThumbnailImage propObject={propObject}>
            <img src={items.cover_image_url} />
            <ImageTag style={style}>{items.title}</ImageTag>
        </ThumbnailImage>
    )
}