import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Index from "./pages/Index";
import Layout from "./pages/Layout";

const app = document.getElementById('main');

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index}></IndexRoute>
    </Route>
  </Router>,
app);
