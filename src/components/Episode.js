import React from "react";
import styled from "styled-components";

const StyledEpisode = styled.div`
  width: 77vw;
  float: right;
  margin-right: 1vw;
`;

const Episode = ({ link, title }) => {
  return (
    <StyledEpisode>
      <a href={link}>{title}</a>
    </StyledEpisode>
  );
};
export default Episode;
