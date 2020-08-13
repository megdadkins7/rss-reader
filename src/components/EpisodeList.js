import React from "react";
import styled from "styled-components";

//components
import Episode from "./Episode";

const StyledCard = styled.div`
  width: 20vw;
  float: left;
`;

function EpisodeList({ programTitle, programDescription, episodes }) {
  const renderEpisodeList = () => {
    return (
      <div>
        <div id="menu" styles={{ float: "left" }}></div>
        <StyledCard>
          <div className="card-body">
            <h5 className="card-title">{programTitle}</h5>
            <div
              className="card-text"
              dangerouslySetInnerHTML={{ __html: programDescription }}
            ></div>
          </div>
        </StyledCard>
        {episodes.map(returnEpisodes)}
      </div>
    );
  };
  const returnEpisodes = (episode, i) => {
    return (
      <Episode
        key={i}
        index={i}
        title={episode.title}
        enclosure={episode.enclosure}
        link={
          episode.enclosure
            ? episode.enclosure.url
            : "json_data is null or undefined"
        }
        description={episode.description}
      />
    );
  };
  return <div>{episodes ? renderEpisodeList() : <div />}</div>;
}

export default EpisodeList;
