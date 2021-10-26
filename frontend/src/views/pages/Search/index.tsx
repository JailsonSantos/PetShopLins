import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";

import {
  Container,
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
  query: string;
};

export function Search() {

  let history = useHistory();

  const [allSearchAnimals, setAllSearchAnimals] = useState<DataJson>();

  query = localStorage.getItem("query") || '';

  useEffect(() => {

    async function searchAnimals() {
      if (!query) {
        history.push('/');
      }
      const animalsResponse = await api.get<DataJson>(`/api/search/?q=${query}`);
      setAllSearchAnimals(animalsResponse.data);
    }
    searchAnimals();
  }, [query]);

  if (allSearchAnimals !== undefined) {
    var { list, query } = allSearchAnimals;

  }

  console.log(query)

  return (
    <>
      <Header dados={{
        menu: {
          all: false,
          dog: false,
          cat: false,
          fish: false,
        }
      }} />

      <Container>
        <ListArea>
          {list?.length > 0 ?

            list?.map((pet, index) => (
              <ItemsArea key={index}>
                <Imagem src={pet.image} />
                <AreaText>
                  <AnimalName> {pet.name} </AnimalName>
                  <AnimalColor>Cor: {pet.color}</AnimalColor>
                  <AnimalSex>Gênero: {pet.sex}</AnimalSex>
                </AreaText>
              </ItemsArea>
            )) : <H2>Nenhum resultado encontrado</H2>
          }
        </ListArea>
      </Container>

      <Footer />
    </>
  )
}