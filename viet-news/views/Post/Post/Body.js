import styled from "styled-components";

const Body = styled.section`
  padding-top: 40px;
  text-align: justify;
  font-family: "Halant", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.571em;
  margin: 0 auto;
  width: 95%;
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 90%;
  }
  @media (min-width: 1024px) {
    width: 1024px;
  }
`;

export default Body;
