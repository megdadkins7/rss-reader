import React, { useState } from "react";

//components
import EpisodeList from "./components/EpisodeList";
import UserForm from "./components/UserForm";
import LoadingStatus from "./components/LoadingStatus";

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
    programImage: null,
    previousFeeds: [],
    past: false,
  });

  const getFeed = (e) => {
    setState({ fetching: !state.fetching });
    e.preventDefault();
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
      <LoadingStatus fetching={state.fetching} />

      <EpisodeList
        episodes={state.episodes}
        programTitle={state.programTitle}
        programDescription={state.programDescription}
        programImage={state.programImage}
        fetching={state.fetching}
      />
    </div>
  );
}

export default App;
