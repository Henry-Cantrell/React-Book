import React from "react";
import { EDIT_PROFILE_MENU } from "./editprofilemenu";
import { USER_INFO_BLOCK_MIDDLE_DIV } from "./infoblockmiddlediv";
import { TOGGLE_EDIT_PROFILE_MENU } from "./toggleprofilemenu";

export class MIDDLE_DIV_CONTENT extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  toggleShowTrue = () => {
    this.setState({
      show: true,
    });
  };

  toggleShowFalse = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div class="middleDiv">
        <div className="wrapper-div-for-info">
          <div className="wrapper-user-info-div">
            <USER_INFO_BLOCK_MIDDLE_DIV
              username={this.props.username}
              userBio={this.props.userBio}
              joinDate={this.props.joinDate}
            />
          </div>
          <div className="wrapper-div-tweed-info-block">
            <div class="uidbModalDiv"></div>
            {this.props.disableEdit ? null : (
              <div className="wrapper-div-user-modal-toggle">
                <TOGGLE_EDIT_PROFILE_MENU
                  toggleShowTrue={this.toggleShowTrue}
                  hide={this.toggleShowFalse}
                />
              </div>
            )}
          </div>
          <EDIT_PROFILE_MENU
            show={this.state.show}
            hide={this.toggleShowFalse}
          />
        </div>
      </div>
    );
  }
}