import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler}
          persons={this.state.persons}
        />
      );
    }

    return (
      <div className="App">
        <Cockpit
          title={this.props.appTitle}
          css={this.state.showPersons}
          click={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
