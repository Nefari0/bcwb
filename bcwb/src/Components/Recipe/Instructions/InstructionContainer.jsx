import {InstructionBody }from "./Body/InstructionBody.component"
import {InstructionMain} from "./Instructions.styles"
import InstructionHead from './Head/InstructionHead.component'

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