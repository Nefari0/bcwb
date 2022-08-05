import './Recipe.scss'
import { useState,useEffect,useContext } from 'react'
import { UserContext } from '../Context/user.context'
import axios from 'axios'
import InstructionContainer from './Instructions/InstructionContainer'
import Button from '../Form/Button'
import { LongRow } from '../StyledComponents.styles'
import { RECIPES } from '../../endpoints'
import { deleteFromFB } from '../Admin/Photos/deleteFromFB'
import access from '../../access'

const Recipe = (props) => {
    const { recipe_id } = props.match.params
    const [ items,setItems ] = useState([])
    const [ instructions,setInstructions ] = useState([]) 
    const [ ingredients,setIngredients ] = useState([])
    const [ notes,setNotes ] = useState([])

    const { currentUser,setCurrentUser } = useContext(UserContext)
    
    // ******** testing only ********** //
    const [ isAdmin,setIsAdmin ] = useState(false)
    // ******** testing only ********** //
    // const admin = currentUser != null && access.getAccess(currentUser.uid)
    // console.log(access.getAccess(currentUser.uid))
    // const adminUser = () => {
    //     return (currentUser != null ? access.getAccess(currentUser.uid) : null)
    // }

    useEffect(() => {getContent()},[])

    const getContent = async () => {
        await getItems()
        await grabInstructions()
        await grabIngredients()
        await grabNotes()
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

    const grabNotes = () => {
        axios.get(`${RECIPES.GET_NOTES}${recipe_id}`).then(res => {
            setNotes(res.data)
        })
    }

    const executeDeleteRecipe = async () => {
        const { cover_image_url } = items[0]
        await deleteFromFB(cover_image_url,null)
        axios.post(RECIPES.DELETE_RECIPE,items).then(() => {
            props.history.push('/')
            
        })
    }

    return(
        <main className='recipe-box' >

            {currentUser != null && access.getAccess(currentUser.uid) === "ACCESS_GRANTED" ? <LongRow>
                <Button onClick={() => setIsAdmin(!isAdmin)} >Enter / Exit Admin View</Button>
                {/* <Button onClick={executeDeleteRecipe} >Delete Recipe</Button> */}
            </LongRow> : null}

            {items[0] != undefined ?

            <InstructionContainer
            items={items} ingredients={ingredients}
            instructions={instructions}
            notes={notes}
            isAdmin={isAdmin}
            grabIngredients={grabIngredients}
            grabInstructions={grabInstructions}
            grabNotes={grabNotes}
            getItems={getItems}
            />
            
            : null}

        </main>
    )
}

export default Recipe