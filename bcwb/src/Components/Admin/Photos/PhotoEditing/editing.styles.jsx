import styled, { css } from 'styled-components';
import { fonts } from '../../../Styles/fonts';
import { colors } from '../../../Styles/colors';

const { cursive } = fonts
const { baseColor,white,lightPaper } = colors

const key = css`
  width:45px;
  margin:2.5px;
  height:45px;
`

export const PositionController = styled.form`

  background-color:${lightPaper};
  width:150px;
  height:150px;
  position:absolute;
  z-index:1;
  display:flex;
  flex-wrap:wrap;
`

export const KeyStyling = styled.button`
  position:relative;
  ${key}
  color:${white};
  background-color:${baseColor};
  border: solid 0px;
  border-radius:5px;
  opacity:.8;
  ${cursive}
`