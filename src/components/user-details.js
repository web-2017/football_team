import React, { Component } from "react";
import { connect } from "react-redux";

class userDetails extends Component {
  showDescriptionUsers = () => {
    const { id, age, description, thumbnail } = this.props.selectUser;
    return (
      <ul key={id}>
        <li>Age: {age}</li>
        <li>Description: {description}</li>
        <li>
          My photo:) <br />
          <img src={thumbnail} alt={description} />
        </li>
      </ul>
    );
  };

  render() {
    console.log(this.props.selectUser);
    return <div>{this.showDescriptionUsers()}</div>;
  }
}

function mapStateToProps(state) {
  return { selectUser: state.activeReducer };
}

export default connect(mapStateToProps)(userDetails);
