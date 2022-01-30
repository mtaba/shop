import styled, { css } from "styled-components";

const buttonDtyles= css`
 
`
const invertedButtonStyles = css`
  background-color: $second-color;
  color: $second-font-color;
  border: 1px solid black;
  &:hover {
    background-color: $main-color;
    color: $main-font-color;
  }
`;

const googleSingInButton = css`
  background-color: #4285f4;
  color:white;
  &:hover{
   background-color: #357ae8;
   border: none;
 `;

export const CustomButtonContainer = styled.button`
  background-color: $main-color;
  color: $main-font-color;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 30px 0 30px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: $second-color;
    color: $second-font-color;
    border: 1px solid black;
  }
`;
