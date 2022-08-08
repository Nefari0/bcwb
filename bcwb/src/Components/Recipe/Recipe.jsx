import './Recipe.scss'
import { useState,useEffect,useContext } from 'react'
import { UserContext } from '../Context/user.context'
import axios from 'axios'
import InstructionContainer from './Instructions/InstructionContainer'
import { BaseButton } from '../Form/Button.styles'
import { LongRow } from '../StyledComponents.styles'
import { RECIPES } from '../../endpoints'
import { deleteFromFB } from '../Admin/Photos/deleteFromFB'
import access from '../../access'
import Confirmation from '../dialogues/confirmation.component'
import { ErrorMessage } from '../dialogues/errorMessage.component'

const Recipe = (props) => {
    const { recipe_id } = props.match.params
    const [ items,setItems ] = useState([])
    const [ instructions,setInstructions ] = useState([]) 
    const [ ingredients,setIngredients ] = useState([])
    const [ notes,setNotes ] = useState([])

    const confirmDeleteMessage = 'Are you sure you want to permanently delete this recipe?'
    const [ confirmDelete,setConfirmDelete ] = useState(null)

    const { currentUser } = useContext(UserContext)
    
    // ******** Editing recipe ********** //
    const [ isAdmin,setIsAdmin ] = useState(false)

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
        await axios.post(RECIPES.DELETE_RECIPE,items[0]).then(() => {
            props.history.push('/')
            
        })
    }

    return(
        <main className='recipe-box' >

            {confirmDelete ? <Confirmation closeMessage={setConfirmDelete} message={confirmDeleteMessage} functionToExecute={executeDeleteRecipe} /> : null}
            {/* <ErrorMessage /> */}

            {currentUser != null && access.getAccess(currentUser.uid) === "ACCESS_GRANTED" ? <LongRow>
                <BaseButton onClick={() => setIsAdmin(!isAdmin)} >{isAdmin ? 'exit edit mode' : 'enter edit mode' }</BaseButton>
                <BaseButton onClick={() => setConfirmDelete(confirmDeleteMessage)} >Delete Recipe</BaseButton>
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