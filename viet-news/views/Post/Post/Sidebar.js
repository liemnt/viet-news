import styled from "styled-components";
const Sidebar = styled.aside`
  float: right;
  height: 100%;
  width: 50%;
  padding: 2em;
  margin: 0 0 1em 2.6em;
  text-align: left;
  background: #f5f5f5;
  @media (min-width: 1024px) {
    width: 30%;
  }
  h3 {
    margin: 0 0.8em;
    font-family: "Playfair Display", serif;
    font-weight: 500;
    font-style: normal;
    font-size: 2.3em;
    line-height: 1em;
    text-transform: uppercase;
    color: #000000;
    text-align: center;
    padding: 0.4em 0 0.3em;
    border-top: 2px solid #000000;
    border-bottom: 2px solid #000000;
  }
  h4 {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.09em;
    line-height: 1.2em;
    text-transform: uppercase;
    color: #808080;
    margin: 1.2em 1.65em;
    display: block;
    text-align: center;
  }
  ol {
    padding: 0px;
    margin: 1.2em;
  }
  li {
    list-style-type: none;
    counter-increment: step-counter;
    overflow: hidden;
    margin: 0px 0px 2.5em;
  }
  ol li:before {
    content: counter(step-counter);
    font-family: "Playfair Display", serif;
    font-size: 4.47em;
    line-height: 1em;
    color: #000000;
    margin: -0.06em 6px 0.05em 0px;
    display: inline-block;
  }
`;

export default Sidebar;
