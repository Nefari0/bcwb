import styled from 'styled-components'
import { colors } from '../../Styles/colors'

const { darkText } = colors
 
export const RecipeHeader = styled.header`
    margin:auto;
    padding-bottom:20px;
    margin-bottom:10px;
    min-width:100%;
    min-height:100px;

    display:flex;
    flex-direction: column;
    align-items: center;

    section {
        margin:12px 0px 12px 0px ;
        max-width:550px;
        display:flex;
        justify-content:center;
        text-align:center;

        strong {
            margin-right:16px;
            color: ${darkText};
            font-size:12px;
            font-weight:600;
            letter-spacing:1px;
        }

        i {
            width:12px;
            margin-right:4px;
            font-size:10px;
            color: ${darkText};
            letter-spacing:0px;
        }
    }

    h1 {
        margin:auto;
        color:${darkText};
        text-align:center;
        font-weight:700;
        font-size:30px;
        text-transform:uppercase;
        letter-spacing:4px;
    }
`