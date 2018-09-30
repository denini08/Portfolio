import React, { Component } from "react";

/*
  This component is rendered when the Switch doesn't
  find a certain page
*/

export class Match extends Component {
  render() {
    return (
        <div>
            <p>
                Page not Found
            </p>
        </div>
    );
  }
}

export default Match;
