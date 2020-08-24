import React from "react";

export function AUTH_FIELDS_ACCESS_DIVS (props) {
  return (
    <div className="auth-fields-container">  
      <h2>Tweedur in progress.</h2>
      <div className="auth-fields-access-div" onClick={props.showLogin}>Log into an account</div>
      <div className="auth-fields-access-div" onClick={props.showSignup}>Sign up for an account</div>
    </div>
  );
}


