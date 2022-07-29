import styled, { css } from 'styled-components';

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
    width:350px;
    align-items:center;
}
`
