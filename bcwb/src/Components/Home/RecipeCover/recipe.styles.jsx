import styled from 'styled-components'
import { colors } from '../../Styles/colors'

const { baseColor,darkText,lightPaper } = colors

export const CoverContainer = styled.div`
    position:relative;
    min-height:400px;
    min-width:280px;
    max-width:300px;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color: ${lightPaper};
    border: solid 1px ${baseColor};

    img,
    h5,
    h3 {
        margin:5px;
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
        margin:20px 0px 10px 0px;
        padding-bottom:8px;

        h5 {
            margin:auto;
            background-color: ${lightPaper};
            padding:0px 5px 0px 5px;
            width:60px;
            font-size: 12px;
            text-transform:uppercase;
        }
    }

    strong {
        color: ${darkText};
        min-width:10px;
        margin:10px 0px 0px 0px;
        padding-left:0px;
        padding-bottom:10px;
    }

    button {
        width:50%;
    }
`