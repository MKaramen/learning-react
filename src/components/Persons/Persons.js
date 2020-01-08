import React, { PureComponent } from "react";
import Person from "./Person/Person";

// Persons.js gets rerender every time app.js updates because it's a child of it. So if something change in app.js => Persons.js rerender
class Persons extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   // Check if the nextProps are equal to the actual props so we don't update if it's the same
  //   if (nextProps.persons !== this.props.persons) {
  //     console.log("[Persons.js] shouldComponentUpdate, true");
  //     return true;
  //   }

  //   return false;
  // }

  // If we want to check if all the props changed we can use PureComponent instead of Component and shouldComponentUpdate=> change extends. It check if changes and if so it will rerender

  render() {
    console.log("[Persons.js] render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
          click={() => this.props.clicked(index)}
          key={person.id}
          login={this.props.login}
        />
      );
    });
  }
}

export default Persons;
