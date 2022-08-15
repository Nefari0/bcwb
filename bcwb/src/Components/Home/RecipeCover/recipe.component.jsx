import { CoverContainer } from "./recipe.styles"
import { DescriptionText, PortraitImage, ShortRow, MainImage } from "../../StyledComponents.styles"
import { BaseButton } from "../../Form/Button.styles"

const RecipeCover = ({items}) => {

    const {
        description,
        title,
        category,
        prep_time,
        servings,
        author,
        recipe_id,
        cover_image_url
    } = items

    return(
        <CoverContainer>
            <PortraitImage><img src={cover_image_url} style={{width:'100%'}} /></PortraitImage>
            {/* <MainImage><img src={cover_image_url} /></MainImage> */}
            <span><h5>{category}</h5></span>
            <h3>{title}</h3>
            {/* <ShortRow> */}
                <div style={{display:'flex',justifyContent:'center'}}><strong>Serves{servings}</strong><strong>Prep Time {prep_time}</strong></div>
            {/* </ShortRow> */}
            <DescriptionText>{description}</DescriptionText>
            <BaseButton style={{width:'50%',margin:'auto'}}>Read more</BaseButton>
        </CoverContainer>
    )
}

export default RecipeCover