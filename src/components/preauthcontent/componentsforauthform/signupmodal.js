import React from "react";

export let SIGNUP_MODAL = () => {
  return (
    <div className="show-modal">
      <div className="modal-box">
        <div className="modal-box-auth-interior">
          <input
            placeholder="email"
            type="text"
            className="modal-box-auth-interior-child"
            id="auth-input-email"
          />
          <input
            id="auth-input-password"
            placeholder="password"
            type="password"
            className="modal-box-auth-interior-child"
          />
          <input
            id="auth-input-username"
            placeholder="username"
            type="test"
            className="modal-box-auth-interior-child"
          />
          <button className="modal-box-auth-interior-child">Sign up</button>
        </div>
      </div>
    </div>
  );
};
