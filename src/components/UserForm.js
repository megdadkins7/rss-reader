import React, { useState } from "react";

//components
import SearchHistory from "./SearchHistory";

//style-components
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

function UserForm({ getFeed, past, previousFeeds }) {
  const [state, setState] = useState({
    enabled: true,
    feeds: [],
  });

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setState({ enabled: false, feeds: [...state.feeds, value] });
    } else {
      setState({ enabled: true });
    }
  };
  return (
    <div>
      <form onSubmit={getFeed}>
        <Input
          style={{ margin: "20px auto", display: "block" }}
          type="text"
          name="feed_url"
          onChange={handleSearchChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={state.enabled}
        >
          Submit
        </Button>
        {past ? <SearchHistory history={previousFeeds} /> : <div></div>}
      </form>
    </div>
  );
}
export default UserForm;
