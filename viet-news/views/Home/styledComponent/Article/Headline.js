import React from "react";
import styled from "styled-components";

const Headline = styled.span`
  text-align: center;
  line-height: normal;
  font-family: "Playfair Display", serif;
  display: block;
  margin: 0 auto;
  &.hl1 {
    font-weight: 700;
    font-size: 30px;
    text-transform: uppercase;
    padding: 10px 0 10px 0;
  }
  &.hl2 {
    font-weight: 400;
    font-style: italic;
    font-size: 24px;
    box-sizing: border-box;
    padding: 10px 0 10px 0;
    &:before {
      border-top: 1px solid #2f2f2f;
      content: "";
      width: 100px;
      height: 7px;
      display: block;
      margin: 0 auto;
    }
    &:after {
      border-bottom: 1px solid #2f2f2f;
      content: "";
      width: 100px;
      height: 13px;
      display: block;
      margin: 0 auto;
    }
  }
  &.hl3 {
    font-weight: 400;
    font-style: italic;
    font-size: 36px;
    box-sizing: border-box;
    padding: 10px 0 10px 0;
  }
  &.hl4 {
    font-weight: 700;
    font-size: 12px;
    box-sizing: border-box;
    padding: 10px 0 10px 0;
    &:before {
      border-top: 1px solid #2f2f2f;
      content: "";
      width: 100px;
      height: 7px;
      display: block;
      margin: 0 auto;
    }
    &:after {
      border-bottom: 1px solid #2f2f2f;
      content: "";
      width: 100px;
      height: 10px;
      display: block;
      margin: 0 auto;
    }
  }
  &.hl5 {
    font-weight: 400;
    font-size: 42px;
    text-transform: uppercase;
    font-style: italic;
    box-sizing: border-box;
    padding: 10px 0 10px 0;
  }
  &.hl6 {
    font-weight: 400;
    font-size: 18px;
    box-sizing: border-box;
    padding: 10px 0 10px 0;
    &:before {
      border-top: 1px solid #2f2f2f;
      content: "";
      width: 100px;
      height: 7px;
      display: block;
      margin: 0 auto;
    }
    &:after {
      border-bottom: 1px solid #2f2f2f;
      content: "";
      width: 100px;
      height: 10px;
      display: block;
      margin: 0 auto;
    }
  }
  &.hl7 {
    font-weight: 700;
    font-size: 12px;
    box-sizing: border-box;
    display: block;
    padding: 10px 0 10px 0;
  }
  &.hl8 {
    font-weight: 700;
    font-size: 12px;
    box-sizing: border-box;
    padding: 10px 0 10px 0;
  }
  &.hl9 {
    font-weight: 700;
    font-size: 12px;
    box-sizing: border-box;
    padding: 10px 0 10px 0;
  }
  &.hl10 {
    font-weight: 700;
    font-size: 12px;
    box-sizing: border-box;
    padding: 10px 0 10px 0;
  }
`;

export default Headline;
