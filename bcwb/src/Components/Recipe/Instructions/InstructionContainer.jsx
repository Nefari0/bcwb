import {InstructionBody }from "./Body/InstructionBody.component"
import {InstructionMain} from "./Instructions.styles"
import { InstructionHead } from './Head/InstructionHead.component'

const InstructionContainer = (props) => {
    const { instructions,ingredients,items } = props 

    return(
        <InstructionMain>
            <InstructionHead items={items} />
            <InstructionBody items={items} ingredients={ingredients} instructions={instructions} />
        </InstructionMain>

    )
}

export default InstructionContainer