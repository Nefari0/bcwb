
import axios from "axios";
import { useState } from "react";
import Instruction from "./instruction.component";
import Ingredient from "./ingredient.component";
import { Note } from "./Note";
import { RECIPES } from "../../../../endpoints";
import { ErrorMessage } from "../../../Dialogues/errorMessage.component";

export const InstructionBody = (props) => {
    const { instructions,ingredients,items,grabIngredients,grabInstructions,isAdmin,notes,grabNotes } = props
    const defaultState = {
        content:'',
        note_body:'',
        step:0,
        recipe_id:items[0].recipe_id
    }
    const [ formFields,setFormFields ] = useState(defaultState)
    const { content,step,recipe_id,note_body } = formFields
    const [ error,setError ] = useState(null)

    const postItem = async (e,endPoint,items,updatePage) => {
        e.preventDefault();

        await axios.post(endPoint,items)
        .then(res => {
            updatePage()
            setFormFields(defaultState)
        })
        .catch(err => {
            return setError(err.response.data)
        })
    }

    const putItem = (e,endPoint,items,updatePage) => {
        e.preventDefault()
        axios.put(`${endPoint}`,items)
        .then(() => updatePage)
        .catch(err => setError(err.response.data))
    }

    const deleteItem = async (e,endPoint,items,updatePage) => {
        e.preventDefault()
        axios.delete(`${endPoint}${items}`).then(() => updatePage())
    }

    // -- Input handler
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
      };


    const mappedIngredients = ingredients.map(el => {
        return <Ingredient
                    key={el.ingredient_id}
                    ingredient_id={el.ingredient_id}
                    content={el.content}
                    isAdmin={isAdmin}
                    deleteItem={deleteItem}
                    putItem={putItem}
                    DELETE_INGREDIENT={RECIPES.DELETE_INGREDIENT} // Delete item 
                    PUT_INGREDIENT={RECIPES.PUT_INGREDIENT} // Edit item
                    grabIngredients={grabIngredients}
                />
    })

    const mappedInstructions = instructions.map(el => {
        return <Instruction
                    key={el.instruction_id}
                    instruction_id={el.instruction_id}
                    step={el.step}
                    recipe_id={recipe_id}
                    isAdmin={isAdmin}
                    content={el.content}
                    deleteItem={deleteItem}
                    putItem={putItem}
                    DELETE_INSTRUCTION={RECIPES.DELETE_INSTRUCTION} // Delete item 
                    PUT_INSTRUCTION={RECIPES.PUT_INSTRUCTION} // Edit item
                    grabInstructions={grabInstructions}
                />
    })

    const mappedNotes = notes.map(el => {
        return <Note key={el.note_id} note_id={el.note_id} note_body={el.note_body} putItem={putItem} deleteItem={deleteItem} grabNotes={grabNotes} isAdmin={isAdmin} />
    })
    
    return (
        <>
           {error === null ? null :<ErrorMessage error={error} setError={setError}/>}
           
            <ul>
                {ingredients.length < 1 ? null : <li className="first-li">Ingredients<span></span></li>}
                {mappedIngredients}
                {isAdmin ?
                <form>
                    <input
                    type="text"
                    name="content"
                    onChange={handleChange}
                    value={content}
                    />
                    <button onClick={(e) => {postItem(e,RECIPES.POST_INGREDIENT,formFields,grabIngredients)}} >add Ingredient</button>
                </form> : null}
            </ul>

            <ol>
                {instructions.length < 1 ? null :  <li value={0}>instructions<span></span></li>}
                
                {mappedInstructions}

                {isAdmin ?
                <form>

                    <input
                    type="number"
                    name="step"
                    onChange={handleChange}
                    value={step}
                    />

                    <input
                    type="text"
                    placeholder="enter text"
                    name="content"
                    onChange={handleChange}
                    value={content}
                    />

                    <button
                    onClick={(e) =>postItem(e,RECIPES.POST_INSTRUCTION,formFields,grabInstructions)}
                    >
                        add Instruction
                    </button>

                </form> : null}
            </ol>

            <ul>
                {notes.length < 1 ? null : <li>notes<span></span></li>}
                {mappedNotes}
                {isAdmin ? <form>
                    <input
                            type="text"
                            placeholder="enter text"
                            name="note_body"
                            onChange={handleChange}
                            value={note_body}
                    />

                    <button onClick={(e) => postItem(e,RECIPES.CREATE_NOTE,formFields,grabNotes)}>
                        add note
                    </button>
                </form> : null}
            </ul>
        </>
        
    )
}