import React from "react";
import { PROFILE_PAGE } from "./nestedcomponents/bannerTwoProfilePage/profilepage";
import HOME_PAGE from "./homepagecontent/homepage";
import { EXPLORE_PAGE_HANDLER } from "./explorepagecontent/explorepagehandler";

export class BANNER_CONTENT_FLOW_CONTROLLER extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHomePage: true,
      showProfilePage: false,
      showExplorePage: false,
    };
    this.showProfilePage = this.showProfilePage.bind(this);
    this.showHomePage = this.showHomePage.bind(this);
    this.showExplorePage = this.showExplorePage.bind(this);
  }

  showProfilePage() {
    this.setState({
      showProfilePage: true,
      showHomePage: false,
      showExplorePage: false,
    });
  }

  showHomePage() {
    this.setState({
      showHomePage: true,
      showProfilePage: false,
      showExplorePage: false,
    });
  }

  showExplorePage() {
    this.setState({
      showExplorePage: true,
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
            />
          ) : null}
          {this.state.showExplorePage ? <EXPLORE_PAGE_HANDLER /> : null}
        </div>
        <div class="third"></div>
      </>
    );
  }
}
