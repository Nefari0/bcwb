import styled, { css } from 'styled-components';
import { device } from '../../Styles/queries';
const { mobileM,mobileS } = device

export const InstructionMain = styled.main`
    position:relative;
    margin: auto;
    min-height:350px;
    width:550px;
    padding-right:20px;
    padding-left:20px;
    background-color:#EFFDEC;
    border: solid 1.5px #003300;
    display:flex;
    flex-direction:column;
    align-items:baseline;
    text-align:center;
    overflow:hidden;
    @media (max-width:550px) {
        max-width:350px;
        align-items:center;
    }
    @media ${mobileM}{
        width:300px;
        padding-left:10px;
        // padding-right:10px;
    }
    @media ${mobileS} {
        padding:0px;
    }
`
