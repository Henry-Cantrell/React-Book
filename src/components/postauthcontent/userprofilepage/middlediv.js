import React from "react";
import { EDIT_PROFILE_MENU } from "./editprofilemenu";
import { USER_INFO_BLOCK_MIDDLE_DIV } from "./infoblockmiddlediv";
import { TWEED_INFO_BLOCK_MIDDLE_DIV } from "./tweedinfoblockmiddlediv";
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
        <USER_INFO_BLOCK_MIDDLE_DIV
          username={this.props.username}
          userBio={this.props.userBio}
          joinDate={this.props.joinDate}
        />
        <div class="uidbModalDiv">
          <TOGGLE_EDIT_PROFILE_MENU toggleShowTrue={this.toggleShowTrue} />
          <TWEED_INFO_BLOCK_MIDDLE_DIV
            userUid={this.props.userUid}
            username={this.props.username}
          />
        </div>
        <EDIT_PROFILE_MENU show={this.state.show} hide={this.toggleShowFalse} />
      </div>
    );
  }
}