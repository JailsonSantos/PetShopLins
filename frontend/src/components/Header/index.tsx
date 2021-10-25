import React, { ChangeEvent, useState } from "react";

import {
  Container,
  HeaderArea,
  HeaderContainer,
  LogoLink,
  FormSearch,
  FormInput,
  NavArea,
  UL,
  LI,
  LinkMenu
} from "./styled";

type DataJson = {
  menu: {
    all: boolean;
    dog: boolean;
    cat: boolean;
    fish: boolean;
  }
};

type Props = {
  dados: DataJson;
}


export function Header({ dados }: Props) {

  const { menu } = dados;

  const [searchAnimal, setSearchAnimal] = useState<string>("");

  let query = localStorage.getItem("query");

  function handleInput(event: ChangeEvent<HTMLInputElement>) {

    localStorage.setItem("query", event.target.value);

    setSearchAnimal(event.target.value);
  }

  return (
    <Container>
      <HeaderArea>
        <HeaderContainer>
          <LogoLink href="/">PetShopLins</LogoLink>
          <FormSearch method="GET" action="/search">
            <FormInput
              type="search"
              name="q"
              placeholder="Pesquise por raça"
              onChange={handleInput}
              value={query ? query : ''}

            />
          </FormSearch>
        </HeaderContainer>
      </HeaderArea>
      <NavArea>
        <UL>
          <LI className={menu?.all === true ? 'active' : ''}><LinkMenu to="/">Todos</LinkMenu></LI>
          <LI className={menu?.dog === true ? 'active' : ''}><LinkMenu to="/dogs">Cachorros</LinkMenu></LI>
          <LI className={menu?.cat === true ? 'active' : ''}><LinkMenu to="/cats">Gatos</LinkMenu></LI>
          <LI className={menu?.fish === true ? 'active' : ''}><LinkMenu to="/fishes">Peixes</LinkMenu></LI>
        </UL>
      </NavArea>
    </Container >
  )
}