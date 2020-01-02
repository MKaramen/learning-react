import React from "react";
import Person from "./Person/Person";

const Persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        changed={event => props.changed(event, person.id)}
        click={() => props.clicked(index)}
        key={person.id}
      />
    );
  });

export default Persons;
