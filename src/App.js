import React, { Component } from "react";
import UserList from "./components/user-list";
import UserDetails from "./components/user-details";

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Users list</h2>
        <UserList />
        <h2>Users Details</h2>
        <UserDetails />
      </div>
    );
  }
}
