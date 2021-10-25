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
  AnimalSex
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

export function Fishes() {

  const [allFishes, setAllFishes] = useState<DataJson>();

  useEffect(() => {
    async function listFishes() {
      const fishesResponse = await api.get<DataJson>('/api/fishes/');

      setAllFishes(fishesResponse.data);
    }

    localStorage.removeItem("query");
    listFishes();

  }, []);

  if (allFishes !== undefined) {
    var { list } = allFishes;
  }

  return (
    <>
      <Header dados={{
        menu: {
          all: false,
          dog: false,
          cat: false,
          fish: true
        }
      }} />


      <Container>
        <SectionArea style={{ backgroundImage: `url(${allFishes?.banner.background})` }}>{allFishes?.banner.category}</SectionArea>
        <H2> {allFishes?.banner.category} disponíveis para adoção.</H2>
        <ListArea>
          {
            list?.map((pet, index) => (
              <ItemsArea key={index}>
                <Imagem src={pet.image} />
                <AnimalName> {pet.name} </AnimalName>
                <AnimalColor>Cor: {pet.color}</AnimalColor>
                <AnimalSex>Gênero: {pet.sex}</AnimalSex>
              </ItemsArea>
            ))
          }
        </ListArea>
      </Container>

      <Footer />
    </>
  )
}