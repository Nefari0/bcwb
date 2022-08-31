import styled, { css } from 'styled-components';
import { SpinnerContainer } from '../Spinner/spinner.styles';
import { colors, baseGradient } from '../Styles/colors';
import { fonts } from '../Styles/fonts';
import { device } from '../Styles/queries';
import { Link } from 'react-router-dom'

const { tablet,mobileL } =device
const { cursive } = fonts
const { baseColor,white,darkText,lightPaper,secondaryColor } = colors

// --- BaseButton --- //
export const BaseButtonCSS = css`
min-width: 165px;
margin: 0px 0px 16px 5px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 25px 0 25px;
font-size: 16px;
background-color: ${baseColor};
// background: linear-gradient(0turn,${baseColor},${secondaryColor});
overflow:hidden;

color: ${white};
text-transform: capitalize;
${cursive}
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: 300ms ease all;

&:hover {
  background: white;
  color: black;
  border: 1px solid ${baseColor};
  transition: 300ms ease all;
}

@media ${mobileL} {
  margin:auto;
  margin-bottom:15px;
  width:90%;
  padding: 0 10px 0 10px;
}
`

export const BaseButton = styled.button`${BaseButtonCSS}`;
export const BaseButtonLink = styled(Link)`
  text-decoration:none;
  ${BaseButtonCSS}
`;
BaseButton.displayName = 'BaseButton';

// ----------------------- //

// --- Google sign in button --- //
export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

GoogleSignInButton.displayName = 'GoogleSignInButton';
// -------------------------- //


// --- Inverted Button --- //
export const InvertedButtonCSS = css`
  background-color: ${white};
  color: ${baseColor};
  border: 1px solid ${baseColor};

  &:hover {
    background-color: ${baseColor};
    color: white;
    border: none;
  }
`

export const InvertedButton = styled(BaseButton)`${InvertedButtonCSS}`;

export const InvertedButtonLink = styled(Link)`
  ${BaseButtonCSS}
  ${InvertedButtonCSS}
  &:hover {
    border: 1px solid ${baseColor};
  }
  text-decoration:none;
`;
// --------------------------- //

InvertedButton.displayName = 'InvertedButton';

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;

ButtonSpinner.displayName = 'ButtonSpinner';

export const CustomLink =  styled.span`
  position:relative;
  height:50px;
  max-width:165px;
  min-width:165px;
  // box-shadow: 5px 40px 28px -22px #000000;  
  
  a {text-decoration:none;}
    -webkit-transform: scale(.8);
    -ms-transform: scale(.8);
    transform: scale(.8);
    margin:-30px
`
// --- DecoButtonWrapper uses decoButton.styles.js in jsx for styling to work --- //
// --- e.i. <DecoButtonWrapper><BaseButton style={styles.decoButton}> --- //

// DecoButtonWrapper.displayName  = "DecoButtonWrapper"

// export const SmallButtonWrapper = styled.span`
//   max-width:165px;
//   // height:auto;
//   // margin
//   a,
//   button {
//     -webkit-transform: scale(.6);
//     -ms-transform: scale(.6);
//     transform: scale(.6);
//     margin:-30px;
//     text-decoration:none;
//   }
//   // ${BaseButtonLink} {
//   //   background-color:blue;
//   // }
// `

//  PROTPTYPING NEW DECOBUTTON
// export const DecoButtonWrapperPrototype =  styled.span`
//   margin: 0px 0px 16px 5px;
//   position:relative;
//   height:50px;
//   min-width:165px;
//   width:auto;
//   border: solid 2px ${darkText};
//   z-index:1;

//   button {
//     width:100%;
//     position:absolute;
//     right: -5px;
//     top: 5px;
//     opacity:.6;
//     font-size:18px;
//     z-index:0;
//     transition: 300ms ease all;
    
//     &:hover {
//       transition: 300ms ease all;
//       right:0px;
//       top:0px;
//       background:white;
//       box-shadow:10px 5px 60px 10px rgba(6, 6, 6, .1);
//     }
//   }

//   @media ${mobileL} {
//     width:90%;
//   }
// `
// --- DecoButtonWrapper uses decoButton.styles.js in jsx for styling to work --- //
// --- e.i. <DecoButtonWrapper><BaseButton style={styles.decoButton}> --- //

// DecoButtonWrapperPrototype.displayName  = "DecoButtonWrapperPrototype"