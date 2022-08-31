import styled, { css } from 'styled-components';
import { colors } from '../Styles/colors';
import { device } from '../Styles/queries';

const { tablet,mobileM,mobileL } = device
const { baseColor,white } = colors


const menuClosed = css`
height: 0px;
width: 0px;
transition: 300ms ease all;
`
const imagePixels = 340

export const HeroBar = styled.nav`
  list-style-type: none;
  display: flex;
  justify-content:center;
  align-items: center;
  height: 200px;

  min-width:100%;
  overflow:hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
  margin-bottom:20px;

  a {
    max-width:${imagePixels}px;
    height:auto;
  }

  @media ${tablet} {
    height:150px;
    a {width:${imagePixels/2};}
  }
`

export const NavLink = styled.a`
  font-size:36px;
  font-style:italic;
  z-index: 4;
  color:${baseColor};
`
export const DesktopMenu = styled.div`
  width:100%;
  display:flex;
  justify-content:space-around;
  @media (max-width:1250px) { display:none; }
`

export const MobileMenu = styled.div`
  opacity:.5;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 300px;
  width: 300px;
  transition: 300ms ease all;
  z-index: 3;
  ${( {isMenuClosed } ) => isMenuClosed && menuClosed}
`