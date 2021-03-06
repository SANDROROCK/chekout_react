import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Body = styled.div`
  display: table;
  content: "";
  line-height: 0;
`;
export const BoxCentral = styled.div`
  margin-left: 150px;
  margin-top: 50px;
`;
export const PaperDiv = styled(Paper)`
  width: 350px;

  position: relative;
  padding: 17px;
  margin: 0 0 20px;
  background: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 5px;
  box-sizing: border-box;
  transition: all 0.2s;

  form {
    display: grid;
    grid-column: 2;
    justify-content: center;
    text-align: left;
    width: 100%;
    position: relative;
    padding: 17px;
    margin: 0 0 20px;
    background: #fff;
    border: 1px solid #fff;
    cursor: pointer;
    border-radius: 10px;
    box-sizing: border-box;
    transition: all 0.2s;
  }
`;
export const Formulario = styled.form`
  width: 100%;
  height: 350px;
`;

export const Input = styled.input`
  margin-top: 8px;
  width: 100%;
  outline: 0;
  padding: 9px 10px;
  font-size: 13px;
  background: #fff;
  border: 1px solid #b3b3b3;
  -webkit-appearance: none;
  transition: all 0.4s;
  font-weight: 400;
  font-family: Roboto, sans-serif !important;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const Label = styled.p`
  font-family: Roboto, sans-serif !important;
  margin: 0 0 10px;
  font-size: 11px;
  color: #4d4d4d;
  font-weight: 700;
`;

export const Botao = styled(Button)`
  width: 100%;
  background-color: #3fc583 !important;
  color: #fff !important;
  border: 0;
  text-align: center;
  line-height: normal;
  border-radius: 5px;
  padding: 12px 0px;
  font-size: 16px;
  font-weight: 700;
`;
