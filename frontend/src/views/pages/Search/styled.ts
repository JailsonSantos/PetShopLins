import styled from "styled-components";

const Container = styled.div``;

const SectionArea = styled.div`
  height: 300px;
  background: var(--lighter);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--darkbg);
  font-size: 36px;
  font-weight: bold;
  text-shadow: 1px 1px 1px var(--lighter);
  margin-bottom: 30px;
`;

const H2 = styled.h2`
  color: var(--main);
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  min-width: 1100px;
`;

const ListArea = styled.div`
  max-width: 1100px;
  padding: 0 20px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin: 30px auto;
`;

const ItemsArea = styled.div`
  color: var(--lighter);
`;
const Imagem = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const AnimalName = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const AnimalColor = styled.div`
  font-size: 13px;
  color: var(--lighter);
  margin-bottom: 3px;
`;
const AnimalSex = styled.div`
  font-size: 13px;
  color: var(--lighter);
  margin-bottom: 3px;
`;

export {
  Container,
  SectionArea,
  H2,
  ListArea,
  ItemsArea,
  Imagem,
  AnimalName,
  AnimalColor,
  AnimalSex
}