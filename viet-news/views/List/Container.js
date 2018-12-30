import styled from "styled-components";

const Container = styled.div`
  width: 33%;
  max-width: 1170px;
  margin: 0 auto;
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
  margin-bottom: 2em;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 3px;
    background: #2f2f2f;
  }
`;

export default Container;
