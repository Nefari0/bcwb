import {InstructionBody }from "./Body/InstructionBody.component"
import {InstructionMain} from "./Instructions.styles"
import { InstructionHead } from './Head/InstructionHead.component'

const InstructionContainer = (props) => {
    const { instructions,ingredients,items,grabInstructions,grabIngredients,getItems } = props 

    return(
        <InstructionMain>
            <InstructionHead
            items={items}
            getItems={getItems}
            />

            <InstructionBody
            items={items}
            ingredients={ingredients}
            instructions={instructions}
            grabInstructions={grabInstructions}
            grabIngredients={grabIngredients}
            />

        </InstructionMain>

    )
}

export default InstructionContainer