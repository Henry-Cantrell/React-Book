import React from "react";
import firebase from "firebase";
import { TOP_BANNER_CONTENT } from "./topbannercontent";
import { BANNER_IMAGE } from "./bannerimage";

//Note: cannot refactor to use current user uniqueUid/username because
//uid/username props are passed differently in different use contexts

export class TOP_DIV_CONTENT extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urlBanner: null,
    };
  }

  componentDidMount() {
    let fetchBannerImageUrl = () => {
      firebase
        .storage()
        .ref(`${this.props.uid}/userBanner`)
        .getDownloadURL()
        .then((url) => {
          this.setState({
            urlBanner: url,
          });
        });
    };
    fetchBannerImageUrl();
  }

  render() {
    return (
      <>
        <TOP_BANNER_CONTENT
          currentUserUsername={this.props.username}
          uid={this.props.uid}
        />
        <BANNER_IMAGE urlBanner={this.state.urlBanner} />
      </>
    );
  }
}
