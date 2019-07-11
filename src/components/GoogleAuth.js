import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    // Variable is aviliable on the window scope
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "266996211248-tsjsjq58i4fmgk3u9bc8tciravukglnm.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn == null) {
      return <div>Don't know</div>;
    } else if (this.state.isSignedIn) {
      return <div>Signed in!</div>;
    } else {
      return <div>Signed out!</div>;
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
