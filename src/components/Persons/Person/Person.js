import React, { Component } from "react";
import "./Person.css";
import withClass from "../../../hoc/withClass";
import PropTypes from "prop-types";
// import Aux from "../../../hoc/Aux";

// Removed style so we can use Aux and not create a new Div

class Person extends Component {
  // constructor(props) {
  //   super(props);
  //   this.inputElementReference = React.createRef();
  // }

  inputElementReference = React.createRef();

  componentDidMount() {
    console.log(this.inputElementReference);
    this.inputElementReference.current.focus();
  }

  render() {
    return (
      // React.Fragment works like <Aux></Aux>
      <React.Fragment>
        <p onClick={this.props.click}>
          My name is {this.props.name} and I'm {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElementReference}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </React.Fragment>
    );
  }
}

// Allow us to precise type of data props should receive
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, "Person");
