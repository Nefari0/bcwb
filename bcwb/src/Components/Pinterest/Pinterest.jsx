import { useEffect } from 'react'
import Button from '../Form/Button'
const url = 'https://www.pinterest.com/pin/203436108160231221/'

const Pinterest= () => {

    useEffect(() => {
        const script = document.createElement('script')

        script.async = true
        script.type = 'text/javascript'
        script['data-pin-build'] = 'doBuild'
        script.src = '//assets.pinterest.com/js/pinit.js'
        document.body.appendChild(script)
    },[])

    return(
        <>
            <a data-pin-do="embedPin" data-pin-build="doBuild" href={url}>
                <Button>pin</Button>
            </a>
        </>
    )
}

export default Pinterest