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

export function Main() {

  const [allAnimals, setAllAnimals] = useState<DataJson>();

  useEffect(() => {
    async function listDogs() {
      const animalsResponse = await api.get<DataJson>('/api/');
      setAllAnimals(animalsResponse.data);
    }
    localStorage.removeItem("query");
    listDogs();
  }, []);

  if (allAnimals !== undefined) {
    var { list } = allAnimals;
  }

  return (
    <>
      <Header dados={{
        menu: {
          all: true,
          dog: false,
          cat: false,
          fish: false
        }
      }} />

      <Container>
        <SectionArea style={{ backgroundImage: `url(${allAnimals?.banner.background})` }}> {allAnimals?.banner.category} </SectionArea>
        <H2> {allAnimals?.banner.category} disponíveis para adoção.</H2>
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