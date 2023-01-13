import React from "react";
import styled from "styled-components";

const Button = styled((props) => {
  return <button {...props} />;
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  outline: none;
  transition: all 0.2s;
  line-height: 1;
  user-select: none;
  cursor: pointer;
  background-color: #1a72f8;
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 500;
  border: none;
  text-align: center;
  line-height: 30px;
  transition: background-color 0.25s ease-out;
  :hover {
    background-color: #f86716;
  }
`;

export default Button;
