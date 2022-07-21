import styled, { css } from 'styled-components';

export const Error = styled.div`
  position: absolute;
  width:500px;
  background-color:grey;
  z-index:1;
  border-radius:5px;
  box-shadow: 0px 5px 20px -7px #000000;
`;

export const PortraitImage = styled.div`
  height:400px;
  width:267px;
  z-index:1;
  border-radius:5px;
  margin:auto;
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
  height:50px;
  width:50px;
  border-radius:50%;
`

export const DescriptionText = styled.p`
  color:#555;
  font-family: 'Cedarville Cursive', cursive;
  font-style:italic;
  font-size: 1.8rem;
  line-height: 1.8;
`