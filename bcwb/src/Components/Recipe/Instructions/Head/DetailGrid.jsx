import { Table,TableItem,SmallText } from "./InstructionHead.styles"
import FormInput from "../../../Form/FormInput"

export const DetailGrid = (props) => {

    const { isAdmin,formFields,handleChange } = props
    const { category,prep_time,servings } = formFields

    const itemStyles ={ // Element specific styling
        borderRight:'1px solid #003300',
        fontWeight:'100'
    }

    return(
        <>
          
            <Table>
                <TableItem style={itemStyles} >
                    <i>Bake time:</i>
                    <SmallText>
                        {prep_time} Hours
                    </SmallText>
                </TableItem>

                <TableItem style={itemStyles} >
                    <i>Servings:</i>
                    <SmallText>{servings}</SmallText>
                </TableItem>

                <TableItem >
                    <i>Category:</i>
                    <SmallText>{category}</SmallText>
                </TableItem>
            </Table>

        </>
    )
}