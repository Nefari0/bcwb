import styled, { css } from 'styled-components';
import { SpinnerContainer } from '../Spinner/spinner.styles';
import { colors } from '../Styles/colors';
import { fonts } from '../Styles/fonts';
import { device } from '../Styles/queries';

const { tablet,mobileL } =device
const { cursive } = fonts
const { baseColor,white,darkText } = colors

export const BaseButton = styled.button`
  min-width: 165px;
  margin: 0px 0px 16px 5px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px 0 25px;
  font-size: 16px;
  background-color: ${baseColor}
  color: ${white}
  text-transform: capitalize;
  ${cursive}
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid ${baseColor}
  }

  @media ${mobileL} {
    margin:auto;
    margin-bottom:15px;
    width:90%;
    padding: 0 10px 0 10px;
  }
`;

BaseButton.displayName = 'BaseButton';

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

GoogleSignInButton.displayName = 'GoogleSignInButton';

export const InvertedButton = styled(BaseButton)`
  background-color: ${white}
  color: ${baseColor}
  border: 1px solid ${baseColor}

  &:hover {
    background-color: ${baseColor}
    color: white;
    border: none;
  }
`;

InvertedButton.displayName = 'InvertedButton';

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;

ButtonSpinner.displayName = 'ButtonSpinner';

export const DecoButtonWrapper =  styled.span`
  opacity:.7;
  position:relative;
  height:50px;
  max-width:165px;
  min-width:165px;
  border: solid 2px ${darkText}

  @media ${tablet} {
    -webkit-transform: scale(.6);
    -ms-transform: scale(.6);
    transform: scale(.6);
    margin:-30px
  }
`
// --- DecoButtonWrapper uses decoButton.styles.js in jsx for styling to work --- //
// --- e.i. <DecoButtonWrapper><BaseButton style={styles.decoButton}> --- //

DecoButtonWrapper.displayName  = "DecoButtonWrapper"