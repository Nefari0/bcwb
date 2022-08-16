import { RecipeHeader } from "./RecipeHead.styles"
import { BaseButton,InvertedButton } from "../../Form/Button.styles"
import { useEffect,useState } from "react"

const RecipeHead = (props) => {
    const { title,author } = props.items[0]
    // const [recipe,setRecipe] = useState({})
    
    // useEffect(() => {setRecipe(props.items)},[])
    // console.log(recipe)    
    // const { title } = recipe[0]
    return (
        <RecipeHeader>
            <h1>{title}</h1>
            <section style={{marginLeft:''}}>
                {/* <div style={{textAlign:'right'}} > */}
                
                <strong><i>by    </i>{author}   <i> on   </i>text</strong>
                {/* </div> */}
               
                {/* <strong> </strong> */}
            </section>
            <InvertedButton>jump to recipe</InvertedButton>
        </RecipeHeader>
    )
}

export default RecipeHead