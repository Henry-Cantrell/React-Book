import React from 'react'
import { AUTH_MODAL_CONTROLLER } from "./authmodalcontroller";

export let LOGIN_MODAL = () => {
    return (
      <div className="show_modal">
        <div className="modal-box">
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
            <button className="modal-box-auth-interior-child">Log in</button>
          </div>
        </div>
      </div>
    );
  };
  