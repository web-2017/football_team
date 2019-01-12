import React, { Component } from "react";
import Layout from "./HightOrderComponents/layout";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home";

class Routes extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact component={Home} path="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default Routes;
