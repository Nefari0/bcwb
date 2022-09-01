import {InstructionBody }from "./Body/instructionbody.component"
import {InstructionMain} from "./instructions.styles"
import InstructionHead from './Head/instructionhead.component'

const InstructionContainer = (props) => {
    const { instructions,ingredients,items,grabInstructions,grabIngredients,getItems,isAdmin,notes,grabNotes } = props 

    return(
        <InstructionMain>
            <InstructionHead
            items={items}
            getItems={getItems}
            isAdmin={isAdmin}
            />

            <InstructionBody
            items={items}
            ingredients={ingredients}
            instructions={instructions}
            notes={notes}
            grabInstructions={grabInstructions}
            grabIngredients={grabIngredients}
            grabNotes={grabNotes}
            isAdmin={isAdmin}
            />

        </InstructionMain>

    )
}

export default InstructionContainer