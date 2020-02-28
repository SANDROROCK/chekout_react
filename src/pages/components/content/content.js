import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {
  Container,
  PaperDiv,
  Body,
  BoxCentral,
  Input,
  Label,
  Botao
} from "./styles";
import BoxCabecalho from "../boxCabecalho";
import BoxResumo from "../boxResumo";
import Checkout from "../checkout";

export default function content() {
  return (
    <>
      <Container>
        <Body>
          <BoxCentral>
            <Grid container spacing={3}>
              <Grid item xs>
                <PaperDiv elevation={3}>
                  <BoxCabecalho
                    num={1}
                    titulo={"Dados Pessoais"}
                    descricao={
                      "Solicitamos apenas as informações essenciais para a realização da compra."
                    }
                  />

                  <form>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Label>NOME COMPLETO:</Label>
                        <Input />
                      </Grid>
                      <Grid item xs={12}>
                        <Label>E-MAIL</Label>
                        <Input />
                      </Grid>
                      <Grid item xs={6}>
                        <Label>CPF:</Label>
                        <Input type="text" />
                      </Grid>
                      <Grid item xs={6}>
                        <Label>CELULAR/WHATSAPP</Label>
                        <Input />
                      </Grid>
                      <Grid item xs={12}>
                        <Botao>Continuar</Botao>
                      </Grid>
                    </Grid>
                  </form>
                </PaperDiv>
                <PaperDiv elevation={3}>
                  <BoxCabecalho
                    num={2}
                    titulo={"Entrega"}
                    descricao={
                      "Preencha suas informações pessoais para continuar"
                    }
                  />
                  <form>
                    <Grid container spacing={3}>
                      <Grid item xs={4}>
                        <Label>CEP:</Label>
                        <Input type="text" />
                      </Grid>
                      <Grid item xs={12}>
                        <Label>ENDEREÇO</Label>
                        <Input />
                      </Grid>
                      <Grid item xs={4}>
                        <Label>NUMERO:</Label>
                        <Input type="text" />
                      </Grid>
                      <Grid item xs={8}>
                        <Label>BAIRRO</Label>
                        <Input />
                      </Grid>
                      <Grid item xs={12}>
                        <Label>COMPLEMENTO</Label>
                        <Input />
                      </Grid>
                      <Grid item xs={12}>
                        <Label>DESTINATARIO</Label>
                        <Input />
                      </Grid>
                      <Grid item xs={12}>
                        <Botao>Continuar</Botao>
                      </Grid>
                    </Grid>
                  </form>
                </PaperDiv>
              </Grid>

              <Grid item xs>
                <PaperDiv elevation={3}>
                  <BoxCabecalho
                    num={2}
                    titulo={"Pagamento"}
                    descricao={
                      "Preencha suas informações de entrega para continuar"
                    }
                  />
                  <Checkout />
                </PaperDiv>
              </Grid>

              <Grid item xs>
                <PaperDiv elevation={3}>
                  <BoxResumo />
                </PaperDiv>
              </Grid>
            </Grid>
          </BoxCentral>
        </Body>
      </Container>
    </>
  );
}
