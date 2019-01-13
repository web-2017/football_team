import React, { Component } from "react";

// databse
import { firebaseMatches } from "../../../fireBase";
import { firebaseLooper } from "../../ui/misc";
import { reverseArray } from "../../ui/misc";

export default class Blocks extends Component {
  state = {
    matches: [],
  };

  componentDidMount() {
    firebaseMatches
      .limitToLast(7)
      .once("value")
      .then(snapshot => {
        // console.log(snapshot.val());
        // we take a data from firebaseLooper
        const matches = firebaseLooper(snapshot);
        // console.log(matches);

        this.setState({ matches: reverseArray(matches) });
      });
  }

  showMatches = () => <div>mathch</div>;

  render() {
    console.log(this.state);
    return (
      <div className="home_matches">
        {this.showMatches(this.state.matches)}
      </div>
    );
  }
}
