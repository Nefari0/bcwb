import { PositionController,KeyStyling } from "./editing.styles";
import { arrow,plus,minus,rotateL,rotateR } from "../../../SVG";

export const PositionPhoto = ({styles,move,otherProps}) => {

    const controlNob = (tag,direction,val,coordinates) => {

        const styles = {
            left:`${coordinates[0]}px`, // X
            top:`${coordinates[1]}px`, // Y
            transform:`rotate(${coordinates[2]}deg)`,
        }

        return(
            <KeyStyling onClick={(e) => move(e,val,direction)} style={styles} >
                {tag}
            </KeyStyling>
            )   
    }

    return(
        <PositionController style={styles} >

            {/* --- Zoom In --- */}
            {controlNob(plus(),'z',10,[0,0,0])}

            {/* --- Up --- */}
            {controlNob(arrow(),'y',-10,[0,0,180])}

            {/* --- Zoom Out --- */}
            {controlNob(minus(),'z',-10,[0,0,0])}

            {/* --- Left --- */}
            {controlNob(arrow(),'x',-10,[0,0,90])}

            {/* --- Down --- */}
            {controlNob(arrow(),'y',10,[0,0,0])}

            {/* --- Right --- */}
            {controlNob(arrow(),'x',10,[0,0,-90])}

            {/* --- Rotate Left --- */}
            {controlNob(rotateL(),'angle',-10,[0,0,0])}

            {/* --- Reset --- */}
            {controlNob('reset','',10,[0,0,0])}

            {/* --- Rotate Right --- */}
            {controlNob(rotateR(),'angle',10,[0,0,0])}

        </PositionController>
    )
}