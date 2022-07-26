import { useState } from "react";
import { RECIPES } from "../../../../endpoints";

export const Note = (props) => {

    const {note_body,note_id,isAdmin,putItem,deleteItem,grabNotes} = props

    const [ formFields,setFormFields ] = useState({
        note_body:note_body,
        note_id:note_id
    })

    const handleChange = (event) => {
        event.preventDefault()
        const { name,value } = event.target
        console.log('hit handle change',name)
        setFormFields({ ...formFields, [name]:value})
    }

    return(
        <li>
            {!isAdmin ? note_body : null}
            {isAdmin ?

            <form>

                <input type='text' name="note_body" onChange={(e) => handleChange(e)} value={formFields.note_body} />

                <button onClick={(e) => putItem(e,RECIPES.PUT_NOTE,formFields,grabNotes)} >
                    update item
                </button>

                <button onClick={(e) => deleteItem(e,RECIPES.DELETE_NOTE,note_id,grabNotes)} >
                    delete
                </button>

            </form>

            :null}
        </li>
    )
}