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

  @media (max-width:550px){
    width:100%;
    margin:0px;
  }

  p {
    font-weight:600;
    font-size:12px;
  }

  i {
    font-size:10px;
    font-weight:400;
    margin-top:15px;
  }
`

export const TableItem = styled.span`
  text-align:center;
  display:flex;
  flex-direction:column;
  
`