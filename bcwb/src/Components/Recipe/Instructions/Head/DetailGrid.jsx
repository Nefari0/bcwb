import { Table,TableItem } from "./InstructionHead.styles"

export const DetailGrid = (props) => {

    const { formFields } = props
    const { category,hours,servings,minutes } = formFields

    const itemStyles ={ // Element specific styling
        borderRight:'1px solid #003300',
        fontWeight:'100'
    }

    const timeFormats = () => {
  
        const multiUnit = (input) => {
          return (input > 1 ? 's' : '')
        }
      
        const unitFormat = (input,string) => {
          return (input > 0 ? `${input} ${string}${multiUnit(input)} ` : '')
        }
      
        const returnVal = unitFormat(hours,'hour') + (hours > 0 && minutes > 0 ? 'and ' : ' ') + unitFormat(minutes,'minute')
      
        return (<p>{returnVal}</p>)
    }

    return(
        <>
          
            <Table>
                <TableItem style={itemStyles} >
                    <i>Bake time:</i>
                    {timeFormats()}

                </TableItem>

                <TableItem style={itemStyles} >
                    <i>Servings:</i>
                    <p>{servings}</p>
                </TableItem>

                <TableItem >
                    <i>Category:</i>
                    <p>{category}</p>
                </TableItem>
            </Table>

        </>
    )
}