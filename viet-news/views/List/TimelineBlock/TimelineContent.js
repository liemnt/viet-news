import styled from "styled-components";

const TimelineContent = styled.div`
  position: relative;
  margin-left: 85px;
  background: #ebe7d8;
  border-radius: 0.25em;
  padding: 1em;
  box-shadow: 0 3px 0 #bcbaaf;
  &::after {
    clear: both;
    content: "";
    display: table;
  }
  h2 {
    color: #303e49;
  }
  p {
    font-size: 13px;
    font-size: 0.8125rem;
    margin: 1em 0;
    line-height: 1.6;
  }
  &::before {
    content: "";
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-right: 7px solid #ebe7d8;
  }
`;

export default TimelineContent;
