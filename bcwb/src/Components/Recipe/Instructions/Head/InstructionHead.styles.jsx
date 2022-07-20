import styled, { css } from 'styled-components';

export const InstructionHeader = styled.header`
  height:350px;
  width: 550px;
  padding-right:20px;
  background-color:#003300;
  border: solid 1px #003300;
  border-radius: 20px 20px 0px 0px;
  display:flex;
  flex-direction:column;
  align-items:center;
`

export const MainImage = styled.div`
  position:absolute;
  top:-100px;
  left:180px;
  margin:auto;
  height:175px;
  width:175px;
  overflow:hidden;
  border-radius:30px;
  border: solid 11px #fff;
  margin:auto;
`

export const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:10px;
  width:100%;
`

// --- Render additional information --- //
export const Keys = styled.div`
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s;
`