import React from "react";

export let LOGIN_MODAL = (props) => {
  return (
    <div className="show-modal">
      <div className="modal-box-auth">
        <div className="exit-modal-icon">
          <i onClick={props.hideLogin} class="fas fa-times"></i>
        </div>
        <div className="modal-box-auth-interior">
          <input
            placeholder="email"
            type="text"
            className="modal-box-auth-interior-child"
            id="auth-input-email"
          ></input>
          <input
            id="auth-input-password"
            placeholder="password"
            type="password"
            className="modal-box-auth-interior-child"
          ></input>
          <button className="modal-box-auth-interior-child-button">
            <div className="modal-box-auth-button-interior-text">Log in</div>
          </button>
        </div>
      </div>
    </div>
  );
};
