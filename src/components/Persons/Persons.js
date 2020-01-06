import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Check if the nextProps are equal to the actual props so we don't update if it's the same
    if (nextProps.persons !== this.props.persons) {
      console.log("Did Update");
      return true;
    }

    return false;
  }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
          click={() => this.props.clicked(index)}
          key={person.id}
        />
      );
    });
  }
}

export default Persons;
