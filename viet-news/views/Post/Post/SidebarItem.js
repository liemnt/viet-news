import styled from "styled-components";

const SidebarItem = styled.div`
  width: 80%;
  float: right;
  &:after {
    content: " ";
    width: 10em;
    display: block;
    position: absolute;
    border-bottom: 1px solid #cccccc;
  }
  h5 {
    margin: 0 0 0.2em;
    font-family: "Playfair Display", serif;
    font-weight: 500;
    font-style: normal;
    font-size: 1.27em;
    text-transform: uppercase;
  }
  p {
    font-family: "Josefin Sans", sans-serif;
    font-style: normal;
    margin-bottom: 0.4em;
  }
`;

export default SidebarItem;
