import React from "react";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import TopBar from "./components/TopBar";
import HomePage from "./components/HomePage";
import FeedPage from "./components/FeedPage";

//styles
import GlobalStyles from "./styles/GlobalStyles";

const history = createHistory();

function App({ feedsStore }) {
  return (
    <Router history={history}>
      <GlobalStyles />
      <TopBar />
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
