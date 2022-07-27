import { Table,TableItem,SmallText,KeyWord } from "./InstructionHead.styles"
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
                    <KeyWord>Bake time:</KeyWord>
                    <SmallText>
                        {prep_time} Hours
                    </SmallText>
                </TableItem>

                <TableItem style={itemStyles} >
                    <KeyWord>Servings:</KeyWord>
                    <SmallText>{servings}</SmallText>
                </TableItem>

                <TableItem >
                    <KeyWord>Category:</KeyWord>
                    <SmallText>{category}</SmallText>
                </TableItem>
            </Table>

        </>
    )
}