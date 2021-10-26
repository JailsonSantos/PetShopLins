import React, { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";

import {
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
} from "./styled";

import { api } from '../../../services/api';

type Pets = {
  type: string;
  image: string;
  name: string;
  color: string;
  sex: string;
}[];

interface DataJson {
  menu: {
    all: boolean;
    dog: boolean;
    cat: boolean;
    fish: boolean;
  },
  banner: {
    category: string;
    background: string;
  },
  list: Pets;
};

export function Cats() {

  const [allCats, setAllCats] = useState<DataJson>();

  useEffect(() => {

    localStorage.removeItem("query");

    async function listCats() {

      const catsResponse = await api.get<DataJson>('/api/cats/');

      setAllCats(catsResponse.data);
    }


    listCats();

  }, []);

  if (allCats !== undefined) {
    var { list } = allCats;
  }

  return (
    <>
      <Header dados={{
        menu: {
          all: false,
          dog: false,
          cat: true,
          fish: false
        }
      }} />

      <Container>
        <SectionArea style={{ backgroundImage: `url(${allCats?.banner.background})` }}>{allCats?.banner.category}</SectionArea>
        <H2> {allCats?.banner.category} disponíveis para adoção.</H2>
        <ListArea>
          {
            list?.map((pet, index) => (
              <ItemsArea key={index}>
                <Imagem src={pet.image} />
                <AreaText>
                  <AnimalName> {pet.name} </AnimalName>
                  <AnimalColor>Cor: {pet.color}</AnimalColor>
                  <AnimalSex>Gênero: {pet.sex}</AnimalSex>
                </AreaText>
              </ItemsArea>
            ))
          }
        </ListArea>
      </Container>

      <Footer />
    </>
  )
}