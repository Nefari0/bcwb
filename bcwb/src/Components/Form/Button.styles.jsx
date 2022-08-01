import styled, { css } from 'styled-components';
import { SpinnerContainer } from '../Spinner/spinner.styles';
import { colors } from '../Styles/colors';
import { queries } from '@testing-library/react';
const { tablet } = queries
const { baseColor,white } = colors

export const BaseButton = styled.button`
  width: 165px;
  margin: 0px 0px 16px 5px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px 0 25px;
  font-size: 16px;
  background-color: ${baseColor}
  color: ${white}
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid ${baseColor}
  }

  @media (max-width:550px) {
    margin:auto;
    margin-bottom:15px;
    width:90%;
  }

  @media (max-width:350px) {
    font-size:12px;
  }
`;

BaseButton.displayName = 'BaseButton';

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

GoogleSignInButton.displayName = 'GoogleSignInButton';

export const InvertedButton = styled(BaseButton)`
  background-color: ${white}
  color: ${baseColor}
  border: 1px solid ${baseColor}

  &:hover {
    background-color: ${baseColor}
    color: white;
    border: none;
  }
`;

InvertedButton.displayName = 'InvertedButton';

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;

ButtonSpinner.displayName = 'ButtonSpinner';
