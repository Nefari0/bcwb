import './Recipe.scss'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { PortraitImage } from '../StyledComponents.styles'
import InstructionContainer from './Instructions/InstructionContainer'
import Button from '../Form/Button'

const Recipe = (props) => {
    const { recipe_id } = props.match.params
    const [ items,setItems ] = useState([])
    const [ instructions,setInstructions ] = useState([]) 
    const [ ingredients,setIngredients ] = useState([])

    // ******** testing only ********** //
    const [ isAdmin,setIsAdmin ] = useState(true)
    // ******** testing only ********** //

    useEffect(() => {
        getContent()
    },[])

    const getContent = async () => {
        await getItems()
        await grabInstructions()
        await grabIngredients()
    }

    const getItems = () => {
        axios.get(`/api/recipes/get/recipe/${recipe_id}`).then(res => {
            setItems(res.data)
        })
    }

    

    const grabInstructions = () => {
        axios.get(`/api/instructions/${recipe_id}`).then(res => {
            setInstructions(res.data)
        })
    }    

    const grabIngredients = () => {
        axios.get(`/api/ingredients/${recipe_id}`).then(res => {
            setIngredients(res.data)
        })
    }

    return(
        <main className='recipe-box' >
            {/* <PortraitImage><img /></PortraitImage> */}
            <Button onClick={() => setIsAdmin(!isAdmin)} >Enter / Exit Admin View</Button>
            {items[0] != undefined ?

            <InstructionContainer
            items={items} ingredients={ingredients}
            instructions={instructions}
            isAdmin={isAdmin}
            grabIngredients={grabIngredients}
            grabInstructions={grabInstructions}
            getItems={getItems}

            /> : null}
        </main>
    )
}

export default Recipe