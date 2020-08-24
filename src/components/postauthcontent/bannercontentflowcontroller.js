import React from "react";
import { FIRST_BANNER_CONTENT } from "./firstbannercontent";
import { SECOND_BANNER_CONTENT } from "./secondbannercontent";

export class BANNER_CONTENT_FLOW_CONTROLLER extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHomePage: true,
      showProfilePage: false,
      showExplorePage: false,
      showOtherUserProfile: false,
    };
  }

  showProfilePage = () => {
    this.setState({
      showProfilePage: true,
      showHomePage: false,
      showExplorePage: false,
      showOtherUserProfile: false,
    });
  };

  showHomePage = () => {
    this.setState({
      showHomePage: true,
      showProfilePage: false,
      showExplorePage: false,
      showOtherUserProfile: false,
    });
  };

  showExplorePage = () => {
    this.setState({
      showExplorePage: true,
      showHomePage: false,
      showProfilePage: false,
      showOtherUserProfile: false,
    });
  };

  showOtherUserProfile = () => {
    this.setState({
      showOtherUserProfile: true,
      showExplorePage: false,
      showHomePage: false,
      showProfilePage: false,
    });
  };

  render() {
    return (
      <>
        <FIRST_BANNER_CONTENT
          showHomePage={this.showHomePage}
          showExplorePage={this.showExplorePage}
          showProfilePage={this.showProfilePage}
        />
        <SECOND_BANNER_CONTENT
          showProfilePage={this.state.showProfilePage}
          showHomePage={this.state.showHomePage}
          showExplorePage={this.state.showExplorePage}
          showOtherUserProfile={this.state.showOtherUserProfile}
        />
        <div class="third"></div>
      </>
    );
  }
}
