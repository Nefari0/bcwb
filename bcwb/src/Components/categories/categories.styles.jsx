import styled from 'styled-components'
import { colors } from '../Styles/colors'
import { fonts } from '../Styles/fonts'
import { device } from '../Styles/queries'

const { xTablet,tablet } = device
const { darkText } = colors
const { cursive } = fonts

export const CategoriesContainer = styled.main`
    min-width: 300px;
    max-width: 1000px;
    min-height: 400px;
    margin: auto;

    header {
        position:relative;
        width:99%;
        text-align:left;
        color:${darkText};
        border-bottom: solid 1px ${darkText};
        margin-left:12px;
        font-size:36px;
        margin-bottom:16px;
        ${cursive}

        @media ${xTablet} {
            border-bottom: solid 0px;
        }
    }

    section {
        padding-left:15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
    }
`