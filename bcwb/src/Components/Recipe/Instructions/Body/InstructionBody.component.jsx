
import axios from "axios";
import { useState } from "react";
import Instruction from "./Instruction";
import Ingredient from "./Ingredient";
import { RECIPES } from "../../../../endpoints";

export const InstructionBody = (props) => {
    const { instructions,ingredients,items,grabIngredients,grabInstructions,isAdmin } = props
    const defaultState = {
        content:'',
        step:0,
        recipe_id:items[0].recipe_id
    }
    const [ formFields,setFormFields ] = useState(defaultState)
    const { content,step } = formFields

    const postItem = async (e,endPoint,items,updatePage) => {
        e.preventDefault();

        await axios.post(endPoint,items).then(res => {
            updatePage()
        })
        await setFormFields(defaultState)
    }

    const putItem = (e,endPoint,items,updatePage) => {
        e.preventDefault()
        axios.put(`${endPoint}`,items).then(() => updatePage)
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
                    isAdmin={isAdmin}
                    content={el.content}
                    deleteItem={deleteItem}
                    putItem={putItem}
                    DELETE_INSTRUCTION={RECIPES.DELETE_INSTRUCTION} // Delete item 
                    PUT_INSTRUCTION={RECIPES.PUT_INSTRUCTION} // Edit item
                    grabInstructions={grabInstructions}
                />
    })
    
    return (
        <>

            <ul>
                <li className="first-li">Ingredients<span></span></li>
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
                <li value={0}>instructions<span></span></li>
                
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
        </>
        
    )
}