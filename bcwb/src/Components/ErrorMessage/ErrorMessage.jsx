import { Error } from "../StyledComponents.styles";
import Button from "../Form/Button";

export const ErrorMessage = (props) => {

    const { error,setError } = props

    return (
        <Error>
            <h1>{error}</h1>
            <Button onClick={() => {setError(null)}} >ok</Button>
        </Error>
    )
}