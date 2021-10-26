import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  margin: auto;

  @media (min-width: 768px) {  
    max-width: 1100px;
  }
`;

const FooterArea = styled.div`
  border-top: 1px solid var(--verde);
  padding: 10px 0 !important;
  text-align: center;
  font-size: 10px;
  color: var(--main);

  @media (min-width: 768px) {
    padding: 20px 0 !important;
    font-size: 16px;
  }
`;

export { Container, FooterArea }