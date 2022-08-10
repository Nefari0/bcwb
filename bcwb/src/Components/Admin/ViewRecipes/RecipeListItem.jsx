import { ThumbnailImage,ImageTag } from "../../StyledComponents.styles";

export const RecipeListItem = (props) => {
    
    const { items } = props

    return (
        <ThumbnailImage><img src={items.cover_image_url} />
            <ImageTag>{items.title}</ImageTag>
        </ThumbnailImage>
    )
}