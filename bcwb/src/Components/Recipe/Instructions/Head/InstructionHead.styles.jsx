import styled, { css } from 'styled-components';

export const Table = styled.div`
  margin: 0px;
  z-index:10000;
  margin: 0px 0px 0px 50px;
  width: 50%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  row-gap: 50px;
  border-top: solid 1.5px #003300;
  border-bottom: solid 1.5px #003300;
`

export const TableItem = styled.span`
  height:65px;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
`

export const SmallText = styled.p`
  font-size:12px;
  font-weight:600;
`