import React from "react";
import styled from "styled-components";

const TimelineBlock = styled.div`
  position: relative;
  margin: 2em 0;
  &::after {
    clear: both;
    content: "";
    display: table;
  }
  &::first-child {
    margin-top: 0;
  }
  &::last-child {
    margin-bottom: 0;
  }
`;

export default TimelineBlock;