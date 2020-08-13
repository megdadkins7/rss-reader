import React, { useState } from "react";

//components
import EpisodeList from "./components/EpisodeList";
import UserForm from "./components/UserForm";

//style components
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

//styles
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [state, setState] = useState({
    episodes: null,
    fetching: false,
    programTitle: null,
    programDescription: null,
    previousFeeds: [],
    past: false,
  });

  const getFeed = (e) => {
    setState({ fetching: !state.fetching });
    e.preventDefault();
    const feedUrl = e.target.elements.feed_url.value;
    let Parser = require("rss-parser");
    let parser = new Parser({
      customFields: {
        item: [["enclosure", { keepArray: true }]],
      },
    });
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

    if (feedUrl) {
      (async () => {
        try {
          let feed = await parser.parseURL(CORS_PROXY + feedUrl);
          setState({
            episodes: feed.items,
            programTitle: feed.title,
            fetching: !state.fetching,
            programDescription: feed.description,
            previousFeeds: [...state.previousFeeds, feedUrl],
            past: true,
            error: false,
          });
        } catch (err) {
          console.log(err);
          setState({ error: true, fetching: false });
        }
      })();
    } else {
      return;
    }
  };

  const handleClose = () => {
    setState({
      error: false,
      fetching: false,
    });
  };

  const renderAlert = () => {
    return (
      <div>
        <Dialog
          open={state.error}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Error Parsing Feed</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please try retyping your RSS feed, or try a new one.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
  return (
    <div className="App">
      <GlobalStyles />
      <header className="App-header">
        <h1 className="App-title">quick-feed</h1>
      </header>
      <UserForm
        onClick={() => setState({ fetching: true })}
        getFeed={getFeed}
        past={state.past}
        previousFeeds={state.previousFeeds}
      />
      {state.error ? renderAlert() : <div />}
      {!state.past ? <p>Please enter an RSS feed</p> : <div></div>}

      <EpisodeList
        episodes={state.episodes}
        programTitle={state.programTitle}
        programDescription={state.programDescription}
        fetching={state.fetching}
      />
    </div>
  );
}

export default App;
