import { PositionController,KeyStyling } from "./Photos.styles";

export const PositionPhoto = ({move}) => {

    const ControlNob = (tag,params,val) => {

        return(
        <KeyStyling onClick={(e) => move(e,val,params)}>
            {tag}
        </KeyStyling>
        )   
    }

    return(
        <PositionController>

            {ControlNob('left','x',-10)}
            {ControlNob('right','x',10)}
            {ControlNob('down','y',10)}
            {ControlNob('up','y',-10)}
            {ControlNob('+','z',10)}
            {ControlNob('-','z',-10)}

        </PositionController>
    )
}