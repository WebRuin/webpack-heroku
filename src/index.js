import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, browserHistory } from "react-router"

import Index from "./pages/Index"
import Layout from "./pages/Layout"
import Security from "./pages/Security"
import Code from "./pages/Code"
import Network from "./pages/Network"

const app = document.getElementById('main')

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index}></IndexRoute>
      <Route path="security" component={Security}></Route>
      <Route path="code" component={Code}></Route>
      <Route path="network" component={Network}></Route>
    </Route>
  </Router>,
app);
