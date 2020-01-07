import React, { useEffect, useRef } from "react";
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

  const btnRef = useRef(null);
  // If array is empty execute only for the first time
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Will execute when we unmount the cockpit component
    const x = setTimeout(() => btnRef.current.click(), 1000);

    // If we don't give a 2nd argument, it will always unmount the component between each render so Clean up Work get executed every times
    return () => {
      clearTimeout(x);
      console.log("Clean up Work");
    };
  }, []);

  // Use effect second argument allow us to choose which element the function should pay attention to (array)
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");

    // Will execute when we unmount the cockpit component

    // If we don't give a 2nd argument, it will always unmount the component between each render so Clean up Work get executed every times
    return () => {
      console.log("Clean up Work 2nd");
    };
  });

  return (
    <div>
      <h1>{props.title}</h1>
      <StyledButton ref={btnRef} changeCss={props.css} onClick={props.click}>
        Display
      </StyledButton>
    </div>
  );
};

// If App.js rerender and Cockpit  props didn't change then the cockpit doesn't rerender that's why we use React.memo
export default React.memo(Cockpit);
