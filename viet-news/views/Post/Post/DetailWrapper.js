import styled from "styled-components";

const DetailWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  width: 95%;
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 90%;
  }
  @media (min-width: 1024px) {
    width: 1024px;
  }
`;

export default DetailWrapper;
