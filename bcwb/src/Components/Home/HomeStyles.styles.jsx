import styled from 'styled-components';
import { colors } from '../Styles/colors';
import { fonts } from '../Styles/fonts'

const { cursive } = fonts
const { darkText } = colors

export const HomePage = styled.main`
    min-width:1300px;
    max-width: 1300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    section {
        min-width: 1300px;
        min-height: 50px;
        display:flex;
        flex-direction:row;
        justify-content: space-around;
        padding:20px 0px 20px 0px;
        flex-wrap:wrap;
        
`

export const SectionText = styled.em`
position:relative;
    width:99%;
    text-align:left;
    color:${darkText};
    border-bottom: solid 1px ${darkText};
    margin-left:10px;
    margin-bottom:24px;
    font-size:20px;
    ${cursive}
 `