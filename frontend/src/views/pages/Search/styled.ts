import styled from "styled-components";

const Container = styled.div``;

const SectionArea = styled.div`
  height: 250px;
  background: var(--lighter);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--darkbg);
  font-size: 26px;
  font-weight: bold;
  text-shadow: 1px 1px 1px var(--lighter);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    height: 350px;
    font-size: 36px;
    margin-bottom: 30px;
  }
`;

const H2 = styled.h2`
  color: var(--main);
  font-size: 15px;
  font-weight: bold;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const ListArea = styled.div`
  padding: 0 20px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 20px auto;

  @media (min-width: 768px){
    max-width: 1100px;
    grid-template-columns: repeat(5, 1fr);
    margin: 30px auto;
  }
`;

const ItemsArea = styled.div`
  color: var(--lighter);
  border-radius: 5px;
  overflow: hidden;  
  border: 2px solid rgba(120,222,0, 0.9);

  &:hover{
    box-shadow: 0px 0px 5px 0.9px var(--verde);
  }
`;

const Imagem = styled.img`
  height: auto;
  border-radius: 5px 5px 0 0 ;
  max-width: 100%;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;

  &:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const AreaText = styled.div`
  position: relative;
	bottom: 10px;
	z-index: 10;
	padding-top: 30px;
	color: var(--verde);
	text-align: center;
	font-weight: 700;
`
const AnimalName = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
  padding-left: 5px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;
const AnimalColor = styled.div`
  font-size: 10px;
  color: var(--lighter);
  margin-bottom: 3px;
  padding-left: 5px;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;
const AnimalSex = styled.div`
  font-size: 10px;
  color: var(--lighter);
  margin-bottom: 3px;
  padding-left: 5px;

  @media (min-width: 768px) {
    font-size: 13px;
  }
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
  AnimalSex,
  AreaText
}