import { PositionController,KeyStyling } from "./Photos.styles";

export const PositionPhoto = ({style,move,otherProps}) => {

    const ControlNob = (tag,direction,val) => {

        return(
        <KeyStyling onClick={(e) => move(e,val,direction)} style={{width:'100px',margin:'0px'}} >
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