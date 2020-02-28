import React from "react";
import Divider from "@material-ui/core/Divider";
import { Titulo, Num, Container, Descricao, PaperDiv, Input, Label, Botao } from "./styles";
import Grid from "@material-ui/core/Grid";
export default function boxResumo(props) {
  return (
    <>
      <Container>
        <Titulo>Resuma da compra</Titulo>

        <Divider />
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Label>CUPOM DE DESCONTO:</Label>
            <form>
              <Grid item xs={6}>
                <Input />
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={4}>
                <Botao>ADICIONAR</Botao>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
