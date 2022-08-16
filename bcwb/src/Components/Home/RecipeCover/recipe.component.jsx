import { CoverContainer,RecipeRow } from "./recipe.styles"
import { DescriptionText, PortraitImage, ShortRow, MainImage } from "../../StyledComponents.styles"
import { BaseButton,InvertedButton } from "../../Form/Button.styles"
import { restaurant,clock } from "../../SVG"

const RecipeCover = ({items}) => {

    const {
        description,
        title,
        category,
        hours,
        servings,
        author,
        recipe_id,
        cover_image_url,
        x,
        y,
        z
    } = items

    const alignment = {
        width:`300px`,
        position:'absolute',
        left:'-10px',
        top:'-5px'

    }
    

    return(
        <CoverContainer>
            <PortraitImage style={{marginTop:'20px'}}><img src={cover_image_url} style={alignment} /></PortraitImage>

            <span><h5>{category}</h5></span>

            <h3>{title}</h3>

            <ShortRow style={{margin:'5px 0px 10px 0px',width:''}}>{restaurant()}<strong>{servings} Servings</strong>{clock()}<strong>Prep Time {hours} hour</strong></ShortRow>    
  
            <DescriptionText>{description}</DescriptionText>
            
            <InvertedButton>Read more</InvertedButton>
        </CoverContainer>
    )
}

export default RecipeCover