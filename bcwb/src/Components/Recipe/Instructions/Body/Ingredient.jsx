import { useState } from "react";

const Ingredient = ({content,ingredient_id,isAdmin,putItem,grabIngredients,deleteItem,DELETE_INGREDIENT,PUT_INGREDIENT }) => {

    const [ formFields,setFormFields ] = useState({
        content:content,
        ingredient_id:ingredient_id
    })

    // -- Input handler
    const handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target;
        // console.log('hit handle change',name,value)
        setFormFields({ ...formFields, [name]: value });
            };
    
    return(
        <li key={ingredient_id} >
        {!isAdmin ? content : null}
        {isAdmin ?
        <form>
            {/* -- Change step -- */}
            {/* <input style={{width:'15px'}} type='number'  name="step" onChange={(e) => handleChange(e)} value={formFields.step} /> */}

            {/* -- Edit content -- */}
            <input type='text' name="content" onChange={(e) => handleChange(e)} value={formFields.content} />

            
            <button onClick={(e) => putItem(e,PUT_INGREDIENT,formFields,grabIngredients)} >update item</button>
            <button onClick={(e) => deleteItem(e,DELETE_INGREDIENT,ingredient_id,grabIngredients)} >
                delete
            </button>
    </form> : null}</li>
    )
}

export default Ingredient