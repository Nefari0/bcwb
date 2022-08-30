import styled from 'styled-components';
import { colors } from '../../Styles/colors';

const { baseColor,yellowPaper } = colors

export const CatView = styled.section`
    position:relative;
    min-height:100vh;
    margin: auto;
    display:flex;
    flex-wrap:wrap;
    border-top: solid 1px ${baseColor};

    button {
        font-style:italic;
        top:10px;
        left:10px;
    }
`

export const CreateCat = styled.div`
    position:absolute;
    margin:auto;
    max-width:290px;
    padding:2px;
    background-color:${yellowPaper};
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);
    z-index:1001;
    positon:relative;
    display:flex;
    flex-direction:column;
    min-height:300px;

    input {
        width:90%;
        margin:auto;
    }
`