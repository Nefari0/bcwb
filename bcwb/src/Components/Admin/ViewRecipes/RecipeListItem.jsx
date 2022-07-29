import { ThumbnailImage } from "../../StyledComponents.styles";

export const RecipeListItem = (props) => {
    
    const { items } = props
    const { title } = props.items

    return (
        <>
            <ThumbnailImage><img src={items.cover_image_url} small={'small'} /></ThumbnailImage>
            <h4>{items.title}</h4>
        </>
    )
}