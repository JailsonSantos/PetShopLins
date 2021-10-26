import styled from "styled-components";

const Container = styled.div``;

const ListArea = styled.div`
  padding: 0 20px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px auto;

  @media (min-width: 768px){
    max-width: 1100px;
    padding: 0 20px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin: 30px auto;
  }
`;

const H2 = styled.h2`
  color: var(--main);
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  width: 90vw;

  @media (min-width: 768px) {
    color: var(--main);
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
`;

export {
  Container,
  ListArea,
  H2,
}