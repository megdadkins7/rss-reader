import React, { useState } from "react";

//style-components
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function SearchHistory({ history }) {
  const [anchor, setAnchor] = useState(null);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  const renderItem = (item, i) => {
    return (
      <MenuItem index={i} key={i} onClick={handleClose}>
        {item}
      </MenuItem>
    );
  };
  const renderMenuItems = () => {
    return <div>{history.map(renderItem)}</div>;
  };
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "grey", marginTop: "10px" }}
      >
        Previous Feeds
      </Button>
      <Menu
        id="simple-menu"
        anchor={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        {history ? renderMenuItems() : <div />}
      </Menu>
    </div>
  );
}

export default SearchHistory;
