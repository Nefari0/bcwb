import { async } from "@firebase/util";
import axios from "axios";
import { useState,useEffect } from "react";
import { InstructionList } from "./InstructionBody.styles";

export const InstructionBody = (props) => {
    const { instructions,ingredients,items,grabIngredients,grabInstructions } = props
    const defaultState = {
        content:'',
        step:0,
        recipe_id:items[0].recipe_id
    }
    const [ formFields,setFormFields ] = useState(defaultState)
    const { content,step,recipe_id } = formFields

    // -- Instruction End Points
    const putInstruction = '/api/instructions/add'
    const deleteInstruction = '/api/instructions/delete/'
    // -- Ingredient End Points
    const putIngredient = '/api/ingredient/new'
    const deleteIngredient = ''

    // -- FOR TESTING ONLY -- //
    const [ isAdmin,setIsAdmin ] = useState(true)
    // --------------------- //

    const postItem = async (e,endPoint,items,updatePage) => {
        e.preventDefault();

        // const { recipe_id } = items
        await axios.post(endPoint,items).then(res => {
            updatePage()
            alert('item send to database')
        })
        await setFormFields(defaultState)
    }

    const deleteItem = async (e,endPoint,items,updatePage) => {
        e.preventDefault()
        axios.delete(`${endPoint}${items}`).then(() => updatePage())
        // setFormFields('')
    }

    // -- Will be used to add / change cover image -- /
    const updateImage = () => {}

    // -- Input handler
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
      };

    const mappedIngredients = ingredients.map(el => {
        return <li key={el.ingredient_id} >{el.content}</li>
    })

    const mappedInstructions = instructions.map(el => {
        return <li key={el.instruction_id} >
            {!isAdmin ? el.content : null}
            {isAdmin ?
            <form>
                {/* -- Change step -- */}
                <input style={{width:'15px'}} type='number' value={el.step} />

                {/* -- Edit content -- */}
                <input type='text' value={el.content} />

                
                <button>update item</button>
                <button onClick={(e) => deleteItem(e,deleteInstruction,el.instruction_id,grabInstructions)} >
                    delete
                </button>
            </form> : null}</li>
    })
    
    return (
        <InstructionList>
            <ul>
                <li>Equiptment</li>
                <li>mixer</li>
                {isAdmin ? <form><input /><button>add equiptment</button></form> : null}
            </ul>

            <ul>
                <li className="first-li">Ingredients</li>
                {mappedIngredients}
                {isAdmin ? <form><input /><button>add Ingredient</button></form> : null}
            </ul>

            <ol>
                <li value={0}>instructions</li>
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
                    onClick={(e) =>postItem(e,putInstruction,formFields,grabInstructions)}
                    >
                        add Instruction
                    </button>

                </form> : null}
            </ol>
        </InstructionList>
        
    )
}