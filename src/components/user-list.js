import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "../reducers/reducer-active";

class userList extends Component {
  userListRender() {
    return this.props.users.map(user => {
      return (
        <li
          key={user.id}
          onClick={() => {
            this.props.selectUser(user);
          }}
        >
          {user.name} {user.last}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul>{this.userListRender()}</ul>
      </div>
    );
  }
}

// get state on read
function mapStateToProps(state) {
  return { users: state.userReducer };
}

// here we can change store
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
}

/* 
   connected all function 
   1) mapStateToProps on read 
   2) matchDispatchToProps on change state
*/
export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(userList);
