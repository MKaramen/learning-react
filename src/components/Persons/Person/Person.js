import React, { Component } from "react";
// import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 16px;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  overflow-wrap: break-word;
  @media (min-width: 500px) {
    width: 400px;
  }
`;

class Person extends Component {
  render() {
    return (
      <StyledDiv>
        <p onClick={this.props.click}>
          My name is {this.props.name} and I'm {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </StyledDiv>
    );
  }
}

export default Person;
