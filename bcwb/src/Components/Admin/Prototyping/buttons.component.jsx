import { BaseButton,DecoButtonWrapperPrototype } from "../../Form/Button.styles";
import {styles} from '../../Styles/customStyles'
import {
    colors,
    baseGradient,
    secondaryGradientJSX
 } from "../../Styles/colors";
import { DecoButton } from "../../Form/DecoButton";
import { AdminPrototype } from "./prototype.styles";

const {
    lightPaper,
    baseColor,
    secondaryColor,
    yellowPaper,
    darkText,
    white,
    } = colors

const { decoButton } = styles

export const ButtonsPrototype = () => {

    return(
        <AdminPrototype>

            <BaseButton style={{backgroundColor:secondaryColor}}>base button</BaseButton>

            <DecoButton
            label={'Composite 1'}
            customStyles={{
                // background:baseColor,
                // color:white
            }}
            />

            {/* <DecoButton
                label={'Composite 2'}
                path={null}
                customStyles={{backgroundColor:baseColor,color:white}}
            /> */}

            <DecoButton
                label={'Composite 2'}
                customStyles={{backgroundColor:secondaryColor}}
            />

            <DecoButton
                label={'Composite 3'}
                customStyles={{
                    background:yellowPaper,
                    color:darkText,
                }}
                    
            />
            


        </AdminPrototype>
    )
}