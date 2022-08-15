import styled from 'styled-components'
import { colors } from '../../Styles/colors'

const { baseColor } = colors

export const CoverContainer = styled.div`
position:relative;
    min-height:400px;
    width:300px;
    // background-color:blue;
    text-align:center;
    display:flex;
    flex-direction:column;

    img,
    h5,
    h3 {
        margin:5px;
    }

    img {
        
    }

    h3 {
        font-size:24px;
    }

    p {
        font-size:16px;
    }

    span { 
        border-bottom: solid 1px ${baseColor};
        width:40%;
        height:0px;
        position:relative;
        margin:auto;
        padding-bottom:6px;

        h5 {
            margin:auto;
            // position:absolute;
            // top:-0px;
            background-color:#fff;
            width:60px;
            font-size: 10px;
        }
    }
`