import { Error } from "./dialogues.styles";
import { BaseButton } from "../Form/Button.styles";

const Confirmation = (props) => {

    const { functionToExecute,closeMessage,message,url } = props

    const selectionHandler = (params) => {
        switch (params) {
            case 'yes':
                functionToExecute(url);
                break
            case 'no':
                closeMessage(null);
                break
            default:
                return                
        }

    }

    return (
        <Error>
            <p>{message}</p>
            <BaseButton onClick={() => selectionHandler('yes')} >yes</BaseButton>
            <BaseButton onClick={() => selectionHandler('no')}>no</BaseButton>
        </Error>
    )
}

export default Confirmation