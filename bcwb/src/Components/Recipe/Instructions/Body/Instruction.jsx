import { useState } from 'react';
import './Instructions.scss'

const Instruction = (props) => {
    const { recipe,isAdmin,instruction_id,step,content,grabInstructions,deleteItem,deleteInstructionEndPoint,putInstructionEndPoint,putItem  } = props

    const [ formFields,setFormFields ] = useState({
        content:content,
        step:step,
        instruction_id:instruction_id
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
            <input style={{width:'15px'}} type='number'  name="step" onChange={(e) => handleChange(e)} value={formFields.step} />

            {/* -- Edit content -- */}
            <input type='text' name="content" onChange={(e) => handleChange(e)} value={formFields.content} />

            
            <button onClick={(e) => putItem(e,putInstructionEndPoint,formFields,grabInstructions)} >update item</button>
            <button onClick={(e) => deleteItem(e,deleteInstructionEndPoint,instruction_id,grabInstructions)} >
                delete
            </button>
    </form> : null}</li>
    )
}

export default Instruction