import styled, { css } from 'styled-components';

export const Error = styled.div`
  position:fixed;
  top:40%;
  width:500px;
  background-color:grey;
  color:#fff;
  z-index:1;
  border-radius:5px;
  box-shadow: 0px 5px 20px -7px #000000;
`;

export const PortraitImage = styled.div`
  margin:10px;
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
  height:200px;
  width:200px;
  border-radius:50%;
  overflow:hidden;
  z-index:1000;
`

export const MainImage = styled.div`
  position:absolute;
  top:30px;
  right:20px;
  height:200px;
  width:175px;
  overflow:hidden;
  border-radius:5px;
`

export const DescriptionText = styled.p`
  color:#555;
  font-family: 'Cedarville Cursive', cursive;
  font-style:italic;
  font-size: 1.8rem;
  line-height: 1.8;
  text-align:left;
`

export const ImageTag = styled.h4`
  position:absolute;
  bottom:0px;
  width:100%;
  color:#fff
  background: rgba(0.863,0.982,0.839,.1);
  backdrop-filter: blur(12px);
  border-top: solid 2px #003300;
  border-bottom: solid 2px #003300; 
  z-index:0;
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
  // background-color:blue;
  min-width:95%;
`