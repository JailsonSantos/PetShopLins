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

export function Dogs() {

  const [allDogs, setAlltDogs] = useState<DataJson>();

  useEffect(() => {
    async function listDogs() {
      const dogsResponse = await api.get<DataJson>('/api/dogs/');
      setAlltDogs(dogsResponse.data);
    }
    localStorage.removeItem("query");
    listDogs();
  }, []);

  if (allDogs !== undefined) {
    var { list } = allDogs;
  }

  return (
    <>
      <Header dados={{
        menu: {
          all: false,
          dog: true,
          cat: false,
          fish: false
        }
      }} />

      <Container>
        <SectionArea style={{ backgroundImage: `url(${allDogs?.banner.background})` }}>{allDogs?.banner.category}</SectionArea>
        <H2> {allDogs?.banner.category} disponíveis para adoção.</H2>
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