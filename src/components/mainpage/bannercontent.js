import React from "react";
import { PROFILE_PAGE } from "./nestedcomponents/bannerTwoProfilePage/profilepage";
import HOME_PAGE from "./homepagecontent/homepage";
import { EXPLORE_PAGE_HANDLER } from "./explorepagecontent/explorepagehandler";
import OTHER_USER_PROFILE_HANDLER from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/otheruserprofileviewcomponents/otheruserprofilehandler";

export class BANNER_CONTENT_FLOW_CONTROLLER extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHomePage: true,
      showProfilePage: false,
      showExplorePage: false,
      showOtherUserProfile: false,
    };
    this.showProfilePage = this.showProfilePage.bind(this);
    this.showHomePage = this.showHomePage.bind(this);
    this.showExplorePage = this.showExplorePage.bind(this);
    this.showOtherUserProfile = this.showOtherUserProfile.bind(this);
  }

  showProfilePage() {
    this.setState({
      showProfilePage: true,
      showHomePage: false,
      showExplorePage: false,
      showOtherUserProfile: false,
    });
  }

  showHomePage() {
    this.setState({
      showHomePage: true,
      showProfilePage: false,
      showExplorePage: false,
      showOtherUserProfile: false,
    });
  }

  showExplorePage() {
    this.setState({
      showExplorePage: true,
      showHomePage: false,
      showProfilePage: false,
      showOtherUserProfile: false,
    });
  }

  showOtherUserProfile() {
    this.setState({
      showOtherUserProfile: true,
      showExplorePage: false,
      showHomePage: false,
      showProfilePage: false,
    });
  }

  render() {
    return (
      <>
        <div class="first">
          <div class="bannerFlowControlButtons">
            <button onClick={this.showHomePage}>Home page</button>
            <button onClick={this.showProfilePage}>Profile page</button>
            <button onClick={this.showExplorePage}>Explore page</button>
          </div>
        </div>
        <div class="second">
          {this.state.showProfilePage ? (
            <PROFILE_PAGE
              userBioFromRedux={this.props.userBioFromRedux}
              uniqueUid={this.props.uniqueUid}
              usernameFromRedux={this.props.usernameFromRedux}
              joinDateFromRedux={this.props.joinDateFromRedux}
              dispatch={this.props.dispatch}
            />
          ) : null}
          {this.state.showHomePage ? (
            <HOME_PAGE
              dispatch={this.props.dispatch}
              username={this.props.username}
              uniqueUid={this.props.uniqueUid}
              showOtherUserProfile={this.showOtherUserProfile}
            />
          ) : null}
          {this.state.showExplorePage ? (
            <EXPLORE_PAGE_HANDLER
              showOtherUserProfile={this.showOtherUserProfile}
            />
          ) : null}
          {this.state.showOtherUserProfile ? (
            <OTHER_USER_PROFILE_HANDLER
              username={this.props.username}
              uniqueUid={this.props.uniqueUid}
              dispatch={this.props.dispatch}
            />
          ) : null}
        </div>
        <div class="third"></div>
      </>
    );
  }
}
