import React from "react";
import styled from "styled-components";

const Cockpit = props => {
  const StyledButton = styled.button`
    background-color: ${pro => (pro.changeCss ? "red" : "blue")};
    font-size: inherit;
    padding: 8px 16px 8px 16px;
    curser: pointer;
    border-radius: 4px;
    color: white;
    border: none;

    &:hover {
      background-color: ${pro =>
        pro.changeCss ? "LightCoral" : "MidnightBlue"};
    }
  `;

  return (
    <div>
      <h1>{props.title}</h1>
      <StyledButton changeCss={props.css} onClick={props.click}>
        Display
      </StyledButton>
    </div>
  );
};

export default Cockpit;
