import React from "react";
import firebase from "firebase";
import {USER_AVATAR} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/useravatar.js'
import { BANNER_IMAGE } from "./bannerimage";

//Note: cannot refactor to use current user uniqueUid/username because
//uid and username props are passed differently in different use contexts

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
        <BANNER_IMAGE urlBanner={this.state.urlBanner} />
        <div className='place-useravatar-on-profile'>
          <USER_AVATAR uid={this.props.uid}/>
        </div>
      </>
    );
  }
}
