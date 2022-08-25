import { CoverContainer } from "./recipe.styles"
import { DescriptionText, PortraitImage } from "../Styles/Images/images.styles"
import { InvertedButton } from "../Form/Button.styles"
import { restaurant,clock } from "../SVG"

const photoAlignment = {
    width:`300px`,
    position:'absolute',
    left:'-10px',
    top:'-5px'
}

const RecipeCover = ({items}) => {

    // console.log('this is from recipe cover',items)

    const {
        description,
        title,
        category,
        hours,
        minutes,
        servings,
        author,
        recipe_id,
        cover_image_url,
        x,
        y,
        z
    } = items

    const quantityFormats = () => {
        const multiUnit = (input) => {
          return (input > 1 ? 's' : '')
        }
      
        const unitFormat = (input,string) => {
          return (input > 0 ? `${input} ${string}${multiUnit(input)} ` : '')
        }
      
        const returnVal = unitFormat(hours,'hour') + (hours > 0 && minutes > 0 ? 'and ' : ' ') + unitFormat(minutes,'minute')
      
        return (<strong>{clock()}{returnVal}</strong>)
    }

    return(
        <CoverContainer>
            <PortraitImage style={{marginTop:'20px'}}><img src={cover_image_url} style={photoAlignment} /></PortraitImage>

            <span><h5>{category}</h5></span>

            <h3>{title}</h3>
            
            <div style={{margin:'10px 0px 10px 0px',position:'relative'}}>

                <strong style={{marginRight:'30px'}}>
                    {restaurant()}
                    {servings} Servings
                </strong>

                {quantityFormats()}
            </div>
  
            <DescriptionText>{description.split('').length > 100 ? `${description.substring(0,100) + '...'}` : description}</DescriptionText>

            <InvertedButton>Read more</InvertedButton>
        </CoverContainer>
    )
}

export default RecipeCover