import React from "react";

export function AUTH_FIELDS_ACCESS_DIVS(props) {
  return (
    <div className="auth-fields-container">
      <h2 className="auth-fields-header">Tweedur in progress.</h2>
      <div className="auth-fields-access-div" onClick={props.showLogin}>
        <div className='auth-fields-inner-div-text'>Log in</div>
      </div>
      <div className="auth-fields-access-div" onClick={props.showSignup}>
        <div className='auth-fields-inner-div-text'>Sign up</div>
      </div>
    </div>
  );
}
