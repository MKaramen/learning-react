import React from "react";

const AuthContext = React.createContext({
  loggedIn: false,
  loginHandler: () => {}
});

export default AuthContext;
