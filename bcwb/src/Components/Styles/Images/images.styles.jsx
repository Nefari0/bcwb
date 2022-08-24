
import styled, {css} from 'styled-components';
import { colors } from '../colors';
import { device } from '../queries';

const { mobileL } = device
const { baseColor,yellowPaper } = colors

const selectedThumbnail = css`
  -webkit-transform: scale(1.15);
  -ms-transform: scale(1.15);
  transform: scale(1.15);
  transition: all 200ms;
  z-index:1;
  opacity:1;

  img {opacity:1;}
`

const selectedImageTag = css`
  bottom:50px;
  right:-40px;
  transition:all 200ms;

  @media ${mobileL} {
    left:10px;
    top:5px
    transition:all 200ms;
  }
`;

export const PortraitImage = styled.div`
  margin:auto;
  height:400px;
  width:267px;
  border-radius:2px;
  position:relative;
  overflow:hidden;
`;

export const LandscapeImage = styled.div`
  height:267px;
  width:400px;
  z-index:1;
  overflow:hidden;
  border-radius:5px;
  margin:auto;
`

export const MainImage = styled.div`
  position:absolute;
  top:30px;
  right:20px;
  height:200px;
  width:175px;
  overflow:hidden;
  border-radius:1px;

  @media ${mobileL}{
    position:relative;
    margin:auto;
    right:0px;
  }
`

export const ThumbnailImage = styled.div`
  position:relative;
  height: 100px;
  width: 100px;
  border-radius:50%;
  border: 2px solid ${baseColor};
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  overflow: hidden;
  opacity:.9;
  -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
  transition: transform 0.5s, opacity 0.5s;
  transition: all 200ms;
  z-index: 0;
  margin:6px;
  background-color:#000;
  img {opacity:.7;}

  @media ${mobileL} {
    -webkit-transform: scale(.75);
    -ms-transform: scale(.75);
    transform: scale(.75);
    margin:-9px;


    ${({propObject}) => (propObject.selectedCategory === propObject.category_id && selectedThumbnail)}
  }

  ${({propObject}) => (propObject.selectedCategory === propObject.category_id && selectedThumbnail)}

  p {
    ${({propObject}) => (propObject.selectedCategory === propObject.category_id && selectedImageTag)}
  }



  &:hover {
    img {opacity:1;}
    -webkit-transform: scale(1.15);
    -ms-transform: scale(1.15);
    transform: scale(1.15);
    transition: all 200ms;
    z-index:2;
    opacity:1;

    p {
      ${selectedImageTag}
    }
  }


`

export const ImageTag = styled.p`
  position:absolute;
  bottom:20px;
  width:120%;
  background:${yellowPaper};
  border: solid 2px ${baseColor};
  z-index:10;
  text-align:center;
  color:${baseColor};
  font-weight:800;
  height:13px;
  font-size:10px;
  bottom:80px;
  right:-40px;
  transform: rotate(45deg);
  transition:all 200ms;
  box-shadow: 0 4px 3px 0  rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);

`

export const DescriptionText = styled.p`
  color:#555;
  font-family: 'Cedarville Cursive', cursive;
  font-style:italic;
  font-size: 1.8rem;
  line-height: 1.8;
`

export const ShortRow = styled.div`
  display:flex;
  align-items:center;
  margin:20px;
  width:65%;
  `
  
  export const LongRow = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin:20px;
  width:95%;

  @media ${mobileL}{
    flex-direction:column;
    margin:auto;
  }
`