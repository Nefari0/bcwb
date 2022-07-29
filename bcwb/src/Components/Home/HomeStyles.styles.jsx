import styled from 'styled-components';
import { colors } from '../Styles/colors';

const { darkText } = colors

export const SectionText = styled.em`
    text-align:left;
    color:${darkText}
    border-bottom: solid 1px ${darkText}
    margin-left:10px;
    font-size:20px;
    font-family: 'Cedarville Cursive', cursive;
 `