import styled, { css } from 'styled-components';

export const InstructionHeader = styled.header`
  min-height:350px;
  width: 550px;
  padding-right:20px;
  padding-left:20px;
  background-color:#EFFDEC;
  border: solid 1.5px #003300;
  display:flex;
  flex-direction:column;
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
`

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