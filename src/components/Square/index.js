import React from "react";
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 2em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  outline: none; 
  background-color: snow;
  font-weight: 800;

  &:nth-child(1) {
    border-top-left-radius: 0.25em;
  }

  &:nth-child(3) {
    border-top-right-radius: 0.25em;
  }

  &:nth-child(7) {
    border-bottom-left-radius: 0.25em;
  }

  &:nth-child(9) {
    border-bottom-right-radius: 0.25em;
  }

`;

const Square = ({ onClick, value }) => (
  <Button onClick={onClick}>{value}</Button>
);

export default Square;
