import React from "react";

import { Container, Line } from "./styles";
import Logo from "../../../assets/logo3.png";
export default function header() {
  return (
    <>
      <Container>
        <img src={Logo} />
      </Container>
      <Line />
    </>
  );
}
