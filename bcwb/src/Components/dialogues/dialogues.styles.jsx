import styled, { css } from 'styled-components';
import { colors } from '../Styles/colors';
import { device } from '../Styles/queries'


const { mobileL } = device
const { baseColor,yellowPaper } = colors

export const Error = styled.div`
  position:fixed;
  top:40%;
  width:500px;
  margin:auto;
  background-color:${yellowPaper}
  color:${baseColor}
  z-index:100000;
  border-radius:5px;
  padding:10px;
  display:flex;
  flex-direction:column;
  box-shadow: 0px 5px 20px -7px #000000;

  @media ${mobileL} {
    top:20%;
    width:295px;
  }
`;