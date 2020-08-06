import React from 'react'
import {MODAL_FUNC} from './modalfc'
import {SHOW_BUTTON} from './showbuttonfc'
import {uidNet} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/uidNet'
import firebase from 'firebase'

export class MODAL_CLASS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classLogin: "hide_modal",
    };
  }

  componentDidMount() {
    if (this.props.formID === "loginForm") {
      document
        .getElementById(this.props.formID)
        .addEventListener("submit", (e) => {
          e.preventDefault();

          const loginEmail = document.querySelector("#loginEmail").value;
          const loginPassword = document.querySelector("#loginPassword").value;

          firebase
            .auth()
            .signInWithEmailAndPassword(loginEmail, loginPassword)
            .then((cred) => {
              this.props.dispatch(uidNet(cred.user.uid, loginEmail));
            })
            .then(
              (document.getElementById("loginEmail").value = ""),
              (document.getElementById("loginPassword").value = "")
            )
            .catch((Error) => {
              window.alert("Error: incorrect username or password");
            });
        });
    } else {
      document
        .getElementById(this.props.formID)
        .addEventListener("submit", (e) => {
          e.preventDefault();

          const signupEmail = document.querySelector("#signupEmail").value;
          const signupPassword = document.querySelector("#signupPassword").value;
          const signupUsername = document.querySelector("#userNameField").value;

          if (signupUsername.length <= 12) {
            firebase
              .auth()
              .createUserWithEmailAndPassword(signupEmail, signupPassword)
              .then((cred) => {
                this.props.dispatch(
                  uidNet(cred.user.uid, signupEmail, signupUsername),

                  firebase
                    .firestore()
                    .collection("users")
                    .doc(cred.user.uid)
                    .set({
                      uid: cred.user.uid,
                      email: signupEmail,
                      username: signupUsername,
                      userBio: "Set up your bio",
                      joinDate:
                        (new Date().getMonth() + 1).toString() +
                        "-" +
                        new Date().getFullYear().toString(),
                    })
                );
              })
              .then(
                (document.getElementById("loginEmail").value = ""),
                (document.getElementById("loginPassword").value = "")
              )
              .catch((Error) => {
                window.alert("Error: user info previously created");
              });
          } else {
            window.alert("Username must be less than 13 characters long");
          }
        });
    }
  }

  showModal = () => {
    this.setState({ classLogin: "show_modal" });
  };

  hideModal = () => {
    this.setState({ classLogin: "hide_modal" });
  };

  render() {
    return (
      <div>
        <div class="signup_button_style">
          <SHOW_BUTTON function={this.props.function} click={this.showModal} />
        </div>
        <MODAL_FUNC
          nameInputOption={this.props.nameInputOption}
          formID={this.props.formID}
          passwordID={this.props.passwordID}
          emailID={this.props.emailID}
          show={this.state.classLogin}
          text={this.props.action}
          function={this.props.purpose}
          hide={this.hideModal}
        />
      </div>
    );
  }
}

//to-do: 
//create an entry in documentation explaining functionality and purpose of this file
//fix broken asyncs for data fetch on signup