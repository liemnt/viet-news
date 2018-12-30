import React from "react";
import { createGlobalStyle } from "styled-components";

const Layout = createGlobalStyle`
  body{
     font-family: "Droid Serif", serif;
      font-size: 14px;
      color: #2f2f2f;
      background-color: #f9f7f1;
  }
  a {
    display: inline-block;
    font-style: normal;
    text-decoration: none;
    color: #000000;
  }
  header {
    font-family: "Playfair Display", serif;
    font-weight: 900;
    font-size: 80px;
    text-transform: uppercase;
    display: inline-block;
    line-height: 72px;
    margin-bottom: 20px;
  }
  p {
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

export default Layout;
