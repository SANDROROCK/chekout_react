import React from "react";
import { Container, Input, Label, Botao } from "./styles";
import Grid from "@material-ui/core/Grid";

export default function checkout() {
  return (
    <>
      <Container>
        <Grid container spacing={1}>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <Label>NUMERO DO CARTÃO:</Label>
                <Input type="text" />
              </Grid>
              <Grid item xs={4}>
                <Label>VALIDADE</Label>
                <Input />
              </Grid>
              <Grid item xs={8}>
                <Label>NOME D TITULO DO CARTÃO:</Label>
                <Input type="text" />
              </Grid>
              <Grid item xs={4}>
                <Label>CÓD. SEGURANÇA</Label>
                <Input />
              </Grid>
              <Grid item xs={6}>
                <Label>CPF DO TITULAR</Label>
                <Input />
              </Grid>
              <Grid item xs={12}>
                <Botao>COMPRAR AGORA</Botao>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>
    </>
  );
}
