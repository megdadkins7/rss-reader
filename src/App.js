import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";

//components
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import FeedPage from "./components/FeedPage";

//styles
import GlobalStyles from "./styles/GlobalStyles";

const history = createHistory();

function App({ feedsStore }) {
  return (
    <Router history={history}>
      <GlobalStyles />
      <NavBar />
      <Switch>
        <Route
          path="/"
          exact
          component={(props) => <HomePage {...props} feedsStore={feedsStore} />}
        />
        <Route
          path="/feed"
          exact
          component={(props) => <FeedPage {...props} feedsStore={feedsStore} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
