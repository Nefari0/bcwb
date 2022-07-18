import { async } from "@firebase/util";
import axios from "axios";
import { useState,useEffect } from "react";
import { InstructionList } from "./InstructionBody.styles";
import Instruction from "./Instruction";
import Ingredient from "./Ingredient";

export const InstructionBody = (props) => {
    const { instructions,ingredients,items,grabIngredients,grabInstructions } = props
    const defaultState = {
        content:'',
        step:0,
        recipe_id:items[0].recipe_id
    }
    const [ formFields,setFormFields ] = useState(defaultState)
    const { content,step,recipe_id } = formFields

    // -- Instruction End Points -- //
    const postInstructionEndPoint = '/api/instructions/add'
    const deleteInstructionEndPoint = '/api/instructions/delete/'
    const putInstructionEndPoint = '/api/instructions/put'
    // -- Ingredient End Points -- //
    const POST_INGREDIENT = '/api/ingredient/new'
    const PUT_INGREDIENT= '/api/ingredient/put'
    const DELETE_INGREDIENT = '/api/ingredient/delete/'

    // -- FOR TESTING ONLY -- //
    const [ isAdmin,setIsAdmin ] = useState(true)
    // --------------------- //

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
        // setFormFields('')
    }

    // -- Will be used to add / change cover image -- /
    const updateImage = () => {}

    // -- Input handler
    const handleChange = (event) => {
        console.log('hit handle change',event)
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
      };


    // ************** MOVING THIS ITEM TO EXTERNAL CONPONENT ********************* //
    const mappedIngredients = ingredients.map(el => {
        // return <li key={el.ingredient_id} >{el.content}</li>
        return <Ingredient
        key={el.ingredient_id}
        ingredient_id={el.ingredient_id}
        content={el.content}
        isAdmin={isAdmin}
        deleteItem={deleteItem}
        putItem={putItem}
        DELETE_INGREDIENT={DELETE_INGREDIENT} // Delete item 
        PUT_INGREDIENT={PUT_INGREDIENT} // Edit item
        grabIngredients={grabIngredients}
         />
    })
    // ************* phasing out above code *****************//

    // ************** MOVING THIS ITEM TO EXTERNAL CONPONENT ********************* //
    // const mappedInstructions_ = instructions.map(el => {
    //     return <li key={el.instruction_id} >
    //         {!isAdmin ? el.content : null}
    //         {isAdmin ?
    //         <form>
             
    //             <input style={{width:'15px'}} type='number' value={el.step} name="step" onChange={(e) => handleChange(e)} />

    //             <input type='text' value={el.content} name="content" onChange={handleChange} />

                
    //             <button>update item</button>
    //             <button onClick={(e) => deleteItem(e,deleteInstructionEndPoint,el.instruction_id,grabInstructions)} >
    //                 delete
    //             </button>
    //         </form> : null}</li>
    // })
    // ************* phasing out above code *****************//

    const mappedInstructions = instructions.map(el => {
        return <Instruction
            key={el.instruction_id}
            instruction_id={el.instruction_id}
            step={el.step}
            isAdmin={isAdmin}
            content={el.content}
            deleteItem={deleteItem}
            putItem={putItem}
            deleteInstructionEndPoint={deleteInstructionEndPoint} // Delete item 
            putInstructionEndPoint={putInstructionEndPoint} // Edit item
            grabInstructions={grabInstructions}
        />
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
                {isAdmin ?
                <form>
                    <input
                    type="text"
                    name="content"
                    onChange={handleChange}
                    value={content}
                    />
                    <button onClick={(e) => {postItem(e,POST_INGREDIENT,formFields,grabIngredients)}} >add Ingredient</button>
                </form> : null}
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
                    onClick={(e) =>postItem(e,postInstructionEndPoint,formFields,grabInstructions)}
                    >
                        add Instruction
                    </button>

                </form> : null}
            </ol>
        </InstructionList>
        
    )
}