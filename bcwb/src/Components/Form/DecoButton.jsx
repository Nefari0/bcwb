import { BaseButton,DecoButtonWrapperPrototype } from "./Button.styles";
import { Link } from 'react-router-dom'

export const DecoButton = ({label,clickFunc,customStyles,path}) => {
     
    return(
        <DecoButtonWrapperPrototype onClick={clickFunc} >

            {path ?
            <Link to={`${path}`} ><BaseButton style={customStyles}>{label}</BaseButton></Link>
        :
            <BaseButton style={customStyles} >{label}</BaseButton>
            }

        </DecoButtonWrapperPrototype>
    )
}