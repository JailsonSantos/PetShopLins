import React from "react";
import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";

import {
  Container,
  ListArea,
  H2,
} from "./styled";

export function PageNotFound() {

  localStorage.removeItem("query");
  return (
    <>
      <Header dados={{
        menu: {
          all: false,
          dog: false,
          cat: false,
          fish: false
        }
      }} />

      <Container>
        <ListArea>
          <H2>Página não encontrada.</H2>
        </ListArea>
      </Container>

      <Footer />
    </>
  )
}