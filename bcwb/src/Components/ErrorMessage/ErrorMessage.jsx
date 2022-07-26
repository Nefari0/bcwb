import { Error } from "../StyledComponents.styles";
import Button from "../Form/Button";

export const ErrorMessage = (props) => {

    const { error,setError } = props

    return (
        <Error>
        <p style={{color:'#fff'}}>{error}</p>
            <Button onClick={() => {setError(null)}} >ok</Button>
        </Error>
    )
}