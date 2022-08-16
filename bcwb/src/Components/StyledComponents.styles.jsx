
import styled from 'styled-components';
import { colors } from './Styles/colors';
import { device } from './Styles/queries';

const { mobileL } = device
const { lightPaper,baseColor } = colors

export const PortraitImage = styled.div`
  margin:auto;
  height:400px;
  width:267px;
  border-radius:10px;
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
export const ThumbnailImage = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 2px solid ${baseColor};
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  overflow: hidden;
  -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
  transition: transform 0.5s, opacity 0.5s;
  transition: all 1000ms;
  z-index: 0;
  margin:5px;

  &:hover {
    -webkit-transform: scale(1.15);
    -ms-transform: scale(1.15);
    transform: scale(1.15);
    transition: all 200ms;
    z-index:1000;
  }

`

export const MainImage = styled.div`
  position:absolute;
  top:30px;
  right:20px;
  height:200px;
  width:175px;
  overflow:hidden;
  border-radius:5px;

  @media ${mobileL}{
    position:relative;
    margin:auto;
    right:0;
  }
`

export const ImageTag = styled.p`
  position:absolute;
  bottom:20px;
  right:-10px;
  width:120%;
  background: rgba(0.863,0.982,0.839,.1);
  backdrop-filter: blur(12px);
  border: solid 2px ${baseColor};
  z-index:10;
  text-align:center;
  color:${lightPaper};
  height:15px;
  font-size:12px;
  bottom:0px;
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