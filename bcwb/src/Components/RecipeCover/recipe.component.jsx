import { CoverContainer } from "./recipe.styles"
import { DescriptionText, PortraitImage } from "../Styles/Images/images.styles"
import { InvertedButton } from "../Form/Button.styles"
import { InvertedButtonLink,BaseButtonLink } from "../Form/Button.styles"
import { restaurant,clock } from "../SVG"
import { Link } from 'react-router-dom'

const RecipeCover = ({items}) => {

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
        z,
        angle
    } = items
    
    const photoAlignment = {
        position:'absolute',
        width:`${z}px`,
        left:`${x}px`,
        top:`${y}px`,
        transform:`rotate(${angle}deg)`
    }

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
            <PortraitImage style={{marginTop:'0px'}}>
                <Link to={`/recipe/${recipe_id}`}><img src={cover_image_url} style={photoAlignment} /></Link>
            </PortraitImage>

            <span>
                <Link style={{textDecoration:'none'}} to={`/categories/${category}`} >
                    <h5>{category}</h5>
                </Link>
            </span>

            <h3>{title}</h3>
            
            <div style={{margin:'10px 0px 10px 0px',position:'relative'}}>

                <strong style={{marginRight:'30px'}}>
                    {restaurant()}
                    {servings} Servings
                </strong>

                {quantityFormats()}
            </div>
  
            <DescriptionText>
                {description.split('').length > 100 ? `${description.substring(0,100) + '...'}` : description}
            </DescriptionText>

            <InvertedButtonLink to={`/recipe/${recipe_id}`} >
                Read more
            </InvertedButtonLink>

        </CoverContainer>
    )
}

export default RecipeCover