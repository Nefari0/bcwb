import styled from 'styled-components'
import { colors } from '../Styles/colors'

const { baseColor,darkText,white } = colors

export const CoverContainer = styled.div`
    position:relative;
    height:700px;
    max-width:290px;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:hidden;
    margin:auto;
    margin-top:10px;

    h5,
    h3 {
        margin:5px;
    }

    img {
        opacity:.9;

        &:hover{
            opacity:1;
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
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
        margin:20px 0px 10px 0px;
        padding-bottom:8px;

        h5 {
            margin:auto;
            background-color: ${white};
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