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
        font-size:24px;
        top:10px;
        left:10px;
    }
`

export const CreateCat = styled.div`
    position:absolute;
    max-width:290px;
    background-color:${yellowPaper};
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);
    z-index:1001;
    positon:relative;
    display:flex;
    flex-direction:column;
    min-height:300px;

    button {
        margin:0px 0px 5px 15px;
        width:90%;
    }

    input {
        width:90%;
        margin:auto;
    }
`