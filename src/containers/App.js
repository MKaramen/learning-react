import React, { Component } from "react";

import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import AuthContext from "../context/auth-context";

class App extends Component {
  state = {
    persons: [
      { id: "000", name: "KEKWAIT", age: 420 },
      { id: "0001", name: "KekW", age: 40 },
      { id: "0002", name: "YesW", age: 59 }
    ],
    showPersons: false,
    showCockpit: true,
    logIn: false
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

  loginHandler = () => {
    const isConnected = this.state.logIn;
    this.setState({ logIn: !isConnected });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler}
          persons={this.state.persons}
          login={this.state.logIn}
        />
      );
    }

    return (
      <React.Fragment>
        <button onClick={() => this.setState({ showCockpit: false })}>
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            loggedIn: this.state.logIn,
            loginHandler: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              // appTitle comes from index.js
              title={this.props.appTitle}
              css={this.state.showPersons}
              click={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </React.Fragment>
    );
  }
}

export default withClass(App, "App");
