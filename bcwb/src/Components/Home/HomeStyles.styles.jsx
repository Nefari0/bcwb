import styled from 'styled-components';
import { colors } from '../Styles/colors';
import { fonts } from '../Styles/fonts'

const { cursive } = fonts
const { darkText } = colors

export const HomePage = styled.main`
    min-width: 300px;
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    section {

        min-width: 300px;
        min-height: 50px;
        margin: auto;
        display:flex;
        flex-wrap:wrap;
        flex-direction:row;
        align-items: center;
        justify-content: space-around;
        
        @media (max-width:800px) {
            flex-wrap: wrap;
        }
`

export const SectionText = styled.em`
position:relative;
    width:99%;
    text-align:left;
    color:${darkText};
    border-bottom: solid 1px ${darkText};
    margin-left:10px;
    font-size:20px;
    ${cursive}
 `