import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import * as yup from "yup";
import styled from "styled-components";

//helpers
import { getFeedListing } from "../helpers/requests";

const querystring = require("querystring");

const StyledFeedPage = styled.div``;

const FeedPage = ({ feedsStore, location }) => {
  const [initialized, setInitialized] = useState(false);
  const [url, setUrl] = useState("");
  const [listings, setListings] = useState([]);
  const [data, setData] = useState({});

  const getListings = async (url) => {
    try {
      const response = await getFeedListing(url);
      setListings(response.data.items);
      setData(response.data.feed);
    } catch (ex) {
      console.log(ex);
    }
  };
  const openLink = (url) => {
    window.location.href = url;
  };
  useEffect(() => {
    if (!initialized) {
      const url = querystring.decode(location.search)["?url"];
      setUrl(url);
      getListings(url);
      setInitialized(true);
    }
  });

  return (
    <StyledFeedPage>
      <span>Hello from FeedPage</span>
      <h1 className="center title">
        <img src={data.image} /> {data.title}
      </h1>
      {listings.map((l, i) => {
        return (
          <div key={i}>
            <div className="card-title">{l.title}</div>
            <div>
              <p>{l.description}</p>
              <p>{l.content}</p>
              <button variant="primary" onClick={openLink.bind(this, l.link)}>
                Open
              </button>{" "}
            </div>
          </div>
        );
      })}
    </StyledFeedPage>
  );
};

export default withRouter(observer(FeedPage));
