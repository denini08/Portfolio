import React from "react";

import ReactDOM from "react-dom";

import { HashRouter as Router } from "react-router-dom";

import Navigation from "./navigation";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Navigation />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
