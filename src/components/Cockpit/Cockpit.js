import React, { useEffect } from "react";
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

  // Use effect second argument allow us to choose which element the function should pay attention to (array)
  // If array is empty execute only for the first time
  useEffect(() => {
    console.log("[Cockpit.js] CSS Changed");
    return () => {
      console.log("Clean up Work");
    };
  });

  return (
    <div>
      <h1>{props.title}</h1>
      <StyledButton changeCss={props.css} onClick={props.click}>
        Display
      </StyledButton>
    </div>
  );
};

// Implement check only if sometime the parent change but not the child
export default React.memo(Cockpit);
