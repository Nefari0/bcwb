import { useEffect } from 'react'
import { BaseButton } from '../Form/Button.styles'
const url = 'https://www.pinterest.com/pin/203436108160231221/'

const Pinterest= (props) => {

    const defaultStyle = {
        display:'flex',
        flexDirection:'column',
        width:'100%',
        alignItems:'center'
}

    useEffect(() => {
        const script = document.createElement('script')

        script.async = true
        script.type = 'text/javascript'
        script['data-pin-build'] = 'doBuild'
        script.src = '//assets.pinterest.com/js/pinit.js'
        document.body.appendChild(script)
    },[])

    return(
        
            <a data-pin-do="embedPin" data-pin-build="doBuild" href={url} style={defaultStyle} >
                <BaseButton>pin</BaseButton>
            </a>
      
    )
}

export default Pinterest