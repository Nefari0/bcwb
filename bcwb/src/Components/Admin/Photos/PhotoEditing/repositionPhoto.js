    // --- Adjust styling/position of photo - Utilized as props in PositionPhoto.jsx --- //
    // --- Currently utilized in Recipes/Instructions/Head/InstructionsHead.jsx --- //
    export const repositionPhoto = (e,value,direction,photoPositions,setPhotoPositions) => {
        e.preventDefault()
        switch (direction) {
            case 'x':
                var newValue = photoPositions.x + value
                setPhotoPositions({...photoPositions,['x']:newValue,})
                break;

            case 'y':
                var newValue = photoPositions.y + value
                setPhotoPositions({...photoPositions,['y']:newValue})
                break;
            
            case 'z':
                var newValue = photoPositions.z + value
                setPhotoPositions({...photoPositions, ['z']:newValue})
                break;

            case 'angle':
                var newValue = photoPositions.angle + value
                setPhotoPositions({...photoPositions, ['angle']:newValue})
                break;
        }
        return
    }