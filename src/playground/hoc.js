//HIGHER ORDER COMPONENT ( HOC ) - A COMPONENT (HOC) THAT RENDERS ANOTHER COMPONENT
//THESE ARE THE BENEFITS;
//REUSE CODE
//RENDER HIJACKING
//PROP MANIPULATION
//ABSTRACT STATE

import React from "react";

const Info = props => (
  <div>
    <h1>info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      <p>This is private info, Please don't share!</p>
      <WrappedComponent />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
