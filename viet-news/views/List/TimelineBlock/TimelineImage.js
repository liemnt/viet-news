import React from "react";
import styled from "styled-components";

const TimelineImg = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: -20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08),
    0 3px 0 4px rgba(0, 0, 0, 0.05);
  img {
    display: block;
    width: 80px;
    height: 80px;
    position: relative;
    // left: 50%;
    // top: 50%;
    // margin-left: -12px;
    // margin-top: -12px;
  }
  &.cd-picture {
    background: #75ce66;
  }
  &.cd-movie {
    background: #c03b44;
  }
  &.cd-location {
    background: #f0ca45;
  }
`;

export default TimelineImg;
