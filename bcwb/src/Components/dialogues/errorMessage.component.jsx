import { Error } from "./dialogues.styles";
import { BaseButton } from "../Form/Button.styles";

export const ErrorMessage = (props) => {

    const { error,setError } = props

    return (
        <Error>
        <p>{error}</p>
            <BaseButton onClick={() => {setError(null)}} >ok</BaseButton>
        </Error>
    )
}