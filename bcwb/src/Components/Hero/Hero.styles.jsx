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

export const NavBar = styled.nav`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  min-width:100%;
  overflow:hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
  margin-bottom:20px;

  button {
    margin:-30px
    @media ${tablet} {
      -webkit-transform: scale(.6);
      -ms-transform: scale(.6);
      transform: scale(.6);
      
    }
  }

  i,
  span {
    margin:50px;
    @media ${mobileL} {
      display:none;
    }
  }

  i {
    margin:75px;
    position:absolute;
    color: ${baseColor};
    width:50px;
    top:60px;
    right:200px;
    font-size:24px;
    text-decoration: underline;

    @media ${tablet} {
      font-size:16px;
      top:-35px;
      right:125px;
    }
  }

  @media ${tablet} {
    height:100px;
  }

  @media ${mobileM} {
    height:100px;
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
  background-color:blue;
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

export const LogoBox = styled.img`
  max-width:500px;
  overflow:none;
  margin:none;
  @media ${tablet}{
    max-width:300px;
  }
`