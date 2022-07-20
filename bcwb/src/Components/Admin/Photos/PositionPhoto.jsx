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

            {ControlNob('left','left',-10)}
            {ControlNob('right','left',10)}
            {ControlNob('down','top',10)}
            {ControlNob('up','top',-10)}
            {ControlNob('+','zoom',10)}
            {ControlNob('-','zoom',-10)}

        </PositionController>
    )
}