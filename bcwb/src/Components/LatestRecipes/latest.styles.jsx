import styled, { css } from 'styled-components';
import { colors } from '../Styles/colors';
import { fonts } from '../Styles/fonts'
import { device } from '../Styles/queries';

const { tablet,desktopL,laptop,mobileM } = device
const { cursive } = fonts
const { darkText } = colors

// --- Screen Widths ---- /
const pxXl = css`width:1280px;`
const pxL = css`width:950px;`
const pxM = css`width:630px;`
const pxS = css`width:300px;`

// ---- Layouts ----- //
const xl = css`
    ${pxXl}
    display: grid;
    grid-template-columns: 320px 320px 320px 320px;
    row-gap: 10px;
`;

const l = css`
    ${pxL}
    display: grid;
    grid-template-columns: 320px 320px 320px;
    row-gap: 10px;
`;

const m = css`
    ${pxM}
    display:grid;
    grid-template-columns: 320px 320px;
    row-gap:10px;
`;

const s = css`
    ${pxS}
    display:flex;
    flex-direction:column;
`;


export const Latest = styled.main`

    min-height: 400px;
    margin: auto;
    margin-top:16px;
    display:flex;
    flex-direction:column;
    width:100%;
    // background-color:blue;

    header {
        
        margin:auto;
        position:relative;
        ${pxXl}
        @media${desktopL} {${pxL}}
        @media${laptop} {${pxM}}
        @media${tablet} {${pxS}}

        text-align:left;
        color:${darkText};
        overflow:hidden;
        display:flex;
        font-size:36px;
        ${cursive}

        @media ${tablet} {font-size:24px;}

        span {
            border-bottom: solid 1px ${darkText};
            min-width:90%;
            margin-left:20px;
            margin-bottom:20px;

            @media ${tablet} {
                margin-bottom:12px;
            }
        }
    }

    section {
        margin: auto;
        margin-top:32px;
        ${xl}
        @media${desktopL} {${l}}
        @media${laptop} {${m}}
        @media${tablet} {${s}}
    }
`;