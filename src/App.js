import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

class App extends Component {
  state = {
    persons: [
      { id: "000", name: "Max", age: 420 },
      { id: "0001", name: "KekW", age: 40 },
      { id: "0002", name: "YesW", age: 59 }
    ],
    showPersons: false
  };
  // Delete a person from the array
  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  // Allow to type and change the name
  changeNameHandler = (event, id) => {
    // Get the id
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );

    // Get the person and change the name to the new value
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    // Get all the persons, copy the array and change it with the new value
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  // Button hide or show
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    const StyledButton = styled.button`
      background-color: ${props => (props.changeCss ? "red" : "blue")};
      font-size: inherit;
      padding: 8px 16px 8px 16px;
      curser: pointer;
      border-radius: 4px;
      color: white;
      border: none;

      &:hover {
        background-color: ${props =>
          props.changeCss ? "LightCoral" : "MidnightBlue"};
      }
    `;

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                changed={event => this.changeNameHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
              />
            );
          })}
        </div>
      );

      // style.backgroundColor = "red";
      // style[":hover"].backgroundColor = "purple";
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("thin");
    }

    if (this.state.persons.length === 1) {
      classes.push("purple");
    }

    return (
      <div className="App">
        <h1 className={classes.join(" ")}>React App</h1>
        <StyledButton
          changeCss={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Display
        </StyledButton>

        {persons}
      </div>
    );
  }
}

export default App;
