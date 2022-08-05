import { PositionController,KeyStyling } from "./Photos.styles";

export const PositionPhoto = ({style,move}) => {

    const ControlNob = (tag,params,val) => {

        return(
        <KeyStyling onClick={(e) => move(e,val,params)} style={{width:'100px',margin:'0px'}} >
            {tag}
        </KeyStyling>
        )   
    }

    return(
        <PositionController style={style} >

            {ControlNob('left','x',-10)}
            {ControlNob('right','x',10)}
            {ControlNob('down','y',10)}
            {ControlNob('up','y',-10)}
            {ControlNob('+','z',10)}
            {ControlNob('-','z',-10)}

        </PositionController>
    )
}