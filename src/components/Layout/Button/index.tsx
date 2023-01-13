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
`;

export default Button;
