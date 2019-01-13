import React, { Component } from "react";
import Slide from "react-reveal/Slide";

// databse
import { firebaseMatches } from "../../../fireBase";
import { firebaseLooper } from "../../ui/misc";
import { reverseArray } from "../../ui/misc";

import MatchesBlock from "../../ui/matches_block";

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

  showMatches = matches =>
    matches
      ? matches.map(match => (
          <Slide bottom key={match.id}>
            <div className="item">
              <div className="wrapper">
                <MatchesBlock match={match} />
              </div>
            </div>
          </Slide>
        ))
      : null;

  render() {
    // console.log(this.state);
    return (
      <div className="home_matches">
        {this.showMatches(this.state.matches)}
      </div>
    );
  }
}
