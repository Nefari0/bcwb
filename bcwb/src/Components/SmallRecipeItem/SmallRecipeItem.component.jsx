import { SmallItem,PhotoFrame } from "./SmallRecipeItems.style"
import { Link } from 'react-router-dom'

export const SmallRecipeItem = ({img,title,id,styles}) => {

    

    return(
        <Link style={{textDecoration:'none'}} to={`/recipe/${id}`}>
            <SmallItem>
                    <PhotoFrame><img src={img} style={styles}/></PhotoFrame>
                    <h5>{title}</h5>
            </SmallItem>
        </Link>
    )
}