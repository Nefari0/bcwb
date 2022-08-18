import styled from 'styled-components'
import { fonts } from '../Styles/fonts'

const { cursive } = fonts

export const SmallItem = styled.div`
    margin:12px;
    width:200px;
    height:250px;

    h5 {
        font-size:12px;
        text-align:center;
        ${cursive}
        letter-spacing:1px;
        margin-top:20px
    }
`

export const PhotoFrame = styled.div`
    position:relative;
    width:200px;
    height:200px;
    overflow:hidden;
`