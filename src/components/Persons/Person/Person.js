import React, { Component } from "react";
import "./Person.css";
import withClass from "../../../hoc/withClass";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";
// import Aux from "../../../hoc/Aux";

// Removed style so we can use Aux and not create a new Div

class Person extends Component {
  // Allow us to use context in classes, have to use provider in app.js in order to definie the values
  static contextType = AuthContext;

  inputElementReference = React.createRef();

  render() {
    return (
      // React.Fragment works like <Aux></Aux>
      <React.Fragment>
        <p>{this.context.loggedIn ? "Connected" : "You need to login"}</p>

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
