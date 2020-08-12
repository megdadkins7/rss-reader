import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import * as yup from "yup";
import { getFeedListing } from "../helpers/requests";

const querystring = require("querystring");

const StyledFeedPage = styled.div`
  padding: 20px;
  .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

function FeedPage({ feedsStore, location }) {
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
      <h1 className="center title">
        <img src={data.image} /> {data.title}
      </h1>
      {listings.map((l, i) => {
        return (
          <Card key={i}>
            <Card.Title className="card-title">{l.title}</Card.Title>
            <Card.Body>
              <p>{l.description}</p>
              <p>{l.content}</p>
              <Button variant="primary" onClick={openLink.bind(this, l.link)}>
                Open
              </Button>{" "}
            </Card.Body>
          </Card>
        );
      })}
    </StyledFeedPage>
  );
}
export default withRouter(observer(FeedPage));
