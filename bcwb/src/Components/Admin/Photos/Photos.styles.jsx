import styled, { css } from 'styled-components';
import { fonts } from '../../Styles/fonts';
import { colors } from '../../Styles/colors';

const { cursive } = fonts
const { yellowPaper,baseColor } = colors

export const AddPhotoContainer = styled.div`
  height: 700px;
  width: 300px;
  position: absolute;
  background-color: ${yellowPaper};
  z-index:1;
  box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);

  figure {
    position:absolute;
    top:-55px;
    -webkit-transform: scale(.5);
    -ms-transform: scale(.5);
    transform: scale(.5);
  }
`

export const PositionController = styled.form`

  width:200px;
  height:300px;
  position:absolute;
  z-index:1;
  display:flex;
  flex-wrap:wrap;
  
`

export const KeyStyling = styled.button`
  max-width:100px;
  max-height:100px;
  font-size:12px;
  padding:0px;
  ${cursive}
`

// -- Similar to thumnail image in StyledComponents - eliminated media queries -- //
export const LargeThumbnail = styled.div`
  position:relative;
  margin:auto;
  height:200px;
  width:200px;
  border: 2px solid ${baseColor};
  border-radius: 50%;
  overflow: hidden;
  z-index:10;
`