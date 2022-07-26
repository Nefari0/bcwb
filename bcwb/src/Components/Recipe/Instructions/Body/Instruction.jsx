import { useState } from 'react';

const Instruction = (props) => {
    const { isAdmin,instruction_id,recipe_id,step,content,grabInstructions,deleteItem,DELETE_INSTRUCTION,PUT_INSTRUCTION,putItem  } = props

    const [ formFields,setFormFields ] = useState({
        content:content,
        step:step,
        instruction_id:instruction_id,
        recipe_id:recipe_id,
    })

    // -- Input handler
    const handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
          };

    return(
    <li key={instruction_id} >
        {!isAdmin ? content : null}
        {isAdmin ?
        <form>
            {/* -- Change step -- */}
            <input style={{width:'35px'}} type='number'  name="step" onChange={(e) => handleChange(e)} value={formFields.step} />

            {/* -- Edit content -- */}
            <input type='text' name="content" onChange={(e) => handleChange(e)} value={formFields.content} />

            
            <button onClick={(e) => putItem(e,PUT_INSTRUCTION,formFields,grabInstructions)} >
                update item
            </button>
            
            <button onClick={(e) => deleteItem(e,DELETE_INSTRUCTION,instruction_id,grabInstructions)} >
                delete
            </button>
    </form> : null}</li>
    )
}

export default Instruction