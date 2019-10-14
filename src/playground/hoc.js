//HIGHER ORDER COMPONENT ( HOC ) - A COMPONENT (HOC) THAT RENDERS ANOTHER COMPONENT
//THESE ARE THE BENEFITS;
//REUSE CODE
//RENDER HIJACKING
//PROP MANIPULATION
//ABSTRACT STATE

import React from "react";

//THIS IS A NON HOC COMPONENT
const Info = props => (
  <div>
    <h1>info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

//THIS IS A HOC COMPONENT BECAUSE IT RENDERS ANOTHER COMPONENT
const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info, Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>{props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please Login to view the info)</p>}</div>
  );
};

//THIS IS CALLING THE COMPONENT YOU WANT TO RENDER --> Info component
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
