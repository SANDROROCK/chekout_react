import React from "react";
import Divider from "@material-ui/core/Divider";
import { Titulo, Num, Container, Descricao } from "./styles";

export default function boxCabecalho(props) {


return (
    <>
      <Container>
        <Num >{props.num}</Num>
        <Titulo >{props.titulo}</Titulo>
        <Descricao >{props.descricao}</Descricao>
        <Divider />
      </Container>
    </>
  );
}

