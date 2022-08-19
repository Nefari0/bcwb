import styled from 'styled-components'
import { colors } from '../../Styles/colors'

const { baseColor,darkText,lightPaper } = colors

export const CoverContainer = styled.div`
    position:relative;
    height:700px;
    max-width:290px;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color: ${lightPaper};
    border: solid 1px ${baseColor};
    margin:auto;
    overflow:hidden;
    padding:5px;
    box-shadow: 0 4px 3px 0  rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);

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
        height:85px;
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
            width:60px;
            font-size: 12px;
            text-transform:uppercase;
        }
    }

    strong {
        color: ${darkText};
        padding:0px;
        position:relative;

        svg {
            max-width:14px;
            color:${baseColor};
            position:absolute;
            left:-18px;
            bottom:1px;
        }
    }

    button {
        width:50%;
    }
`