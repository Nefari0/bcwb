import './Recipe.scss'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { PortraitImage } from '../StyledComponents.styles'
import InstructionContainer from './Instructions/InstructionContainer'

const Recipe = (props) => {
    const { recipe_id } = props.match.params
    const [ items,setItems ] = useState([])
    const [ instructions,setInstructions ] = useState([]) 
    const [ ingredients,setIngredients ] = useState([])

    useEffect(() => {getItems()},[])

    const getItems = async () => {
        await axios.get(`/api/recipes/get/recipe/${recipe_id}`).then(res => {
            setItems(res.data)
        })
        await axios.get(`/api/instructions/${recipe_id}`).then(res => {
            setInstructions(res.data)
        })
        await axios.get(`/api/ingredients/${recipe_id}`).then(res => {
            setIngredients(res.data)
        })
    }

    

    return(
        <main className='recipe-box' >
            {/* <PortraitImage><img /></PortraitImage> */}
            {items[0] != undefined ? <InstructionContainer items={items} ingredients={ingredients} instructions={instructions} /> : null}
        </main>
    )
}

export default Recipe