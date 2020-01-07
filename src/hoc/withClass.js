import React from "react";

//First argument caps because it will receive a Component
const withClass = (WrappedComponent, className) => {
  // It returns a component
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
