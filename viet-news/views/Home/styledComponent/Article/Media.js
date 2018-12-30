import React from "react";

import styled from "styled-components";

const Media = styled.img`
  -webkit-filter: sepia(80%) contrast(1) opacity(0.8);
  filter: sepia(80%) grayscale(1) contrast(1) opacity(0.8);
  mix-blend-mode: multiply;
  width: 100%;
`;

export default Media;
